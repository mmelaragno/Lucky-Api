package com.lucky.connectors;

import kong.unirest.HttpResponse;
import kong.unirest.JsonNode;
import kong.unirest.Unirest;

import java.util.logging.Level;
import java.util.logging.Logger;

import java.util.HashMap;
import java.util.Map;

public class LoginConnector {

    private static final String  LOGIN_URL = "https://www.nasable.com/luckytest/api/auth/login?key=%s";
    private static Logger LOGGER = Logger.getLogger(String.valueOf(LoginConnector.class));

    public static String postLogin(String key, String userName, String passWord) {
        String url = String.format(LOGIN_URL, key);

        Map<String, Object> fields = new HashMap<>();
        fields.put("username", userName);
        fields.put("password", passWord);

        HttpResponse<JsonNode> jsonResponse
                = Unirest.post(url)
                .header("accept", "application/json")
                .body(fields)
                .asJson();
        LOGGER.info(jsonResponse.getBody().toString());
        LOGGER.log(Level.INFO, "PROBANDO");

        switch (jsonResponse.getStatus()){
            case 200:
                LOGGER.info("Status is OK");
              break;
            case 400:
                LOGGER.info("Status is NOT_ACCEPTED  , CAUSES: Request body not valid ");
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
        return jsonResponse.getBody().getObject().get("token").toString();

    }
}
