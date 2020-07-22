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
        String status = SignUpConnector.postSignUp(key, user, pass);
        assertEquals(Integer.parseInt(status), 201);
    }

    @And("Post the user to login with {string} and {string}")
    public void postTheUserToLogin(String user, String pass) {
        token = LoginConnector.postLogin(key, user, pass);
    }

    @Then("Check the user profile")
    public void checkTheUserProfile() {
        String status = ProfileConnector.getUserProfile(key, token);
        assertEquals(Integer.parseInt(status), 200);
    }

    @Then("Post the key to create the user fail {string} and {string} and validate")
    public void postTheKeyToCreateTheUserAndAndValidate(String user, String password) throws JsonProcessingException {
        Validations.validateUser(user, password, key);
    }


    @Then("Check the user profile with {string}")
    public void thenCheckTheUserProfileWith(String tokenFailure) {
        String status = ProfileConnector.getUserProfile(key, tokenFailure);
        assertEquals(Integer.parseInt(status), 200);

    }

    @Then("Post the user to login with {string} and {string} and check")
    public void postTheUserToLoginWithAndAndCheckFail(String user, String pass) {
        String status = LoginConnector.postLogin(key, user, pass);
        assertEquals(Integer.parseInt(status), 401);
    }

    @Then("Post the user to login with {string} and {string} fail")
    public void postTheUserToLoginWithAndFail(String user, String pass) {
        String status = LoginConnector.postLogin(key, user, pass);
        assertEquals(Integer.parseInt(status), 400);

    }

    @Then("Check the user profile with failure key {string}")
    public void checkTheUserProfileWithFailureKey(String key) {
        String status = ProfileConnector.getUserProfile(key, token);
        assertEquals(Integer.parseInt(status), 403);

    }

    @Then("Check the user profile with {string} fail")
    public void checkTheUserProfileWithFail(String token) {
        String status = ProfileConnector.getUserProfile(key, token);
        assertEquals(Integer.parseInt(status), 401);
    }

    @Then("Post the user to login with {string} failure key  and {string} and {string}")
    public void postTheUserToLoginWithFailureKey(String key, String user, String pass) {
        String status = LoginConnector.postLogin(key, user, pass);
        assertEquals(Integer.parseInt(status), 403);
    }


    @Then("Post the user to login with {string} and {string} other users invalid")
    public void postTheUserToLoginWithInvalidBody(String user, String pass) throws JsonProcessingException {
        String status = SignUpConnector.postSignUp(key, user, pass);
        assertEquals(Integer.parseInt(status), 400);
    }

    @Then("Post the key to create the user {string} and {string} with invalid {string}")
    public void postTheKeyToCreateTheUserAndWithInvalidKey(String user, String pass, String key) throws JsonProcessingException {
        String status = SignUpConnector.postSignUp(key, user, pass);
        assertEquals(Integer.parseInt(status), 403);
    }
}
