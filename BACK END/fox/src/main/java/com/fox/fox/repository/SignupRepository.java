package com.fox.fox.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fox.fox.entity.Signup;

public interface SignupRepository extends JpaRepository<Signup, Long>{
    
}