package com.revature;

import com.revature.controllers.UserController;
import com.revature.services.UserService;
import io.javalin.Javalin;

public class Driver {
    public static void main(String[] args) {
        System.out.println("Hello world!");


        Javalin app = Javalin.create(config -> {
            config.enableCorsForAllOrigins();
        }).start(8080);


        UserService userService = new UserService();
        UserController userController = new UserController(userService);

        //users uris
        app.get("/user/{id}",userController.getUserById);
        app.post("/user",userController.createNewUser);
        app.put("/user",userController.updateUser);
        app.post("/login", userController.loginUser);

    }
}