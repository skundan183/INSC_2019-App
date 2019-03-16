import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SessionDetailsPage } from '../../pages/session-details/session-details';
import { LoginPage } from '../../pages/login/login';
import { Voting1Page } from '../../pages/voting1/voting1';
import { VideosPage } from '../../pages/videos/videos';

import { DatebaseProvider } from './../../providers/datebase/datebase';
import { RestProvider } from './../../providers/rest/rest';

/**
 * Generated class for the ScientificProgrammePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-scientific-programme',
  templateUrl: 'scientific-programme.html',
})
export class ScientificProgrammePage {

    public day = "day1";
    public days: Array<string>  = ['day1', 'day2', 'day3'];
    public items:any = [];
    public sessions:any = [];
    public day1:any = [];
    public day2:any = [];
    public day3:any = [];
    public regno = "";
  	constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public restProvider: RestProvider, public storage: Storage, public database: DatebaseProvider) {
      this.storage.get('regno').then((regno) => {
        this.regno = regno;
      });
      this.initializePage();
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad ScientificProgrammePage');
  	}

  	onSegmentSelected(val){
  		this.day = val;
  	}

    onTabChanged(val) {
      this.day = val;
    }

    initializePage(){
      this.day1 = [];
      this.day2 = [];
      this.day3 = [];
      this.getSProgramme();
      this.database.getSessions().then(data => {
        this.sessions = data;
        for (var i = 0; i < this.sessions.length; i++) {
          if(this.sessions[i].start_date == "15-03-2019"){
            this.day1.push({
              session_id: this.sessions[i].session_id,
              session_name: this.sessions[i].session_name,
              title: this.sessions[i].title,
              type: this.sessions[i].type,
              moderator: this.sessions[i].moderator,
              chairman: this.sessions[i].chairman,
              start_date: this.sessions[i].start_date,
              start_time: this.sessions[i].start_time,
              end_time: this.sessions[i].end_time,
              status: this.sessions[i].status
            })
          }
          else if(this.sessions[i].start_date == "16-03-2019"){
            this.day2.push({
              session_id: this.sessions[i].session_id,
              session_name: this.sessions[i].session_name,
              title: this.sessions[i].title,
              type: this.sessions[i].type,
              moderator: this.sessions[i].moderator,
              chairman: this.sessions[i].chairman,
              start_date: this.sessions[i].start_date,
              start_time: this.sessions[i].start_time,
              end_time: this.sessions[i].end_time,
              status: this.sessions[i].status
            })
          }
          else{
            this.day3.push({
              session_id: this.sessions[i].session_id,
              session_name: this.sessions[i].session_name,
              title: this.sessions[i].title,
              type: this.sessions[i].type,
              moderator: this.sessions[i].moderator,
              chairman: this.sessions[i].chairman,
              start_date: this.sessions[i].start_date,
              start_time: this.sessions[i].start_time,
              end_time: this.sessions[i].end_time,
              status: this.sessions[i].status
            })
          }
        }
      })
    }

    sessionDetails(session_id, session_name, session_title, moderator, chairman, start_time, end_time){
      this.navCtrl.push(SessionDetailsPage, { session_id: session_id, session_name: session_name, session_title: session_title, moderator: moderator, chairman: chairman, start_time: start_time, end_time: end_time });
    }

    getSProgramme(){
      let loading = this.loadingCtrl.create({ dismissOnPageChange: true, content:'Loading data, please wait....'});
      loading.present();
      this.restProvider.getSProgramme().subscribe((data) => {
          loading.dismissAll();
          this.items = data;
          if(this.items.ErrorCode == 0){
            this.database.setSessions(this.items.sessions);
            this.database.setSessionDetails(this.items.session_details);
            this.sessions = this.items.sessions;
            this.day1 = [];
            this.day2 = [];
            this.day3 = [];
            for (var i = 0; i < this.sessions.length; i++) {
              if(this.sessions[i].start_date == "15-03-2019"){
                this.day1.push({
                  session_id: this.sessions[i].session_id,
                  session_name: this.sessions[i].session_name,
                  title: this.sessions[i].title,
                  type: this.sessions[i].type,
                  moderator: this.sessions[i].moderator,
                  chairman: this.sessions[i].chairman,
                  start_date: this.sessions[i].start_date,
                  start_time: this.sessions[i].start_time,
                  end_time: this.sessions[i].end_time,
                  status: this.sessions[i].status
                })
              }
              else if(this.sessions[i].start_date == "16-03-2019"){
                this.day2.push({
                  session_id: this.sessions[i].session_id,
                  session_name: this.sessions[i].session_name,
                  title: this.sessions[i].title,
                  type: this.sessions[i].type,
                  moderator: this.sessions[i].moderator,
                  chairman: this.sessions[i].chairman,
                  start_date: this.sessions[i].start_date,
                  start_time: this.sessions[i].start_time,
                  end_time: this.sessions[i].end_time,
                  status: this.sessions[i].status
                })
              }
              else{
                this.day3.push({
                  session_id: this.sessions[i].session_id,
                  session_name: this.sessions[i].session_name,
                  title: this.sessions[i].title,
                  type: this.sessions[i].type,
                  moderator: this.sessions[i].moderator,
                  chairman: this.sessions[i].chairman,
                  start_date: this.sessions[i].start_date,
                  start_time: this.sessions[i].start_time,
                  end_time: this.sessions[i].end_time,
                  status: this.sessions[i].status
                })
              }
            }
          }
          else{
              console.log(this.items.ErrorMessage);
          }
      }, (err) => {
          loading.dismissAll();
          console.log(err);
      });
    }

    goForVoting(session_id){
      if((this.regno != '') && (this.regno != undefined) && (this.regno != null)){
        this.navCtrl.push(Voting1Page, {session_id: session_id});
      }
      else{
        this.navCtrl.push(LoginPage);
      }
    }

    goForVideos(session_id){
      if((this.regno != '') && (this.regno != undefined) && (this.regno != null)){
        this.navCtrl.push(VideosPage, {session_id: session_id});
      }
      else{
        this.navCtrl.push(LoginPage);
      }
    }

    formatDate(){
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth()+1;
      var year = date.getFullYear();
      return day+"/"+month+"/"+year;
    }

}
