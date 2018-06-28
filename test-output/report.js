$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/Features/taggedhooks.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM App Test",
  "description": "",
  "id": "free-crm-app-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 487749,
  "status": "passed"
});
formatter.before({
  "duration": 265867,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "free crm create dealtest",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-dealtest",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on deal page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user fills the deals form",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "deal is created",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggHooksStepDefinition.user_is_on_deal_page()"
});
formatter.result({
  "duration": 303288736,
  "status": "passed"
});
formatter.match({
  "location": "TaggHooksStepDefinition.user_fills_the_deals_form()"
});
formatter.result({
  "duration": 414440,
  "status": "passed"
});
formatter.match({
  "location": "TaggHooksStepDefinition.deal_is_created()"
});
formatter.result({
  "duration": 631923,
  "status": "passed"
});
formatter.after({
  "duration": 383161,
  "status": "passed"
});
formatter.after({
  "duration": 397334,
  "status": "passed"
});
formatter.before({
  "duration": 759969,
  "status": "passed"
});
formatter.before({
  "duration": 581584,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Free crm create contact",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is present on contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user fills the contact form",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "contact is created",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggHooksStepDefinition.user_is_present_on_contact_page()"
});
formatter.result({
  "duration": 156393,
  "status": "passed"
});
formatter.match({
  "location": "TaggHooksStepDefinition.user_fills_the_contact_form()"
});
formatter.result({
  "duration": 347972,
  "status": "passed"
});
formatter.match({
  "location": "TaggHooksStepDefinition.contact_is_created()"
});
formatter.result({
  "duration": 376808,
  "status": "passed"
});
formatter.after({
  "duration": 394402,
  "status": "passed"
});
formatter.after({
  "duration": 199889,
  "status": "passed"
});
formatter.before({
  "duration": 616283,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Free crm create mail test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-mail-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on mail page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user fills the mail form",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "mail is created",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggHooksStepDefinition.user_is_on_mail_page()"
});
formatter.result({
  "duration": 365567,
  "status": "passed"
});
formatter.match({
  "location": "TaggHooksStepDefinition.user_fills_the_mail_form()"
});
formatter.result({
  "duration": 699855,
  "status": "passed"
});
formatter.match({
  "location": "TaggHooksStepDefinition.mail_is_created()"
});
formatter.result({
  "duration": 366056,
  "status": "passed"
});
formatter.after({
  "duration": 2865401,
  "status": "passed"
});
});