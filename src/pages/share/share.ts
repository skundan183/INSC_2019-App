import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public socialSharing: SocialSharing, public viewCtrl : ViewController) {
  
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad SharePage');
  	}

  	closeModal(){
    	this.viewCtrl.dismiss();
	}


	share(type){
		var title = "";
		var message = "";
		var url = "";
		if(type == "facebook"){
			title = "Fadcebook Share";
			message = "Like us on Facebook";
			url = "https://www.facebook.com/INSC2019Ahmedabad/";
			this.socialSharing.share(message, title, null, url);
		}
		if(type == "apple"){
			message = "Download INSC 2019 App";
			url = "https://itunes.apple.com/au/app/insc-2019/id1448027615?mt=8";
			this.socialSharing.share(message, null, null, url);
		}
		if(type == "android"){
			message = "Download INSC 2019 App";
			url = "https://play.google.com/store/apps/details?id=com.cmpl.insc";
			this.socialSharing.share(message, null, null, url);
		}
		if(type == "both-app"){
			message = "Download INSC 2019 App \n\n For iOS: https://itunes.apple.com/au/app/insc-2019/id1448027615?mt=8 \n\n For Android: https://play.google.com/store/apps/details?id=com.cmpl.insc";
			this.socialSharing.share(message, null, null, null);
		}
	}

}
