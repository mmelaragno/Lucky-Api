# Lucky-Api
Code Challenge 

# Requirements
     -Maven
     -Cucumber
     -Cucumber for java
     -TestNG
     -Junit
     -Preferably use intellij
     -Chrome (for the report)
     
# Technical decisions
I choose the cucumber tool to define the test steps as it provides a simple language to read and write.
In this structure it is easier to be able to run several tests that use the same steps but with different parameters. In this case the username and password 
Cucumber allows to run the tests in parallel, this possibility can be set in the "Runner" class ( Example : @DataProvider(parallel = true) .But in this case it does not accept parallel request, so it would report it as a bug since many users may be creating their profile at the same time.

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
    |                ├── connectors
    |                   ├── mapiautomation                    
    |                       ├── connectors  
    |                               ├── KeyConnector:Returns an API key. Key is always required for all other endpoints.
    |                               ├── SignUpConnector:Creates user given username and password.
    |                               ├── LoginConnector:Returns token and user profile given username and password.
    |                               ├── ProfileConnector:Returns token and user profile given a valid token.
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
    ├── test 
    |    ├── resources
    |        ├── features
    |            ├── CreateUser.feature:Declaration of the test and its steps. There are also the examples
    |          
# How to Run

To run the battery of tests enter the Runner and play class. If I had other tests to run, I can identify them with a tag in that same class. Now the tag @CreateUser is set.

# How to see the report
In the Intellij terminal run "mvn verify". Then check the folder "Target"> cucumber-html-reports> cucumber-html-reports> Open with a browser the file that begins with "report-feature_XXXXX.html". You will see a very complete report with the failures, successes and statistics of each test. In the following image you will see an example

![image](/report.jpg?raw=true)

Verify that the report contains the Fatures, Tags, Steps and Failures tabs. I invite you to check each one of them. It is very interesting the information it provides in the future you can take metrics from there

# Bugs
 1- The same users can be created with the same passwords multiple times and it never throws an error for example: "The user already exists", I would have liked to verify it in a database.
 2-Does not accept multiple requests
 
 
# Improvements
Things I wish to add (If I have more time) for a complete test suite
- Prepare the environment to run them in continuous integration (Example: Jenkins, CircleCi, etc)
- Add more Validations
- Separating the definition of the steps is good practice when the test is larger or there are multiple steps. Where they can be grouped by type of testing.  In this case the test to separate the code was very short.





    
