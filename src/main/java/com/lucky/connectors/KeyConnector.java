package com.lucky.connectors;

import com.lucky.domain.KeyDTO;
import kong.unirest.HttpResponse;
import kong.unirest.Unirest;

import java.io.IOException;
import java.util.logging.Logger;

import static org.junit.Assert.assertEquals;

public class KeyConnector {

    private static final String KEY_URL = "https://www.nasable.com/luckytest/api/auth/key";
    private static Logger LOGGER = Logger.getLogger(String.valueOf(KeyConnector.class));


    public static String getKey() throws IOException {
        HttpResponse<KeyDTO> response
                = Unirest.get(KEY_URL)
                .header("accept", "application/json")
                .asObject(KeyDTO.class);
        Unirest.shutDown();

        LOGGER.info(" ---------GETTING THE KEY---------");


        switch (response.getStatus()) {
            case 201:
                LOGGER.info("Status is OK");
                break;
        }
        assertEquals(response.getStatus(), 201);
        LOGGER.info(response.getBody().toString());
        return response.getBody().getKey();
    }

}
