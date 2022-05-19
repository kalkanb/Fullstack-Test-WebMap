package com.kalkanb.location.mapper;

import com.kalkanb.location.dto.LocationDto;
import com.kalkanb.location.entity.LocationEntity;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-04-14T11:56:56+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 16.0.1 (Oracle Corporation)"
)
@Component
public class LocationMapperImpl implements LocationMapper {

    @Override
    public LocationDto toDto(LocationEntity locationEntity) {
        if ( locationEntity == null ) {
            return null;
        }

        LocationDto locationDto = new LocationDto();

        locationDto.setId( locationEntity.getId() );
        locationDto.setName( locationEntity.getName() );
        locationDto.setLatitude( locationEntity.getLatitude() );
        locationDto.setLongitude( locationEntity.getLongitude() );

        return locationDto;
    }

    @Override
    public List<LocationDto> toDtoList(List<LocationEntity> locationEntityList) {
        if ( locationEntityList == null ) {
            return null;
        }

        List<LocationDto> list = new ArrayList<LocationDto>( locationEntityList.size() );
        for ( LocationEntity locationEntity : locationEntityList ) {
            list.add( toDto( locationEntity ) );
        }

        return list;
    }

    @Override
    public LocationEntity toEntity(LocationDto locationDto) {
        if ( locationDto == null ) {
            return null;
        }

        LocationEntity locationEntity = new LocationEntity();

        locationEntity.setId( locationDto.getId() );
        locationEntity.setName( locationDto.getName() );
        locationEntity.setLatitude( locationDto.getLatitude() );
        locationEntity.setLongitude( locationDto.getLongitude() );

        return locationEntity;
    }

    @Override
    public void toEntity(LocationDto locationDto, LocationEntity locationEntity) {
        if ( locationDto == null ) {
            return;
        }

        locationEntity.setId( locationDto.getId() );
        locationEntity.setName( locationDto.getName() );
        locationEntity.setLatitude( locationDto.getLatitude() );
        locationEntity.setLongitude( locationDto.getLongitude() );
    }

    @Override
    public List<LocationEntity> toEntityList(List<LocationDto> locationDtoList) {
        if ( locationDtoList == null ) {
            return null;
        }

        List<LocationEntity> list = new ArrayList<LocationEntity>( locationDtoList.size() );
        for ( LocationDto locationDto : locationDtoList ) {
            list.add( toEntity( locationDto ) );
        }

        return list;
    }
}
