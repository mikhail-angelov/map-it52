import React from 'react'
import './details.css'

export default ({marker, details, onClose}) => ( 
	<div className='details'>
	<img className='icon' src = { marker.logo['240'] }/> 
	<div className='name'>{marker.name}</div>
	<div className='description'>{details.description}</div>
	<button className='details-close' onClick={onClose}></button>
	</div>)

