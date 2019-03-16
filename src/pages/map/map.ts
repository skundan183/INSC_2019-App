import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

	public url_id:any = "";
  	constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
  		this.url_id = navParams.get('url_id');
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad MapPage');
  	}

}
