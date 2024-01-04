import React, { useState } from 'react'
import './global.css'

interface ProductAvailableProps {
  // children: any;
}


const ClubeSaadForm: StorefrontFunctionComponent<ProductAvailableProps> = () => {

 const [sexo, setSexo] = useState("feminino")
 const [nome,setNome]= useState("")
 const [email,setEmail]= useState("")
 const [telefone,setTelefone]= useState("")
 const [aniversario,setAniversario]= useState("")
 const [agree,setAgree]= useState(false)

const submitform = (e:any)=>{
  e.preventDefault()


  if(!agree){
    alert("Aceite a política de privacidade antes de enviar seus dados");
    return;
  }

fetch(`/api/dataentities/CB/documents/`,{
  method:"PATCH",
  headers: {
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    type: sexo,
    name:nome,
    mail:email,
    phone:telefone,
    birthdayMonth:aniversario
  })
})
.then(_e=>(alert("Seus dados foram registrados!")))
.catch(_e=>(alert("Tivemos um problema para registrar seus dados, tente novamente mais tarde")))
}

function mphone(v:string) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}

const telefoneHandler = (e:any)=>{
  let val = e.target.value;
  val = val.replace(/ /gm, '');
  console.log(mphone(val))
  setTelefone(mphone(val))
}
  return (
    
     <form onSubmit={submitform}>
    <fieldset className='radios'>
    <div className="container">
   
    <input type="radio" id="feminino" name="feminino" value="feminino" checked={sexo ==="feminino"} onClick={()=>setSexo("feminino")}/>
    <span className="checkmark"></span>
    <label htmlFor="feminino">Feminino</label>
  </div>

  <div className="container">
  
    <input type="radio" id="masculino" name="masculino" value="masculino" checked={sexo ==="masculino"} onClick={()=>setSexo("masculino")}/>
    <span className="checkmark"></span>
    <label htmlFor="masculino">Masculino</label>
  </div>

  <div className="container">
  
    <input type="radio" id="outro" name="outro" value="outro" checked={sexo ==="outro"} onClick={()=>setSexo("outro")}/>
    <span className="checkmark"></span>
    <label htmlFor="outro">Outro</label>
  </div>
  </fieldset>
    <fieldset className='singleinput'>
      <label htmlFor="nome">Nome*</label>
      <input type="text" id="nome" name="nome" placeholder="Digite o seu nome" required onChange={(e)=>setNome(e.target.value)}/>
    </fieldset>
    <fieldset className='singleinput'>
      <label htmlFor="email">E-mail*</label>
      <input type="email" id="email" name="email" placeholder="Digite o seu e-mail" required onChange={(e)=>setEmail(e.target.value)}/>
    </fieldset>
    <fieldset className='singleinput'>
      <label htmlFor="telefone">Telefone*</label>
      <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" value={telefone}  required onChange={telefoneHandler}/>
    </fieldset>
    <fieldset className='singleinput'>

      <label htmlFor="aniversario">Mês de Aniversário</label>
      <select name="aniversario" id="aniversario" onChange={(e)=>setAniversario(e.target.value)}>
      <option value="" disabled selected>Selecione</option>
        <option value="Janeiro">Janeiro</option>
        <option value="Fevereiro">Fevereiro</option>
        <option value="Março">Março</option>
        <option value="Abril">Abril</option>
        <option value="Maio">Maio</option>
        <option value="Junho">Junho</option>
        <option value="Julho">Julho</option>
        <option value="Agosto">Agosto</option>
        <option value="Setembro">Setembro</option>
        <option value="Outubro">Outubro</option>
        <option value="Novembro">Novembro</option>
        <option value="Dezembro">Dezembro</option>
      </select>
    </fieldset>
    <fieldset>
    <input type="submit" value="Cadastrar-se"/>
    </fieldset>
    <fieldset className="iagreefield">
    <input type="checkbox" id="iagree" name="iagree" checked={agree== true} onClick={()=>setAgree(prev=>!prev)}/>
    <span className="checkmark agree"></span>
    <label htmlFor="iagree">Ao aceitar, você concorda com nossa política de privacidade e o uso de suas informações para o envio de ofertas</label>
    </fieldset>
  
  </form>
    
  )
}

export default ClubeSaadForm
