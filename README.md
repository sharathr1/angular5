# AngularPro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).....

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#Interpollation vs Property Binding 
https://www.codementor.io/adekunleoyaniyi/interpolation-vs-property-binding-in-angular2-eu1tzbyn4

   template: <div>
                    <h1>{{citedExample}}</h1>
                    <img src='{{imagePath}}'/>
                </div>
selector: 'rio-counter',
            <div>
                    <h1 [innerHtml]=’citedExample’></h1>
                    <img [src]='imagePath'/>
            </div>
### External Lib:
npm i --save angular-highcharts highcharts

npm i --save-dev @types/highcharts

npm install ng2-pdf-viewer --save

npm install --save @angular/material @angular/cdk

npm install bootstrap --save

npm install typings --global

npm i ng2-search-filter --save

npm install ngx-uploader --save

# npm install --save angular-localstorage
#npm install @nguniversal/module-map-ngfactory-loader --save
#npm install @nguniversal/express-engine --save



fib = function(numMax){
    for(var fibArray = [0,1], i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        fibArray.push(x);
    }
    console.log(fibArray);
}

fib(10)
<select [(ngModel)]="selectedDay" >
  <option
  *ngFor='let day of days; let i = index'
  [attr.data-index]="i"
  [ngValue]="i">
    {{ day.today }}
  </option>
</select>
<br><br>
<h2>{{ days[selectedDay].msg }}</h2>