 @SendFailureKeyProfile
  Feature: Create a user with his profile
  As a user
  I want to create a user and validate it with failure key in profile

  Scenario Outline: The user create his profile
    Given Get the api key
    When Post the key to create the user "<user>" and "<password>"
    And Post the user to login with "<user>" and "<password>"
    Then Check the user profile with failure key "<key>"


    Examples:
      |  user             |      password    | key       |
      |  User1            |      222222      |  456789   |




