Feature: CRM Login Feature


# Without Examples keyword

#Scenario: CRM Login Scenario
#Given user is already on Login Page
#When title of Login Page is CRM
#Then user enters "Sergii" and "Test123"
#Then user clicks on Login button
#Then user is on Home Page
#Then close the browser

# With Examples keyword
Scenario Outline: CRM Login Scenario
Given user is already on Login Page
When title of Login Page is CRM
Then user enters "<username>" and "<password>"
Then user clicks on Login button
Then user is on Home Page
Then close the browser

Examples: 
	| username | password |
	| Sergii   | Test123  |
	| Tom      | test1    |


# Scenario: User create new contact
# Given user already on Home Page
# When user mouse mover on contact link
# Then user click on new contact link
# Then user enters firstname and lastname
# Then user click save button
# Then verify new contact created
