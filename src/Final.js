import React, { useEffect, useRef, useState } from "react";
import finalin from '../assets/finalin.png';
import recuperado from '../assets/Recuperado.png'




const Final = () =>{


  return(
    <div css={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <div css={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'rgba(255,255,255,0.4)', height:'500px', width:'600px',flexDirection:'column'}}>
        <div css={{backgroundImage:`url(${recuperado})`, backgroundRepeat:'no-repeat', backgroundSize:'contain', height:'40px', width:'400px'}}/>
        <div css={{backgroundImage:`url(${finalin})`, backgroundRepeat:'no-repeat', backgroundSize:'contain', height:'100px', width:'100px'}}/>
        <button onClick={()=>{window.location.reload()}} css={{borderRadius:'10px'}}>Reiniciar</button>
      </div>
    </div>
  )
}

export default Final