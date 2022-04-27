// eslint-disable-next-line object-curly-newline
import { React, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Inicio from './Inicio.js'
import Laberinto from './Laberinto.js'
import musicon from '../assets/musicon.mp3'
import Final from './Final.js'
import fondo from '../assets/fondo.jpg'

const App = () => {
  const [altura, setAltura] = useState(0)
  const [anchura, setAnchura] = useState(0)
  const [generado, setGenerado] = useState(false)
  const [partes, setPartes] = useState([])
  const song = useRef(new Audio(musicon))
  const terminado = useRef(false)
  const [mostrar, setMostrar] = useState(false)

  useEffect(() => {
    song.current.muted = false
    song.current.load()
    song.current.play()
    song.current.loop = true
    song.current.volume = 0.20

    if (terminado.current === true) {
      setTimeout(() => {
        setMostrar(true)
      }, 3000)
    }
  }, [])

  const cambio = () => {
    if (terminado.current === true) {
      setTimeout(() => {
        setMostrar(true)
      }, 3000)
    }
  }

  return (
    <div css={{
      backgroundImage: `url(${fondo})`,
      height: '100vh',
      width: '100vw',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'colum',
    }}
    >
      {
      mostrar ? <Final />
        : !generado
          ? (
            <Inicio
              setAlto={setAltura}
              setAncho={setAnchura}
              setGen={setGenerado}
              setPar={setPartes}
              ancho={anchura}
              alto={altura}
            />
          )
          : <Laberinto par={partes} setPar={setPartes} termi={terminado} change={cambio} />
    }
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
