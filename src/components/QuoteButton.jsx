import React from 'react'

const QuoteButton = ({getNewValues, backgroundObject}) => {

    return (
        <button className='quoteBox_button' onClick={getNewValues} style={backgroundObject}>
            <i className='bx bx-chevron-right'></i> 
        </button>
    )
}
export default QuoteButton