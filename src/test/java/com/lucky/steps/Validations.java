package com.lucky.steps;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.lucky.connectors.SignUpConnector;
import static org.junit.Assert.assertEquals;

public class Validations {


    public static void validateUser(String user, String pass, String key) throws JsonProcessingException {
        String status = SignUpConnector.postSignUp(key, user, pass);
        if (!userContainSpaces(user) && userContainNumbers(user) && userContainsFirstCharacterLetter(user)) {
            assertEquals(Integer.parseInt(status), 201);
        } else {
            assertEquals(Integer.parseInt(status), 400);
        }
    }

    private static boolean userContainSpaces(String user) {
        boolean userContainSpace = user.contains(" ");
        return userContainSpace;
    }

    private static boolean userContainNumbers(String user) {
        return user.matches(".*\\d.*");

    }

    private static boolean userContainsFirstCharacterLetter(String user) {
        char character = user.charAt(0);
        return (Character.isLetter(character));
    }

}
