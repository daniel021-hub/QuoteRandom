const QuoteButton = ({getNewValues, backgroundObject}) => {

    return (
        <button onClick={getNewValues} style={backgroundObject}>
            <i className='bx bx-chevron-rigth'></i> 
        </button>
    )
}
export default QuoteButton