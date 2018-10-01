import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { NewsComponent } from './news/news.component';
import { EventMgmtComponent } from './event/event.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MessageComponent } from './message/message.component';
import { NotificationComponent } from './notification/notification.component';
import { DesignComponent } from './design/design.component';
import { TermandconditnComponent } from './auth/termandconditn/termandconditn.component';
import { DesignDetailComponent } from './design/design-detail/design-detail.component';
import { DesignListComponent } from './design/design-list/design-list.component';
import { DesignerComponent } from './designer/designer.component';
import { DesignerProfileComponent } from './designer/designer-profile/designer-profile.component';
import { DesignerListComponent } from './designer/designer-list/designer-list.component';
import { DesignerEditProfileComponent } from './designer/designer-edit-profile/designer-edit-profile.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsAddComponent } from './blogs/blogs-add/blogs-add.component';
import { BlogsDetailComponent } from './blogs/blogs-detail/blogs-detail.component';
import { BlogsListComponent } from './blogs/blogs-list/blogs-list.component';
import { DesignEditComponent } from './design/design-edit/design-edit.component';
import { DesignAddComponent } from './design/design-add/design-add.component';
import { DesignFormComponent } from './design/design-form/design-form.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NewsSearchComponent } from './news/news-search/news-search.component';
import { EventSearchComponent } from './event/event-search/event-search.component';
import { BlogsSearchComponent } from './blogs/blogs-search/blogs-search.component';
import { PasswordMgmtComponent } from './password-mgmt/password-mgmt.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { NotificationDetailComponent } from './notification/notification-detail/notification-detail.component';
import { MessageListComponent } from './message/message-list/message-list.component';
import { MessageDetailComponent } from './message/message-detail/message-detail.component';
import { DesignSearchComponent } from './design/design-search/design-search.component';
import { DesignerSearchComponent } from './designer/designer-search/designer-search.component';
import { CommonSearchComponent } from './common-search/common-search.component';
import { SearchResultComponent } from './search-engine/search-result/search-result.component';

// Services
import { SigninService } from './auth/signin/signin.service';
import { SignupService } from './auth/signup/signup.service';
import { DesignerService } from './designer/designer.service'; 
import { DesignService } from './design/design.service';
import { EventService } from './event/event.service'; 
import { NewsService } from './news/news.service';
import { DataStorageService } from './shared/data-storage.service';

// Interceptor
import { AuthInterceptor } from './shared/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HowitworksComponent,
    NewsEditComponent,
    NewsComponent,
    EventMgmtComponent,
    EventEditComponent,
    AboutusComponent,
    MessageComponent,
    NotificationComponent,
    DesignComponent,
    TermandconditnComponent,
    DesignDetailComponent,
    DesignListComponent,
    DesignerComponent,
    DesignerProfileComponent,
    DesignerListComponent,
    DesignerEditProfileComponent,
    SignupComponent,
    EventListComponent,
    EventDetailComponent,
    NewsListComponent,
    NewsDetailComponent,
    SearchEngineComponent,
    BlogsComponent,
    BlogsAddComponent,
    BlogsDetailComponent,
    BlogsListComponent,
    DesignEditComponent,
    DesignAddComponent,
    DesignFormComponent,
    ContactusComponent,
    NewsSearchComponent,
    EventSearchComponent,
    BlogsSearchComponent,
    PasswordMgmtComponent,
    NotificationListComponent,
    NotificationDetailComponent,
    MessageListComponent,
    MessageDetailComponent,
    DesignSearchComponent,
    DesignerSearchComponent,
    CommonSearchComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ 
  	SigninService, 
  	SignupService,
  	DesignerService,
  	DesignService,
  	EventService,
  	NewsService,
  	DataStorageService,
  	{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
