package com.revature.models;

public class User {
    private int id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;

    private String zodiac;

    private String mood;



    // we have our no args constructor
    // if we do not create a default constructor one is created for us
    public User() {
    }

    //all args constructor

    public User(int id, String firstname, String lastname, String email, String password, String zodiac) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.zodiac = zodiac;

    }

    //some-args constructor
    // here e are not including the id because we have
    //set our id to be "Serial" aka to auto generate in our db
    public User(String firstname, String lastname, String email, String password, String zodiac) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.zodiac = zodiac;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getZodiac() {
        return zodiac;
    }

    public void setZodiac(String zodiac) {
        this.zodiac = zodiac;
    }

    public String getMood() {
        return mood;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", zodiac='" + zodiac + '\'' +
                ", mood='" + mood + '\'' +
                '}';
    }
}
