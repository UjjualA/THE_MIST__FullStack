package com.fox.fox.service;

import java.util.List;

import com.fox.fox.dto.EventsDto;

public interface EventsService {

    EventsDto getEventsById(Long id);
    EventsDto createEvents(EventsDto eventsDto);
    List<EventsDto> getAllEvents();
    EventsDto updateEvent(Long id, EventsDto eventsDto);
    void deleteEvent(Long id);
    
}