$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/com/qa/features/crm.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM App Test",
  "description": "",
  "id": "free-crm-app-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate HomePage",
  "description": "",
  "id": "free-crm-app-test;validate-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user on LoginPage",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enters login and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "homepage is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate HomePage title",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "validate logged in username",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 8387176121,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_on_LoginPage()"
});
formatter.result({
  "duration": 49850,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_enters_login_and_password()"
});
formatter.result({
  "duration": 52782,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_click_login_button()"
});
formatter.result({
  "duration": 107520,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.homepage_is_displayed()"
});
formatter.result({
  "duration": 45452,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_HomePage_title()"
});
formatter.result({
  "duration": 41541,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_logged_in_username()"
});
formatter.result({
  "duration": 55715,
  "status": "passed"
});
});