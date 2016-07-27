import React from 'react'
import './details.css'

export default ({info, onClose}) => {
	if (info) {
		return (<div className='details'>
			<img className='icon' src={ info.logo['240']}/>
			<div className='name'>{info.name}</div>
			<div className='description'>{info.description}</div>
			<button className='details-close' onClick={onClose}></button>
		</div>)
	} else {
		return null
	}
}

