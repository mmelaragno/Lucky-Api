$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/CreateApikey.feature");
formatter.feature({
  "name": "Create an Api Key",
  "description": "     As a user\n     I want to create an Api Key and attach it to each call",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateApiKey"
    }
  ]
});
formatter.scenarioOutline({
  "name": "The user create an api key",
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
  "name": "Check the  user profile",
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
        "12345t676"
      ]
    },
    {
      "cells": [
        "User2",
        "12345t676"
      ]
    },
    {
      "cells": [
        "User1a",
        "12345t676"
      ]
    },
    {
      "cells": [
        "User2d",
        "12345t676"
      ]
    },
    {
      "cells": [
        "User1 e",
        "12345t676"
      ]
    },
    {
      "cells": [
        "User2s",
        "12345t676"
      ]
    },
    {
      "cells": [
        "User1aa",
        "12345t676"
      ]
    },
    {
      "cells": [
        "User2xx",
        "12345t676"
      ]
    },
    {
      "cells": [
        "User145",
        "12345t676"
      ]
    },
    {
      "cells": [
        "User2t34",
        "12345t676"
      ]
    },
    {
      "cells": [
        "User1a**",
        "12345t676"
      ]
    },
    {
      "cells": [
        "User2 234",
        "12345t676"
      ]
    },
    {
      "cells": [
        "User112",
        "12345t676"
      ]
    },
    {
      "cells": [
        "User2234",
        "12345t676"
      ]
    },
    {
      "cells": [
        "User122222",
        "12345t676"
      ]
    },
    {
      "cells": [
        "User2Hello",
        "12345t676"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User1\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User1\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User2\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User2\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User1a\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User1a\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User2d\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User2d\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User1 e\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c201\u003e\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\n\tat org.junit.Assert.assertEquals(Assert.java:647)\n\tat org.junit.Assert.assertEquals(Assert.java:633)\n\tat com.lucky.connectors.SignUpConnector.postSignUp(SignUpConnector.java:76)\n\tat com.lucky.steps.StepsDefinitions.postTheKeyToCreateTheUser(StepsDefinitions.java:25)\n\tat ✽.Post the key to create the user \"User1 e\" and \"12345t676\"(src/test/resources/features/CreateApikey.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "Post the user to login with \"User1 e\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User2s\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User2s\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User1aa\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User1aa\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User2xx\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User2xx\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User145\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User145\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User2t34\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User2t34\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User1a**\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User1a**\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User2 234\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c201\u003e\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\n\tat org.junit.Assert.assertEquals(Assert.java:647)\n\tat org.junit.Assert.assertEquals(Assert.java:633)\n\tat com.lucky.connectors.SignUpConnector.postSignUp(SignUpConnector.java:76)\n\tat com.lucky.steps.StepsDefinitions.postTheKeyToCreateTheUser(StepsDefinitions.java:25)\n\tat ✽.Post the key to create the user \"User2 234\" and \"12345t676\"(src/test/resources/features/CreateApikey.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "Post the user to login with \"User2 234\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User112\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User112\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User2234\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User2234\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User122222\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User122222\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user create an api key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateApiKey"
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
  "name": "Post the key to create the user \"User2Hello\" and \"12345t676\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.postTheKeyToCreateTheUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post the user to login with \"User2Hello\" and \"12345t676\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.postTheUserToLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the  user profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.checkTheUserProfile()"
});
formatter.result({
  "status": "passed"
});
});