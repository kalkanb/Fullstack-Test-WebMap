package com.kalkanb.location.service;

import com.kalkanb.location.dto.LocationDto;

import java.util.List;

public interface LocationService {
    List<LocationDto> getAllLocations();

    LocationDto getLocationById(Long id);

    LocationDto insertLocation(LocationDto locationDto);

    LocationDto updateLocation(LocationDto locationDto);

    void deleteLocationById(Long id);
}
