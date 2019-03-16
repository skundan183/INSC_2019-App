import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { HttpClientModule } from  '@angular/common/http';
import { AppAvailability } from '@ionic-native/app-availability';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';
import { OneSignal } from '@ionic-native/onesignal';
import { SocialSharing } from '@ionic-native/social-sharing';
import { DatePicker } from '@ionic-native/date-picker';
import { SQLite } from '@ionic-native/sqlite';
import { QRScanner } from '@ionic-native/qr-scanner';
import { Contacts } from '@ionic-native/contacts';
import { StreamingMedia } from '@ionic-native/streaming-media';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { CommitteePage } from '../pages/committee/committee';
import { FacultyPage } from '../pages/faculty/faculty';
import { RegistrationPage } from '../pages/registration/registration';
import { MyInscPage } from '../pages/my-insc/my-insc';
import { AbstractPage } from '../pages/abstract/abstract';
import { GeneralInfoPage } from '../pages/general-info/general-info';
import { ScientificProgrammePage } from '../pages/scientific-programme/scientific-programme';
import { AppSponsorPage } from '../pages/app-sponsor/app-sponsor';
import { MapPage } from '../pages/map/map';
import { SubmitAbstractPage } from '../pages/submit-abstract/submit-abstract';
import { OfflineRegistrationPage } from '../pages/offline-registration/offline-registration';
import { OnlineRegistrationPage } from '../pages/online-registration/online-registration';
import { SharePage } from '../pages/share/share';
import { SessionDetailsPage } from '../pages/session-details/session-details';
import { WorkshopPage } from '../pages/workshop/workshop';
import { SpOptionPage } from '../pages/sp-option/sp-option';
import { NursingPage } from '../pages/nursing/nursing';
import { WorkshopDetailsPage } from '../pages/workshop-details/workshop-details';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { MyqrPage } from '../pages/myqr/myqr';
import { VotingPage } from '../pages/voting/voting';
import { Voting1Page } from '../pages/voting1/voting1';
import { QuestionDetailsPage } from '../pages/question-details/question-details';
import { FeedbackPage } from '../pages/feedback/feedback';
import { ScanQrPage } from '../pages/scan-qr/scan-qr';
import { VideosPage } from '../pages/videos/videos';

import { RestProvider } from '../providers/rest/rest';
import { DatebaseProvider } from '../providers/datebase/datebase';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    CommitteePage,
    FacultyPage,
    RegistrationPage,
    MyInscPage,
    AbstractPage,
    GeneralInfoPage,
    ScientificProgrammePage,
    AppSponsorPage,
    MapPage,
    SubmitAbstractPage,
    OfflineRegistrationPage,
    SharePage,
    OnlineRegistrationPage,
    SessionDetailsPage,
    WorkshopPage,
    SpOptionPage,
    WorkshopDetailsPage,
    NursingPage,
    LoginPage,
    ProfilePage,
    MyqrPage,
    VotingPage,
    Voting1Page,
    QuestionDetailsPage,
    FeedbackPage,
    ScanQrPage,
    VideosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    CommitteePage,
    FacultyPage,
    RegistrationPage,
    MyInscPage,
    AbstractPage,
    GeneralInfoPage,
    ScientificProgrammePage,
    AppSponsorPage,
    MapPage,
    SubmitAbstractPage,
    OfflineRegistrationPage,
    SharePage,
    OnlineRegistrationPage,
    SessionDetailsPage,
    WorkshopPage,
    SpOptionPage,
    WorkshopDetailsPage,
    NursingPage,
    LoginPage,
    ProfilePage,
    MyqrPage,
    VotingPage,
    Voting1Page,
    QuestionDetailsPage,
    FeedbackPage,
    ScanQrPage,
    VideosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PhotoViewer,
    InAppBrowser,
    AppAvailability,
    ImagePicker,
    Camera,
    File,
    OneSignal,
    SocialSharing,
    DatePicker,
    SQLite,
    QRScanner,
    Contacts,
    StreamingMedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    DatebaseProvider
  ]
})
export class AppModule {}
