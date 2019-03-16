import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OfflineRegistrationPage } from '../../pages/offline-registration/offline-registration';
import { OnlineRegistrationPage } from '../../pages/online-registration/online-registration';
/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  	constructor(public navCtrl: NavController, public navParams: NavParams ) {
  	
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad RegistrationPage');
  	}

  	openUrl(url){
  		window.open('http://www.insc2019.com','_system', 'location=yes');
  	}

    offline(){
      this.navCtrl.push(OfflineRegistrationPage);
    }

    online(){
      this.navCtrl.push(OnlineRegistrationPage);
    }

}
