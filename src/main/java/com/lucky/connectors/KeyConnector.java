package com.lucky.connectors;

import kong.unirest.HttpResponse;
import kong.unirest.JsonNode;
import kong.unirest.Unirest;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class KeyConnector {

    private static final String  KEY_URL = "https://www.nasable.com/luckytest/api/auth/key";
    private static Logger LOGGER = LogManager.getLogger();


    public static String getKey() {
        HttpResponse<JsonNode> jsonResponse
                = Unirest.get(KEY_URL)
                .header("accept", "application/json")
                .asJson();

        LOGGER.info(jsonResponse.getBody().toString());
        return jsonResponse.getBody().getObject().get("key").toString();

    }




}
