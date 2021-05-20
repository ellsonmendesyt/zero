import React from 'react';
import Table from './Table';
import useFetch from './useFetch';
import Hero from './Hero';
const Home = () => {
  const url='http://localhost:8000/planos';
  const {data:planos,carregando,erro} =useFetch(url);

    return (
        <div className="container">
            { erro && <div className="alert alert-danger"> {erro}</div>}
            { carregando && <div> Carregando...</div>}
           {planos &&  <Table planos={planos}/>} 
        </div>
     );
}
 
 export default Home;