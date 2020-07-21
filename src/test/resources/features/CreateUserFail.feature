 @ValidateUsersSignUp
  Feature: Create a user with his profile
  As a user
  I want to create a user and validate it

  Scenario Outline: The user create his profile
    Given Get the api key
    Then Post the key to create the user fail "<user>" and "<password>" and validate


    Examples:
      |  user                |      password    |
      |  User1 a             |      222222      |
      |  User                |      222222      |

    #The second user is incorrect because he does not have the required characters.
     # The user must have their first character with a letter, at least a number and must not contain spaces.
      # The test fails because this validation is not being done.



