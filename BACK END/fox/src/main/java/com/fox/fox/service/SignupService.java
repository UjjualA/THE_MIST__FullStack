package com.fox.fox.service;

import java.util.List;

import com.fox.fox.dto.SignupDto;

public interface SignupService {
    SignupDto createSignup(SignupDto signupDto);

    SignupDto getSignupById(Long signupId);

    List<SignupDto> getAllSignups();
}