import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ScanQrPage } from '../../pages/scan-qr/scan-qr';

/**
 * Generated class for the MyqrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-myqr',
  templateUrl: 'myqr.html',
})
export class MyqrPage {

	public qrcode:any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
	  	this.storage.get('qrcode').then((data) => {
			this.qrcode = data;
		});
	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad MyqrPage');
  	}

  	scanQR(){
  		this.navCtrl.push(ScanQrPage);
  	}

}
