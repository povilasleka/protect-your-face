import React from 'react'
import { Wrapper, Offer } from './styles'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'
import { useMediaQuery } from 'react-responsive'

const date = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);

    return date;
}

const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

const Jumbotron = ({ imageUrl, imageUrlMobile }) => {
    const intl = useIntl();
    const isMobile = useMediaQuery({ maxDeviceWidth: 576 });

    return (
        <>
            <Wrapper
                fluid={isMobile ? imageUrlMobile : imageUrl}
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
                        {!isMobile && (<div className="col-md-1 col-sm-12">
                            <i className="far fa-clock"></i>
                        </div>)}

                        <div className="col-md-11 col-sm-12">
                            <h2><FormattedMessage id="offerHeader" /></h2>
                            <p className="lead">
                                <FormattedMessage id="offerText" />
                                {` ` + date().getFullYear() + `/` + months[date().getMonth()] + `/` + date().getUTCDate()}
                            </p>
                        </div>
                    </div>
                </div>
            </Offer>
        </>
    );
}

export default Jumbotron;