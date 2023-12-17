import React, { useState } from 'react'
import { Modal } from "vtex.styleguide";
import { useProduct } from "vtex.product-context";
import './global.css'

interface ProductAvailableProps {
  // children: any;
}


const PaymentModals: StorefrontFunctionComponent<ProductAvailableProps> = () => {
  const [ShowModal, setShowModal] = useState(false)
  const [tabstate, setTabstate] = useState(1)
  const [cartao, setCartao] = useState("Visa")
  const productInfo = useProduct();

  const cartaoInfo = productInfo?.product?.items[0].sellers[0].commertialOffer.Installments.filter(el=>el.Name.includes(cartao))
  console.log(cartaoInfo)

  
const createContent = (tabstate:number)=> {
  if(tabstate === 2){

  }

  if(tabstate === 3){

  }

return(
  <div className="tablist-content">
         <div className="installments">
        <div className="table">
          {cartaoInfo?.map((el, index)=>{
            let installmentValue = el.Value.toFixed(2).toString().replace(".", ",");
            let total = el.TotalValuePlusInterestRate.toFixed(2).toString().replace(".", ",");
            return (
              <div className='row'><span>{index+1}x de R${installmentValue} {el.InterestRate == 0? "sem juros": ""}</span> <span>Total R${total}</span></div>
            )
          })}
        </div>
         </div>

         <div className="acceptedPayments">
          <ul>
            <li onClick={()=>{setCartao("Visa")}}>
              <img src="https://saad.vtexassets.com/assets/vtex.file-manager-graphql/images/dad41c60-d92d-49ec-b8a7-5d383af7fb39___604ecf6f4627b9a21cc570d08d76d713.svg" alt="Visa" />
              <span>Visa</span>
            </li>
            <li onClick={()=>{setCartao("Mastercard")}}>
              <img src="https://saad.vtexassets.com/assets/vtex.file-manager-graphql/images/2f80f507-ae99-40b2-b86c-bae56f1c6ee6___ca68fd446e2e5fa1806d56024e4283d0.svg" alt="Mastercard" />
              <span>Mastercard</span>
            </li>
            <li onClick={()=>{setCartao("Elo")}}>
              <img src="https://saad.vtexassets.com/assets/vtex.file-manager-graphql/images/d71f057e-1063-40ec-a815-5baa47cebad7___d05f625a98af6df63c61b8fc27ab0475.svg" alt="Discover" />
              <span>Discover</span>
            </li>
            <li onClick={()=>{setCartao("American Express")}}>
              <img src="https://saad.vtexassets.com/assets/vtex.file-manager-graphql/images/0f1ab4bd-bc0d-4fca-b06f-4c039c0c1837___e0f643c8e708b3b97f814cfbf94ab598.svg" alt="American Express" />
              <span>American Express</span>
            </li>
            <li onClick={()=>{setCartao("Diners")}}>
              <img src="https://saad.vtexassets.com/assets/vtex.file-manager-graphql/images/20b924b1-791e-47ab-9493-f65b80143a58___16f5b602f4d1d1da783f6b7bec5e6783.svg" alt="Dines Club" />
              <span>Diners Club</span>
            </li >
          </ul>
         </div>
    </div>
)
  
}

  return (
    <>
      <div className="paymentBTN">
        <span
          onClick={() => {
            setShowModal(true)
          }}
        >
          Mais formas de pagamento
        </span>
      </div>

      <Modal
          isOpen={ShowModal}
          onClose={() => {
            setShowModal(false);
          }}
          centered
          responsiveFullScreen
          showTopBar
          title="Mais formas de pagamento"
      >
   
   <div className="content">
    <ul className='tablist'>
      <li className={tabstate == 1? "active": ""} onClick={()=>{setTabstate(1)}}>
        Cartão de crédito
      </li>
      <li className={tabstate == 2? "active": ""} onClick={()=>{setTabstate(2)}}>
        Boleto bancário
      </li>
      <li className={tabstate == 3? "active": ""} onClick={()=>{setTabstate(3)}}>
        Pix
      </li>
    </ul>
 
          {createContent(tabstate)}
    
   </div>
       
      </Modal>
    </>
  )
}

export default PaymentModals
