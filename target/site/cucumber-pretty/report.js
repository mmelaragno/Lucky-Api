$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/CreateUserFail.feature");
formatter.feature({
  "name": "Create a user with his profile",
  "description": "  As a user\n  I want to create a user and validate it",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ValidateUsersSignUp"
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
  "name": "Post the key to create the user fail \"\u003cuser\u003e\" and \"\u003cpassword\u003e\" and validate",
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
        "password"
      ]
    },
    {
      "cells": [
        "User1 a",
        "222222"
      ]
    },
    {
      "cells": [
        "User",
        "222222"
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
      "name": "@ValidateUsersSignUp"
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
  "name": "Post the key to create the user fail \"User1 a\" and \"222222\" and validate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUserAndAndValidate(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create his profile",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidateUsersSignUp"
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
  "name": "Post the key to create the user fail \"User\" and \"222222\" and validate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUserAndAndValidate(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\n\tat org.junit.Assert.assertEquals(Assert.java:120)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.lucky.steps.Validations.validateUser(Validations.java:15)\n\tat com.lucky.steps.StepsDefinitions.postTheKeyToCreateTheUserAndAndValidate(StepsDefinitions.java:46)\n\tat ✽.Post the key to create the user fail \"User\" and \"222222\" and validate(src/test/resources/features/CreateUserFail.feature:8)\n",
  "status": "failed"
});
});