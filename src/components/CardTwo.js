import React from 'react'
import Card from './Card';

function CardTwo(props) {
    const text = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
    const title = 'Card title'
    return (
        <div className="card" style={{width: '18rem'}}>
            <Card text={text} title={title}/> 
        </div>
    )
}


export default CardTwo
