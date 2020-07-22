package com.lucky.steps;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.lucky.connectors.KeyConnector;
import com.lucky.connectors.LoginConnector;
import com.lucky.connectors.ProfileConnector;
import com.lucky.connectors.SignUpConnector;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

import static org.junit.Assert.assertEquals;


public class StepsDefinitions {
    static String key;
    static String token;

    @Given("Get the api key")
    public void getTheApiKey() throws IOException {
        key = KeyConnector.getKey();
    }

    @When("Post the key to create the user {string} and {string}")
    public void postTheKeyToCreateTheUser(String user, String pass) throws JsonProcessingException {
        Boolean signUpOk = SignUpConnector.postSignUp(key, user, pass);
        assertEquals(signUpOk, true);
    }

    @And("Post the user to login with {string} and {string}")
    public void postTheUserToLogin(String user, String pass) throws JsonProcessingException {
        token = LoginConnector.postLogin(key, user, pass);
    }

    @Then("Check the user profile")
    public void checkTheUserProfile() {
        Boolean userProfileOk = ProfileConnector.getUserProfile(key, token);
        assertEquals(userProfileOk, true);
    }

    @Then("Post the key to create the user fail {string} and {string} and validate")
    public void postTheKeyToCreateTheUserAndAndValidate(String user, String password) throws JsonProcessingException {
    Validations.validateUser(user, password, key);
    }


    @Then("Check the user profile with {string}")
    public void thenCheckTheUserProfileWith(String tokenFailure) {
        Boolean userProfileOk = ProfileConnector.getUserProfile(key, tokenFailure);
        assertEquals(userProfileOk, false);

    }

    @Then("Post the user to login with {string} and {string} and check")
    public void postTheUserToLoginWithAndAndCheck(String user, String pass) {
              LoginConnector.postLogin(key, user, pass);
    }
}
