import React, { useState } from 'react'
import { Modal } from 'vtex.styleguide'
import { useProduct } from 'vtex.product-context'
import './global.css'

interface ProductAvailableProps {
  // children: any;
}

const PaymentModals: StorefrontFunctionComponent<ProductAvailableProps> = () => {
  const [ShowModal, setShowModal] = useState(false)
  const [tabstate, setTabstate] = useState(1)
  const [cartao, setCartao] = useState('Visa')
  const productInfo = useProduct()

  const cartaoInfo = productInfo?.product?.items[0].sellers[0].commertialOffer.Installments.filter(
    el => el.Name.includes(cartao)
  )

  const createContent = (tabstate: number) => {
    if (tabstate === 2) {
      let value = cartaoInfo?.map(el =>
        el.Value.toFixed(2).toString().replace('.', ',')
      )
      return (
        <div className="boleto">
          <p>
            <b>R${value}</b> no boleto bancário
          </p>
          <p>
            O boleto será gerado após a finalização de sua compra. Você pode
            gerar o boleto com todas as informações necessárias, como valor e
            data de vencimento. Em seguida, pague o boleto em uma agência
            bancária, lotérica ou pelo internet banking. Lembre-se de pagar
            antes da data de vencimento.
          </p>
        </div>
      )
    }

    if (tabstate === 3) {
      let value = cartaoInfo?.map(el =>
        el.Value.toFixed(2).toString().replace('.', ',')
      )
      return (
        <div className="pix">
          <p>
            <b>R${value}</b> no Pix
          </p>
          <p>
            {' '}
            Desconto de 15% para pagamento à vista já aplicado neste valor.
          </p>
          <p>
            Após a finalização da compra, um QR code será exibido e você poderá
            pagar com o Pix do seu banco;
          </p>
          <p>
            Não faça deposito ou transferência entre contas a não ser via Pix.
          </p>
        </div>
      )
    }

    return (
      <div className="tablist-content">
        <div className="installments">
          <div className="table">
            {cartaoInfo?.map((el, index) => {
              let installmentValue = el.Value.toFixed(2)
                .toString()
                .replace('.', ',')
              let total = el.TotalValuePlusInterestRate.toFixed(2)
                .toString()
                .replace('.', ',')
              return (
                <div className="row" key={index}>
                  <span>
                    {index + 1}x de R${installmentValue}{' '}
                    {el.InterestRate == 0 ? 'sem juros' : ''}
                  </span>{' '}
                  <span>Total R${total}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="acceptedPayments">
          <ul>
            <li
              onClick={() => {
                setCartao('Visa')
              }}
            >
              <img
                src="https://saad.vtexassets.com/assets/vtex.file-manager-graphql/images/4d623898-949b-4cfa-a29c-4bfc2ab08a04___4b495bd5735b5b676ac0e4ec41c02c51.svg"
                alt="Visa"
              />
              <span>Visa</span>
            </li>
            <li
              onClick={() => {
                setCartao('Mastercard')
              }}
            >
              <img
                src="https://saad.vtexassets.com/assets/vtex.file-manager-graphql/images/969244e9-aa94-4458-919e-c33ca642c1c1___fa05c96620a657f32b54b05791f52192.svg"
                alt="Mastercard"
              />
              <span>Mastercard</span>
            </li>
            <li
              onClick={() => {
                setCartao('Elo')
              }}
            >
              <img
                src="https://saad.vtexassets.com/assets/vtex.file-manager-graphql/images/9e5bfa70-913b-4162-ad8a-5bd7e7c5acbe___fc112a37aec6dfca598c8a3e8ec802d4.svg"
                alt="Discover"
              />
              <span>Discover</span>
            </li>
            <li
              onClick={() => {
                setCartao('American Express')
              }}
            >
              <img
                src="https://saad.vtexassets.com/assets/vtex.file-manager-graphql/images/c1915303-7cc7-4b83-b10c-42ab4061eafd___1ab63934c6ce7dcd0685b08beaabae75.svg"
                alt="American Express"
              />
              <span>American Express</span>
            </li>
            <li
              onClick={() => {
                setCartao('Diners')
              }}
            >
              <img
                src="https://saad.vtexassets.com/assets/vtex.file-manager-graphql/images/09b940be-c8a2-4bd2-8227-9e4cd1dcc309___00409ebc5c87bef89b1dc83d45791512.svg"
                alt="Dines Club"
              />
              <span>Diners Club</span>
            </li>
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
          setShowModal(false)
        }}
        centered
        responsiveFullScreen
        showTopBar
        title="Mais formas de pagamento"
      >
        <div className="content">
          <ul className="tablist">
            <li
              className={tabstate == 1 ? 'active' : ''}
              onClick={() => {
                setTabstate(1)
                setCartao('Visa')
              }}
            >
              Cartão de crédito
            </li>
            <li
              className={tabstate == 2 ? 'active' : ''}
              onClick={() => {
                setTabstate(2)
                setCartao('Boleto')
              }}
            >
              Boleto bancário
            </li>
            <li
              className={tabstate == 3 ? 'active' : ''}
              onClick={() => {
                setTabstate(3)
                setCartao('Pix')
              }}
            >
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
