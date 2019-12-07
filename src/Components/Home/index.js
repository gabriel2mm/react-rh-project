import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './home.css';

export default function Home() {

  const dispatch = useDispatch();
  useEffect(() => {  
  }, [])
  
  function handleLogout(event) {
    event.preventDefault();
    dispatch({ type: "LOGOUT" });
  }

  return (
    <>
      <h1>Você está logado</h1>
      <span onClick={handleLogout}>Deslogar</span>
    </>
  );
}
