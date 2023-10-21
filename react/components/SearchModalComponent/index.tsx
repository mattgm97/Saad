import React, { useState } from 'react'
import './global.css'
import { ExtensionPoint } from 'vtex.render-runtime'

const SearchModalComponent: StorefrontFunctionComponent = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="searchCustom">
        <span
          onClick={() => {
            setShowModal(true)
          }}
        >
          {!showModal && (
            <>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5563 21.5844C20.6243 21.6524 20.7344 21.6524 20.8023 21.5844L21.623 20.7638C21.6556 20.7311 21.6739 20.6869 21.6739 20.6408C21.6739 20.5946 21.6556 20.5504 21.623 20.5178L14.4748 13.3696C14.9056 12.8427 15.2554 12.2214 15.5256 11.5079C15.8185 10.7344 15.965 9.9338 15.965 9.10697C15.965 7.20449 15.3033 5.58797 13.9816 4.26811C12.6601 2.94832 11.0433 2.28748 9.14191 2.28748C7.24043 2.28748 5.62476 2.94924 4.3056 4.27088C2.98652 5.59244 2.32606 7.20922 2.32606 9.11059C2.32606 11.012 2.98691 12.6276 4.30682 13.9468C5.62671 15.266 7.24318 15.9265 9.14553 15.9265C9.92779 15.9265 10.7051 15.7873 11.4767 15.5104C12.1963 15.252 12.8403 14.8939 13.4074 14.4355L20.5563 21.5844ZM12.9195 5.33296L13.0425 5.20997L12.9195 5.33296C13.9452 6.35864 14.4575 7.61298 14.4575 9.10697C14.4575 10.601 13.9452 11.8553 12.9195 12.881C11.8939 13.9067 10.6395 14.4189 9.14553 14.4189C7.65154 14.4189 6.39721 13.9067 5.37153 12.881C4.34588 11.8553 3.83359 10.601 3.83359 9.10697C3.83359 7.61297 4.34588 6.35864 5.37153 5.33296C6.39721 4.30729 7.65154 3.79499 9.14553 3.79499C10.6395 3.79499 11.8939 4.30729 12.9195 5.33296Z"
                  fill="#292929"
                  stroke="#292929"
                  stroke-width="0.347887"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Busca</span>
            </>
          )}

          {showModal && (
            <span
              onClick={e => {
                e.stopPropagation()
                setShowModal(false)
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.29341 18.2931L10.5864 12.0001L4.29341 5.70708C4.11125 5.51848 4.01045 5.26588 4.01273 5.00368C4.01501 4.74148 4.12018 4.49067 4.30559 4.30526C4.491 4.11985 4.74181 4.01469 5.00401 4.01241C5.2662 4.01013 5.5188 4.11092 5.70741 4.29308L12.0004 10.5861L18.2934 4.29308C18.3857 4.19757 18.496 4.12139 18.618 4.06898C18.74 4.01657 18.8712 3.98898 19.004 3.98783C19.1368 3.98668 19.2685 4.01198 19.3914 4.06226C19.5143 4.11254 19.6259 4.18679 19.7198 4.28069C19.8137 4.37458 19.8879 4.48623 19.9382 4.60913C19.9885 4.73202 20.0138 4.8637 20.0127 4.99648C20.0115 5.12926 19.9839 5.26048 19.9315 5.38249C19.8791 5.50449 19.8029 5.61483 19.7074 5.70708L13.4144 12.0001L19.7074 18.2931C19.8029 18.3853 19.8791 18.4957 19.9315 18.6177C19.9839 18.7397 20.0115 18.8709 20.0127 19.0037C20.0138 19.1365 19.9885 19.2681 19.9382 19.391C19.8879 19.5139 19.8137 19.6256 19.7198 19.7195C19.6259 19.8134 19.5143 19.8876 19.3914 19.9379C19.2685 19.9882 19.1368 20.0135 19.004 20.0123C18.8712 20.0112 18.74 19.9836 18.618 19.9312C18.496 19.8788 18.3857 19.8026 18.2934 19.7071L12.0004 13.4141L5.70741 19.7071C5.5188 19.8892 5.2662 19.99 5.00401 19.9878C4.74181 19.9855 4.491 19.8803 4.30559 19.6949C4.12018 19.5095 4.01501 19.2587 4.01273 18.9965C4.01045 18.7343 4.11125 18.4817 4.29341 18.2931Z"
                  fill="#292929"
                />
              </svg>

              <span>Fechar</span>
            </span>
          )}
        </span>
      </div>

      {showModal && (
        <div className="search-container">
          <ExtensionPoint id="search-bar" />
        </div>
      )}

      {/* <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        centered
        responsiveFullScreen
        showCloseIcon={false}
      >
        <div className="flex modal-custom-body">
            <ExtensionPoint id="search-bar"/>
        </div>
      </Modal>*/}
    </>
  )
}

export default SearchModalComponent
