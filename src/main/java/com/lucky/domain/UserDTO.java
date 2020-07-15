package com.lucky.domain;


import java.util.List;

public class UserDTO {

    private List favorites;
    private String id;
    private String username;

    public UserDTO(List favorites, String id, String username) {
        this.favorites = favorites;
        this.id = id;
        this.username = username;
    }

    public UserDTO() {
    }

    public List getFavorites() {
        return favorites;
    }

    public void setFavorites(List favorites) {
        this.favorites = favorites;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
