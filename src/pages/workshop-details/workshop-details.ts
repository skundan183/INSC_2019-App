import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DatebaseProvider } from './../../providers/datebase/datebase';
import { RestProvider } from './../../providers/rest/rest';

/**
 * Generated class for the WorkshopDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-workshop-details',
  templateUrl: 'workshop-details.html',
})
export class WorkshopDetailsPage {

    public items:any = [];
    public workshop_id:any = "";
    public workshop_details:any = [];
    public title:any = "";
    public start_date:any = "";
    public start_time:any = "";
    public end_time:any = "";
    public conveners:any = "";
    public venue:any = "";
  	constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public restProvider: RestProvider, public database: DatebaseProvider) {
  		this.workshop_id = this.navParams.get('workshop_id');
  		this.title = this.navParams.get('title');
      this.conveners = this.navParams.get('conveners');
      this.venue = this.navParams.get('venue');
      this.start_date = this.navParams.get('start_date');
      this.start_time = this.navParams.get('start_time');
      this.end_time = this.navParams.get('end_time');
      console.log(this.workshop_id);
  		this.initializePage();
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad WorkshopDetailsPage');
  	}

    initializePage(){
      this.workshop_details = [];
      this.getWorkshop();
      this.database.getWorkshopDetails(this.workshop_id).then(data => {
        this.workshop_details = data;
      })
    }

    getWorkshop(){
      let loading = this.loadingCtrl.create({ dismissOnPageChange: true, content:'Loading data, please wait....'});
      loading.present();
      this.restProvider.getWorkshop().subscribe((data) => {
        loading.dismissAll();
        this.items = data;
        if(this.items.ErrorCode == 0){
          this.workshop_details = [];
          this.database.setWorkshops(this.items.workshop);
          this.database.setWorkshopDetails(this.items.workshop_details);
          for (var i = 0; i < this.items.workshop_details.length; i++) {
            if(this.items.workshop_details[i].workshop_id == this.workshop_id){
              this.workshop_details.push({
                topic_id: this.items.workshop_details[i].topic_id,
                topic: this.items.workshop_details[i].topic,
                type: this.items.workshop_details[i].type,
                faculty: this.items.workshop_details[i].faculty,
                workshop_id: this.items.workshop_details[i].workshop_id,
                start_time: this.items.workshop_details[i].start_time,
                end_time: this.items.workshop_details[i].end_time,
                status: this.items.workshop_details[i].status
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

}
