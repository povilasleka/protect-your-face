import React from 'react'
import { SFooter } from './styles'
import useSiteMetadata from '../../hooks/use-sitemetadata'

const Footer = () => {
    const { title, description, author, footer: { authorWebsite } } = useSiteMetadata();

    return (
        <SFooter>
            <footer className="site-footer mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-8">
                            <h6>About</h6>
                            <p className="text-justify">{description}</p>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">
                                Copyright © {new Date().getFullYear()} All Rights Reserved by {title}.
                                Solution by <a href={authorWebsite}>{author}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </SFooter>
    );
}

export default Footer
