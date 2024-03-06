package com.fox.fox.mapper;

import com.fox.fox.dto.EventsDto;

import com.fox.fox.entity.Events;

public class EventsMapper {

    public static EventsDto maptoEventsDto(Events event) {
        return new EventsDto(
                event.getId(),
                event.getName(),
                event.getEmail(),
                event.getPhoneNo(),
                event.getState(),
                event.getCity(),
                event.getCelebration(),
                event.getDate(),
                event.getPrice(),
                event.getRequirements()
        );
    }

    public static Events maptoEvents(EventsDto ed) {
        return new Events(
            ed.getId(),
            ed.getName(),
            ed.getEmail(),
            ed.getPhoneNo(),
            ed.getState(),
            ed.getCity(),
            ed.getCelebration(),
            ed.getDate(),
            ed.getPrice(),
            ed.getRequirements()
        );
    }
}