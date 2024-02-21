import React from "react";
import "./global.css";
interface ProductAvailableProps {
  // children: any;
}

const WhatsappBTN: StorefrontFunctionComponent<ProductAvailableProps> = () => {
  return (
    <>
      <a href="https://api.whatsapp.com/send?phone=5511957702046&text=Ol%C3%A1,Saad" id="btn-wpp" target="_blank">
        <img src="https://saad.vtexassets.com/assets/vtex.file-manager-graphql/images/a2bc538f-7f2f-4b7e-b872-5689deec4e4a___4025a2c2826def311c3b73dfa38a9b20.svg" alt="Whatsapp" />
      </a>
    </>
  );
};

export default WhatsappBTN;