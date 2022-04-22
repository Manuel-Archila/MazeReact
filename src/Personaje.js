import React, {useEffect, useRef, useState } from "react";

import arriba from "../assets/Arriba.gif";
import abajo from '../assets/Abajo.gif';
import derecha from '../assets/Derecha.gif';
import izquierda from '../assets/Izquierda.gif';
import win from '../assets/Celebrando.gif';

const Personaje = ({setPerso, perso}) =>{
  const contador = useRef(0)


  useEffect(() =>{
      window.addEventListener('keydown', (e) =>{
        contador.current = contador.current+1

        if (e.key ==="a" || e.key ==="ArrowLeft"){
          setPerso([izquierda, 'izq', contador.current])

        }else if(e.key === "s" || e.key ==="ArrowDown"){
          setPerso([abajo, 'abj', contador.current])

        }else if(e.key === "d" || e.key ==="ArrowRight"){
          setPerso([derecha, 'der', contador.current])

        }else if(e.key==="w" || e.key==="ArrowUp"){
          setPerso([arriba, 'arr', contador.current])
        }else{
          setPerso([perso[0], 'a', contador.current])
        }
      },)
  },[])

  return(
    <div> 
    </div>
  )
}


export default Personaje
