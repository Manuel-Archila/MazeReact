import React, { useEffect, useRef, useState } from "react";
import Personaje from "./Personaje.js";
import arbusto from '../assets/bush.png';
import piso from '../assets/piso.png';
import teso from '../assets/teso.png';
import idle from '../assets/Idle.gif';
import win from '../assets/Celebrando.gif';


const Laberinto = ({par, setPar, termi, change}) =>{

  const [personaje, setPersonaje] = useState([idle, "", 0])
  const y = useRef(1)
  const x = useRef(1)
  const move = useRef(true)

  useEffect(()=>{
      if(par!==null && move.current){
        const oldState = [...par]
        if(personaje[1] === "der" && (oldState[y.current][x.current+1] ===' ' || oldState[y.current][x.current+1] ==='g')){
          if(oldState[y.current][x.current+1] ==='g'){
            oldState[y.current][x.current] =' '
            oldState[y.current][x.current+1] ='p'
            x.current = x.current+1
            setPersonaje([win,"der",0])
            move.current = false
            termi.current = true
            change()
            
          }else{
            oldState[y.current][x.current] =' '
            oldState[y.current][x.current+1] ='p'
            x.current = x.current+1
          }
          setPar(oldState)

        }else if(personaje[1] === "arr" && (oldState[y.current-1][x.current] ===' '|| oldState[y.current-1][x.current] ==='g')){
          if(oldState[y.current][x.current+1] ==='g'){
            oldState[y.current][x.current] =' '
            oldState[y.current-1][x.current] ='p'
            y.current = y.current-1
            setPersonaje([win,"arr",0])
            move.current = false
            termi.current = true
            change()
          }else{
            oldState[y.current][x.current] =' '
            oldState[y.current-1][x.current] ='p'
            y.current = y.current-1
          }
          setPar(oldState)

        }else if(personaje[1] === "izq" && (oldState[y.current][x.current-1] ===' '|| oldState[y.current][x.current-1] ==='g')){
          if(oldState[y.current][x.current+1] ==='g'){
            oldState[y.current][x.current] =' '
            oldState[y.current][x.current-1] ='p'
            x.current = x.current-1
            setPersonaje([win,"izq",0])
            move.current = false
            termi.current = true
            change()
          }else{
            oldState[y.current][x.current] =' '
            oldState[y.current][x.current-1] ='p'
            x.current = x.current-1
          }
          setPar(oldState)

        }else if(personaje[1] === "abj" && (oldState[y.current+1][x.current] ===' '|| oldState[y.current+1][x.current] ==='g')){
          if(oldState[y.current+1][x.current] ==='g'){
            oldState[y.current][x.current] =' '
            oldState[y.current+1][x.current] ='p'
            y.current = y.current+1
            setPersonaje([win,"abj",0])
            move.current = false
            termi.current = true
            change()

          }else{
            oldState[y.current][x.current] =' '
            oldState[y.current+1][x.current] ='p'
            y.current = y.current+1
          }
          setPar(oldState)

        }else{
          setPar(oldState)
        }
      }
  },[personaje])


  return(

    <div css ={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <div css ={{ display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
      <Personaje setPerso={setPersonaje} perso={personaje}/>
      {
        par.map((row, index1) =>{
          return(
            <div key = {index1} css ={{
              display:'flex',
              flexDirection:'row',
            }}>
              {
                row.map((figura, index2) =>{
                  if(figura === 'p'){
                    return (
                    <div key = {index2} css = {{backgroundImage:`url(${personaje[0]})`, height: '40px', width:'40px', backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundColor:'#ffd8a0'}}>
                    </div>
                    )
                  }else if(figura === 'g'){
                    return <div key = {index2} css = {{backgroundImage:`url(${teso})`, height: '40px', width:'40px', backgroundSize:'100% 100%', backgroundRepeat:'no-repeat'}}/> 
                  }else if( figura === '+' || figura === '-' || figura ==='|'){
                    return <div key = {index2} css = {{backgroundImage:`url(${arbusto})`, height: '40px', width:'40px', backgroundSize:'100% 100%', backgroundRepeat:'no-repeat'}}/>
                  }else{
                    return <div key = {index2} css = {{backgroundImage:`url(${piso})`, height: '40px', width:'40px', backgroundSize:'contain'}}/>
                  }
                })
              }
        </div>
        )})
      }
      </div>
    </div>
  )
}

export default Laberinto