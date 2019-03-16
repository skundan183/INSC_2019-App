import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DatebaseProvider } from './../../providers/datebase/datebase';
import { RestProvider } from './../../providers/rest/rest';
/**
 * Generated class for the NursingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-nursing',
  templateUrl: 'nursing.html',
})
export class NursingPage {

	public items:any = [];
	public nursing_details:any = [];
	public nursing_id:any = "";
    public title:any = "";
    public conveners:any = "";
    public venue:any = "";
    public start_date:any = "";
    public start_time:any = "";
    public end_time:any = "";
  	constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public restProvider: RestProvider, public database: DatebaseProvider) {
	    this.initializePage();
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad NursingPage');
  	}

  	initializePage(){
      this.nursing_details = [];
      this.database.getNursing().then(data => {
	    this.items = data;
	    for(var i = 0; i < this.items.length; i++) {
	        this.nursing_id = this.items[i].nursing_id,
	       	this.title = this.items[i].title,
			this.conveners = this.conveners = this.items[i].conveners,
			this.venue = this.items[i].venue,
			this.start_date = this.formatDate(this.items[i].start_date),
			this.start_time = this.items[i].start_time,
			this.end_time = this.items[i].end_time
	    }
	  })
      this.getNursing();
      this.database.getNursingDetails().then(data => {
        this.nursing_details = data;
      })
  	}

  	getNursing(){
  		let loading = this.loadingCtrl.create({ dismissOnPageChange: true, content:'Loading data, please wait....'});
     	loading.present();
	    this.restProvider.getNursing().subscribe((data) => {
	    	loading.dismissAll();
	        this.items = data;
	        if(this.items.ErrorCode == 0){
	        	this.nursing_details = [];
	            this.database.setNursing(this.items.nursing);
	            this.database.setNursingDetails(this.items.nursing_details);
	            this.nursing_details = this.items.nursing_details;
	        }
	        else{
	            console.log(this.items.ErrorMessage);
	        }
	    }, (err) => {
	    	loading.dismissAll();
	        console.log(err);
	    });
	}

  	formatDate(date) {
	  	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
	  	var d = new Date(date);
	  	var day = d.getDate();
	  	var monthIndex = d.getMonth();
	  	var year = d.getFullYear();
	  	return day+' '+monthNames[monthIndex]+' '+year;
	}
}
