import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import locationService from "../services/location.service";

export const AddLocation = () => {
    const[name, setName] = useState('');
    const[latitude, setLatitude] = useState(null);
    const[longitude, setLongitude] = useState(null);
    const history = useHistory();
    const {id} = useParams();

    const saveLocation = (e) => {
        e.preventDefault();
        
        const location = {id, name, latitude, longitude};
        if (id) {
            //update
            locationService.update(location)
                .then(response => {
                    console.log('Location data updated successfully', response.data);
                    history.push('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            locationService.create(location)
            .then(response => {
                console.log("Location added successfully", response.data);
                history.push("/");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            locationService.get(id)
                .then(location => {
                    setName(location.data.name);
                    setLatitude(location.data.latitude);
                    setLongitude(location.data.longitude);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Add Location</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="latitude"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        placeholder="Enter Latitude"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="longitude"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        placeholder="Enter Longitude"
                    />

                </div>
                <div >
                    <button onClick={(e) => saveLocation(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
};