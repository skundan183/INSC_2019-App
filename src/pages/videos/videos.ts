import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

import { DatebaseProvider } from './../../providers/datebase/datebase';
import { RestProvider } from './../../providers/rest/rest';

/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

  	public session_id:any = "2";
  	public items:any = [];
  	public sessions:any = [];
  	public result:any = [];
  	public videos:any = [];
  	public error_message:any = "";
  	constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public streamingMedia: StreamingMedia, public database: DatebaseProvider, public restProvider: RestProvider) {
  		this.session_id = "2";
      if(this.navParams.get('session_id') != undefined){
        this.session_id = this.navParams.get('session_id');
      }
  		this.database.getSessions().then(data => {
        this.sessions = data;
        for (var i = 0; i < this.sessions.length; i++) {
          if(this.sessions[i].type == "1" && (!this.sessions[i].session_name.includes("QUIZ")) ){
            this.items.push({
	            session_id: this.sessions[i].session_id,
	            session_name: this.sessions[i].session_name
            })
          }
        }
      });
      this.getVideos(this.session_id);
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad VideosPage');
  	}

  	changeSession(session_id){
  		this.getVideos(session_id);
  	}

  	getVideos(session_id){
      this.videos = [];
      this.error_message = "";
  		let loading = this.loadingCtrl.create({ dismissOnPageChange: true, content:'Loading data, please wait....'});
      loading.present();
      this.restProvider.getVideos(session_id).subscribe((data) => {
        loading.dismissAll(); console.log(JSON.stringify(data));
        this.result = data;
        if(this.result.ErrorCode == 0){
          this.videos = this.result.videos;
        }
        else{
          this.error_message = this.result.ErrorMessage;
        }
      }, (err) => {
        loading.dismissAll();
        alert("failed to load data.");
      });
  	}

  	playVideo(url){
  		let options: StreamingVideoOptions = {
		  successCallback: () => { console.log('Video played') },
		  errorCallback: (e) => { console.log('Error streaming') },
		  shouldAutoClose: true,
		  controls: true
		};

		//this.streamingMedia.playVideo('https://www.ourballot.com/Luka-Chuppi.mp4', options);
		this.streamingMedia.playVideo(url, options);
  	}
}
