import React from 'react'
import { useProduct } from 'vtex.product-context'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './global.css'
interface ProductAvailableProps {
  // children: any;
}

const ProductImageCustom: StorefrontFunctionComponent<ProductAvailableProps> = () => {
  const productContextValue = useProduct()
  const prodImages = productContextValue?.selectedItem?.images
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  }

  return (
    <>
      <div className="images-container-desktop">
        <div className="grid-container">
          {prodImages?.map(el => {
            return (
              <div key={el.imageId} className="grid-item">
                <img src={el.imageUrl} alt={el.imageLabel} />
              </div>
            )
          })}
        </div>
      </div>

      <div className="images-container-mob">
        <Slider {...settings}>
          {prodImages?.map(el => {
            return (
              <div key={el.imageId} className="slider-itemimg">
                <img src={el.imageUrl} alt={el.imageLabel} />
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default ProductImageCustom
