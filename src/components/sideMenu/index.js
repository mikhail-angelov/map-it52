import React from 'react'
import {Motion, spring} from 'react-motion';
import './sideMenu.css'

export default ({isOpen, results, onSearch, onToggle, onSelect}) => {
    var stateClass = 'sideMenu closed'
    var inputText = null
    var resultItems = null
    if (isOpen) {
        stateClass = 'sideMenu open'
        inputText = <input className='term' onChange={event => onSearch(event.target.value) } />
        if (results) {
            resultItems = results.map(item => (<div
                className='resultItem'
                key={item.id}
                onClick={() => onSelect(item) }>{item.name}</div>))
        }
    }

    return (
        <Motion
            defaultStyle={{width:50, height:50}}
            style={{
                width: isOpen ? spring(300) : spring(50),
                height: isOpen ? spring(400) : spring(50)
            }}>
            {(style) => (<div className={stateClass} style={{width:style.width}} >
                <div className='searchIcon' onClick={onToggle}></div>
                <div className='top' style={{maxHeight:style.height}}>

                    {inputText}
                    <div className='results'>
                        {resultItems}
                    </div>
                </div>

            </div>)
            }
        </Motion>)
}
