import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AppSponsorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-app-sponsor',
  templateUrl: 'app-sponsor.html',
})
export class AppSponsorPage {

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad AppSponsorPage');
  	}

}
