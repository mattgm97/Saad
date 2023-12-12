import React from 'react'
import {useOrderForm} from 'vtex.order-manager/OrderForm'

import './global.css'

interface ProductAvailableProps {
  // children: any;
}

const FreteGratisCounter: StorefrontFunctionComponent<ProductAvailableProps> = () => {

  const data = useOrderForm();

  console.log(data)
  
  return <></>
}

export default FreteGratisCounter
