import React, {Component} from 'react'
import _ from 'lodash'

import GoogleMap from 'google-map-react'
import Placemark from '../placemark'
import Balloon from '../balloon'

export default class SimpleMapPage extends Component {

    getBootstrapUrlKeys(){
        const bootstrapURLKeys = {
            language: 'ru'
        }
        if(location.hostname !== 'localhost'){
            bootstrapURLKeys.key='AIzaSyBfYaSSHpk-h_m0DADxoXuf0fCYtsIcSA0'
        }
        return bootstrapURLKeys
    }

    render() {
        var center = null

        var markers = _.map(this.props.markers, marker => (<Placemark marker={ marker }
            lat={ marker.lat }
            lng={ marker.lng }
            key={ marker.id }
            onClick={this.props.onShowBalloon.bind(this, marker) }
            />))
        if(this.props.balloon){
            const balloon = (<Balloon marker={ this.props.balloon }
            lat={ this.props.balloon.lat }
            lng={ this.props.balloon.lng }
            key='balloon'
            onClose={this.props.onCloseBalloon }
            onDetails={this.props.onShowDetails.bind(this, this.props.balloon) }/>)
            markers = _.concat([balloon], markers)
            center = [this.props.balloon.lat, this.props.balloon.lng];
            console.log(center)
        }
        if(this.props.changeCenter && this.props.changeCenter.lat && this.props.changeCenter.lng){
            center = [this.props.changeCenter.lat, this.props.changeCenter.lng];
        }

        return (<div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>

            <GoogleMap
                defaultCenter={this.props.default.center}
                defaultZoom={this.props.default.zoom}
                bootstrapURLKeys={this.getBootstrapUrlKeys()}
                center={center}>
                {markers}
            </GoogleMap>
        </div>)
    }
}
