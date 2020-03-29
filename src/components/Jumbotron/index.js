import React from 'react'
import { Wrapper } from './styles'

const date = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);

    return date;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Jumbotron = ({ title, subTitle, imageUrl }) => {
    return (
        <>
            <Wrapper className="jumbotron jumbotron-fluid">
                <div className="overlay" />
                <div className="container">
                    <h1 className="display-4">{title}</h1>
                    <p className="lead">{subTitle}</p>
                </div>
            </Wrapper>

            <div className="jumbotron jumbotron-fluid" style={{
                padding: '1.8rem 0 1rem 0',
                margin: '0',
                background: 'linear-gradient(90deg, rgba(241,81,127,1) 0%, rgba(230,131,79,1) 100%)',
                transform: 'translateY(-5rem)'
            }}>
                <div className="container" style={{
                    color: 'whitesmoke'
                }}>
                    <div className="row">
                        <div className="col-md-1 col-sm-12">
                            <i className="far fa-clock" style={{ fontSize: '4.5rem' }}></i>
                        </div>
                        <div className="col-md-11 col-sm-12">
                            <h2>Limited time offer! </h2>
                            <p className="lead">Free shipping in EU until {months[date().getMonth()] + ` ` + date().getUTCDate() + `th`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Jumbotron;