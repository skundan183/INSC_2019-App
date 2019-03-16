import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, LoadingController} from 'ionic-angular';

import { RestProvider } from './../../providers/rest/rest';

/**
 * Generated class for the SubmitAbstractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-submit-abstract',
  templateUrl: 'submit-abstract.html',
})
export class SubmitAbstractPage {

    public data: any = [];
    public items: any = [];
  	constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public restProvider: RestProvider) {
  
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad SubmitAbstractPage');
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
      if(formdata.is_registered == '' || formdata.is_registered == undefined){
        toaster.setMessage('Check option. Do you have registration number?');
        toaster.present();
        return false;
      }
      if(formdata.is_registered == '1'){
        if(formdata.insc_regno == '' || formdata.insc_regno == undefined){
            toaster.setMessage('Registration number is required');
            toaster.present();
            return false;
        }
      }
      if(formdata.abstract_topic == '' || formdata.abstract_topic == undefined){
        toaster.setMessage('Abstract topic is required.');
        toaster.present();
        return false;
      }
      if(formdata.abstract_title == '' || formdata.abstract_title == undefined){
        toaster.setMessage('Abstract title is required');
        toaster.present();
        return false;
      }
      if(formdata.presenting_author == '' || formdata.presenting_author == undefined){
        toaster.setMessage('Presenting author is required');
        toaster.present();
        return false;
      }
      if(formdata.affiliation == '' || formdata.affiliation == undefined){
        toaster.setMessage('Affiliation is required');
        toaster.present();
        return false;
      }
      if(formdata.abstract == '' || formdata.abstract == undefined){
        toaster.setMessage('Abstract is required.');
        toaster.present();
        return false;
      }

      let loading = this.loadingCtrl.create({ dismissOnPageChange: true, content:'Sending data, please wait....'});
      loading.present();
      
      this.restProvider.submitAbstract(formdata).subscribe(
        data=> {
          loading.dismissAll();
          this.items = data;
          if(this.items.status == 'success'){
            this.presentAlert('Success', "Your abstract is submitted successfully.");
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

    checkTitle(val){
      var len = val.match(/\S+/g).length;
      if(len >= 50){
        var trimmed = val.split(/\s+/, 50).join(" ");
        this.data.abstract_title = trimmed + " ";
      }
    }

    checkAbstract(val){
      var len = val.match(/\S+/g).length;
      if(len >= 200){
        var trimmed = val.split(/\s+/, 200).join(" ");
        this.data.abstract = trimmed + " ";
      }
    }

}
