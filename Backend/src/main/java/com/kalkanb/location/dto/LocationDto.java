package com.kalkanb.location.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
public class LocationDto {

    private Long id;

    @NotBlank(message = "Name cannot be empty")
    private String name;

    @Min(value = -90, message = "Latitude can only be in the interval of [-90, 90]")
    @Max(value = 90, message = "Latitude can only be in the interval of [-90, 90]")
    private Double latitude;

    @Min(value = -180, message = "Latitude can only be in the interval of [-180, 180]")
    @Max(value = 180, message = "Latitude can only be in the interval of [-180, 180]")
    private Double longitude;
}
