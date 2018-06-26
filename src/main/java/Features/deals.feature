Feature: Deal data creation

Scenario: Free CRM Create a new contact scenario

Given user is already on Login Page
When title of Login Page is CRM
Then user enters username and password
| Sergii | Test123 |
Then user clicks on Login button
Then user is on Home Page
Then user moves to new deal page
Then user enters deal details 
| test deal | 1000 | 50 | 10 |
Then close the browser