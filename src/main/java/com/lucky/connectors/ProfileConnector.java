package com.lucky.connectors;

import kong.unirest.HttpResponse;
import kong.unirest.JsonNode;
import kong.unirest.Unirest;
import java.util.logging.Logger;

public class ProfileConnector {


    private static final String  KEY_URL = "https://www.nasable.com/luckytest/api/auth/key";
    private static java.util.logging.Logger LOGGER = Logger.getLogger(String.valueOf(ProfileConnector.class));


    public static JsonNode getUserProfile(String token) {
        HttpResponse<JsonNode> jsonResponse
                = Unirest.get(KEY_URL)
                .header("accept", "application/json")
                .header("Authorization", token )
                .asJson();

        LOGGER.info(jsonResponse.getBody().toString());
        switch (jsonResponse.getStatus()){
            case 200:
                LOGGER.info("Status is OK");
                break;
            case 401:
                LOGGER.info("Status is UNAUTHORIZED , CAUSES: Token provided not valid ");
                break;
            case 403:
                LOGGER.info("Status is UNAUTHORIZED , CAUSES: Key provided not valid ");
                break;
            case 500:
                LOGGER.info("Status is INTERNAL_SERVER_ERROR , CAUSES: Server side error");
                break;
        }
        return jsonResponse.getBody();
    }
}
