@CreateUser
Feature: Create a user with his profile
     As a user
     I want to create an Api Key and attach it to each call

  Scenario Outline: The user create his profile , user and password
    Given Get the api key
    When Post the key to create the user "<user>" and "<password>"
    And Post the user to login with "<user>" and "<password>"
    Then Check the  user profile

    Examples:

    |user              | password   |
    | User1            | 12345t676  |
    | User2            | 12345t676  |
    | User1a            | 12345t676  |
    | User2d            | 12345t676  |
    | User1 e           | 12345t676  |
    | User2s            | 12345t676  |
    | User1aa            | 12345t676  |
    | User2xx            | 12345t676  |
    | User145            | 12345t676  |
    | User2t34            | 12345t676  |
    | User1a**            | 12345t676  |
    | User2 234           | 12345t676  |
    | User112            | 12345t676  |
    | User2234            | 12345t676  |
    | User122222            | 12345t676  |
    | User2Hello            | 12345t676  |






