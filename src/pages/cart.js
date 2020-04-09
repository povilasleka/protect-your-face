import React from 'react'
import Cart from '../components/Cart'
import useKeywords from '../hooks/use-keywords'
import SEO from '../components/seo'

export default () => {
    const keywords = useKeywords();

    return (
        <>
            <SEO title="Cart" keywords={keywords.indexPage} />
            <div className="container">
                <Cart />
            </div>
        </>
    );
}