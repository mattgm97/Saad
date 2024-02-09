/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'

import './global.css'

interface ProductAvailableProps {
  // children: any;
}

const FreteGratisCounter: StorefrontFunctionComponent<ProductAvailableProps> = () => {
  const { orderForm } = useOrderForm()
  const [freeShipping, setFreeShipping] = useState(false)

  const re = /\b(\d+)(\d{2})\b/
  const subst = '$1,$2'

  useEffect(() => {
    setTimeout(()=>{
      if (orderForm.totalizers[0].value > 90000) {
        setFreeShipping(true)
      }
    }, 3000)
  
  }, [orderForm])

  let howMuchUntilFreeShipping: any = 90000 - orderForm.totalizers[0].value

  howMuchUntilFreeShipping = howMuchUntilFreeShipping
    .toString()
    .replace(re, subst)

  if (freeShipping) {
    return (
      <div className="howMuchUntilFree">
        <img
          src="https://saad.vtexassets.com/assets/vtex.file-manager-graphql/images/936e78c9-6c71-4674-b900-aa22829dbbfe___fc2ac29509e91096b0009d03b9acc5b4.png"
          alt="freeShipping"
        />
        <p>Você ganhou frete é grátis!</p>
      </div>
    )
  }

  return (
    <div className="howMuchUntilFree">
      <img
        src="https://saad.vtexassets.com/assets/vtex.file-manager-graphql/images/936e78c9-6c71-4674-b900-aa22829dbbfe___fc2ac29509e91096b0009d03b9acc5b4.png"
        alt="freeShipping"
      />
      <p>Com mais R${howMuchUntilFreeShipping} o frete é grátis!</p>
    </div>
  )
}

export default FreteGratisCounter