import { Component } from '@angular/core';
import { NavController, Platform, NavParams, ActionSheetController, AlertController, ToastController, LoadingController} from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { RestProvider } from './../../providers/rest/rest';

/**
 * Generated class for the OfflineRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-offline-registration',
  templateUrl: 'offline-registration.html',
})
export class OfflineRegistrationPage {

    public data: any = [];
    public items: any = [];
    public payment_photo: any = '';
    public reg_photo: any = '';
    public select_image1:any = "assets/imgs/select_photo.png";
    public select_image2:any = "assets/imgs/select_photo.png";
    public type:any = "";
  	constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public restProvider: RestProvider, public imagePicker: ImagePicker) {
  	
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad OfflineRegistrationPage');
  	}

  	submit(formdata){
      var toaster = this.toastCtrl.create({
        duration: 3000,
        position: 'bottom'
      });
      console.log(formdata);

      if(formdata.fname == '' || formdata.fname == undefined){
        toaster.setMessage('First Name is required');
        toaster.present();
        return false;
      }
      if(formdata.lname == '' || formdata.lname == undefined){
        toaster.setMessage('Last Name is required');
        toaster.present();
        return false;
      }
      if(formdata.email == '' || formdata.email == undefined){
        toaster.setMessage('Email is required');
        toaster.present();
        return false;
      }
      if(formdata.mobile == '' || formdata.mobile == undefined){
        toaster.setMessage('Mobile No. is required');
        toaster.present();
        return false;
      }
      if(formdata.password == '' || formdata.password == undefined){
        toaster.setMessage('Password is required');
        toaster.present();
        return false;
      }
      if(formdata.is_workshop == '' || formdata.is_workshop == undefined){
        toaster.setMessage('Check option. Do you want to register for Workshop?');
        toaster.present();
        return false;
      }
      if(formdata.is_workshop == '1'){
        if(formdata.workshop == '' || formdata.workshop == undefined){
            toaster.setMessage('Workshop name is required');
            toaster.present();
            return false;
        }
      }
      if((!this.payment_photo) || this.payment_photo == undefined){
        toaster.setMessage('Payment receipt is required');
        toaster.present();
        return false;
      }
      if((!this.reg_photo) || this.reg_photo == undefined){
        toaster.setMessage('Registration form is required');
        toaster.present();
        return false;
      }

      let loading = this.loadingCtrl.create({ dismissOnPageChange: true, content:'Sending data, please wait....'});
      loading.present();
      
      this.restProvider.offlineRegister(formdata, this.payment_photo, this.reg_photo).subscribe(
        data=> {
          loading.dismissAll();
          this.items = data;
          if(this.items.status == 'success'){
            this.presentAlert('Success', "Your registration form is successfully submitted.");
          }
          else{
            this.presentAlert('Failed', this.items.message);
          }
        },
        err=>{
          loading.dismissAll();
          this.presentAlert('Error', "Failed to submit the form. Check your internet connection.");
        }
      );
    }

    presentAlert(title, subtitle) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: subtitle,
        buttons: ['Dismiss']
      });
      alert.present();
    }

    presentActionSheet(val) {
      this.type = val;
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Choose an option',
        buttons: [
          {
            text: 'Camera',
            handler: () => {
              console.log('Camera clicked');
              this.openCamera();
            }
          },
          {
            text: 'Gallery',
            handler: () => {
              console.log('Gallery clicked');
              this.openImagePicker();
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }

    openImagePicker(){
      const options = {
        maximumImagesCount: 1,
        quality: 100,
        width: 600,
        height: 600,
        outputType: 1
      }
      this.imagePicker.getPictures(options).then((results) => {
        console.log('Image URI: ' + results);
        if(results[0] != 'O'){
          if(this.type == "payment"){
            this.payment_photo = 'data:image/jpeg;base64,' + results[0];
          }
          else{
            this.reg_photo = 'data:image/jpeg;base64,' + results[0];
          }
        }
      }, (err) => { });
    }

    openCamera(){
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      } 
      this.camera.getPicture(options).then((imageData) => {
        console.log(imageData);
        if(this.type == "payment"){
          this.payment_photo = 'data:image/jpeg;base64,' + imageData;
        }
        else{
          this.reg_photo = 'data:image/jpeg;base64,' + imageData;
        }
      }, (err) => {
        // Handle error
      });
    }
}
