import { React } from 'react'
import PropTypes from 'prop-types'
import title from '../assets/Title.png'

const Inicio = ({
  setAlto,
  setAncho,
  setGen,
  setPar,
  ancho,
  alto,
}) => {
  const fetchLaberinto = async () => {
    const response = await fetch(`https://maze.juanelcaballo.club/?type=json&w=${ancho}&h=${alto}`).then((res) => res.json()).then((responseInJSON) => responseInJSON)
    setPar([...response])
  }

  return (
    <div css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
    >
      <div css={{
        height: '500px',
        width: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(255,255,255,0.4)',
      }}
      >
        <div>
          <div css={{
            backgroundImage: `url(${title})`,
            backgroundSize: 'contain',
            height: '100px',
            width: '500px',
            backgroundRepeat: 'no-repeat',
          }}
          />
        </div>
        <div css={{
          display: 'flex',
          flexDirection: 'column',
          height: '150px',
          width: '300px',
          justifyContent: 'space-around',
        }}
        >
          <p>Ingrese el las dimensiones del laberinto:</p>
          <input placeholder="Ingrese el alto del laberinto" onChange={(e) => { setAlto(e.target.value) }} />
          <input placeholder="Ingrese el ancho del laberinto" onChange={(e) => { setAncho(e.target.value) }} />
          <button type="submit" onClick={() => { setGen(true); fetchLaberinto() }}>Generar</button>
        </div>
      </div>
    </div>
  )
}

Inicio.propTypes = {
  setAlto: PropTypes.func,
  setAncho: PropTypes.func,
  setGen: PropTypes.func,
  setPar: PropTypes.func,
  ancho: PropTypes.string,
  alto: PropTypes.string,
}

export default Inicio
