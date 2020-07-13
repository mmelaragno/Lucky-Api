package com.lucky.connectors;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.lucky.connectors.com.lucky.domain.UserDTO;
import kong.unirest.HttpResponse;
import kong.unirest.JsonNode;
import kong.unirest.ObjectMapper;
import kong.unirest.Unirest;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class SignUpConnector {

    private static final String  SIGNUP_URL = "https://www.nasable.com/luckytest/api/auth/signup?key=%s";
    private static Logger LOGGER = LogManager.getLogger();


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
        LOGGER.info(jsonResponse.getBody().toString());

        return jsonResponse.getBody();

    }
}
