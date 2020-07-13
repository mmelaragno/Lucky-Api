package com.lucky.connectors;

import kong.unirest.HttpResponse;
import kong.unirest.JsonNode;
import kong.unirest.Unirest;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.HashMap;
import java.util.Map;

public class LoginConnector {

    private static final String  LOGIN_URL = "https://www.nasable.com/luckytest/api/auth/login?key=%s";
    private static Logger LOGGER = LogManager.getLogger();

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

        return jsonResponse.getBody().getObject().get("token").toString();

    }
}
