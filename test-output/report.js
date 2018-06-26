$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/Features/dealmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data map creation",
  "description": "",
  "id": "deal-data-map-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "deal-data-map-creation;free-crm-create-a-new-contact-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Login Page is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "Sergii",
        "Test123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commision"
      ],
      "line": 14
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "60",
        "20"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "70",
        "30"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal4",
        "4000",
        "80",
        "40"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepWithMap.user_already_on_login_page()"
});
formatter.result({
  "duration": 7007934467,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMap.title_of_Login_Page_is_CRM()"
});
formatter.result({
  "duration": 59285893,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMap.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 498210774,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMap.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 5787763863,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMap.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 186023314,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMap.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 352367096,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMap.user_enter_deal_details(DataTable)"
});
formatter.result({
  "duration": 4455597282,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMap.close_the_browser()"
});
formatter.result({
  "duration": 1153379834,
  "status": "passed"
});
});