$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/SendFailureToken.feature");
formatter.feature({
  "name": "Create a user with his profile",
  "description": "  As a user\n  I want to create a user and validate it",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SendFailureToken"
    }
  ]
});
formatter.scenarioOutline({
  "name": "The user create his profile",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Get the api key",
  "keyword": "Given "
});
formatter.step({
  "name": "Post the key to create the user \"\u003cuser\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Post the user to login with \"\u003cuser\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Check the user profile with \"\u003ctoken\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "password",
        "token"
      ]
    },
    {
      "cells": [
        "User1",
        "222222",
        "456789"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The user create his profile",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SendFailureToken"
    }
  ]
});
formatter.step({
  "name": "Get the api key",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.getTheApiKey()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the key to create the user \"User1\" and \"222222\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User1\" and \"222222\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the user profile with \"456789\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.thenCheckTheUserProfileWith(String)"
});
formatter.result({
  "status": "passed"
});
});