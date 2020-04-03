import React from 'react'
import { Wrapper, Offer } from './styles'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'


const date = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);

    return date;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Jumbotron = ({ imageUrl }) => {
    const intl = useIntl();

    return (
        <>
            <Wrapper
              Tag="jumbotron"
              fluid={imageUrl} 
              className="jumbotron vertical-center"
            >
                <div className="container">
                    <h1 className="display-4"><FormattedMessage id="product" /></h1>
                    <p className="lead"><FormattedMessage id="description" /></p>
                </div>
            </Wrapper>

            <Offer className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        {window.innerWidth > 576 && (<div className="col-md-1 col-sm-12">
                            <i className="far fa-clock"></i>
                        </div>)}
                        <div className="col-md-11 col-sm-12">
                            <h2><FormattedMessage id="offerHeader" /></h2>
                            <p className="lead">
                                <FormattedMessage id="offerText" /> 
                                {` ` + months[date().getMonth()] + ` ` + date().getUTCDate() + `th`}
                            </p>
                        </div>
                    </div>
                </div>
            </Offer>
        </>
    );
}

export default Jumbotron;