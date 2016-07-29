import React from 'react'
import searchIcon from '../../assets/searchIcon.png'
import './sideMenu.css'

export default ({isOpen, results, onSearch, onToggle}) => {
    var stateClass = 'sideMenu closed'
    var inputText = null
    var resultItems = null
    if (isOpen) {
        stateClass = 'sideMenu open'
        inputText = <input className='term' onChange={event => onSearch(event.target.value) } />
        if (results) {
            resultItems = results.map(item => (<div className='resultItem'>{item.name}</div>))
        }
    }

    return (<div className={stateClass} >
        <div className='top'>
            <div className='searchIcon' src={searchIcon} onClick={onToggle}/>
            {inputText}
        </div>
        <div className='results'>
            {resultItems}
        </div>
    </div>)
}
