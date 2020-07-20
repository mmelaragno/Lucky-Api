package com.lucky.configurations;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import kong.unirest.ObjectMapper;
import kong.unirest.Unirest;

public class ObjectMapperConfiguration {


    public static void initUnirest() {
        Unirest.config().setObjectMapper(new ObjectMapper() {
            @Override
            public <T> T readValue(String value, Class<T> valueType) {
                try {
                    return ObjectMapperConfiguration.objectMapper().readValue(value, valueType);

                } catch (JsonProcessingException e) {
                    e.printStackTrace();
                }
                return null;
            }

            @Override
            public String writeValue(Object value) {
                try {
                    return ObjectMapperConfiguration.objectMapper().writeValueAsString(value);
                } catch (JsonProcessingException e) {
                    e.printStackTrace();
                }
                return null;
            }
        });


    }

    private static com.fasterxml.jackson.databind.ObjectMapper objectMapper() {
        com.fasterxml.jackson.databind.ObjectMapper mapper = new com.fasterxml.jackson.databind.ObjectMapper();
        mapper.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
        mapper.enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.configure(DeserializationFeature.READ_UNKNOWN_ENUM_VALUES_AS_NULL, true);
        return mapper;
    }
}
