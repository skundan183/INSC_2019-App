import { Component } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';
import { AppAvailability } from '@ionic-native/app-availability';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';

import { WelcomePage } from '../../pages/welcome/welcome';
import { CommitteePage } from '../../pages/committee/committee';
import { FacultyPage } from '../../pages/faculty/faculty';
import { RegistrationPage } from '../../pages/registration/registration';
import { MyInscPage } from '../../pages/my-insc/my-insc';
import { AbstractPage } from '../../pages/abstract/abstract';
import { GeneralInfoPage } from '../../pages/general-info/general-info';
import { SpOptionPage } from '../../pages/sp-option/sp-option';
import { AppSponsorPage } from '../../pages/app-sponsor/app-sponsor';
import { SharePage } from '../../pages/share/share';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public dashboard_data = [
          { title: 'Welcome', icon: 'assets/imgs/icons/welcome.png', value: 'welcome' },
          { title: 'Committee', icon: 'assets/imgs/icons/committee.png', value: 'committee' },
          { title: 'Faculty', icon: 'assets/imgs/icons/faculty.png', value: 'faculty' },
          { title: 'Registration', icon: 'assets/imgs/icons/registration.png', value: 'registration' },
          { title: 'My INSC', icon: 'assets/imgs/icons/my_insc.png', value: 'my_insc' },
          { title: 'Abstract', icon: 'assets/imgs/icons/abstract.png', value: 'abstract' },
          { title: 'General Information', icon: 'assets/imgs/icons/general_info.png', value: 'general_info' },
          { title: 'Scientific Programme', icon: 'assets/imgs/icons/scientific_programme.png', value: 'scientific_programme' },
          { title: 'App Sponsor', icon: 'assets/imgs/icons/sponsor.png', value: 'app_sponsor' }
        ];
  	constructor(public navCtrl: NavController, public modalCtrl: ModalController, public platform: Platform, public inAppBrowser: InAppBrowser, public appAvailability: AppAvailability, public storage: Storage) {

  	}

  	click(pagename){
  		if(pagename == "welcome"){
  			this.navCtrl.push(WelcomePage);
  		}
  		else if(pagename == "committee"){
  			this.navCtrl.push(CommitteePage);
  		}
  		else if(pagename == "faculty"){
  			this.navCtrl.push(FacultyPage);
  		}
  		else if(pagename == "registration"){
  			this.navCtrl.push(RegistrationPage);
  		}
  		else if(pagename == "my_insc"){
  			this.openLogin();
  		}
  		else if(pagename == "abstract"){
  			this.navCtrl.push(AbstractPage);
  		}
  		else if(pagename == "general_info"){
  			this.navCtrl.push(GeneralInfoPage);
  		}
  		else if(pagename == "scientific_programme"){
  			this.navCtrl.push(SpOptionPage);
  		}
  		else if(pagename == "app_sponsor"){
  			this.navCtrl.push(AppSponsorPage);
  		}
  	}

    openLogin(){
      this.storage.get('regno').then((regno) => {
        if((regno != '') && (regno != undefined) && (regno != null)){
          this.navCtrl.push(MyInscPage);
        }
        else{
          this.navCtrl.push(LoginPage);
        }
      });
    }

    openTwitter(username: string) {
      this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', username);
    }

    openFacebook() {
      this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://profile/', 'https://www.facebook.com/', 'INSC2019Ahmedabad');
    }

    launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
      let app: string;
      if(this.platform.is('ios')) {
        app = iosSchemaName;
      } 
      else if(this.platform.is('android')) {
        app = androidPackageName;
      } 
      else {
        this.inAppBrowser.create(httpUrl + username, '_blank');
        return;
      }
      this.appAvailability.check(app).then(
        () => { console.log("app"); 
          this.inAppBrowser.create(appUrl + '387022888537744', '_system');
        },
        () => { console.log("web"); 
          this.inAppBrowser.create(httpUrl + username, '_blank');
        }
      );
    }

    openShare(){
      var sharePage = this.modalCtrl.create(SharePage, {cssClass: "transactionConfirm-modal"}); 
      sharePage.present();
    }
}
