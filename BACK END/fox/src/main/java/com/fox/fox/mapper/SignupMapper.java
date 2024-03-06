package com.fox.fox.mapper;

import com.fox.fox.dto.SignupDto;
import com.fox.fox.entity.Signup;

public class SignupMapper {

    public static SignupDto maptoSignupDto(Signup signup) {
        return new SignupDto(
                signup.getId(),
                signup.getName(),
                signup.getEmail(),
                signup.getPhoneNo(),
                signup.getPassword()

        );
    }

    public static Signup maptoSignup(SignupDto signupdto) {
        return new Signup(
                signupdto.getId(),
                signupdto.getName(),
                signupdto.getEmail(),
                signupdto.getPhoneNo(),
                signupdto.getPassword()

        );
    }

}