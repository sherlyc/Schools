import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends React.Component {
    render(){
        const markers = this.props.markers || []
        return(
        <GoogleMap
             defaultZoom={15}
             defaultCenter={this.props.center}
             >
             {markers.map((marker, index) => (
                 <Marker {...marker} />
                )
            )}
        </GoogleMap>

        )
    }
}

export default withGoogleMap(Map)
