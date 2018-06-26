$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Login Feature",
  "description": "",
  "id": "crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "# Without Examples keyword"
    },
    {
      "line": 6,
      "value": "#Scenario: CRM Login Scenario"
    },
    {
      "line": 7,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 8,
      "value": "#When title of Login Page is CRM"
    },
    {
      "line": 9,
      "value": "#Then user enters \"Sergii\" and \"Test123\""
    },
    {
      "line": 10,
      "value": "#Then user clicks on Login button"
    },
    {
      "line": 11,
      "value": "#Then user is on Home Page"
    },
    {
      "line": 12,
      "value": "#Then close the browser"
    },
    {
      "line": 14,
      "value": "# With Examples keyword"
    }
  ],
  "line": 15,
  "name": "CRM Login Scenario",
  "description": "",
  "id": "crm-login-feature;crm-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of Login Page is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "crm-login-feature;crm-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "crm-login-feature;crm-login-scenario;;1"
    },
    {
      "cells": [
        "Sergii",
        "Test123"
      ],
      "line": 25,
      "id": "crm-login-feature;crm-login-scenario;;2"
    },
    {
      "cells": [
        "Tom",
        "test1"
      ],
      "line": 26,
      "id": "crm-login-feature;crm-login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "CRM Login Scenario",
  "description": "",
  "id": "crm-login-feature;crm-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of Login Page is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"Sergii\" and \"Test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 6365761611,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_Login_Page_is_CRM()"
});
formatter.result({
  "duration": 20466870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sergii",
      "offset": 13
    },
    {
      "val": "Test123",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 504000222,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 4106480214,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 22559595,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 674310505,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "CRM Login Scenario",
  "description": "",
  "id": "crm-login-feature;crm-login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of Login Page is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"Tom\" and \"test1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 4904205292,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_Login_Page_is_CRM()"
});
formatter.result({
  "duration": 17498837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 13
    },
    {
      "val": "test1",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 520486419,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 926538607,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 49571974,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cCRMPRO[]\u003e but was:\u003cCRMPRO[ - CRM software for customer relationship management, sales, and support.]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.LoginStepDefinition.user_is_on_Home_Page(LoginStepDefinition.java:60)\r\n\tat ✽.Then user is on Home Page(./src/main/java/Features/login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});