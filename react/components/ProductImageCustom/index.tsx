import React from "react"
import { useProduct } from "vtex.product-context";
import "./global.css";

interface ProductAvailableProps {
  // children: any;
}

const ProductImageCustom: StorefrontFunctionComponent<
  ProductAvailableProps
> = () => {

  const productContextValue = useProduct();
  console.log("productContextValue")
  console.log(productContextValue)
  console.log(window.innerWidth)
  const isDesktop =  window.innerWidth >= 1280;
  const prodImages = productContextValue?.selectedItem?.images

  if(isDesktop){
    return (
      <div  className="images-container-desktop">
      <div className="grid-container">
      {prodImages?.map(el=>{
        return (<div className="grid-item"><img src={el.imageUrl}></img></div>)
      })}
            
        </div>
      </div>
      )
  }

  return (<>
  </>)

 
};

export default ProductImageCustom;
