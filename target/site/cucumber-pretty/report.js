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
        "User1",
        "222222"
      ]
    },
    {
      "cells": [
        "User12a",
        "222222a"
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
  "name": "Post the key to create the user \"User12a\" and \"222222a\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User12a\" and \"222222a\"",
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
formatter.uri("src/test/resources/features/CreateUserFail.feature");
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
formatter.uri("src/test/resources/features/FailLogin.feature");
formatter.feature({
  "name": "Create a user with his profile",
  "description": "     As a user\n     I want a fail login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FailLogin"
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
  "name": "Post the user to login with \"\u003cuser2\u003e\" and \"\u003cpassword\u003e\" and check",
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
        "user2"
      ]
    },
    {
      "cells": [
        "User1",
        "222222",
        "user"
      ]
    },
    {
      "cells": [
        "User12a",
        "222222a",
        "User1"
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
      "name": "@FailLogin"
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
  "name": "Post the user to login with \"user\" and \"222222\" and check",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLoginWithAndAndCheck(String,String)"
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
      "name": "@FailLogin"
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
  "name": "Post the key to create the user \"User12a\" and \"222222a\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User1\" and \"222222a\" and check",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLoginWithAndAndCheck(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/SendFailureToken.feature");
formatter.feature({
  "name": "Create a user with his profile",
  "description": "  As a user\n  I want to create a user and validate it with failure token",
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