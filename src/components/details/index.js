import React from 'react'
import './details.css'
import icon from '../../assets/placemark.svg'

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
				<div className='actions'>
					<button className='details-button blue' onClick={()=>alert('Not implemented','No data')}>Отзывы</button>
					<button className='details-button pink' onClick={()=>alert('Not implemented','No data')}>Сотрудники</button>
					<button className='details-button green' onClick={()=>alert('Not implemented','No data')}>Вакансии</button>
					<button className='details-button yellow' onClick={()=>alert('Not implemented','No data')}>Собеседования</button>
					<button className='details-button black' onClick={()=>alert('Not implemented','No data')}>Зарплаты</button>
				</div>
			</div>
			{description}
			<button className='details-close' onClick={onClose}></button>
		</div>)
	} else {
		return null
	}
}

