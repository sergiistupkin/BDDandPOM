@FunctionalTest
Feature: Free CRM App Testing

@SmokeTest @RegressionTest @EndToEnd
Scenario: Login with correct username and password
Given This is a valid login test

@RegressionTest 
Scenario: Login with incorrect username and password
Given This is a invalid login test

@SmokeTest @EndToEnd
Scenario: Create a contact
Given This is a contact test

@SmokeTest @RegressionTest
Scenario: Create a deal
Given This is a deal test

@SmokeTest @EndToEnd
Scenario: Create a case
Given This is a task test

@SmokeTest
Scenario: Create a deal
Given This is a case test

@SmokeTest
Scenario: Verify left panel links
Given clicking on left panel link

@SmokeTest
Scenario: Search a deal
Given This is search a deal test

@SmokeTest @RegressionTest
Scenario: Search a call
Given This is search a call test

@SmokeTest @EndToEnd
Scenario: Search a contact
Given This is search a contact test

@SmokeTest @RegressionTest @EndToEnd
Scenario: Search a email
Given This is search a email test

@SmokeTest @RegressionTest @EndToEnd
Scenario: Search a forms
Given This is search a forms test

@EndToEnd
Scenario: validate report
Given This is report test

@EndToEnd
Scenario: App logout
Given This is logout test