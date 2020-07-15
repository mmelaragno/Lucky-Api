package com.lucky.connectors;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.lucky.domain.LoginDTO;
import kong.unirest.HttpResponse;
import kong.unirest.Unirest;
import java.util.logging.Logger;

import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.assertEquals;

public class LoginConnector {

    private static final String  LOGIN_URL = "https://www.nasable.com/luckytest/api/auth/login?key=%s";
    private static Logger LOGGER = Logger.getLogger(String.valueOf(LoginConnector.class));

    public static String postLogin(String key, String userName, String passWord) throws JsonProcessingException {
        String url = String.format(LOGIN_URL, key);

        Map<String, Object> fields = new HashMap<>();
        fields.put("username", userName);
        fields.put("password", passWord);

        HttpResponse<LoginDTO> response
                = Unirest.post(url)
                .header("accept", "application/json")
                .body(fields)
                .asObject(LoginDTO.class);
        LOGGER.info(" ---------LOGIN---------");
        LOGGER.info(response.getBody().toString());

        switch (response.getStatus()){
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

        assertEquals(response.getStatus(), 200);

        return response.getBody().getToken();
    }
}
