import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { QuestionDetailsPage } from '../../pages/question-details/question-details';

import { RestProvider } from './../../providers/rest/rest';
/**
 * Generated class for the Voting1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-voting1',
  templateUrl: 'voting1.html',
})
export class Voting1Page {

  	public sessions: any = [];
    public questions: any = [];
    public result: any = [];
    public regno = "";
    public error_message = "";
    public session_id = "";
  	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public photoViewer: PhotoViewer, public restProvider: RestProvider, public storage: Storage) {
  		this.session_id = this.navParams.get('session_id');
  		this.storage.get('regno').then((regno) => {
        	this.regno = regno;
    	});
      	this.initializePage();
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad VotingPage');
  	}

    initializePage(){
      let loading = this.loadingCtrl.create({content:'Loading, please wait....', dismissOnPageChange: true});
      loading.present();
      this.restProvider.getActiveQuestion().subscribe(data=> {
        loading.dismissAll();
        console.log(data);
        this.result = data;
        if(this.result['ErrorCode'] == 0){
          this.sessions = this.result.sessions;
          this.questions = this.result.questions;
        }
        else{
          this.error_message = this.result['ErrorMessage'];
        }
      },
      err=>{
        loading.dismissAll();
        console.log(err);
      });
    }

    goToDetails(question){
      this.navCtrl.push(QuestionDetailsPage, { question: question });
    }

}
