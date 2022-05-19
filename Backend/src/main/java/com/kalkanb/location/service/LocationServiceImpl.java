package com.kalkanb.location.service;

import com.kalkanb.location.dto.LocationDto;
import com.kalkanb.location.entity.LocationEntity;
import com.kalkanb.location.exception.LocationException;
import com.kalkanb.location.exception.LocationNotFoundException;
import com.kalkanb.location.mapper.LocationMapper;
import com.kalkanb.location.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService {

    private static final String DATABASE_ERROR = "A database associated error occurred";
    private static final String LOCATION_WITH_ID = "Location with id = ";
    private static final String NOT_FOUND = " not found";

    private LocationRepository locationRepository;
    private LocationMapper locationMapper;

    @Override
    public List<LocationDto> getAllLocations() {
        List<LocationEntity> entityList;
        try {
            entityList = locationRepository.findAll();
        } catch (Exception ex) {
            throw new LocationException(DATABASE_ERROR);
        }

        return locationMapper.toDtoList(entityList);
    }

    @Override
    public LocationDto getLocationById(Long id) {
        LocationEntity locationEntity;
        try {
            locationEntity = locationRepository.findById(id).orElseThrow(() ->
                    new LocationNotFoundException(LOCATION_WITH_ID + id + NOT_FOUND));
        } catch (LocationNotFoundException locationNotFoundException) {
            throw locationNotFoundException;
        } catch (Exception ex) {
            throw new LocationException(DATABASE_ERROR);
        }
        return locationMapper.toDto(locationEntity);
    }

    @Override
    public LocationDto insertLocation(LocationDto locationDto) {
        LocationEntity locationEntity = locationMapper.toEntity(locationDto);
        LocationEntity savedEntity;
        try {
            savedEntity = locationRepository.save(locationEntity);
        } catch (Exception ex) {
            throw new LocationException(DATABASE_ERROR);
        }
        return locationMapper.toDto(savedEntity);
    }

    @Override
    public LocationDto updateLocation(LocationDto locationDto) {
        LocationEntity locationEntity;
        try {
            locationEntity = locationRepository.findById(locationDto.getId()).orElseThrow(() ->
                    new LocationNotFoundException(LOCATION_WITH_ID + locationDto.getId() + NOT_FOUND));
        } catch (LocationNotFoundException locationNotFoundException) {
            throw locationNotFoundException;
        } catch (Exception ex) {
            throw new LocationException(DATABASE_ERROR);
        }

        locationMapper.toEntity(locationDto, locationEntity);
        LocationEntity savedEntity;
        try {
            savedEntity = locationRepository.save(locationEntity);
        } catch (Exception ex) {
            throw new LocationException(DATABASE_ERROR);
        }
        return locationMapper.toDto(savedEntity);
    }

    @Override
    public void deleteLocationById(Long id) {
        LocationEntity locationEntity;
        try {
            locationEntity = locationRepository.findById(id).orElseThrow(() ->
                    new LocationNotFoundException(LOCATION_WITH_ID + id + NOT_FOUND));
        } catch (LocationNotFoundException locationNotFoundException) {
            throw locationNotFoundException;
        } catch (Exception ex) {
            throw new LocationException(DATABASE_ERROR);
        }

        try {
            locationRepository.delete(locationEntity);
        } catch (Exception ex) {
            throw new LocationException(DATABASE_ERROR);
        }
    }

    @Autowired
    public void setLocationRepository(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    @Autowired
    public void setLocationMapper(LocationMapper locationMapper) {
        this.locationMapper = locationMapper;
    }
}
