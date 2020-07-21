# Lucky-Api
Code Challenge 

# Requirements
     -Maven
     -Cucumber [More information] (https://cucumber.io/)
     -Cucumber for java
     -Java
     -TestNG
     -Junit
     -Preferably use intellij
     -Chrome (for the report)
     
# Technical decisions

To develop I use Java language, as it is appropriate for this type of tests.
I choose the Cucumber tool to define the test steps as it provides a simple language to read and write.
In this structure it is easier to be able to run several tests that use the same steps but with different parameters. In this case the username and password 
Cucumber allows to run the tests in parallel, this possibility can be set in the "Runner" class ( Example : @DataProvider(parallel = true) ) .But in this case it is not possible due to the architecture of the project, but it is important for a regression tests.I understand that it is not a bug, but rather an architectural decision to test in this context.

In the code you will see all the possible combinations that can be given according to the specifications of the requirement.The tests run sequentially
If you want to add other tests with other input parameters (user, password), you can add them in the class CreateUser.feature and run

Examples:

    |user              | password   |
    | User1            | 12345t676  |
    | User2            | 12345t676  |  


# Project Structure
    ├── main
    
    |    ├── java
    |        ├── com
    |            ├── lucky                       
    |                   ├── configurations  
    |                               ├── ObjectMapperConfiguration: ObjectMapper provides functionality for reading and writing JSON
    |                            
    |    ├── java
    |        ├── com
    |            ├── lucky                       
    |                   ├── connectors  
    |                               ├── KeyConnector:Returns an API key. Key is always required for all other endpoints.
    |                               ├── SignUpConnector:Creates user given username and password.
    |                               ├── LoginConnector:Returns token and user profile given username and password.
    |                               ├── ProfileConnector:Returns token and user profile given a valid token.
    |   ├── java
    |        ├── com
    |            ├── lucky                       
    |                   ├── domain  
    |                               ├── KeyDTO 
    |                               ├── LoginDTO
    |                               ├── UserDTO
    |                            
    |
    ├── test 
    |    ├── Java
    |        ├── com
    |            ├── lucky
    |                ├── run
    |                   ├── Runner: Class where the "Run" is executed
    ├── test 
    |    ├── Java
    |        ├── com
    |            ├── lucky
    |                ├── steps
    |                   ├── StepsDefinitions: Class where each step of the test is defined
    |                   ├── Validations: Class that validates the requirements for the user format.
    ├── test 
    |    ├── resources
    |        ├── features
    |            ├── CreateUser.feature:nThe test performs all the steps so that the user can sign up, login and see his profile.
    |            ├── CreateUserFail.feature:This is the negative case, it validates that a user has their username correct with the requested characters.
    |  
    
    
# How to Run
To run the battery of tests enter the Runner and play class. If I had other tests to run, I can identify them with a tag in that same class. Now the tag @CreateUser and @ValidateUsersSignUp is set. 
If you want to run the tests separately you can do them by setting a single tag

# How to see in console
You will see the following information on the Intellij console
![image](/consoleInformation.jpg?raw=true)

# How to see the report
In the Intellij terminal run "mvn verify". Then check the folder "Target"> cucumber-html-reports> cucumber-html-reports> Open with a browser the file that begins with "report-feature_XXXXX.html". You will see a very complete report with the failures, successes and statistics of each test. In the following image you will see an example

![image](/report.jpg?raw=true)

Verify that the report contains the Fatures, Tags, Steps and Failures tabs. I invite you to check each one of them. It is very interesting the information it provides in the future you can take metrics from there

# Bugs (Ordered from highest to lowest importance)

- In the requirements it says "Username constrain -> first charachter is letter, contains at least one number and doesnt contain spaces". This case is tested in the @ValidateUsersSignUp test and fails. This is not being validated on the endpoint, so it is reported as a bug.

- The type of username and password is "number", but it turns out that if I only pass number to it in the body of the request the tests fails. But on the other hand there is a note that says: "Username constrain -> first charachter is letter, contains at least one number and doesnt contain spaces". 
So there is no match in the document.

 NOTE: The ok status code of [GET] / api / auth / key is always 201, not 200 as detailed in the document. It is not a bug, but it does not match the document. I recommend updating it. 

# Work breakdown structure
In this project you will find the document wbs.xlsx.In the WBS diagram tab you will see the project tasks and the WBS hours tab, the hour estimate of each task.

# Improvements
Things I wish to add (If I have more time) for a complete test suite
- Prepare the environment to run them in continuous integration (Example: Jenkins, CircleCi, etc)
- Add more Validations
- Separating the definition of the steps is good practice when the test is larger or there are multiple steps. Where they can be grouped by type of testing.  In this case the test to separate the code was very short.
- Add handler methods of Unirest, that can be chained to deal with success and failure.








    
