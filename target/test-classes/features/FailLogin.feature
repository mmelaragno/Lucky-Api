@FailLogin
Feature: Create a user with his profile
     As a user
     I want a fail login

  Scenario Outline: The user create his profile , user and password
    Given Get the api key
    When Post the key to create the user "<user>" and "<password>"
    Then Post the user to login with "<user2>" and "<password>" and check


    Examples:
    |  user              |      password    |      user2    |
    |  User1             |      222222      |       user    |
    |  User12a           |      222222a     |      User1      |

