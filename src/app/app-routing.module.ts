import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TermandconditnComponent } from './auth/termandconditn/termandconditn.component';
import { DesignerComponent } from './designer/designer.component';
import { MessageListComponent } from './message/message-list/message-list.component';

import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { PasswordMgmtComponent } from './password-mgmt/password-mgmt.component';
import { NewsListComponent } from './news/news-list/news-list.component'; 
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { DesignDetailComponent } from './design/design-detail/design-detail.component';
import { DesignListComponent } from './design/design-list/design-list.component';
import { DesignAddComponent } from './design/design-add/design-add.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { DesignerProfileComponent } from './designer/designer-profile/designer-profile.component'; 
import { SearchResultComponent } from './search-engine/search-result/search-result.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutUs', component: AboutusComponent },
  { path: 'contactUs', component: ContactusComponent },
  { path: 'howItsWork', component: HowitworksComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'termCondition', component: TermandconditnComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'designer/:designerId', component: DesignerComponent },
  { path: 'notifications', component: NotificationListComponent },
  { path: 'messages', component: MessageListComponent },
  { path: 'pwd-mgmt', component: PasswordMgmtComponent },
  { path: 'news/:newsId', component: NewsDetailComponent },
  { path: 'design/:selectedDesign', component: DesignDetailComponent },
  { path: 'addDesign', component: DesignAddComponent },
  { path: 'showDesigns', component: DesignListComponent },
  { path: 'event/:eventId', component: EventDetailComponent },
  { path: 'addEvent', component: EventEditComponent },
  { path: 'showAllEvents', component: EventListComponent },
  { path: 'editEvent/:eventId', component: EventEditComponent },
  { path: 'designer-profile/:designerId/:viewProfile', component: DesignerProfileComponent },
  { path: 'showAllNews', component: NewsListComponent },
  { path: 'editNews/:newsId', component:  NewsEditComponent },
  { path: 'searchAll/:searchTxt', component: SearchResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
