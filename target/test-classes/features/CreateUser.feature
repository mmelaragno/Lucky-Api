@CreateUser
Feature: Create a user with his profile
     As a user
     I want to create an Api Key and attach it to each call

  Scenario Outline: The user create his profile , user and password
    Given Get the api key
    When Post the key to create the user "<user>" and "<password>"
    And Post the user to login with "<user>" and "<password>"
    Then Check the user profile

    Examples:

    |user              | password   |
    | User1            | 12345t676  |
    | User1            | 12345t676  |
    | User1            | 12345t676  |
    | User1            | 12345t676  |
    | User1            | 12345t676  |





