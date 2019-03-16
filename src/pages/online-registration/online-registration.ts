import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { RestProvider } from './../../providers/rest/rest';
import { DatebaseProvider } from './../../providers/datebase/datebase';

/**
 * Generated class for the OnlineRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-online-registration',
  templateUrl: 'online-registration.html',
})
export class OnlineRegistrationPage {

    public data: any = [];
  	public items: any = [];
    public options : InAppBrowserOptions = {
        location : 'yes',//Or 'no' 
        hidden : 'no', //Or  'yes'
        clearcache : 'yes',
        clearsessioncache : 'yes',
        hidenavigationbuttons : 'yes',
        hideurlbar : 'yes',
        zoom : 'no',//Android only ,shows browser zoom controls 
        hardwareback : 'no',
        mediaPlaybackRequiresUserAction : 'no',
        shouldPauseOnSuspend : 'no', //Android only 
        closebuttoncaption : 'Close', //iOS only
        closebuttoncolor : '#0069b0',
        disallowoverscroll : 'no', //iOS only 
        toolbar : 'yes', //iOS only 
        enableViewportScale : 'no', //iOS only 
        allowInlineMediaPlayback : 'no',//iOS only 
        presentationstyle : 'pagesheet',//iOS only 
        fullscreen : 'yes',//Windows only    
    };

  	constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser, public datePicker: DatePicker, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public database: DatebaseProvider, public restProvider: RestProvider) {
  		this.initializePage();
  	}

  	initializePage(){
  		this.data = [];
      this.data.fname = "";
      this.data.lname = "";
      this.data.email = "";
      this.data.password = "";
      this.data.gender = "Male";
      this.data.dob = "";
      this.data.address = "";
      this.data.city = "";
      this.data.state = "";
      this.data.country = "";
      this.data.pincode = "";
      this.data.contactno = "";
      this.data.mobile = "";
      this.data.is_member = "Yes";
      this.data.isa_membership = "";
      this.data.councilregno = "";
      this.data.qualification = "";
      this.data.qualification_year = "";
      this.data.reg_type = "";
      this.data.currency = "INR";
      this.data.amount = 0;
      this.data.reg_fee = this.data.currency+" "+this.data.amount;
      this.database.getSavedUser().then(data => {
        console.log("saved data:"+data);
        this.items = data;
        for(var i = 0; i < this.items.length; i++) {
          this.data.fname = this.items[i].fname;
          this.data.lname = this.items[i].lname;
          this.data.email = this.items[i].email;
          this.data.password = this.items[i].password;
          this.data.gender = this.items[i].gender;
          this.data.dob = this.items[i].dob;
          this.data.address = this.items[i].address;
          this.data.city = this.items[i].city;
          this.data.state = this.items[i].state;
          this.data.country = this.items[i].country;
          this.data.pincode = this.items[i].pincode;
          this.data.contactno = this.items[i].contactno;
          this.data.mobile = this.items[i].mobile;
          this.data.is_member = this.items[i].is_member;
          this.data.isa_membership = this.items[i].isa_membership;
          this.data.councilregno = this.items[i].councilregno;
          this.data.qualification = this.items[i].qualification;
          this.data.qualification_year = this.items[i].qualification_year;
          this.data.reg_type = this.items[i].reg_type;
          this.data.currency = this.items[i].currency;
          this.data.amount = this.items[i].amount;
          this.data.reg_fee = this.data.currency+" "+this.data.amount;
        }
      })
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad OnlineRegistrationPage');
  	}

    save(formdata){
      console.log(formdata);
      var toaster = this.toastCtrl.create({
        duration: 3000,
        position: 'bottom'
      });
      var result = this.database.setSavedUser(formdata);
      console.log("res:"+result);
      if(result){
        toaster.setMessage('Your form data is saved.');
        toaster.present();
      }
      else{
        console.log('Not saved');
      }
    }

  	register(formdata){
      var toaster = this.toastCtrl.create({
        duration: 3000,
        position: 'bottom'
      });
      console.log(formdata);

      if(formdata.fname == '' || formdata.fname == undefined){
        toaster.setMessage('First Name is required');
        toaster.present();
        return false;
      }
      if(formdata.lname == '' || formdata.lname == undefined){
        toaster.setMessage('Last Name is required');
        toaster.present();
        return false;
      }
      if(formdata.email == '' || formdata.email == undefined){
        toaster.setMessage('Email is required');
        toaster.present();
        return false;
      }
      if(formdata.password == '' || formdata.password == undefined){
        toaster.setMessage('Password is required');
        toaster.present();
        return false;
      }
      if(formdata.gender == '' || formdata.gender == undefined){
        toaster.setMessage('Gender is required');
        toaster.present();
        return false;
      }
      if(formdata.dob == '' || formdata.dob == undefined){
        toaster.setMessage('Birth Date is required');
        toaster.present();
        return false;
      }
      if(formdata.address == '' || formdata.address == undefined){
        toaster.setMessage('Address is required');
        toaster.present();
        return false;
      }
      if(formdata.city == '' || formdata.city == undefined){
        toaster.setMessage('City is required');
        toaster.present();
        return false;
      }
      if(formdata.state == '' || formdata.state == undefined){
        toaster.setMessage('State is required');
        toaster.present();
        return false;
      }
      if(formdata.country == '' || formdata.country == undefined){
        toaster.setMessage('Country is required');
        toaster.present();
        return false;
      }
      if(formdata.pincode == '' || formdata.pincode == undefined){
        toaster.setMessage('Pincode is required');
        toaster.present();
        return false;
      }
      if(formdata.qualification == '' || formdata.qualification == undefined){
        toaster.setMessage('Qualification is required');
        toaster.present();
        return false;
      }
      if(formdata.mobile == '' || formdata.mobile == undefined){
        toaster.setMessage('Mobile no. is required');
        toaster.present();
        return false;
      }
      if(formdata.is_member !== '' || formdata.is_member !== undefined){
      	if(formdata.is_member == 'Yes'){
      		if(formdata.isa_membership == '' || formdata.isa_membership == undefined){
      			toaster.setMessage('ISA Membership No. is required');
        		toaster.present();
        		return false;
      		}
      	}
      }
      else{
        toaster.setMessage('ISA Membership is required');
        toaster.present();
        return false;
      }
      if(formdata.councilregno == '' || formdata.councilregno == undefined){
        toaster.setMessage('State Council Reg. No is required');
        toaster.present();
        return false;
      }
      if(formdata.reg_type == '' || formdata.reg_type == undefined){
        toaster.setMessage('Registration type is required');
        toaster.present();
        return false;
      }

      let loading = this.loadingCtrl.create({ dismissOnPageChange: true, content:'Sending data, please wait....'});
      loading.present();
      
      this.restProvider.onlineRegister(formdata).subscribe(
        data=> {
          loading.dismissAll();
          this.items = data;
          console.log(this.items);
          if(this.items.status == 'success'){
            console.log(JSON.stringify(this.items));
            this.redirectToPayment(this.items);
            //this.presentAlert('Thank You', "Your registration form is successfully submitted and payment link will be sent through email.");
          }
          else{
            this.presentAlert('Failed', this.items.message);
          }
        },
        err=>{
          loading.dismissAll();
          this.presentAlert('Error', "Failed to submit the form. Check your internet connection.");
        }
      );
    }

    presentAlert(title, subtitle) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: subtitle,
        buttons: ['Dismiss']
      });
      alert.present();
    }

    redirectToPayment(res){
      console.log("id="+res.userId+"&amount="+this.data.amount);
      let target = "_blank";
      var url = "https://insc2019.com/inscapi/ccavRequestHandler.php?id="+res.userId+"&amount="+this.data.amount;
      let browser = this.inAppBrowser.create(url, target, this.options);
      
      browser.on('loadstart').subscribe((eve) => {
        console.log("Load Start");
      });

      browser.on('loadstop').subscribe((event) => {
        console.log("Load Stop");
      });

      browser.on('loaderror').subscribe(()=>{
        console.log("Load Error");
      });

      browser.on('exit').subscribe(()=>{
        console.log('browser closed');
        this.initializePage();
      });
    }

  	getDOB(){
  		this.datePicker.show({ date: new Date(), mode: 'date', androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_DARK}).then((date) => {
  			this.data.dob = this.formatDate(date);
  		},
  		  err => console.log('Error occurred while getting date: ', err)
  		);
  	}

  	formatDate(date){
		  var day = date.getDate();
  		if(day < 10){
  			day = "0"+day;
  		}
		  var month = date.getMonth()+1;
  		if(month < 10){
  			month = "0"+month;
  		}
		  var year = date.getFullYear();
		  return day+"/"+month+"/"+year;
  	}

  	calcAmount(val){
      var reg_type = val.reg_type;
    	if(reg_type != undefined){
      	var result = this.getAmount(reg_type);
        this.data.amount = result['amount']; 
        this.data.currency = result['currency'];
        this.data.reg_fee = this.data.currency+" "+this.data.amount;
      }
    }

    getAmount(deltype){
        var today = new Date().toISOString();
        var curr_date = Date.parse(today);
        //var eb_date = Date.parse("2018-11-30"); //new Date(2018,10,30);
        var rr_date = Date.parse("2019-02-15"); //new Date(2018,11,31);
        var ots_date = Date.parse("2019-03-18"); //new Date(2019,00,10);
        var currency = "INR";
        var amount = 0;

        if(curr_date <= rr_date){
            if(deltype == "ISA Members"){
                currency = "INR";
                amount = 6500;
            }
            else if(deltype == "Non-Members"){
                currency = "INR";
                amount = 8000;
            }
            else if(deltype == "PG Students"){
                currency = "INR";
                amount = 4500;
            }
            else if(deltype == "Accompanying Person"){
                currency = "INR";
                amount = 3500;
            }
            else if(deltype == "Foreign Delegates"){
                currency = "USD";
                amount = 400;
            }
            else{
                currency = "INR";
                amount = 0;
            }
        }
        else if((curr_date > rr_date) && (curr_date <= ots_date)){
            if(deltype == "ISA Members"){
                currency = "INR";
                amount = 15000;
            }
            else if(deltype == "Non-Members"){
                currency = "INR";
                amount = 18000;
            }
            else if(deltype == "PG Students"){
                currency = "INR";
                amount = 7000;
            }
            else if(deltype == "Accompanying Persons"){
                currency = "INR";
                amount = 15000;
            }
            else if(deltype == "Foreign Delegates"){
                currency = "USD";
                amount = 600;
            }
            else{
                currency = "INR";
                amount = 0;
            }
        }
        return {"currency":currency, "amount":amount};
    }

}