import React, {Component} from 'react'
import _ from 'lodash'

import GoogleMap from 'google-map-react'
import Placemark from '../placemark'
import Balloon from '../balloon'

export default class SimpleMapPage extends Component {

    render() {
        var markers = _.map(this.props.markers, marker => (<Placemark marker={ marker }
            lat={ marker.lat }
            lng={ marker.lng }
            key={ marker.id }
            onClick={this.props.onShowBalloon.bind(this, marker) }
            />))
        const balloon = this.props.balloon ? (<Balloon marker={ this.props.balloon }
            lat={ this.props.balloon.lat }
            lng={ this.props.balloon.lng }
            key='balloon'
            onClose={this.props.onCloseBalloon }
            onDetails={this.props.onShowDetails.bind(this, this.props.balloon) }/>) : null
        if (balloon) markers = _.concat([balloon], markers)

        return (<div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>
            <GoogleMap
                defaultCenter={this.props.default.center}
                defaultZoom={this.props.default.zoom}
                bootstrapURLKeys={{
                    key: AIzaSyBfYaSSHpk - h_m0DADxoXuf0fCYtsIcSA0,
                    language: 'ru'
                }}>
                {markers}
            </GoogleMap>
        </div>)
    }
}
