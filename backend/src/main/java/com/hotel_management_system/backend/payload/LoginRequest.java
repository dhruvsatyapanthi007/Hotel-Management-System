package com.hotel_management_system.backend.payload;

import lombok.Data;

@Data
public class LoginRequest {

    private String username;
    private String password;
}
