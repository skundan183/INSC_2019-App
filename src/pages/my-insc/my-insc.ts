import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../../pages/home/home';
import { ProfilePage } from '../../pages/profile/profile';
import { MyqrPage } from '../../pages/myqr/myqr';
import { VotingPage } from '../../pages/voting/voting';
import { FeedbackPage } from '../../pages/feedback/feedback';
import { VideosPage } from '../../pages/videos/videos';

/**
 * Generated class for the MyInscPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-my-insc',
  templateUrl: 'my-insc.html',
})
export class MyInscPage {

    @ViewChild(Nav) nav: Nav;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  	
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad MyInscPage');
  	}

  	click(pagename){
  		if(pagename == "profile"){
  			this.navCtrl.push(ProfilePage);
  		}
  		else if(pagename == "my-qr"){
  			this.navCtrl.push(MyqrPage);
  		}
  		else if(pagename == "voting"){
  			this.navCtrl.push(VotingPage);
  		}
      else if(pagename == "videos"){
      	this.navCtrl.push(VideosPage);
      }
      else if(pagename == "feedback"){
        this.navCtrl.push(FeedbackPage);
      }
      else if(pagename == "logout"){
        this.storage.remove('regno');
        this.storage.remove('qrcode');
      	this.storage.remove('memberInfo');
      	this.navCtrl.setRoot(HomePage);
      }
  	}
}
