@LoginFailureKey
Feature: Create a user with his profile
     As a user
     I want a fail login with failure key

  Scenario Outline: The user create his profile , user and password
    Given Get the api key
    When Post the key to create the user "<user>" and "<password>"
    Then Post the user to login with "<key>" failure key  and "<user>" and "<password>"


    Examples:
    |  user              |      password    |      key               |
    |  User1             |      222222      |       12323456         |
    |  User12a           |      222222a     |      Use121234563r1    |

