Feature('New_Free_User');

Scenario('TC1_New_Signup', ({ I }) => {
 I.amOnPage ('https://www.usconcealedcarry.com/'); // --> site url
 I.forceClick ('Log In'); // Select Login 
 I.click ('//*[@id="signUpTodayButton"]'); // --> XPATH// Select Sign Up Today
 I.fillField ('First Name', 'Shawn'); // Enter In First Name Text Field
 I.fillField ('Last Name', 'Monte'); // Enter In Last Name Text Field
 I.fillField ('Email', 'smonte121@gmail.com'); // Enter In Email Text Field
 I.fillField ('Password', 'Alexander121!!'); // Enter In Password Text Field
 I.fillField ('Password Confirmation', 'Alexander121!!'); // Enter In Confirmation Of Password Text Field
 I.click ('#myAccountButton') //--> CSS// Select My Account Button
 I.click ('//button[@id="Lets Get Started"]'); // --> XPATH// Select Lets Get Started Button On Popup Dialouge
 I.click ('//button[@id="nav-link_account-dropdown"]') // --> XPATH// Navigate To Account Details Dropdown
 I.click ('//button[@id="passwordEdit"]'); // --> XPATH // Select Edit Password
 I.fillField ('New Password','Alexander122!!') // Enter New Password Text Field
 I.fillField ('Confirm New Password','Alexander122!!'); // Select Confirm New Password Text Field
 I.click ('//button[@id="passwordSave"]'); // --> XPATH //Select Update Button
 I.click ('//button[@id="nav-link_account-dropdown"]'); // --> XPATH// Navigate To Account Details
 I.click ('//a[@id="nav-link_account-dropdown_log-out"]'); // --> XPATH// Select Logout From Drop Down
 I.wait (1);
 }) .tag('./qa').tag('@SDET');

Scenario('TC2_New_Passwrd_login', ({ I }) => {
 I.amOnPage ('https://www.usconcealedcarry.com/'); // --> site url
 I.forceClick ('Log In'); // Select Login 
 I.fillField ('Email', 'smonte121@gmail.com'); // Enter In Email Text Field
 I.click ('//button[@id="continueButton"]');// --> XPATH// Select Continue
 I.fillField ('Password', 'Alexander122!!'), //Enter In Email Text Field
 I.click ('//button[@id="signInSignInButton"]')// --> XPATH// Select Continue Button
 I.wait (3);
 }) .tag('./qa').tag('@SDET');

Scenario('TC3_Navigate_Dashboard', ({ I }) => {
 I.amOnPage ('https://www.usconcealedcarry.com/'); // --> site url
 I.forceClick ('Log In'); // Select Login 
 I.fillField ('Email', 'nmonte77@gmail.com'); // Enter In Email
 I.click ('//button[@id="continueButton"]');// --> XPATH// Select Continue
 I.fillField ('Password', 'Alexander122!!'), //Enter In Email
 I.click ('//button[@id="signInSignInButton"]')// --> XPATH// Select Continue
 I.wait (2); // Browser Load Time
 I.click ('#nav-link_account-dropdown'); // --> CSS// Navigate To Account Details
 I.click ('#nav-link_account-dropdown_account-details'); // --> CSS// Navigate To Account Details
 I.wait (3); // Browser Load Time
 I.see ("Contact & Login Information"); // Validate Contact & Login Page
 I.wait (3);
 I.forceClick ('Train'); // Select Train Link Located In Dashboard
 I.wait (3); // Browser Load Time
 I.forceClick ('Online Video Tutorials'); // Select Online Video Tutorials 
 I.wait (3);
 }) .tag('./qa').tag('@SDET');

 Scenario('TC4_Search_7_Reasons', ({ I }) => {
   I.amOnPage ('https://www.usconcealedcarry.com/'); // --> site url
   I.forceClick ('Log In'); // Select Login 
   I.fillField ('Email', 'nmonte77@gmail.com'); // Enter In Email
   I.click ('//button[@id="continueButton"]');// --> XPATH// Select Continue
   I.fillField ('Password', 'Alexander122!!'), //Enter In Email
   I.click ('//button[@id="signInSignInButton"]')// --> XPATH// Select Continue
   I.wait (3); // Browser Load Time
   I.fillField ('#uscca-header__search-field', '7 Reasons to Join'); //Enter In Search Text
   I.wait (1);// User Interaction
   I.pressKey ('Enter');// Select Enter On Keyboard
   I.click ('//h2[contains(text(),"7 Reasons Why Responsible Gun Owners Are Joining t")]');// --> XPATH// Select Link
   I.wait (3);
    }) .tag('./qa').tag('@SDET');

Scenario('TC5_Neg_Input_Fields_Req', ({ I }) => {
 I.amOnPage ('https://www.usconcealedcarry.com/'); // --> site url
 I.forceClick ('Log In');
 I.click ('//*[@id="signUpTodayButton"]'); // --> XPATH
 I.fillField ('First Name', ''); // No First Name Entered
 I.pressKey ('Tab'); // User Interaction
 I.wait (1);
 I.see ("First name is required"); // Error Text Validation

 I.fillField ('Last Name', ''); // No Last Name Entered
 I.pressKey ('Tab'); // User Interaction
 I.wait (1);
 I.see ("Last name is required"); // Error Text Validation

 I.fillField ('Email', ''); // No Email Entered
 I.pressKey ('Tab'); // User Interaction
 I.wait (1);
 I.see ("Email is required"); // Error Text Validation

 I.fillField ('Password', ''); // No Password Entered
 I.pressKey ('Tab'); // User Interaction
 I.wait (1);
 I.see ("Password is required"); // Error Text Validation

 I.fillField ('Password Confirmation', ''); // No Password Entered
 I.pressKey ('Tab'); // User Interaction
 I.wait (1);
 I.see ("Password confirmation is required"); // Error Text Validation 
 I.pressKey ('Tab'); // User Interaction
 I.wait (5);
 }) .tag('./qa').tag('@SDET');

 Scenario('TC5_Neg_Input_Required_Email_Characters', ({ I }) => {
 I.amOnPage ('https://www.usconcealedcarry.com/'); // --> site url
 I.forceClick ('Log In');
 I.click ('//*[@id="signUpTodayButton"]'); // --> XPATH
 I.fillField ('First Name', 'Test'); // First Name Entered
 I.pressKey ('Tab'); // User Interaction
 I.wait (1);

 I.fillField ('Last Name', 'User'); // Last Name Entered
 I.pressKey ('Tab'); // User Interaction
 I.wait (1);
 
 I.fillField ('Email', 'TestUsr@nomail.com'); // Email Entered
 I.pressKey ('Tab'); // User Interaction
 I.wait (1);

 I.fillField ('Password', 'test'); // Password entered does not meet min req
 I.pressKey ('Tab'); // User Interaction
 I.see ('Password is too short. Need at least 8 characters.'); //Error Text Validation
 I.wait (5);
    }) .tag('./qa').tag('@SDET');
