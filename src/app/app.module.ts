import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

// user components
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { ProfileComponent } from './views/user/profile/profile.component';

// website components
import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
import { WebsiteNewComponent } from './views/website/website-new/website-new.component';

import {routing} from './app.routing';

// client side services
import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';
import {PageService} from './services/page.service.client';
import {WidgetService} from './services/widget.service.client';
import {PageListComponent} from './views/page/page-list/page-list.component';
import {PageNewComponent} from './views/page/page-new/page-new.component';
import {PageEditComponent} from './views/page/page-edit/page-edit.component';
import {WidgetListComponent} from './views/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
import {WidgetYoutubeComponent} from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WidgetImageComponent} from './views/widget/widget-edit/widget-image/widget-image.component';
import {WidgetEditComponent} from './views/widget/widget-edit/widget-edit.component';
import {WidgetHeaderComponent} from './views/widget/widget-edit/widget-header/widget-header.component';
import {HttpModule} from '@angular/http';

import {WidgetTextComponent} from './views/widget/widget-edit/widget-text/widget-text.component';
import {WidgetHtmlComponent} from './views/widget/widget-edit/widget-html/widget-html.component';
import {QuillEditorModule} from 'ngx-quill-editor/quillEditor.module';
import {SortableDirective} from './views/widget/widget-list/sortable.directive';
import { FlickrImageSearchComponent } from './views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {FlickrService} from './services/flickr.service.client';
import {SharedService} from './services/shared.service';
import {AuthGuard} from './services/auth-gaurd.service';
import {ToUpperCasePipe} from './pipes/to-upper-case.pipe';
import {OrderByPipe} from './views/widget/widget-list/order-by-pipe.pipe';
import {SafePipe} from './views/widget/widget-list/safe-pipe.pipe';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PageListComponent,
    PageNewComponent,
    PageEditComponent,
    WebsiteListComponent,
    WebsiteEditComponent,
    WebsiteNewComponent,
    WidgetListComponent,
    WidgetChooserComponent,
    WidgetYoutubeComponent,
    WidgetImageComponent,
    WidgetHeaderComponent,
    WidgetEditComponent,
    WidgetTextComponent,
    WidgetHtmlComponent,
    SortableDirective,
    OrderByPipe,
    SafePipe,
    FlickrImageSearchComponent,
    ToUpperCasePipe,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    QuillEditorModule
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService, AuthGuard, SharedService, FlickrService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
