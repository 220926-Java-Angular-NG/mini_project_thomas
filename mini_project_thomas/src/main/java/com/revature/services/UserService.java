package com.revature.services;

import com.revature.models.User;
import com.revature.repos.UserRepo;
import com.revature.utils.CRUDDaoInterface;

import java.util.ArrayList;
import java.util.List;

public class UserService {

    private UserRepo userRepo;


    // we are creating a new instance of our UserRepo
    public UserService(){
        userRepo = new UserRepo();
    }

    // here we are passing in an existing UserRepo
    public UserService(UserRepo userRepo){
        this.userRepo = userRepo;
    }

    // create

    public int createUser(User user){

        return userRepo.create(user);
    }



    //readById

    public User getUserById(int id){
        return userRepo.getById(id);
    }


    //update

    public User updateUser(User user){
        return userRepo.update(user);
    }




    public User loginUser(User user){
        return userRepo.loginUser(user);
    }




}
