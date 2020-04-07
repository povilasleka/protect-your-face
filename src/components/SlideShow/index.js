import React, { useState, useEffect } from 'react'
import BackgroundImage from 'gatsby-background-image'

import { RightButton, LeftButton, Button } from './styles'
import Img from 'gatsby-image'

const SlideShow = ({ images, smallVersion }) => {
    const [index, setIndex] = useState(0);
    const length = images.length - 1;

    const handleNext = () => {
        index === length ? setIndex(0) : setIndex(index + 1);
    }

    const handlePrevious = () => {
        index === 0 ? setIndex(length) : setIndex(index - 1);
        console.log('prev');
    }

    return (
        <>
            <BackgroundImage style={{ height: '400px' }}
                fluid={images[index].localFile.childImageSharp.fluid}
            >
            <LeftButton onClick={handlePrevious}><i className="fas fa-angle-left"></i></LeftButton>
            <RightButton onClick={handleNext}><i className="fas fa-angle-right"></i></RightButton>
            </BackgroundImage>
            { !smallVersion && (
            <div className="row" style={{ marginLeft: '0px', marginTop: '1rem' }}>
                {images.map((image, i) => (
                    <Button onClick={() => setIndex(i)} style={{ width: '50px', padding: '0', marginRight: '2px', borderRadius: '5px'  }}>
                    <Img fluid={image.localFile.childImageSharp.fluid} 
                         style={{ width: '50px', border: '1px solid lightblue'}} 
                    />
                    </Button>
                ))}
            </div>
            )}
        </>
    );
}

export default SlideShow;