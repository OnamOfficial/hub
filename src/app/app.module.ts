import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { ClipboardModule } from 'ngx-clipboard';
import {
  MetaModule,
  MetaLoader,
  MetaStaticLoader,
  PageTitlePositioning
} from '@ngx-meta/core';
import { CookieModule } from 'ngx-cookie';
import { routing, appRoutingProviders } from './app.routing';

/* Material library */
import { MATERIAL_COMPATIBILITY_MODE, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatDialog, MatSnackBarModule, MatTabsModule, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';

/* Pipes */
import { TruncatePipe } from './shared/pipes/truncate.pipe';

/* Services */
import { ChartsService } from './shared/services/charts.service';
import { ReposService } from './shared/services/repos.service';
import { ConfigService } from './shared/services/config.service';
import { DialogsService } from './shared/services/dialogs.service';
import { SeoService } from './shared/services/seo.service';
import { AuthService } from './shared/services/auth.service';
import { RateService } from './shared/services/rate.service';
import { CommentsService } from './shared/services/comments.service';

/* Components */
import { AppComponent } from './app.component';
import { ChartIndexComponent } from './chart-index/chart-index.component';
import { ChartListComponent } from './chart-list/chart-list.component';
import { ChartItemComponent } from './chart-item/chart-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChartDetailsComponent } from './chart-details/chart-details.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ChartDetailsUsageComponent } from './chart-details/chart-details-usage/chart-details-usage.component';
import { ChartDetailsReadmeComponent } from './chart-details/chart-details-readme/chart-details-readme.component';
import { ChartDetailsCommentsComponent } from './chart-details/chart-details-comments/chart-details-comments.component';
import { PanelComponent } from './panel/panel.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FooterComponent } from './footer/footer.component';
import { ChartDetailsInfoComponent } from './chart-details/chart-details-info/chart-details-info.component';
import { ChartDetailsVersionsComponent } from './chart-details/chart-details-versions/chart-details-versions.component';
import { ChartsComponent } from './charts/charts.component';
import { LoaderComponent } from './loader/loader.component';
import { ConfirmDialog } from './confirm-dialog/confirm-dialog.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListFiltersComponent } from './list-filters/list-filters.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationItemComponent } from './pagination-item/pagination-item.component';

import 'hammerjs';

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' | ',
    applicationName: 'KubeApps Hub',
    defaults: {
      description: 'Discover & launch great Kubernetes-ready apps'
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    ChartIndexComponent,
    ChartListComponent,
    ChartItemComponent,
    PageNotFoundComponent,
    ChartDetailsComponent,
    HeaderBarComponent,
    ChartDetailsUsageComponent,
    ChartDetailsVersionsComponent,
    ChartDetailsReadmeComponent,
    PanelComponent,
    MainHeaderComponent,
    TruncatePipe,
    FooterComponent,
    ChartDetailsInfoComponent,
    ChartsComponent,
    LoaderComponent,
    ConfirmDialog,
    ListItemComponent,
    ListFiltersComponent,
    ChartDetailsCommentsComponent,
    TermsOfServiceComponent,
    PaginationComponent,
    PaginationItemComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    NoopAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    ClipboardModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: metaFactory
    }),
    CookieModule.forRoot()
  ],
  providers: [
    {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true},
    MatDialog,
    appRoutingProviders,
    ChartsService,
    ReposService,
    ConfigService,
    SeoService,
    DialogsService,
    AuthService,
    RateService,
    CommentsService,
  ],
  entryComponents: [
    ConfirmDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
