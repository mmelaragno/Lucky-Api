@CreateUserWithInvalidBody
Feature: Create a user with his profile
     As a user
     I want to  send invalid body

  Scenario Outline: The user create his profile , user and password
    Given Get the api key
    When Post the key to create the user "<user>" and "<password>"
    Then Post the user to login with "<user2>" and "<password2>" other users invalid

    Examples:
    |  user              |      password    | user2              |      password2    |
    |  User1             |      222222      |                    |                   |
    |  User12a           |      222222a     |                    |                   |

