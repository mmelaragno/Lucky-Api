package com.lucky.domain;

public class KeyDTO  {

    private String key;

    public KeyDTO(String key) {
        this.key = key;
    }

    public KeyDTO() {
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    @Override
    public String toString() {
        return "KeyDTO{" +
                "key='" + key + '\'' +
                '}';
    }
}
