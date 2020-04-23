import React from 'react'
import { SFooter } from './styles'
import useSiteMetadata from '../../hooks/use-sitemetadata'
import visa from 'payment-icons/min/flat/visa.svg'
import mastercard from 'payment-icons/min/flat/mastercard.svg'
import maestro from 'payment-icons/min/flat/maestro.svg'
import amex from 'payment-icons/min/flat/amex.svg'
import { useIntl } from 'gatsby-plugin-intl'

const Footer = () => {
    const { title } = useSiteMetadata();
    const intl = useIntl();

    return (
        <SFooter>
            <footer className="site-footer">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-8 col-sm-12">
                            <p style={{ fontWeight: 'bold', fontSize: '1.1rem', display: 'inline', padding: '0 1rem 0 0' }}>{intl.formatMessage({ id: 'securePaymentLabel' })}</p>
                            {' '}<img src={visa} width="55px" style={{ marginRight: '.4rem' }} alt="Visa card" />
                            <img src={mastercard} width="55px" style={{ marginRight: '.4rem' }} alt="Mastercard" />
                            <img src={maestro} width="55px" style={{ marginRight: '.4rem' }} alt="Maestro card" />
                            <img src={amex} width="55px" style={{ marginRight: '.4rem' }} alt="Amex card" />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Contact</p>
                            <p>Minties str. 9 Vilnius, Lithuania.<br />
                            Email: info@shield4face.com</p>
                        </div>
                    </div>
                    <hr style={{ background: 'white' }} />
                    <div className="row mb-4">
                        <div className="col-md-12 col-sm-12">
                            <p className="copyright-text">
                                Copyright © {new Date().getFullYear()} {intl.formatMessage({ id: 'allRightsReservedByLabel' })} {title}.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </SFooter>
    );
}

export default Footer
