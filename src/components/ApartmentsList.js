import React from 'react';
import Apartment from "./Apartment";

export default class ApartmentsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apartments: [] };
    }

    render() {

        return (
            <div id="apartments">

                    {this.state.apartments.map((app, i) => (
                        <Apartment key={i} appModel={app} />
                    ))}

            </div>
        );
    }
}
