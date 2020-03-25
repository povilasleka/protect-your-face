import React from 'react'
import { Wrapper } from './styles'

const Jumbotron = ({ title, subTitle, imageUrl }) => {
    return (
        <Wrapper className="jumbotron jumbotron-fluid" imageUrl={imageUrl}>
            <div className="container">
                <h1 className="display-4">{title}</h1>
                <p className="lead">
                    {subTitle}
                </p>
            </div>
        </Wrapper>
    );
}

export default Jumbotron;