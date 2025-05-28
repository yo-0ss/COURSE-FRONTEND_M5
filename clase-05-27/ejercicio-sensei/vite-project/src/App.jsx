import { useEffect, useState } from 'react'
import './App.css'


function App() {
  
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  const [ready, setReady] = useState(false)
  const [second, setSeconds] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('Componente Montado');
    
    return()=>{
      console.log('Componente Desmontado');
      
    }
  }, [])

  useEffect(()=> {
    console.log('Contador actualizado: ', count);
    
  }, [count])

  useEffect(() => {
    const interval = setInterval(()=>{
      setSeconds((s)=> s+1)
    },1000)

    return ()=> clearInterval(interval)
  }, [])

  useEffect(()=> {
    fetch('https://ghibliapi.vercel.app/films')
    .then((res)=>res.json())
    .then((data) => setUsers(data))
  }, [])

  return (
    <>
      <p>{count}</p>
      <button onClick={()=> setCount(count+1)}> Incrementar</button> <br/> <br/>

      <button onClick={()=> setShow(!show)}>
        {show ? 'hide' : 'show'} Message
      </button> <br/>

      {show && <p> Hola, soy un mensaje oculto.</p>} <br/>

      <label>
        <input type="checkbox" checked={ready} onChange={()=> setReady(!ready)}/>
        Aceptas Terminos y Condiciones para trabajar con nosotros.
      </label><br/>
      {ready && <p>Gracias por aceptar.</p>}<br/>

      <p>Han pasado {second} segundos</p>

      <h2>Lista de Peliculas</h2>
      <ul>
        {users.map((user)=>(
          <li key={user.id}><h2>{user.title}</h2>
          <img src={user.image} alt={user.title} width="50" /></li>
        ))}
      </ul>
    </>
  )
}

export default App
