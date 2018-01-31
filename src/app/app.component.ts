import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Spinkit } from 'ng-http-loader/spinkits';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*  public spinkit = Spinkit;
*/ title = 'app';
  currRouter: any;
  nextRouter: any;
  /*  { path: 'register', component: RegisterCompoment },
  { path: 'register-form', component: RegisterdataFormComponent },
  { path: 'fe', component: FECompoment },
  { path: 'snippet', component: SnippetComponent },
  { path: 'votetaker', component: VoteTakerComponent },
  { path: 'popup', component: DialogOverviewExample },
  { path: 'app-charts', component: ChartsComponent },
  { path: 'pdf', component: PdfreaderComponent }*/
  imagePath: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.currRouter = window.location.pathname;
    console.log(this.currRouter);
    this.imagePath = 'assets/gradient_bg.jpg';


  }
 /* getroute() {
    console.log('get route');
    this.currRouter = window.location.pathname;
    console.log('get route ' + this.currRouter);
    if (this.currRouter == "/") {
      this.nextRouter = "register";
    } else if (this.currRouter === "/register") {
      this.nextRouter = "register-form";
    } else if (this.currRouter === "/register-form") {
      this.nextRouter = "fe";
    } else if (this.currRouter === "/fe") {
      this.nextRouter = "snippet";
    } else if (this.currRouter === "/snippet") {
      this.nextRouter = "viewdetails";
    }else if (this.currRouter === "/viewdetails") {
      this.nextRouter = "votetaker";
    }else if (this.currRouter === "/votetaker") {
      this.nextRouter = "popup";
    } else if (this.currRouter === "/popup") {
      this.nextRouter = "app-charts";
    } else if (this.currRouter === "/app-charts") {
      this.nextRouter = "pdf";
    } else if (this.currRouter === "/pdf") {
      this.nextRouter = "/";
    }
    return this.nextRouter;
  }


  getPreroute() {
    console.log('get Pre route');
    this.currRouter = window.location.pathname;
    console.log('get Pre route ' + this.currRouter);
    if (this.currRouter == "/") {
      this.nextRouter = "pdf";
    } else if (this.currRouter === "/register") {
      this.nextRouter = "/";
    } else if (this.currRouter === "/register-form") {
      this.nextRouter = "register";
    } else if (this.currRouter === "/fe") {
      this.nextRouter = "register-form";
    } else if (this.currRouter === "/snippet") {
      this.nextRouter = "fe";
    }else if (this.currRouter === "/viewdetails") {
      this.nextRouter = "snippet";
    }else if (this.currRouter === "/votetaker") {
      this.nextRouter = "viewdetails";
    } else if (this.currRouter === "/popup") {
      this.nextRouter = "votetaker";
    } else if (this.currRouter === "/app-charts") {
      this.nextRouter = "popup";
    } else if (this.currRouter === "/pdf") {
      this.nextRouter = "/";
    }
    return this.nextRouter;
  }
*/}
