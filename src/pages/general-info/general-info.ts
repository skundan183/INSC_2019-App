import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { File } from '@ionic-native/file';

/**
 * Generated class for the GeneralInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-general-info',
  templateUrl: 'general-info.html',
})
export class GeneralInfoPage {

    public info_type = "venue";
    public venue_images = [
                        {src: "assets/imgs/venue/venue1.png"},
                        {src: "assets/imgs/venue/venue2.png"},
                        {src: "assets/imgs/venue/venue3.png"},
                        {src: "assets/imgs/venue/venue4.png"},
                        {src: "assets/imgs/venue/venue5.png"},
                        {src: "assets/imgs/venue/venue6.png"}
                      ]; 
    public accomodation = [
                        {title: "CONFERENCE HOTEL", type: "1" },
                        {title: "GRAND O7 (FORUM)", photo: "assets/imgs/Grand O7.png", desc: "Club O7- Club & Convention, Near Bopal 444, Off S.P. Ring Road, Shela, Ahmedabad, Gujarat 380058, India.", type: "0" },
                        {title: "OTHER HOTELS", type: "1" },
                        {title: "CROWNE PLAZA", photo: "assets/imgs/accom/Crowne Plaza.png", desc: "Sarkhej – Gandhinagar Hwy, Near Shapath V, Prahlad Nagar, Ahmedabad, Gujarat 380015, India.", type: "0" },
                        {title: "MARRIOTT", photo: "assets/imgs/Marriott.png", desc: "Ramdev Nagar Cross Road, Satellite Road, Ahmedabad, Gujarat 380015, India.", type: "0" },
                        {title: "NOVOTEL", photo: "assets/imgs/accom/Novotel.png", desc: "Iscon Cross Road, Next to Wide Angle Cinema, S G Highway, Ahmedabad, Gujarat 380015, India.", type: "0" },
                        {title: "GORMOH", photo: "assets/imgs/accom/Gormoh.png", desc: "Swagath Plaza I, Opp, Ambli – Bopal Rd, Ambli, Ahmedabad, Gujarat 380058, India.", type: "0" },
                        {title: "ROYAL PALACE", photo: "assets/imgs/accom/Royal Palace.png", desc: "Near Shantipura Circle, S.P. Ring Road, Sarkhej – Sanand Road, Shantipura, Ahmedabad, Gujarat 382210, India.", type: "0" },
                        {title: "HOTEL SKYLAND", photo: "assets/imgs/accom/Hotel Skyland.png", desc: "5th floor bhavya shopping complex, opp. government tube well, Bopal, Ahmedabad, Gujarat 380058", type: "0" }              
                      ];
                    
    public local_attractions = [
                          {title: "SIDHI SAIYAD JALI", url: "https://goo.gl/maps/p1kVUipeLAM2", photo: "assets/imgs/attractions/SIDHI SAIYAD JALI.jpg", desc: "Sidhi Saiyad Jali built in 1572 AD, is one of the most famous mosques of Ahmedabad, Gujarat, India. The mosque is entirely arcuated and is famous for beautifully carved ten stone latticework windows (jalis) and has become the unofficial symbol of the city of Ahmedabad." },
                          {title: "AKSHARDHAM", url: "https://goo.gl/maps/CU16X27f7N82", photo: "assets/imgs/attractions/AKSHARDHAM.jpg", desc: "Akshardham is a majestic Hindu temple in Gandhinagar, built entirely of pink sandstones and is believed to be the immortal abode of God or the abode of Swaminarayan. Distance from Ahmedabad: 30 KM" },
                          {title: "GANDHI ASHRAM", url: "https://goo.gl/maps/C8e3atH6tBm", photo: "assets/imgs/attractions/GANDHI ASHRAM.jpg", desc: "Gandhi Ashram is established by Mahatma Gandhi ona quiet stretch of the Sabarmati river in 1917. During the lifetime of Mahatma Gandhi it was known as Satyagraha Ashram and was the center of India’s freedom movement." },
                          {title: "ADALAJ VAV", url: "https://goo.gl/maps/Kh7MjgeaWF72", photo: "assets/imgs/attractions/ADALAJ VAV.jpg", desc: "Adalaj Vav is counted amongst the finest architectural structures of Gujarat. The unique feature of Adalaj Vav is that apart from conserving water for drinking purposes, it also serves as acooling chamber in the hot summer months." },
                          {title: "SCIENCE CITY", url: "https://goo.gl/maps/Gcft65GdK142", photo: "assets/imgs/attractions/SCIENCE CITY.jpg", desc: "Science City located at the Sarkhej Gandhinagar Highway, Science City is an ambitious initiative of the government of Gujarat to trigger an inquiry of science in the mind of a common citizen with the aid of entertainment and experiential knowledge." },
                          {title: "SUN TEMPLE", url: "https://goo.gl/maps/MXV4ZA5r6UR2", photo: "assets/imgs/attractions/SUN TEMPLE.jpg", desc: "Sun Temple is a Hindu temple dedicated to the solar deity Surya located at Modhera village of Mehsana district, Gujarat, India. It is situated on the bank of the river Pushpavati. Distance from Ahmedabad: 98 Km" },
                          {title: "KANKARIA LAKE", url: "https://goo.gl/maps/87bkkNNsE8D2", photo: "assets/imgs/attractions/KANKARIA LAKE.jpg", desc: "Kankaria Lake, formerly known as Hauj-e-Qutb, is the second largest lake in Ahmedabad, Gujarat, India. It is located in the south-eastern part of the city, in the Maninagar area." },
                          {title: "JAMA MASJID", url: "https://goo.gl/maps/b7ekbW6WV8A2", photo: "assets/imgs/attractions/JAMA MASJID.jpg", desc: "Jama Masjid, also known as Jami or Jumma Mosque, is the most splendid mosque of Ahmedabad, built in 1424 during the reign of Ahmed Shah I." },
                          {title: "SABARMATI RIVERFRONT", url: "https://goo.gl/maps/Q8qQNqtn2pM2", photo: "assets/imgs/attractions/SABARMATI RIVERFRONT.jpg", desc: "Sabarmati river has been an integral part in the life of Ahmedabad since the time the city was founded in 1411 along the river banks. Besides being an important source of water, it provided a backdrop to cultural and recreational activities." }
                        ];
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

  	constructor(public navCtrl: NavController, public navParams: NavParams, public file: File, public inAppBrowser: InAppBrowser, public photoViewer: PhotoViewer) {
  	
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad GeneralInfoPage');
  	}

  	onSegmentSelected(val){
  		console.log(val);
  		this.info_type = val;
  	}

  	viewInMap(url){
      let target = "_blank";
      this.inAppBrowser.create(url,target,this.options);
  	}

    showFullPhoto(img){
      console.log(img);
      this.photoViewer.show(this.file.applicationDirectory+'www/'+img);
    }
}
