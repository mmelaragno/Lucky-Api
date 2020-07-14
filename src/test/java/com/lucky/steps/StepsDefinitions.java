package com.lucky.steps;

import com.lucky.connectors.KeyConnector;
import com.lucky.connectors.LoginConnector;
import com.lucky.connectors.ProfileConnector;
import com.lucky.connectors.SignUpConnector;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepsDefinitions {

     static String key;
     static String token;

    @Given("Get the api key")
    public void getTheApiKey() throws Exception {
      key =  KeyConnector.getKey();
    }

    @When("Post the key to create the user {string} and {string}")
    public void postTheKeyToCreateTheUser(String user, String pass) {
        SignUpConnector.postSignUp(key, user, pass);
    }

    @And("Post the user to login with {string} and {string}")
    public void postTheUserToLogin(String user, String pass) {
    token = LoginConnector.postLogin(key,user,pass);
    }

    @Then("Check the  user profile")
    public void checkTheUserProfile() {
        ProfileConnector.getUserProfile(key,token);

    }
}
