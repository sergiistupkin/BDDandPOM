Feature: Deal data map creation 

Scenario: Free CRM Create a new contact scenario 

	Given user is already on Login Page 
	When title of Login Page is CRM 
	Then user enters username and password 
		| username | password |
		| Sergii   | Test123  |
	Then user clicks on Login button 
	Then user is on Home Page 
	Then user moves to new deal page 
	Then user enters deal details 
		| title    | amount | probability | commision |
		| test deal2 | 2000 | 60 | 20 |
		| test deal3 | 3000 | 70 | 30 |
		| test deal4 | 4000 | 80 | 40 |
	Then close the browser