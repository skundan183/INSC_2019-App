import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json; boundary=xxxxBoundaryStringxxxx' })
};

@Injectable()
export class RestProvider {

    baseUrlLive:string = "https://insc2019.com/inscapi/";
    baseUrl:string = "https://ourballot.com/insc/";
    //baseUrl:string = "http://192.168.0.206:8080/insc/";
  	constructor(public http: HttpClient) {
    	console.log('Hello RestProvider Provider');
  	}

  	submitAbstract(data){
	    let postData = {
              "first_name" : data.fname,
              "last_name" : data.lname,
              "user_email" : data.email,
              "mobile_number" : data.mobile,
              "is_registration_number" : data.is_registered,
              "registration_number" : data.insc_regno,
              "abstract_topic" : data.abstract_topic,
              "abstract_title": data.abstract_title,
              "author": data.presenting_author,
              "co_author" : data.co_authors,
              "affiliation":data.affiliation,
              "abstract": data.abstract
	    }
	    console.log(postData);
  		var response = this.http.post(this.baseUrlLive+'abstract.php', postData, httpOptions);
      return response;
  	}

  	offlineRegister(data, paymentFile, regFile){
  		let postData = {
	            "first_name": data.fname,
	            "last_name": data.lname,
	            "user_email": data.email,
              "user_password": data.password,
	            "mobile_number": data.mobile,
              "is_workshop_reg" : data.is_workshop,
              "user_workshopname" : data.workshop,
	            "user_paymentupload": paymentFile,
	            "user_imageupload": regFile
	    }
  		console.log(postData);
  		var response = this.http.post(this.baseUrlLive+'offlineregister.php', postData, httpOptions);
      return response;
  	}

    onlineRegister(data){
      let postData = {
              "gender": data.gender,
              "user_address": data.address,
              "country": data.country,
              "user_isamember": data.is_member,
              "registration_type": data.reg_type,
              "amount": data.amount,
              "currency_code": data.currency,
              "registration_fee": data.amount,
              "first_name": data.fname,
              "last_name": data.lname,
              "user_email": data.email,
              "user_password": data.password,
              "birth_date": data.dob,
              "user_district": data.city,
              "user_state": data.state,
              "user_pincode": data.pincode,
              "phone_number": data.contactno,
              "mobile_number": data.mobile,
              "isa_membership": data.isa_membership,
              "user_councilregno": data.councilregno,
              "user_qualification": data.qualification,
              "user_qualificationyear": data.qualification_year
      }
      console.log(postData);
      var response = this.http.post(this.baseUrlLive+'onlineregister.php', postData, httpOptions);
      return response;
    }

  	getSProgramme(){
      var response = this.http.get(this.baseUrl+'read.php?value=GetScientificProgramme');   
      return response;
    }

    getWorkshop(){
      var response = this.http.get(this.baseUrl+'read.php?value=GetWorkshop');   
      return response;
    }

    getNursing(){
      var response = this.http.get(this.baseUrl+'read.php?value=GetNursing');   
      return response;
    }

    login(data){
      let postData = {
              "regno": data.regno,
              "username": data.username
            };
      console.log(postData);
      var response = this.http.post(this.baseUrl+'read.php?value=LoginAuthentication', postData, httpOptions);
      console.log(response);
      return response;
    }

    sendFeedback(reg_id, ret1, ret2, ret3, ret4, ret5, comments){
      let postData = {
          "regno": reg_id,
          "ret1": ret1,
          "ret2": ret2,
          "ret3": ret3,
          "ret4": ret4,
          "ret5": ret5,
          "comments": comments
      }
      console.log(postData);
      var response = this.http.post(this.baseUrl+'read.php?value=Feedback', postData, httpOptions);
      console.log(response);
      return response;
    }

    getActiveQuestion(){
      var response = this.http.get(this.baseUrl+'read.php?value=GetActiveQuestion');   
      return response;
    }

    submitAnswer(reg_id, question_id, selected_answer, session_id, is_correct){
      let postData = {
          "regno": reg_id,
          "question_id": question_id,
          "selected_answer": selected_answer,
          "session_id": session_id,
          "is_correct": is_correct
      }
      console.log(postData);
      var response = this.http.post(this.baseUrl+'read.php?value=SubmitAnswer', postData, httpOptions);
      console.log(response);
      return response;
    }

    submitAskedQuestion(reg_id, session_name, question){
      let postData = {
          "registration_id": reg_id,
          "question": question,
          "session_name": session_name
      }
      console.log(postData);
      var response = this.http.post(this.baseUrl+'read.php?value=SubmitAskedQuestion', postData, httpOptions);
      console.log(response);
      return response;
    }

    getVideos(session_id){
      let postData = {
          "session_id": session_id
      }
      console.log(postData);
      var response = this.http.post(this.baseUrl+'read.php?value=GetVideos', postData, httpOptions);   
      return response;
    }
}
