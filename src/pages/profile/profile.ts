import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	public userdata:any = [];
	constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
	  	this.storage.get('memberInfo').then((data) => {
	        console.log(data);
			this.userdata = data;
	  	});
	}

  	ionViewDidLoad() {
  	  console.log('ionViewDidLoad ProfilePage');
  	}

}
