import React, {useContext} from 'react';
import {Apartment} from "./Apartment";
import {DataContext} from "../pages/test";


const ApartmentsList = () => {

    const response = useContext(DataContext);
    let appModels = response.appModels;
    return (
        <div id="apartments">
            {appModels.map((app, i) => (
                <Apartment key={i} appModel={app}/>
            ))}
        </div>
    );
}

export {ApartmentsList};
