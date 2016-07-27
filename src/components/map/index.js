import React, { PropTypes, Component } from 'react'
import _ from 'lodash'

import GoogleMap from 'google-map-react'
import Placemark from '../placemark'
import Balloon from '../balloon'
import Details from '../details'
import companies from '../../assets/employers.json'

const center = { lat: 56.295274, lng: 43.956947 }

export default class SimpleMapPage extends Component {
    static defaultProps = {
        center: center,
        zoom: 13,
        greatPlaceCoords: center
    }

    constructor(props) {
        super(props)
        this.state = { active: null, details: null }
    }

    onMarkerClick(marker) {
        this.setState({ active: marker })
    }
    onDetailsClick(marker) {
        console.log('click', marker.name)
        this.setState({ details: marker })
    }
    onCloseBalloon() {
        this.setState({ active: null })
    }
    onCloseDetails() {
        this.setState({ details: null })
    }

    render() {

        var markers = _.map(companies, marker => (<Placemark marker = { marker }
            lat = { marker.lat }
            lng = { marker.lng }
            key = { marker.id }
            onClick = {this.onMarkerClick.bind(this, marker) }
            />))
        const balloon = this.state.active ? <Balloon marker = { this.state.active }
            lat = { this.state.active.lat }
            lng = { this.state.active.lng }
            key = 'balloon'
            onClose = {this.onCloseBalloon.bind(this) }
            onDetails = {this.onDetailsClick.bind(this, this.state.active) }/> : null
        if (balloon) markers = _.concat([balloon], markers)

        const details = this.state.details ? <Details marker = { this.state.active }
            details = {{}}
            onClose = {this.onCloseDetails.bind(this) }/> : null

        return (
            <div style={{
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {details}
                <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>
                    <GoogleMap defaultCenter = {this.props.center} defaultZoom = {this.props.zoom}>
                        {markers}
                    </GoogleMap>
                </div>
            </div>
        )
    }
}
