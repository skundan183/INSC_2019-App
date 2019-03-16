import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ScientificProgrammePage } from '../../pages/scientific-programme/scientific-programme';
import { WorkshopPage } from '../../pages/workshop/workshop';
import { NursingPage } from '../../pages/nursing/nursing';

/**
 * Generated class for the SpOptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sp-option',
  templateUrl: 'sp-option.html',
})
export class SpOptionPage {

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad SpOptionPage');
  	}

  	openPage(val){
  		if(val == 'scientific-programme'){
  			this.navCtrl.push(ScientificProgrammePage);
  		}
  		else if(val == 'workshop'){
  			this.navCtrl.push(WorkshopPage);
  		}
      else if(val == 'nursing'){
        this.navCtrl.push(NursingPage);
      }
  	}
}
