# Delivered
A products delivery system

### Author ###
[Benson Langat](https://github.com/benie254)

### Description ###
This is a simple delivery system, which enables users to record product deliveries. Each recorded delivery generates a text message sent to the admin. The app also generates daily delivery reports posted on the website, including daily & monthly cumulative reports. Upon authentication, the admin can view all the above reports, delete any number of them, request prints/downloadable pdf files & request email reports. All the available functionalities include Creating, Reading, and Deleting (CRD) delivery reports.

# Standard users can do the following:
* Add delivery reports

# Admin users can do the following:
Upon authentication  | Technical features
------------------------ | ------------------------
Add delivery report(s)  | SMS service
View daily/all reports  | Loader
View cumulative reports  |  Notifier
Request email report(s)  |  Error handling
Print report(s)  |  Form validation
Delete report(s)  |  Email service

## Screenshot #1 ##
<img src="">

##

## Screenshot #2 ##
<img src="">

##

## Behavior Driven Development (BDD)
**1. Landing Page**
   - OUTPUT: Navbar, Current Date, Expansion Panel, User Guide
   
**2. Home**
   - INPUT: Click: Navbar: 'Delivered' or 'Home'
   - OUTPUT: Home page content--similar to Landing Page
   
**3. Report Form:** 
   - INPUT:  Click : Expansion Panel : 'Record Delivery'
   - OUTPUT: Delivery report form
   - INPUT: User Input: Form fields: 'Product', 'Amount', 'Price', 'Delivered By', 'Received From', 'Mobile No.', 'Location'
   - INPUT: 'Submit' button
   
**4. Admin Login:**
   - INPUT:  Click : Navbar : 'Login'
   - OUTPUT: Admin login form
   - INPUT: User Input: Form fields: 'Email', 'Password'
   - INPUT: 'Submit' button
   - OUTPUT: Welcome notification
   - OUTPUT: Redirect to: Home Page 
   
**5. Reports:**
   - INPUT:  Click : Navbar : 'Reports'
   - OUTPUT: Today delivery reports (with add reports helper, if no report(s))
   - OUTPUT: Today delivery reports: Table data (with delete button(s))
   - OUTPUT: Print daily report(s) button
   - OUTPUT: All delivery reports (with add reports helper, if no report(s))
   - OUTPUT: Daily cumulative report (with helper message if no daily report(s))
   - OUTPUT: Print/Email daily cumulative report
   - OUTPUT: Monthly cumulative report (with helper message if no monthly report(s))
   - OUTPUT: Print/Email monthly cumulative report
