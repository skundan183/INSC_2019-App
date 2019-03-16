import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WorkshopDetailsPage } from '../../pages/workshop-details/workshop-details';

import { DatebaseProvider } from './../../providers/datebase/datebase';

/**
 * Generated class for the WorkshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-workshop',
  templateUrl: 'workshop.html',
})
export class WorkshopPage {

	public items:any = [];
    public workshops:any = [];
  	constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatebaseProvider) {
  		this.initializePage();
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad WorkshopPage');
  	}

  	initializePage(){
  		this.database.getWorkshop().then(data => {
	        console.log(data);
	        this.workshops = data;
	    })
  	}

  	workshopDetails(workshop_id, title, conveners, venue, start_date, start_time, end_time){
  		this.navCtrl.push(WorkshopDetailsPage, { workshop_id: workshop_id, title: title, conveners: conveners, venue: venue, start_date: start_date, start_time: start_time, end_time: end_time });
  	}

  	formatDate(date) {
	  var monthNames = [
	    "Jan", "Feb", "Mar",
	    "Apr", "May", "June", "July",
	    "Aug", "Sept", "Oct",
	    "Nov", "Dec"
	  ];
	  var d = new Date(date);
	  var day = d.getDate();
	  var monthIndex = d.getMonth();
	  var year = d.getFullYear();

	  return day+' '+monthNames[monthIndex]+' '+year;
	}
}
