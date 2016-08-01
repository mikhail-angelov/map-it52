import React from 'react'
import './details.css'
import icon from 'assets/placemark.svg'
import { get } from 'lodash'

export default ({details, onClose}) => {
		return details.marker && (
			<div className='details'>
				<div className='top'>
					<div className='icon'>
						<img src={ details.marker.logo['240']}/>
					</div>

					<div className='info'>
						<div className='name'>{details.marker.name}</div>

						{get(details, 'info.data.site_url') &&
							<div className='subTitle'>
								<a href={details.info.data.site_url} target='blank'>
									{details.info.data.site_url}
								</a>
							</div>
						}

						{get(details, 'info.data.area') &&
							<div className='subTitle'>
								{details.info.data.area.name}
							</div>
						}

						{get(details, 'marker.lat') && get(details, 'marker.lng') &&
							<div className='subTitle' onClick={onClose}>
								<img src={icon} />
							</div>
						}
					</div>

					<div className='actions'>
						<button className='details-button blue' onClick={()=>alert('Not implemented','No data')}>Отзывы</button>
						<button className='details-button pink' onClick={()=>alert('Not implemented','No data')}>Сотрудники</button>
						<button className='details-button green' onClick={()=>alert('Not implemented','No data')}>Вакансии</button>
						<button className='details-button yellow' onClick={()=>alert('Not implemented','No data')}>Собеседования</button>
						<button className='details-button black' onClick={()=>alert('Not implemented','No data')}>Зарплаты</button>
					</div>
				</div>

				{get(details, 'info.isFetching') &&
					<div>todo spinner</div>
				}

				{get(details, 'info.data') &&
					<div className='description' dangerouslySetInnerHTML={{__html:details.info.data.description}}></div>
				}

				<button className='details-close' onClick={onClose}></button>
			</div>
		)
}
