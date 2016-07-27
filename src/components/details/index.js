import React from 'react'
import './details.css'

export default ({details, onClose}) => {

	if (details.marker) {
		var descriptions = null
		if (details.info.isFetching) {
			descriptions = <div>spinner</div>
		} else if (details.info.data) {
			descriptions = <div className='description' dangerouslySetInnerHTML={{__html:details.info.data.description}}></div>
		}
		return (<div className='details'>
			<img className='icon' src={ details.marker.logo['240']}/>
			<div className='name'>{details.marker.name}</div>
			{descriptions}
			<button className='details-close' onClick={onClose}></button>
		</div>)
	} else {
		return null
	}
}

