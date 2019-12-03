import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './home.css';

export default function Home() {

  const user = useSelector(state => state.user)

  useEffect(() => {
    console.log(user);
  }, [user]);
  
  return (
    <>
        <h1>Você está logado</h1>
    </>
  );
}
