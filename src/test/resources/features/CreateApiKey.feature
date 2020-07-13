
Feature: Create an Api Key
    As a user
    I want to create an Api Key and attach it to each call

  @CreateApiKey
  Scenario Outline: The user create an api key
    Given get the api key
    When post the key to create the user "<user>" and "<password>"
    And post the user to login with "<user>" and "<password>"
    Then check the  user profile

    Examples:

    |user              | password   |
    | User1            | 12345t676  |
    | User2            | 12345t676  |





