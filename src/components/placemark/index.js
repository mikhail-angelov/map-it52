import React from 'react'
import {Motion, spring} from 'react-motion';
import icon from '../../assets/placemark.svg'
import './placemark.css'

export default ({marker, onClick, $hover}) => {
    return (
        <Motion
            defaultStyle={{ scale: 1 }}
            style={{ scale: $hover ? spring(1.3) : spring(1) }}
            key={marker.id}>
            {(style) => (
                <div className='placemark' onClick={onClick} style={{zIndex: $hover ? 2 : 1}}>
                    <img className='icon' src={icon} style={{
                        transform: `translate3D(0,0,0) scale(${style.scale})`
                    }}/>
                    {$hover ? <div className='hint'> { marker.name } </div> : null}
                </div>
            ) }
        </Motion>)
}