import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogOverviewExample } from './popup/dialog-overview-example';
import { DialogOverviewExampleDialog } from './popup/dialog-overview-example-dialog';
import { CdkTableModule } from '@angular/cdk/table';
import { RegisterdataFormComponent } from './register/useregisterFormComponent';
import { ChartModule } from 'angular-highcharts';
import { ChartsComponent } from './charts/charts.component';
import { RegisterCompoment } from './register/register.component';
import { VoterComponent } from './voter/voter.component';
import { VoteTakerComponent } from './voter/votetaker.component';
import { FECompoment } from './fe/fe.component';
/*import { SnippetComponent } from './snippet/snippet.component';
*/import { PdfreaderComponent } from './pdfreader/pdfreader.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { NgxPaginationModule } from 'ngx-pagination';
import { ApiserviceComponent } from './apiservice/apiservice.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component'; // <-- import the module
import { NgUploaderModule } from 'ngx-uploader';
import { Router, ActivatedRoute } from '@angular/router';
import { TableViewComponent } from './tableview/tableview.component';
import { ServiceCompoment } from './service/service-http.component';
import { FormdataComponent } from './formdata/formdata.component';
@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [ApiserviceComponent, FileuploaderComponent]
})
export class PlunkerMaterialModule { }

const appRoutes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'prefix' },
  { path: 'register', component: RegisterCompoment },
  { path: 'register-form', component: RegisterdataFormComponent },
  { path: 'fe', component: FECompoment },
/*  { path: 'snippet', component: SnippetComponent },
*/  { path: 'viewdetails', component: TableViewComponent },
  { path: 'votetaker', component: VoteTakerComponent },
  { path: 'popup', component: DialogOverviewExample, pathMatch: 'full' },
  { path: 'app-charts', component: ChartsComponent },
  { path: 'pdf', component: PdfreaderComponent },
  { path: 'form', component: FormdataComponent }

];
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, PdfViewerModule,
    HttpModule,
    Ng2SearchPipeModule, Ng2OrderModule, NgxPaginationModule,
    PlunkerMaterialModule, NgUploaderModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ChartModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent, RegisterCompoment, PdfreaderComponent, TableViewComponent,
    RegisterdataFormComponent, ChartsComponent, VoterComponent, ServiceCompoment,
    VoteTakerComponent, FECompoment, /*SnippetComponent,*/
    DialogOverviewExample, DialogOverviewExampleDialog, FormdataComponent
  ],
  providers: [ChartsComponent, ServiceCompoment],
  entryComponents: [DialogOverviewExampleDialog],
  bootstrap: [AppComponent, DialogOverviewExample]
})
export class AppModule { }
/*platformBrowserDynamic().bootstrapModule(AppModule);
*/