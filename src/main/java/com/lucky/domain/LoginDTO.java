package com.lucky.domain;


public class LoginDTO  {

    private String token;

    public LoginDTO(String token) {
        this.token = token;
    }

    public LoginDTO() {
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "LoginDTO{" +
                "token='" + token + '\'' +
                '}';
    }
}



