 @SendFailureToken
  Feature: Create a user with his profile
  As a user
  I want to create a user and validate it with failure token

  Scenario Outline: The user create his profile
    Given Get the api key
    When Post the key to create the user "<user>" and "<password>"
    And Post the user to login with "<user>" and "<password>"
    Then Check the user profile with "<token>"


    Examples:
      |  user             |      password    | token     |
      |  User1            |      222222      |  456789   |




