package com.kalkanb.location.controller;

import com.kalkanb.location.dto.LocationDto;
import com.kalkanb.location.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/location")
@CrossOrigin("*")
public class LocationController {

    private LocationService locationService;

    @GetMapping
    public List<LocationDto> getAllLocations() {
        return locationService.getAllLocations();
    }

    @GetMapping("/{id}")
    public LocationDto getLocationById(@PathVariable Long id) {
        return locationService.getLocationById(id);
    }

    @PostMapping
    public LocationDto insertLocation(@RequestBody @Valid LocationDto locationDto) {
        return locationService.insertLocation(locationDto);
    }

    @PutMapping
    public LocationDto updateLocation(@RequestBody @Valid LocationDto locationDto) {
        return locationService.updateLocation(locationDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteLocationById(@PathVariable Long id) {
        locationService.deleteLocationById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Autowired
    public void setLocationService(LocationService locationService) {
        this.locationService = locationService;
    }
}
