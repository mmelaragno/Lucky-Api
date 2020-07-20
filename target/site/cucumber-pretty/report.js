$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/CreateUser.feature");
formatter.feature({
  "name": "Create a user with his profile",
  "description": "     As a user\n     I want to create an Api Key and attach it to each call",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateUser"
    }
  ]
});
formatter.scenarioOutline({
  "name": "The user create his profile , user and password",
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
  "name": "Check the user profile",
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
        "User",
        "222222"
      ]
    },
    {
      "cells": [
        "User1",
        "222222"
      ]
    },
    {
      "cells": [
        "User a",
        "222222"
      ]
    },
    {
      "cells": [
        "User1!",
        "222222"
      ]
    },
    {
      "cells": [
        "1!",
        "222222"
      ]
    },
    {
      "cells": [
        "",
        "222222"
      ]
    },
    {
      "cells": [
        "222222",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "The user create his profile , user and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateUser"
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
  "name": "Post the key to create the user \"User\" and \"222222\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User\" and \"222222\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create his profile , user and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateUser"
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
  "name": "Check the user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create his profile , user and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateUser"
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
  "name": "Post the key to create the user \"User a\" and \"222222\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cfalse\u003e but was:\u003ctrue\u003e\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\n\tat org.junit.Assert.assertEquals(Assert.java:120)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.lucky.steps.StepsDefinitions.postTheKeyToCreateTheUser(StepsDefinitions.java:30)\n\tat ✽.Post the key to create the user \"User a\" and \"222222\"(src/test/resources/features/CreateUser.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "Post the user to login with \"User a\" and \"222222\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check the user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The user create his profile , user and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateUser"
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
  "name": "Post the key to create the user \"User1!\" and \"222222\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User1!\" and \"222222\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create his profile , user and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateUser"
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
  "name": "Post the key to create the user \"1!\" and \"222222\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cfalse\u003e but was:\u003ctrue\u003e\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\n\tat org.junit.Assert.assertEquals(Assert.java:120)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.lucky.steps.StepsDefinitions.postTheKeyToCreateTheUser(StepsDefinitions.java:30)\n\tat ✽.Post the key to create the user \"1!\" and \"222222\"(src/test/resources/features/CreateUser.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "Post the user to login with \"1!\" and \"222222\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check the user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The user create his profile , user and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateUser"
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
  "name": "Post the key to create the user \"\" and \"222222\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cfalse\u003e but was:\u003ctrue\u003e\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\n\tat org.junit.Assert.assertEquals(Assert.java:120)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.lucky.steps.StepsDefinitions.postTheKeyToCreateTheUser(StepsDefinitions.java:30)\n\tat ✽.Post the key to create the user \"\" and \"222222\"(src/test/resources/features/CreateUser.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "Post the user to login with \"\" and \"222222\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check the user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The user create his profile , user and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateUser"
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
  "name": "Post the key to create the user \"222222\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cfalse\u003e but was:\u003ctrue\u003e\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\n\tat org.junit.Assert.assertEquals(Assert.java:120)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.lucky.steps.StepsDefinitions.postTheKeyToCreateTheUser(StepsDefinitions.java:30)\n\tat ✽.Post the key to create the user \"222222\" and \"\"(src/test/resources/features/CreateUser.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "Post the user to login with \"222222\" and \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check the user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The user create his profile , user and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateUser"
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
  "name": "Post the key to create the user \"\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cfalse\u003e but was:\u003ctrue\u003e\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\n\tat org.junit.Assert.assertEquals(Assert.java:120)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.lucky.steps.StepsDefinitions.postTheKeyToCreateTheUser(StepsDefinitions.java:30)\n\tat ✽.Post the key to create the user \"\" and \"\"(src/test/resources/features/CreateUser.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "Post the user to login with \"\" and \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check the user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "skipped"
});
});