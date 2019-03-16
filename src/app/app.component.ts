import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import { AbstractPage } from '../pages/abstract/abstract';
import { SpOptionPage } from '../pages/sp-option/sp-option';

import { DatebaseProvider } from '../providers/datebase/datebase';
import { RestProvider } from '../providers/rest/rest';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  public items:any = [];
  public update_db = "";
  @ViewChild(Nav) nav: Nav;
  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public oneSignal: OneSignal, public storage: Storage, public database: DatebaseProvider, public restProvider: RestProvider) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      statusBar.overlaysWebView(false);
      statusBar.backgroundColorByHexString('#3b2702');
      splashScreen.hide();

      this.triggerNotification();
      this.database.connectToDb();
      this.storage.get('update_db').then((data) => {
          this.update_db = data;
          console.log('update_db:'+this.update_db);
          if(this.update_db != "1"){
              this.database.dropTables();
              this.database.connectToDb();
          }
          this.storage.set('update_db', "1");
      });
      this.getSProgramme();
      this.getWorkshop();
      this.getNursing();
    });
  }

  triggerNotification(){
      var iosSettings = {};
      iosSettings["kOSSettingsKeyAutoPrompt"] = true;
      iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
      if(this.platform.is('android')){ console.log("android");
        this.oneSignal.startInit('15816d9e-ea93-4f50-9d35-2fcafb25c1f9', '525231104821');
      }
      else{ console.log("ios");
        this.oneSignal.startInit('15816d9e-ea93-4f50-9d35-2fcafb25c1f9', '525231104821').iOSSettings(iosSettings);
      }
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
      this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
      this.oneSignal.endInit();
  }

  private onPushReceived(payload: OSNotificationPayload) {
    console.log(JSON.stringify(payload));
  }

  private onPushOpened(payload: OSNotificationPayload) {
    //alert('Push opened: ' + payload.body);
    console.log(JSON.stringify(payload));
    var page = payload.additionalData.page;
    if(page == 'Registration'){
      this.nav.push(RegistrationPage);
    }
    else if(page == 'Scientific Programme'){
      this.nav.push(SpOptionPage);
    }
    else if(page == 'Abstract'){
      this.nav.push(AbstractPage);
    }
  }

  getSProgramme(){
    this.restProvider.getSProgramme().subscribe((data) => {
        this.items = data;
        console.log(JSON.stringify(data));
        if(this.items.ErrorCode == 0){
            this.database.setSessions(this.items.sessions);
            this.database.setSessionDetails(this.items.session_details);
        }
        else{
            console.log(this.items.ErrorMessage);
        }
    }, (err) => {
        console.log(err);
    });
  }

  getWorkshop(){
    this.restProvider.getWorkshop().subscribe((data) => {
        this.items = data;
        console.log(JSON.stringify(data));
        if(this.items.ErrorCode == 0){
            this.database.setWorkshops(this.items.workshop);
            this.database.setWorkshopDetails(this.items.workshop_details);
        }
        else{
            console.log(this.items.ErrorMessage);
        }
    }, (err) => {
        console.log(err);
    });
  }

  getNursing(){
    this.restProvider.getNursing().subscribe((data) => {
        this.items = data;
        console.log(JSON.stringify(data));
        if(this.items.ErrorCode == 0){
            this.database.setNursing(this.items.nursing);
            this.database.setNursingDetails(this.items.nursing_details);
        }
        else{
            console.log(this.items.ErrorMessage);
        }
    }, (err) => {
        console.log(err);
    });
  }

}

