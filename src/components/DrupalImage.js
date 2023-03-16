import React from "react"
import {GatsbyImage, getImage } from "gatsby-plugin-image"

const DrupalImage = ({ field_image, width=600, height=600 }) => {
    const image = getImage(field_image.localFile)
    let imageTag
    if (field_image.localFile.extension === 'gif') {
        imageTag = <img src={field_image.localFile.publicURL} alt={field_image.alt} width={width} height={height}/>
    
    } else {
        imageTag = <GatsbyImage image={image} alt={field_image.alt} style={{ width, height }} />
    }
    
    return (
        <div>
        {imageTag}
        </div>
    )
}

export default DrupalImage