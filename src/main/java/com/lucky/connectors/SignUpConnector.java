package com.lucky.connectors;

import com.fasterxml.jackson.core.JsonProcessingException;
import kong.unirest.HttpResponse;
import kong.unirest.JsonNode;
import kong.unirest.ObjectMapper;
import kong.unirest.Unirest;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

import static org.junit.Assert.assertEquals;

public class SignUpConnector {

    private static final String  SIGNUP_URL = "https://www.nasable.com/luckytest/api/auth/signup?key=%s";
    private static java.util.logging.Logger LOGGER = Logger.getLogger(String.valueOf(ProfileConnector.class));


    public static JsonNode postSignUp(String key, String userName, String passWord) {
        String url = String.format(SIGNUP_URL,key);
        Map<String, Object> fields = new HashMap<>();
        fields.put("username", userName);
        fields.put("password", passWord);

        Unirest.config().setObjectMapper((new ObjectMapper() {
            private com.fasterxml.jackson.databind.ObjectMapper jacksonObjectMapper =
                    new com.fasterxml.jackson.databind.ObjectMapper();

            public <T> T readValue(String value, Class<T> valueType) {
                try {
                    return jacksonObjectMapper.readValue(value, valueType);
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }

            public String writeValue(Object value) {
                try {
                    return jacksonObjectMapper.writeValueAsString(value);
                } catch (JsonProcessingException e) {
                    throw new RuntimeException(e);
                }
            }
        }));

        HttpResponse<JsonNode> jsonResponse
                = Unirest.post(url)
                .header("accept", "application/json")
                .body(fields)
                .asJson();
        LOGGER.info(" ---------SIGN UP--------");
        LOGGER.info(jsonResponse.getBody().toString());

        switch (jsonResponse.getStatus()){
            case 201:
                LOGGER.info("Status is CREATED");
                break;
            case 400:
                LOGGER.info("Status is NOT_ACCEPTED , CAUSES: Request body not valid ");
                break;
            case 401:
                LOGGER.info("Status is UNAUTHORIZED , CAUSES: Token provided not valid ");
                break;
            case 403:
                LOGGER.info("Status is UNAUTHORIZED , CAUSES: Key provided not valid ");
                break;
            case 409:
                LOGGER.info("Status is CONNFLICT , CAUSES: User already exists ");
                break;
            case 500:
                LOGGER.info("Status is INTERNAL_SERVER_ERROR , CAUSES: Server side error");
                break;
        }
        assertEquals(jsonResponse.getStatus(), 201);
        return jsonResponse.getBody();

    }
}

