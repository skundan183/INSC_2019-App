import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

/**
 * Generated class for the ScanQrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-scan-qr',
  templateUrl: 'scan-qr.html',
})
export class ScanQrPage {

	public userdata:any = [];
  	constructor(public navCtrl: NavController, public navParams: NavParams, public qrScanner: QRScanner, public contacts: Contacts) {
  		this.scanQR();
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad ScanQrPage');
  	}

  	scanQR(){
  		this.qrScanner.prepare().then((status: QRScannerStatus) => {
		    if (status.authorized) {
		       	let scanSub = this.qrScanner.scan().subscribe((text: string) => {
		         	console.log('Scanned something', text);
		         	this.qrScanner.hide(); 
		         	scanSub.unsubscribe();
		         	this.saveContact(text);
		       	});
		       	this.showCamera();
				this.qrScanner.resumePreview();
				this.qrScanner.show();
		    } 
		    else if (status.denied) {
		    	alert("camera permission was permanently denied.");
		    } 
		    else {
		    	alert("permission was denied, but not permanently.");
		    }
		})
		.catch((e: any) => console.log('Error is', e));
  	}

  	showCamera() {
	  (window.document.querySelector('ion-app') as HTMLElement).classList.add('transparentBody');
	}

	hideCamera() {
	  (window.document.querySelector('ion-app') as HTMLElement).classList.remove('transparentBody');
	}

	saveContact(string){
		try{
			var decodedString = atob(string);
			this.userdata = JSON.parse(decodedString);
			console.log(this.userdata);
			let contact: Contact = this.contacts.create();
			contact.name = new ContactName(null, this.userdata.lname, this.userdata.fname);
			contact.phoneNumbers = [new ContactField('mobile', this.userdata.mobile)];
			contact.addresses = [new ContactField('locality', 'Mumbai')];
			contact.save().then((contact) => {
	          	alert(this.userdata.fname+' '+this.userdata.lname+' saved in your contact list.');
	      	}, (error) => {
		      	alert(error);
		    });
		}
		catch(e){
			alert("Invalid QR Code.");
		}
	    this.navCtrl.pop();
	}
}
