package com.kalkanb.location.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "location")
@Getter
@Setter
@NoArgsConstructor
public class LocationEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "latitude", length = 11, precision = 8)
	private Double latitude;

	@Column(name = "longitude", length = 11, precision = 8)
	private Double longitude;

	@Column(name = "user_id")
	private Long userId;
}
