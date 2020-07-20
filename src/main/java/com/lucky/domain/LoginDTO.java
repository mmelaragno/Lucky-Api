package com.lucky.domain;


public class LoginDTO {

    private String token;
    private UserDTO user;

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

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "LoginDTO{" +
                "token='" + token + '\'' +
                '}';
    }
}



