import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommitteePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-committee',
  templateUrl: 'committee.html',
})
export class CommitteePage {

	public committee = "isa_executive";
	public isa_executive = [
							{ name : 'Dr. P.N. SYLAJA', photo: 'assets/imgs/committee/Dr. P.N. SYLAJA.png', designation: 'President', type: "0" },
              { name : 'Dr. VINIT SURI', photo: 'assets/imgs/committee/Dr. VINIT SURI.png', designation: 'President Elect', type: "0" },
              { name : 'Dr. V.G. PRADEEP KUMAR', photo: 'assets/imgs/committee/Dr. V.G. PRADEEP KUMAR.png', designation: 'Secretary', type: "0" },
              { name : 'Dr. JEYARAJ PANDIAN', photo: 'assets/imgs/committee/Dr. JEYARAJ PANDIAN.png', designation: 'Treasurer', type: "0" },
              { name : 'Dr. ASHOK UPPAL', photo: 'assets/imgs/committee/Dr. ASHOK UPPAL.png', designation: 'ISA Past President 2016 - 2017', type: "0" },
              { name : 'Dr. DEEPAK ARJUNDAS', photo: 'assets/imgs/committee/Dr. DEEPAK ARJUNDAS.png', designation: 'ISA Past President 2017 - 2018', type: "0" },
              { title : 'EC MEMBERS', type: "1" },
              { name : 'Dr. ARVIND SHARMA', photo: 'assets/imgs/committee/Dr. ARVIND SHARMA.png', designation: '', type: "0" },
              { name : 'Dr. NIRMAL SURYA', photo: 'assets/imgs/committee/Dr. NIRMAL SURYA.png', designation: '', type: "0" },
              { name : 'Dr. VIKRAM HUDED', photo: 'assets/imgs/committee/Dr. VIKRAM HUDED.png', designation: '', type: "0" },
              { name : 'Dr. S. KUMARAVELU', photo: 'assets/imgs/committee/Dr. S. KUMARAVELU.png', designation: '', type: "0" },
              { title : 'ISA - PAST PRESIDENTS', type: "1" },
              { name : 'Dr. G ARJUNDAS', photo: 'assets/imgs/committee/avatar.png', designation: '2002 - 2008', type: "0" },
              { name : 'Prof P. M. DALAL', photo: 'assets/imgs/committee/Prof P. M. DALAL.png', designation: '2008 - 2009', type: "0" },
              { name : 'Dr. SUBHASH KAUL', photo: 'assets/imgs/committee/Dr. SUBHASH KAUL.png', designation: '2009 - 2010', type: "0" },
              { name : 'Dr. SHIRISH MADHAV HASTAK', photo: 'assets/imgs/Dr_Shirish_Madhav_Hastak.png', designation: '2010 - 2011', type: "0" },
              { name : 'Dr. MAN MOHAN MEHADIRATTA', photo: 'assets/imgs/committee/Dr. MAN MOHAN MEHADIRATTA.png', designation: '2011 - 2012', type: "0" },
              { name : 'Dr. M.R. SIVAKUMAR', photo: 'assets/imgs/committee/Dr. M.R. SIVAKUMAR.png', designation: '2012 - 2013', type: "0" },
              { name : 'Dr. M. V. PADMA SRIVASTAVA', photo: 'assets/imgs/committee/Dr. M.V. PADMA SRIVASTAVA.png', designation: '2013 - 2014', type: "0" },
              { name : 'Dr. NAGARAJA D', photo: 'assets/imgs/committee/Dr. NAGARAJA D.png', designation: '2014 - 2015', type: "0" },
              { name : 'Dr. DHEERAJ KHURANA', photo: 'assets/imgs/committee/Dr. DHEERAJ KHURANA.png', designation: '2015 - 2016', type: "0" }
						];
	public organizing = [
							{ name : 'Dr. Sudhir V Shah', photo: 'assets/imgs/committee/Dr. Sudhir V Shah.png', designation: 'PATRON', type: "0" },
              { name : 'Dr. Ajit Sowani', photo: 'assets/imgs/committee/Dr. Ajit Sowani.png', designation: 'PATRON', type: "0" },
              { name : 'Dr. Mayank Patel', photo: 'assets/imgs/committee/Dr. Mayank Patel.png', designation: 'ORGANIZING CHAIRMAN', type: "0" },
              { name : 'Dr. Arvind Sharma', photo: 'assets/imgs/committee/Dr. ARVIND SHARMA.png', designation: 'ORGANIZING SECRETARY', type: "0" },
              { name : 'Dr. Mukesh Sharma', photo: 'assets/imgs/committee/Dr. Mukesh Sharma.png', designation: 'JOINT ORGANIZING SECRETARY', type: "0" },
              { name : 'Dr. Anand Vaishnav', photo: 'assets/imgs/committee/Dr. Anand Vaishnav.png', designation: 'JOINT ORGANIZING SECRETARY', type: "0" },
              { name : 'Dr. Shalin Shah', photo: 'assets/imgs/committee/Dr. Shalin Shah.png', designation: 'TREASURER', type: "0" },
              { title : 'SCIENTIFIC ADVISORS', type: "1" },
              { title : 'Senior Scientific Advisor', type: "2" },
							{ name : 'Dr Anirudha Apte', location: 'Surat', type: "3" },
              { name : 'Dr. Bashir Ahmadi', location: 'Ahmedabad', type: "3" },
              { name : 'Dr. Bhavin Upadhyay', location: 'Vadodara', type: "3" },
              { name : 'Dr. Bipin Bhimani', location: 'Rajkot', type: "3" },
              { name : 'Dr. Bipin Patel', location: 'Ahmedabad', type: "3" },
              { name : 'Dr. Chetan Trivedi', location: 'Vadodara', type: "3" },
              { name : 'Dr. Dushyant Chauhan', location: 'Ahmedabad', type: "3" },
              { name : 'Dr. Gaurav Dave', location: 'Rajkot', type: "3" },
              { name : 'Dr. Jayanti Gurumukhani', location: 'Bhavnagar', type: "3" },
              { name : 'Dr. K R Buch', location: 'Vadodara', type: "3" },
              { name : 'Dr. Manoj Satyawani', location: 'Surat', type: "3" },
              { name : 'Dr. Parindra Desai', location: 'Ahmedabad', type: "3" },
              { name : 'Dr. Pranav Joshi', location: 'Ahmedabad', type: "3" },
              { name : 'Dr. Pranav Kharod', location: 'Ahmedabad', type: "3" },
              { name : 'Dr. R S Bhatia', location: 'Ahmedabad', type: "3" },
              { name : 'Dr. Rakesh Shah', location: 'Vadodara', type: "3" },
              { name : 'Dr. Ravindra Lodha', location: 'Ahmedabad', type: "3" },
              { name : 'Dr. Ruchir Divatia', location: 'Ahmedabad', type: "3" },
              { name : 'Dr. Siddharth Kaul', location: 'Rajkot', type: "3" },
              { name : 'Dr. Soaham Desai', location: 'Anand', type: "3" },
              { name : 'Dr. Sucheta Murgerker', location: 'Gandhinagar', type: "3" },
              { name : 'Dr. Suhas Panat', location: 'Ahmedabad', type: "3" },
              { title : 'Scientific and Education Committee', type: "2" },
              { name: 'Dr. Alpesh Pandya', location: 'Rajkot', type: "3" },
              { name: 'Dr. Amit Bhatt', location: 'Ahmedabad', type: "3" },
              { name: 'Dr. Amit Udani', location: 'Jamnagar', type: "3" },
              { name: 'Dr. Atul Tipnis', location: 'Bhavnagar', type: "3" },
              { name: 'Dr. Bhadresh Mangukiya', location: 'Surat', type: "3" },
              { name: 'Dr. Bhavesh Solanki', location: 'Ahmedabad', type: "3" },
              { name: 'Dr. Bhautik V Tilva', location: 'Ahmedabad', type: "3" },
              { name: 'Dr. Bhagyadhan Patel', location: 'Ahmedabad', type: "3" },
              { name: 'Dr. Bhumir Chauhan', location: 'Ahmedabad', type: "3" },
              { name: 'Dr. C B Rathore', location: 'Vadodara', type: "3" },
              { name: 'Dr. Devshi Visana', location: 'Ahmedabad', type: "3" },
              { name: 'Dr. Dharmesh N Patel', location: 'Ahmedabad', type: "3" },
              { name: 'Dr. Hetal Parikh', location: 'Ahmedabad', type: "3" },
              { name: 'Dr. Himanshu Patel', location: 'Anand', type: "3" },
              { name: 'Dr. Jigar Parekh', location: 'Rajkot', type: "3" },
              { name: 'Dr. Jignesh Prajapati', location: 'Ahmedabad', type: "3" },
              { name: 'Dr. Jitender Singh', location: 'Ahmedabad', type: "3" },
              { name: 'Dr Keyur Machhavada', location: 'Ahmedabad', type: "3" },
              { name: 'Dr Keyur Patel', location: 'Ahmedabad', type: "3" },
              { name: 'Dr Kishor Padsala', location: 'Surat', type: "3" },
              { name: 'Dr Krunal Padhiyar', location: 'Ahmedabad', type: "3" },
              { name: 'Dr Malav Gadani', location: 'Ahmedabad', type: "3" },
              { name: 'Dr Malay K Ghodasara', location: 'Rajkot', type: "3" },
              { name: 'Dr Nishit S Patel', location: 'Rajkot', type: "3" },
              { name: 'Dr Paresh Zanzmera', location: 'Surat', type: "3" },
              { name: 'Dr Parthiv Desai', location: 'Surat', type: "3" },
              { name: 'Dr Priyank Shah', location: 'Ahmedabad', type: "3" },
              { name: 'Dr Raisa Anand', location: 'Anand', type: "3" },
              { name: 'Dr Rakhil S Yadav', location: 'Ahmedabad', type: "3" },
              { name: 'Dr Roshan Mistry', location: 'Rajkot', type: "3" },
              { name: 'Dr Roshan Patel', location: 'Surat', type: "3" },
              { name: 'Dr Sagar A Betai', location: 'Ahmedabad', type: "3" },
              { name: 'Dr Samir Patel', location: 'Ahmedabad', type: "3" },
              { name: 'Dr Shailesh Darji', location: 'Ahmedabad', type: "3" },
              { name: 'Dr Shuchit Pandey', location: 'Ahmedabad', type: "3" },
              { name: 'Dr Swati Shah', location: 'Ahmedabad', type: "3" },
              { name: 'Dr Vishal Jogi', location: 'Ahmedabad', type: "3" },
              { name: 'Dr Yogesh Sharma', location: 'Vadodara', type: "3" }
						];

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad CommitteePage');
  	}

  	onSegmentSelected(val){
  		console.log(val);
  		this.committee = val;
  	}
}
