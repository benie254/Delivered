# Delivered
A milk delivery system

# Delivered
#### An application that handles milk deliveries and sends SMS reports to the administration, generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4
### Author 
[Benson Langat](https://github.com/benie254)

### Description 
This is a simple delivery system, which enables users to record milk deliveries. Each recorded delivery generates an SMS message sent to the admin. The app also generates daily delivery reports posted on the website, including daily & monthly cumulative reports. Upon authentication, the admin can view all the above reports, delete any number of them, request prints/downloadable pdf files & request email reports. All the available functionalities include Creating, Reading, and Deleting (CRD) delivery reports.

#### Standard users can do the following:
* Add delivery reports

#### Admin users can do the following:
Upon authentication  | Technical features
------------------------ | ------------------------
Add delivery report(s)  | SMS service
View daily/all reports  | Loader
View cumulative reports  |  Notifier
Request email report(s)  |  Error handling
Print report(s)  |  Form validation
Delete report(s)  |  Email service

## Screenshot #1
<img src="https://res.cloudinary.com/benie/image/upload/v1687868902/Screenshot_from_2023-06-27_15-27-07_ebrapq.png">

## Screenshot #2
<img src="https://res.cloudinary.com/benie/image/upload/v1687868919/Screenshot_from_2023-06-27_15-28-02_psixbr.png">

## Live Page: [Delivered](https://deliver-ke.web.app/)

## Technologies Used

### Front-end development
* [Angular](https://angular.io/)- app structure, data collection, API requests, app management.
* CSS & [Bootstrap](https://getbootstrap.com/)- page styling & animations.
* [Firebase](https://firebase.com/)- deployment & hosting.
#### Packages
* [Angular Material](https://material.angular.io/)- UI design & themes.
* [NGX Pagination](https://www.npmjs.com/package/ngx-pagination/)- app pagination.
* [Notiflix](https://notiflix.github.io/)- loading & notifications.
### Back-end development
* [Click here for Back-end logic](https://github.com/benie254/Delivered-API/)

## Other Resources Used 

* SiteIcon made with [Favicon](https://favicon.io). 
* Other app icons from [FontAwesome](https://fontawesome.com/)
* Stylized fonts from [Google Fonts](https://fonts.google.com/)

## Behavior Driven Development (BDD)
**1. Landing Page**
   - OUTPUT: Navbar, Current Date, Expansion Panel, User Guide
   
**2. Home**
   - INPUT: Click: Navbar: 'Delivered' or 'Home'
   - OUTPUT: Home page content--similar to Landing Page
   
**3. Report Form:** 
   - INPUT:  Click : Expansion Panel : 'Record Milk Delivery'
   - OUTPUT: Delivery report form
   - INPUT: Form fields: 'Milk Amount', 'Price Per Ltr', 'Delivered By', 'Received From', 'Mobile No.', 'Location'
   - INPUT: 'Submit' button
   - OUTPUT: Form reset
   
**4. Authentication:**
   - INPUT:  Click : Navbar : 'Login'
   - OUTPUT: Login form
   - INPUT: User Input: Form fields: 'Email', 'Password'
   - INPUT: 'Submit' button
   - OUTPUT: Welcome notification
   - OUTPUT: Redirect to: Home Page 
   
**5. Reports:**
   - INPUT:  Click : Navbar : 'Reports'
   - OUTPUT: Today delivery reports (with add reports helper, if no report(s))
   - OUTPUT: Today delivery reports: Table data (with delete button(s))
   - OUTPUT: Print daily report(s)
   - OUTPUT: All delivery reports: Table data (with add reports helper, if no report(s))
   - OUTPUT: Daily cumulative report: Table data (with helper message if no daily report(s))
   - OUTPUT: Print/Email daily cumulative report
   - OUTPUT: Monthly cumulative report: Table data (with helper message if no monthly report(s))
   - OUTPUT: Print/Email monthly cumulative report

**6. Print Today Reports:**
   - INPUT:  Click : Table : Today delivery reports: 'Print'
   - OUTPUT: Redirect to 'Print today reports' page
   - OUTPUT: Today's date
   - OUTPUT: Table data: today delivery reports
   - OUTPUT: Print button
   - INPUT:  Click: Button: 'Print'
   - OUTPUT: Print window prompt

**7. Print Daily Cumulative Reports:**
   - INPUT:  Click : Table : Daily cumulative report: 'Print'
   - OUTPUT: Redirect to 'Print daily cumulative report' page
   - OUTPUT: Current date
   - OUTPUT: Table data: daily cumulative reports
   - OUTPUT: Print button
   - INPUT:  Click: Button: 'Print'
   - OUTPUT: Print window prompt

**8. Print Monthly Cumulative Reports:**
   - INPUT:  Click : Table : Monthly cumulative report: 'Print'
   - OUTPUT: Redirect to 'Print monthly cumulative report' page
   - OUTPUT: Current month & year
   - OUTPUT: Table data: monthly cumulative reports
   - OUTPUT: Print button
   - INPUT:  Click: Button: 'Print'
   - OUTPUT: Print window prompt

**9. Logout:**
   - INPUT:  Click : Navbar : 'Logout'
   - OUTPUT: Redirect to: Home Page 

## Known Bugs

No known bugs. Please report any issues or bugs! 

## Support and contact details

You can reach me through [mail](mailto:davinci.monalissa@gmail.com) or [LinkedIn](https://www.linkedin.com/in/benson-langat-fullstack-developer)

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## License

Copyright (c) 2023 **[Benson Langat](https://github.com/benie254)**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*

Copyright (c) 2023 **[Benson Langat](https://github.com/benie254)**

[Angular CLI](https://github.com/angular/angular-cli) version 14.2.4