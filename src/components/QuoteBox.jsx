import React from 'react'
import QuoteButton from "./QuoteButton"

const QuoteBox = ({quote, getNewValues, backgroundObject, colorObject}) => {

    return (
        <div className="quoteBox" style={{backgroundObject: backgroundObject}}>
            <p className='quoteBox_quote'style={colorObject}>{quote.quote}</p>
            <h3 className='quoteBox_author' style={colorObject}>{quote.author}</h3>
            <section className="quoteBox-footer">
            <i style={colorObject} className='bx bxs-quote-left'></i>
            <QuoteButton getNewValues={getNewValues} backgroundObject={backgroundObject}/>
            </section>
        </div>
    )
}
export default QuoteBox

