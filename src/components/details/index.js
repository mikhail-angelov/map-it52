import React from 'react'
import './details.css'
import icon from '../../assets/placemark.png'

export default ({details, onClose}) => {

	if (details.marker) {
		var description = null
		var site = null
		var region = null
		var location = null
		if (details.info.isFetching) {
			description = <div>todo spinner</div>
		} else if (details.info.data) {
			description = <div className='description' dangerouslySetInnerHTML={{__html:details.info.data.description}}></div>
			if(details.info.data.site_url){
				site = (<div className='subTitle'> <a href={details.info.data.site_url} target='blank'>{details.info.data.site_url}</a></div>)
			}
			if(details.info.data.area){
				region = (<div className='subTitle'> {details.info.data.area.name}</div>)
			}
			if(details.marker.lat && details.marker.lng){
				location = (<div className='subTitle' onClick={onClose}> <img src={icon}/></div>)
			}
		}
		
		
		return (<div className='details'>
			<div className='top'>
				<div className='icon'>
					<img src={ details.marker.logo['240']}/>
				</div>
				<div className='info'>
					<div className='name'>{details.marker.name}</div>
					{site}
					{region}
					{location}
				</div>
			</div>
			{description}
			<button className='details-close' onClick={onClose}></button>
		</div>)
	} else {
		return null
	}
}

