package com.lucky.connectors;

import com.fasterxml.jackson.core.JsonProcessingException;
import kong.unirest.HttpResponse;
import kong.unirest.JsonNode;
import kong.unirest.Unirest;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;


public class SignUpConnector {

    private static final String  SIGNUP_URL = "https://www.nasable.com/luckytest/api/auth/signup?key=%s";
    private static java.util.logging.Logger LOGGER = Logger.getLogger(String.valueOf(ProfileConnector.class));


    public static Boolean postSignUp(String key, String userName, String passWord) throws JsonProcessingException {
        String url = String.format(SIGNUP_URL,key);
        Map<String, Object> fields = new HashMap<>();
        fields.put("username", userName);
        fields.put("password", passWord);

        HttpResponse<JsonNode> response
                = Unirest.post(url)
                .header("accept", "application/json")
                .body(fields)
                .asJson();
        LOGGER.info(" ---------SIGN UP--------");
        LOGGER.info(response.getBody().toString());

        switch (response.getStatus()){
            case 201:
                LOGGER.info("Status is CREATED");
                return true;
            case 400:
                LOGGER.info("Status is NOT_ACCEPTED , CAUSES: Request body not valid ");
            case 401:
                LOGGER.info("Status is UNAUTHORIZED , CAUSES: Token provided not valid ");
            case 403:
                LOGGER.info("Status is UNAUTHORIZED , CAUSES: Key provided not valid ");
            case 409:
                LOGGER.info("Status is CONNFLICT , CAUSES: User already exists ");
            case 500:
                LOGGER.info("Status is INTERNAL_SERVER_ERROR , CAUSES: Server side error");

        }
        return false;

    }
}

