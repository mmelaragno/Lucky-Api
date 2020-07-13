package com.lucky.connectors;

import kong.unirest.HttpResponse;
import kong.unirest.JsonNode;
import kong.unirest.Unirest;

import java.util.logging.Logger;

import static org.junit.Assert.assertEquals;

public class KeyConnector {

    private static final String  KEY_URL = "https://www.nasable.com/luckytest/api/auth/key";
    private static Logger LOGGER = Logger.getLogger(String.valueOf(KeyConnector.class));


    public static String getKey() {
        HttpResponse<JsonNode> jsonResponse
                = Unirest.get(KEY_URL)
                .header("accept", "application/json")
                .asJson();

        LOGGER.info(" ---------GETTING THE KEY---------");
        LOGGER.info(jsonResponse.getBody().toString());

        switch (jsonResponse.getStatus()) {
            case 201:
                LOGGER.info("Status is OK");
                break;
        }
        assertEquals(jsonResponse.getStatus(), 201);
        return jsonResponse.getBody().getObject().get("key").toString();

    }




}
