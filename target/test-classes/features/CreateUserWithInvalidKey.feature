@CreateUserWithInvalidKey
Feature: Create a user with his profile
  As a user
  I want to send invalid key

  Scenario Outline: The user create his profile , user and password
    Given Get the api key
    Then Post the key to create the user "<user>" and "<password>" with invalid "<key>"



    Examples:
      | user    | password | key    |
      | User1   | 222222   | 1234   |
      | User12a | 222222a  | 234567 |

