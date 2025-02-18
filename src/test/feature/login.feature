Feature:LoginFunctionality

Background:
    Given Load the url
  Scenario Outline: Login with valid credentials
   
    Given  Enter valid username and password
    When Clicked on Login button
    Then User should be able to login successfully
Examples:
|username|password|
|'demoSalesManager'|'crmsfa'|
|'demoCSR'|'crmsfa'|