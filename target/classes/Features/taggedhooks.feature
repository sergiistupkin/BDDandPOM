Feature: Free CRM App Test

@First
Scenario: free crm create dealtest
Given user is on deal page
When user fills the deals form
Then deal is created

@Second
Scenario: Free crm create contact
Given user is present on contact page
When user fills the contact form
Then contact is created

@Third
Scenario: Free crm create mail test
Given user is on mail page
When user fills the mail form
Then mail is created