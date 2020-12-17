import React from 'react'

import Card from './Card'

function CardOne(props) {
    const text = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
    const title = 'Card title'
    const img = null
    return (
        <div className="card" style={{width: '18rem'}}>
            {
                img?
                    <img src="" className="card-img-top" alt="text" />
                    :
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180"
                         xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                         role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#868e96"></rect>
                        <text x="35%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                    </svg>
            }

            <Card text={text} title={title}/>
        </div>
    )
}



export default CardOne
