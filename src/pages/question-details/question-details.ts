import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { RestProvider } from './../../providers/rest/rest';

/**
 * Generated class for the QuestionDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question-details',
  templateUrl: 'question-details.html',
})
export class QuestionDetailsPage {

  	public selected_option = "";
    public correct_answer = "";
    public item: any = [];
    public vote_res: any = [];
    public submitted_ans: any = [];
    public regno = "";
    public question_id = "";
    public session_id = "";
    public disbale_submit = 0;
    public is_correct = "";
    public correct = 0;
    public is_wrong = "";
    public is_result = 0;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public photoViewer: PhotoViewer, public restProvider: RestProvider, public storage: Storage) {
  		this.storage.get('regno').then((regno) => {
        this.regno = regno;
    	});
      this.storage.get('submitted_ans').then((data) => {
        if(data != null){
          this.submitted_ans = data;
          for(let i = 0; i < this.submitted_ans.length; i++){
            if(this.question_id == this.submitted_ans[i].qid){
              this.disbale_submit = 1;
              this.is_result = 1;
              if(this.submitted_ans[i].c_ans == this.submitted_ans[i].s_ans){
                this.is_correct = this.submitted_ans[i].s_ans;
              }
              else{
                this.is_correct = this.submitted_ans[i].c_ans;
                this.is_wrong = this.submitted_ans[i].s_ans;
              }
            }
          }
        }
      });
      this.item = this.navParams.get('question');
      this.question_id = this.item.question_id;
      this.correct_answer = this.item.correct_answer;
      this.session_id = this.item.session_id;
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad QuestionPage');
  	}

  	onClick(val){
  		this.photoViewer.show(val);
  	}

  	selectedOption(val){
  		this.selected_option = val;
  	}

  	submit(){
  		var toaster = this.toastCtrl.create({
	      duration: 3000,
	      position: 'bottom'
      });

      if(this.selected_option == ""){
      	toaster.setMessage('Select an option');
      	toaster.present();
      	return false;
      }

      if(this.correct_answer == this.selected_option){
        this.correct = 1;
      }

      let loading = this.loadingCtrl.create({
      	spinner: 'hide',
      	content: '<img class="loader_img" src="assets/imgs/bars.gif" /><p>Sending data, please wait....</p>',
      	dismissOnPageChange: true,
      	cssClass:'loader_img'
      });
      loading.present();

		  this.restProvider.submitAnswer(this.regno, this.question_id, this.selected_option, this.session_id, this.correct).subscribe(
        data=> {
	        loading.dismissAll();
	        this.vote_res = data;
	        if(this.vote_res.ErrorCode == 0){
            this.disbale_submit = 1;
            this.is_result = 1;
            console.log(this.question_id+" "+this.correct_answer+" "+this.selected_option);
            this.submitted_ans.push({ qid: this.question_id, c_ans: this.correct_answer, s_ans: this.selected_option });
            this.storage.set('submitted_ans', this.submitted_ans);
            if(this.correct_answer == this.selected_option){
              this.is_correct = this.selected_option;
              this.selected_option = "";
            }
            else{
              this.is_correct = this.correct_answer;
              this.is_wrong = this.selected_option;
              this.selected_option = "";
            }
	        }
	        else{
	          this.presentAlert("Failed", this.vote_res.ErrorMessage);
	        }
	      },
	      err=>{
	        loading.dismissAll();
	        this.presentAlert("Failed", "Failed to pass the data. Check your internet connection.");
	      }
      );
  	}

    presentAlert(title, subtitle) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: subtitle,
        buttons: ['OK']
      });
      alert.present();
    }

}
