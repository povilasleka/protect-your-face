import React from 'react'
import { SFooter } from './styles'
import useSiteMetadata from '../../hooks/use-sitemetadata'

const Footer = () => {
    const { title, author, footer: { authorWebsite } } = useSiteMetadata();

    return (
        <SFooter>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <p className="copyright-text">
                                Copyright © {new Date().getFullYear()} All Rights Reserved by {title}.
                                {/*Solution by <a href={authorWebsite}>{author}</a>*/}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </SFooter>
    );
}

export default Footer
