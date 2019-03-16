import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SubmitAbstractPage } from '../../pages/submit-abstract/submit-abstract';

/**
 * Generated class for the AbstractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-abstract',
  templateUrl: 'abstract.html',
})
export class AbstractPage {

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad AbstractPage');
  	}

  	submitAbstract(){
  		this.navCtrl.push(SubmitAbstractPage);
  	}

}
