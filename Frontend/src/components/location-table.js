import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import locationService from '../services/location.service';

export const LocationTable = () => {

  const dispatch = useDispatch();
  const locationList = useSelector(state => state.locationReducer.locationList);


  const init = () => {
    dispatch(locationService.getAll());
      // .then(response => {
      //   console.log('Printing locations data', response.data);
      //   setLocations(response.data);
      // })
      // .catch(error => {
      //   console.log('Something went wrong', error);
      // }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    locationService.remove(id)
      .then(response => {
        console.log('Location deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3>List of Locations</h3>
      <hr/>
      <div>
        <Link to="/map" className="btn btn-primary mb-2">Map</Link>
        <Link to="/add" style={{ marginLeft: '1%' }} className="btn btn-primary mb-2">Add Location</Link>
        <table id="location-id" className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
          {
            locationList.map(location => (
              <tr key={location.id}>
                <td>{location.name}</td>
                <td>{location.latitude}</td>
                <td>{location.longitude}</td>
                <td>
                  <Link className="btn btn-info" to={`/location/edit/${location.id}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(location.id);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
};
