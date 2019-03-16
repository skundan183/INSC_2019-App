import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FacultyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-faculty',
  templateUrl: 'faculty.html',
})
export class FacultyPage {

	public faculty:any = "international";
	public international = [
						{ name : 'Dr. Andrei V. Alexandrov', photo: 'assets/imgs/faculty/Dr. Andrei V. Alexandrov.jpg', location: 'USA' },
						{ name : 'Dr. Andrew Demchuk', photo: 'assets/imgs/faculty/Dr. Andrew Demchuk.jpg', location: 'CANADA' },
						{ name : 'Dr. Anne W. Alexandrov', photo: 'assets/imgs/faculty/Dr. Anne W. Alexandrov.jpg', location: 'USA' },
						{ name : 'Dr. Bernard Chan', photo: 'assets/imgs/faculty/Dr. Bernard Chan.jpg', location: 'SINGAPORE' },
						{ name : 'Dr. Dileep R Yavagal', photo: 'assets/imgs/faculty/Dr. Dileep R Yavagal.jpg', location: 'USA' },
						{ name : 'Ms. Lily Wong', photo: 'assets/imgs/faculty/Ms. Lily Wong.jpg', location: 'SINGAPORE' },
						{ name : 'Dr. Maher Saqqur', photo: 'assets/imgs/faculty/Dr. Maher Saqqur.jpg', location: 'CANADA' },
						{ name : 'Dr. Peter Schellinger', photo: 'assets/imgs/faculty/Dr. Peter Schellinger.jpg', location: 'GERMANY' },
						{ name : 'Dr. Prakash Paliwal', photo: 'assets/imgs/faculty/Dr. Prakash Paliwal.jpg', location: 'SINGAPORE' },
						{ name : 'Dr. Raghu Vemuganti', photo: 'assets/imgs/faculty/Dr. Raghu Vemuganti.PNG', location: 'USA' },
						{ name : 'Dr. Simerpreet Bal', photo: 'assets/imgs/faculty/Dr. Simerpreet Bal.jpg', location: 'CANADA' },
						{ name : 'Dr. Vijay K Sharma', photo: 'assets/imgs/faculty/Dr. Vijay K Sharma.jpg', location: 'SINGAPORE' }
					];
	public national = [
					{ name : 'Dr. Abhishek Srivastava', photo: 'assets/imgs/faculty/Dr. Abhishek Srivastava.png', location: 'Mumbai' },
					{ name : 'Dr. Ajit Sowani', photo: 'assets/imgs/committee/Dr. Ajit Sowani.png', location: 'Ahmedabad' },
					{ name : 'Dr. Amit Batra', photo: 'assets/imgs/avatar.png', location: 'New Delhi' },
					{ name : 'Dr. Amit Kulkarni', photo: 'assets/imgs/avatar.png', location: 'Bengaluru' },
					{ name : 'Dr. Anand Alurkar', photo: 'assets/imgs/avatar.png', location: 'Pune' },
					{ name : 'Dr. Anand Vaishnav', photo: 'assets/imgs/committee/Dr. Anand Vaishnav.png', location: 'Vadodara' },
					{ name : 'Dr. Arvind Sharma', photo: 'assets/imgs/committee/Dr. ARVIND SHARMA.png', location: 'Ahmedabad' },
					{ name : 'Dr. Ashok Panagariya', photo: 'assets/imgs/avatar.png', location: 'Jaipur' },
					{ name : 'Dr. Ashok Uppal', photo: 'assets/imgs/committee/Dr. ASHOK UPPAL.png', location: 'Amritsar' },
					{ name : 'Dr. Ashwin Valsangkar', photo: 'assets/imgs/avatar.png', location: 'Solapur' },
					{ name : 'Dr. Atulabh Vajpayee', photo: 'assets/imgs/avatar.png', location: 'Udaipur' },
					{ name : 'Dr. B D Radotra', photo: 'assets/imgs/avatar.png', location: 'Chandigarh' },
					{ name : 'Dr. Biplab Das', photo: 'assets/imgs/avatar.png', location: 'Gurgaon' },
					{ name : 'Dr. Deepak Arjundas', photo: 'assets/imgs/committee/Dr. DEEPAK ARJUNDAS.png', location: 'Chennai' },
					{ name : 'Dr. Dhananjay Duberkar', photo: 'assets/imgs/avatar.png', location: 'Nashik' },
					{ name : 'Dr. Dheeraj Khurana', photo: 'assets/imgs/committee/Dr. DHEERAJ KHURANA.png', location: 'Chandigarh' },
					{ name : 'Dr. Dorcas Gandhi', photo: 'assets/imgs/avatar.png', location: 'Ludhiana' },
					{ name : 'Dr. G Arjundas', photo: 'assets/imgs/avatar.png', location: 'Chennai' },
					{ name : 'Dr. Gagandeep Singh', photo: 'assets/imgs/faculty/Dr. Gagandeep Singh.png', location: 'Ludhiana' },
					{ name : 'Dr. Gaurav Goel', photo: 'assets/imgs/avatar.png', location: 'Gurgaon' },
					{ name : 'Dr. Jayanta Roy', photo: 'assets/imgs/avatar.png', location: 'Kolkata' },
					{ name : 'Dr. Jeyaraj Durai Pandian', photo: 'assets/imgs/committee/Dr. JEYARAJ PANDIAN.png', location: 'Ludhiana' },
					{ name : 'Dr. K M Hassan', photo: 'assets/imgs/avatar.png', location: 'New Delhi' },
					{ name : 'Dr. K P Vinayan', photo: 'assets/imgs/avatar.png', location: 'Cochin' },
					{ name : 'Dr. Kalpesh Shah', photo: 'assets/imgs/avatar.png', location: 'Ahmedabad' },
					{ name : 'Dr. Kameshwar Prasad', photo: 'assets/imgs/avatar.png', location: 'New Delhi' },
					{ name : 'Dr. Keyur Patel', photo: 'assets/imgs/avatar.png', location: 'Ahmedabad' },
					{ name : 'Dr. Komal Kumar RN', photo: 'assets/imgs/avatar.png', location: 'Hyderabad' },
					{ name : 'Dr. Krishnan Vijayan', photo: 'assets/imgs/avatar.png', location: 'Coimbatore' },
					{ name : 'Dr. Lakshmi Narsimhan', photo: 'assets/imgs/faculty/Dr. Lakshmi Narsimhan.png', location: 'Chennai' },
					{ name : 'Dr. Lokesh B', photo: 'assets/imgs/avatar.png', location: 'Bengaluru' },
					{ name : 'Dr. M Pradeep', photo: 'assets/imgs/avatar.png', location: 'Coimbatore' },
					{ name : 'Dr. M Siva Kumar', photo: 'assets/imgs/committee/Dr. M.R. SIVAKUMAR.png', location: 'Chennai' },
					{ name : 'Dr. Mahesh Kate', photo: 'assets/imgs/avatar.png', location: 'Ludhiana' },
					{ name : 'Dr. Man Mohan Mehndiratta', photo: 'assets/imgs/committee/Dr. MAN MOHAN MEHADIRATTA.png', location: 'New Delhi' },
					{ name : 'Dr. Mansi Jagtap', photo: 'assets/imgs/avatar.png', location: 'Pune' },
					{ name : 'Dr. M V Padma', photo: 'assets/imgs/committee/Dr. M.V. PADMA SRIVASTAVA.png', location: 'New Delhi' },
					{ name : 'Dr. Meenakshi G Shankar', photo: 'assets/imgs/avatar.png', location: 'Erode' },
					{ name : 'Dr. Meenakshi Sharma', photo: 'assets/imgs/avatar.png', location: 'New Delhi' },
					{ name : 'Dr. Monika Singla', photo: 'assets/imgs/avatar.png', location: 'Chandigarh' },
					{ name : 'Dr. Mukesh Sharma', photo: 'assets/imgs/avatar.png', location: 'Ahmedabad' },
					{ name : 'Dr. Murlidhar Reddy', photo: 'assets/imgs/avatar.png', location: 'Hyderabad' },
					{ name : 'Dr. Nabin Sarkar', photo: 'assets/imgs/avatar.png', location: 'Kolkata' },
					{ name : 'Dr. Nasli Ichaporia', photo: 'assets/imgs/avatar.png', location: 'Pune' },
					{ name : 'Dr. Nirmal Surya', photo: 'assets/imgs/committee/Dr. NIRMAL SURYA.png', location: 'Mumbai' },
					{ name : 'Dr. Nivethitha Loganathan', photo: 'assets/imgs/avatar.png', location: 'New Delhi' },
					{ name : 'Dr. Pawan Ojha', photo: 'assets/imgs/avatar.png', location: 'Mumbai' },
					{ name : 'Dr. P N Sylaja', photo: 'assets/imgs/committee/Dr. P.N. SYLAJA.png', location: 'Trivandrum' },
					{ name : 'Dr. R Ritesh', photo: 'assets/imgs/avatar.png', location: 'Chennai' },
					{ name : 'Dr. P Vijaya', photo: 'assets/imgs/avatar.png', location: 'Guntur' },
					{ name : 'Dr. Rahul Kumar Singh', photo: 'assets/imgs/avatar.png', location: 'Patna' },
					{ name : 'Dr. Rajsrinivas Parthasarathy', photo: 'assets/imgs/avatar.png', location: 'Gurgaon' },
					{ name : 'Dr. Rakesh Lalla', photo: 'assets/imgs/avatar.png', location: 'Kalyan' },
					{ name : 'Dr. Ranjan Shetty', photo: 'assets/imgs/avatar.png', location: 'Bengaluru' },
					{ name : 'Dr. Rohit Bhatia', photo: 'assets/imgs/avatar.png', location: 'New Delhi' },
					{ name : 'Dr. S Kumarvelu', photo: 'assets/imgs/committee/Dr. S. KUMARAVELU.png', location: 'Guntur' },
					{ name : 'Dr. S P Gorthi', photo: 'assets/imgs/avatar.png', location: 'Manipal' },
					{ name : 'Dr. Sandip Modh', photo: 'assets/imgs/avatar.png', location: 'Ahmedabad' },
					{ name : 'Dr. Sandip Shah', photo: 'assets/imgs/avatar.png', location: 'Ahmedabad' },
					{ name : 'Dr. Saurabh Anand', photo: 'assets/imgs/avatar.png', location: 'Gurgaon' },
					{ name : 'Dr. Satish Lahoti', photo: 'assets/imgs/avatar.png', location: 'Nagpur' },
					{ name : 'Dr. SatishKumar V', photo: 'assets/imgs/avatar.png', location: 'Chennai' },
					{ name : 'Dr. Shirish Hastak', photo: 'assets/imgs/Dr_Shirish_Madhav_Hastak.png', location: 'Mumbai' },
					{ name : 'Dr. Shripal Shah', photo: 'assets/imgs/avatar.png', location: 'Nashik' },
					{ name : 'Dr. Soham Desai', photo: 'assets/imgs/avatar.png', location: 'Anand' },
					{ name : 'Dr. Subhash Kaul', photo: 'assets/imgs/committee/Dr. SUBHASH KAUL.png', location: 'Hyderabad' },
					{ name : 'Dr. Suresh kumar', photo: 'assets/imgs/avatar.png', location: 'Chennai' },
					{ name : 'Dr. Sudesh Prabhakar', photo: 'assets/imgs/avatar.png', location: 'Chandigarh.' },
					{ name : 'Dr. Sudhir Shah', photo: 'assets/imgs/committee/Dr. Sudhir V Shah.png', location: 'Ahmedabad' },
					{ name : 'Dr. Sujit Kumar', photo: 'assets/imgs/avatar.png', location: 'Bengaluru' },
					{ name : 'Dr. Sumit Singh', photo: 'assets/imgs/avatar.png', location: 'Gurgaon' },
					{ name : 'Dr. Sunil Nararayan', photo: 'assets/imgs/avatar.png', location: 'Puducherry' },
					{ name : 'Dr. Surya Narayan', photo: 'assets/imgs/avatar.png', location: 'Bengaluru' },
					{ name : 'Dr. Suvarna Alladi', photo: 'assets/imgs/avatar.png', location: 'Hyderabad' },
					{ name : 'Dr. Trilochan Srivastav', photo: 'assets/imgs/avatar.png', location: 'Jaipur' },
					{ name : 'Dr. U Meenakshi Sundaram', photo: 'assets/imgs/faculty/Dr. U Meenakshi Sundaram.png', location: 'Chennai' },
					{ name : 'Dr. V G Pradeep Kumar', photo: 'assets/imgs/avatar.png', location: 'Calicut' },
					{ name : 'Dr. Vikram Huded', photo: 'assets/imgs/avatar.png', location: 'Bengaluru' },
					{ name : 'Dr. Vinay Goyal', photo: 'assets/imgs/faculty/Dr. Vinay Goyal.png', location: 'New Delhi' },
					{ name : 'Dr. Vinit Suri', photo: 'assets/imgs/committee/Dr. VINIT SURI.png', location: 'New Delhi' },
					{ name : 'Dr. Vivek Lal', photo: 'assets/imgs/avatar.png', location: 'Chandigarh.' },
					{ name : 'Dr. Yogeshwar Kalkonde', photo: 'assets/imgs/avatar.png', location: 'Gadchiroli' }
				];

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad FacultyPage');
  	}

  	onSegmentSelected(val){
  		console.log(val);
  		this.faculty = val;
  	}
}
