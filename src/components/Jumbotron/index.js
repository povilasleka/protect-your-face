import React from 'react'


const Jumbotron = ({ title, subTitle, imageUrl }) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{title}</h1>
                <p className="lead">
                    {subTitle}
                </p>
            </div>
        </div>
    );
}

export default Jumbotron;