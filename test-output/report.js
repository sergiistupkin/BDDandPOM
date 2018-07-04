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
  "name": "user enters login and password and click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "homepage is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate HomePage title",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate logged in username",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 6710739169,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_on_LoginPage()"
});
formatter.result({
  "duration": 124348040,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_enters_login_and_password()"
});
formatter.result({
  "duration": 6342111179,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.homepage_is_displayed()"
});
formatter.result({
  "duration": 394604758,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_HomePage_title()"
});
formatter.result({
  "duration": 11549086,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_logged_in_username()"
});
formatter.result({
  "duration": 441931035,
  "status": "passed"
});
});