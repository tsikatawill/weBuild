import React from 'react'

const RoundedCard = ({ contents, c_style, classlist }) => {
    return (
        <div className={`card-rounded p-3 my-md-0 my-3 ${classlist}`} style={c_style}>
            {contents}
        </div >
    )
}

RoundedCard.defaultProps = {
    'contents': 'Contents of a rounded card',
    'c_style': { borderRadius: '10px', border: '1px solid grey', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)', width: '400px', maxWidth: '100%', margin: '0 auto' },
    'classlist': ''
}
export default RoundedCard
