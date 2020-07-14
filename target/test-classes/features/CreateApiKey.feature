
Feature: Create an Api Key
    As a user
    I want to create an Api Key and attach it to each call

  @CreateApiKey
  Scenario Outline: The user create an api key
    Given Get the api key
    When Post the key to create the user "<user>" and "<password>"
    And Post the user to login with "<user>" and "<password>"
    Then Check the  user profile

    Examples:

    |user              | password   |
    | User1            | 12345t676  |
    | User2            | 12345t676  |





