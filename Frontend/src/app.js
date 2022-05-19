import { BrowserRouter, Switch } from "react-router-dom";
import { LocationTable } from "./components/location-table";
import NotFound from "./components/utils/error/not-found";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddLocation } from "./components/add-location";
import { LocationMap } from "./components/location-map";
import { LocationRoute } from "./components/utils/location-route";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Switch>
            <LocationRoute exact path="/" component={LocationTable} />{" "}
            <LocationRoute path="/map" component={LocationMap} />{" "}
            <LocationRoute path="/add" component={AddLocation} />{" "}
            <LocationRoute path="/location/edit/:id" component={AddLocation} />{" "}
            <LocationRoute path="*" component={NotFound} />{" "}
          </Switch>{" "}
        </div>{" "}
      </div>{" "}
    </BrowserRouter>
  );
};

export default App;
