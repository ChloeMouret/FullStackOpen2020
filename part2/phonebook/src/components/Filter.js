import React from 'react'

const Filter = ({toShow, setToShow}) => {
    const handleFilter = (event) => {
        setToShow(event.target.value)
    }
    
    return (
        <div>
            filter shown with :
            <input value={toShow} onChange={handleFilter}/>
        </div>
    )
}

export default Filter