
import {Routes, RouterModule} from '@angular/router';


import {RegisterComponent} from './views/user/register/register.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {LoginComponent} from './views/user/login/login.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {PageListComponent} from './views/page/page-list/page-list.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {PageNewComponent} from './views/page/page-new/page-new.component';
import {PageEditComponent} from './views/page/page-edit/page-edit.component';
import {WidgetListComponent} from './views/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './views/widget/widget-edit/widget-edit.component';
import {WidgetHeaderComponent} from './views/widget/widget-edit/widget-header/widget-header.component';
import {WidgetImageComponent} from './views/widget/widget-edit/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WidgetTextComponent} from './views/widget/widget-edit/widget-text/widget-text.component';
import {WidgetHtmlComponent} from './views/widget/widget-edit/widget-html/widget-html.component';
import {AuthGuard} from './services/auth-gaurd.service';
import {FlickrImageSearchComponent} from './views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/website', component: WebsiteListComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/new', component: WebsiteNewComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid', component: WebsiteEditComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page', component: PageListComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/new', component: PageNewComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid', component: PageEditComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid/widget', component: WidgetListComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid/widget/header', component: WidgetHeaderComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid/widget/image', component: WidgetImageComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid/widget/youtube', component: WidgetYoutubeComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid/widget/text', component: WidgetTextComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid/widget/html', component: WidgetHtmlComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid/widget/:wgid/flickr', component: FlickrImageSearchComponent, canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(appRoutes);
