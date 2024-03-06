package com.fox.fox.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fox.fox.entity.Events;

public interface EventsRepository extends JpaRepository<Events, Long>{
    
}