import React from 'react'

function Card(props) {
    return (
        <div className="card-body">
            <h5 className="card-title">{props.title ? props.title : undefined}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.subtitle ? props.subtitle : undefined}</h6>
            <p className="card-text">
                {props.text ? props.text : undefined}
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>


    )
}



export default Card
