import { useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

   const [mensaje, setMensaje] = useState("")
   const [nombre, setNombre] = useState("")
   const [cantidad, setCantidad] = useState("")
   const [categoria, setCategoria] = useState("")

    const ocultarModal = () => {
      setAnimarModal(false)

      setTimeout(() => {
        setModal(false)
      }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
     
        if([nombre, cantidad, categoria].includes('')) {

          setMensaje("Falló la validación")

          setTimeout(() => {
            setMensaje("")
          }, 3000);

          return;
        }

        setMensaje('')

        guardarGasto({nombre, cantidad, categoria})

    }

  return (
    <div className='modal'>
     <div className='cerrar-modal'>
        <img
         src={CerrarBtn}
         alt="Cerrar Modal"
         onClick={ocultarModal}
         />
     </div>

     <form onSubmit={handleSubmit} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>

        <div className='campo'>
          <label htmlFor="nombre">Nombre gasto</label>
          <input
            id='nombre'
            type="text"
            placeholder='Añade el Nombre del Gasto'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
        </div>

        <div className='campo'>
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id='cantidad'
            type="number"
            placeholder='Añade La Cantidad del gasto'
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
            />
        </div>


        <div className='campo'>
          <label htmlFor="categoria">Categoría</label>

          <select 
            id="categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
            >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>

          </select>
       
        </div>

        <input 
          type="submit"
          value="Añadir Gasto"
        />

    {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

     </form>

    </div>
  )
}

export default Modal