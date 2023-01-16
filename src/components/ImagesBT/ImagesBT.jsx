import React from 'react'
import Figure from 'react-bootstrap/Figure';

function ImagesBT({urlImg}) {
  return (
    <Figure>
        <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={urlImg}
        />
    </Figure>
  )
}

export default ImagesBT