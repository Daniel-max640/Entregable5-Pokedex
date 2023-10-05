import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    

    const inputTrainer = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()
    
    const handleTrainer = e => {
        e.preventDefault()
        dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
        navigate('/pokedex')
    }

  return (
    <div className="principal">
    <div className="center-content">
      <img
        className="centered-image"
        src="/Pokédex_3D.png"
        alt="Banner"
      />
      <h2>Hi Trainer</h2>
      <p>To start, please, enter your trainer name</p>
      <form onSubmit={handleTrainer}>
        <input className="input-card" ref={inputTrainer} type="text" />
        <button className="button-card">Comenzar!</button>
      </form>
    </div>
  </div>
  )
}

export default HomePage
