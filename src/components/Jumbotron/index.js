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
        <Wrapper className="jumbotron jumbotron-fluid" imageUrl={imageUrl}>
            <div style={{
                position: 'relative',
                width: '100%',
                background: 'rgba(76, 76, 76, .5)',
                height: '100%',
            }} />
            <div className="container">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{subTitle}</p>
            </div>
        </Wrapper>

        <div class="jumbotron jumbotron-fluid" style={{
            padding: '1.8rem 0 1rem 0', 
            margin: '0',
            background: 'linear-gradient(90deg, rgba(241,81,127,1) 0%, rgba(230,131,79,1) 100%)'
        }}>
            <div class="container" style={{
                color: 'whitesmoke'
            }}>
                <div className="row">
                    <div className="col-md-1">
                        <i className="far fa-clock" style={{
                            fontSize: '4.5rem'
                        }}></i>
                    </div>
                    <div className="col">
                    <h2>Limited time offer! </h2>
                    <p class="lead">Free shipping in EU until {months[date().getMonth()] + ` ` + date().getUTCDate() + `th`}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Jumbotron;