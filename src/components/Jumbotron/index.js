import React from 'react'
import { Wrapper, Offer } from './styles'


const date = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);

    return date;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Jumbotron = ({ title, subTitle, imageUrl }) => {
    return (
        <>
            <Wrapper
              Tag="jumbotron"
              fluid={imageUrl} 
              className="jumbotron vertical-center"
            >
                <div className="container">
                    <h1 className="display-4">{title}</h1>
                    <p className="lead">{subTitle}</p>
                </div>
            </Wrapper>

            <Offer className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 col-sm-12">
                            <i className="far fa-clock"></i>
                        </div>
                        <div className="col-md-11 col-sm-12">
                            <h2>Buy 3M Face Shield NOW!</h2>
                            <p className="lead">Free shipping in EU until {months[date().getMonth()] + ` ` + date().getUTCDate() + `th`}</p>
                        </div>
                    </div>
                </div>
            </Offer>
        </>
    );
}

export default Jumbotron;