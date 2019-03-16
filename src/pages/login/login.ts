import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyInscPage } from '../../pages/my-insc/my-insc';

import { RestProvider } from './../../providers/rest/rest';
import { DatebaseProvider } from './../../providers/datebase/datebase';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    public formdata:any = [];
    public items:any = [];
  	constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public restProvider: RestProvider, public database: DatebaseProvider, public storage: Storage) {
      //this.formdata.regno = 'INSC201910009';
      //this.formdata.username = '9409210486';
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad LoginPage');
  	}

  	login(formdata){
      var toaster = this.toastCtrl.create({
        duration: 3000,
        position: 'bottom'
      });
      console.log(formdata);

      if(formdata.regno == '' || formdata.regno == undefined){
        toaster.setMessage('Registration No. is required');
        toaster.present();
        return false;
      }
      if(formdata.username == '' || formdata.username == undefined){
        toaster.setMessage('Email/ Mobile is required');
        toaster.present();
        return false;
      }

      let loading = this.loadingCtrl.create({content:'Logging in, please wait....'});
      loading.present();

      formdata.regno = "INSC201910"+formdata.regno;

      this.restProvider.login(formdata).subscribe(
        data=> {
          loading.dismissAll();
          this.items = data;
          if(this.items.ErrorCode == 0){
            this.storage.set('regno', this.items.data[0].regno);
            this.storage.set('qrcode', this.items.data[0].qrcode);
            this.storage.set('memberInfo', this.items.data[0]);
            this.navCtrl.push(MyInscPage);
          }
          else{
            this.presentAlert('Failed', this.items.ErrorMessage);
            formdata.regno = "";
          }
        },
        err=>{
          loading.dismissAll();
          this.presentAlert('Error', "Failed to pass the data. Check your internet connection.");
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
}
