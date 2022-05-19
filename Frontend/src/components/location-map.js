import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import locationService from '../services/location.service';
import { Link } from 'react-router-dom';

import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker,
    Graticule
  } from "react-simple-maps";
import { useDispatch, useSelector } from "react-redux";
  
const geoUrl =
"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export const LocationMap = (props) => {

    const dispatch = useDispatch();
    const locationList = useSelector(state => state.locationReducer.locationList);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        dispatch(locationService.getAll());
    }, []);

    useEffect(() => {
        if(!!locationList && locationList.length > 0) {
            setMarkers(locationList.map(location => {
                return {
                    markerOffset: 15,
                    name: location.name,
                    coordinates: [location.longitude, location.latitude]
                };
            }));
        }
    }, [locationList]);

    return (
        <div className="container">
            <h3>Map of Locations</h3>
            <hr/>
            <Link to="/" className="btn btn-primary mb-2">List</Link>
            <div style={{ border:'1px solid black' }}>
                <ComposableMap>
                    <ZoomableGroup zoom={1}>
                        <Graticule stroke="#EAEAEC" />
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map(geo => (
                                    <Geography key={geo.rsmKey} geography={geo} />
                                ))
                            }
                        </Geographies>
                        {markers.map(({ name, coordinates, markerOffset }) => (
                            <Marker key={name} coordinates={coordinates}>
                                <g
                                    fill="none"
                                    stroke="#FF5533"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    transform="translate(-12, -24)"
                                >
                                    <circle cx="12" cy="10" r="3" />
                                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                                </g>
                                <text
                                    textAnchor="middle"
                                    y={markerOffset}
                                    style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                                >
                                    {name}
                                </text>
                            </Marker>
                        ))}
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        </div>
    );
};

LocationMap.displayName = 'LocationMap';

LocationMap.propTypes = {
    locationList: PropTypes.array.isRequired
};