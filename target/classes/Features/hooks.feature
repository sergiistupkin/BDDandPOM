Feature: Free CRM App Test

Scenario: free crm create dealtest
Given user is on deal page
When user fills the deals form
Then deal is created

Scenario: Free crm create contact
Given user is present on contact page
When user fills the contact form
Then contact is created

Scenario Outline: Free crm create mail test
Given user is on mail page
When user fills the mail form
Then mail is created
Examples: 
|mail1|
|mail2|
|mail3|