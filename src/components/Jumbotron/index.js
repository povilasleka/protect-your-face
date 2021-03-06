import React from 'react'
import { Wrapper, Offer } from './styles'
import { useIntl, FormattedMessage, FormattedDate } from 'gatsby-plugin-intl'
import { useMediaQuery } from 'react-responsive'

const date = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);

    return date;
}

const Jumbotron = ({ imageUrl, imageUrlMobile }) => {
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
                            <i className="far fa-clock" />
                        </div>)}

                        <div className="col-md-11 col-sm-12">
                            <h2><FormattedMessage id="offerHeader" /></h2>
                            <p className="lead">
                                <FormattedMessage id="offerText" />
                                {' '}
                                <FormattedDate value={date()}
                                               year="numeric"
                                               month="long"
                                               day="2-digit"
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </Offer>
        </>
    );
}

export default Jumbotron;