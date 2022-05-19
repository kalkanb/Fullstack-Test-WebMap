package com.kalkanb.location.mapper;

import com.kalkanb.location.dto.LocationDto;
import com.kalkanb.location.entity.LocationEntity;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LocationMapper {

    LocationDto toDto(LocationEntity locationEntity);

    List<LocationDto> toDtoList(List<LocationEntity> locationEntityList);

    LocationEntity toEntity(LocationDto locationDto);

    void toEntity(LocationDto locationDto, @MappingTarget LocationEntity locationEntity);

    List<LocationEntity> toEntityList(List<LocationDto> locationDtoList);
}
