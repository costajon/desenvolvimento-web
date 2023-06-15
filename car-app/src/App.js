import React, { useState, useEffect } from 'react';
import BarraPesquisa from './components/BarraPesquisa';
import ListaCarro from './components/ListaCarro';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  const [carros, setCarros] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    fetch('https://64870ab0beba6297278fc162.mockapi.io/api/v1/Carros')
      .then(response => response.json())
      .then(data => setCarros(data));
  }, []);

  const handleExcluir = id => {
    fetch(`https://64870ab0beba6297278fc162.mockapi.io/api/v1/Carros/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        // Remover o carro com o ID correspondente do estado 'carros'
        const novosCarros = carros.filter(carro => carro.id !== id);
        setCarros(novosCarros);
      })
      .catch(error => {
        console.error('Erro ao excluir o item:', error);
      });
  };
  
  const handleFavoritar = id => {
    // Encontrar o carro no estado 'carros' com o ID correspondente
    const carroFavoritado = carros.find(carro => carro.id === id);
  
    // Atualizar a propriedade 'favorito' do carro
    const novoCarro = {
      ...carroFavoritado,
      favorito: !carroFavoritado.favorito
    };
  
    fetch(`https://64870ab0beba6297278fc162.mockapi.io/api/v1/Carros/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoCarro)
    })
      .then(() => {
        // Atualizar o estado 'carros' com o carro favoritado atualizado
        const novosCarros = carros.map(carro =>
          carro.id === id ? novoCarro : carro
        );
        setCarros(novosCarros);
      })
      .catch(error => {
        console.error('Erro ao favoritar o item:', error);
      });
  };
  
  
  


  return (
    <div className='container-fluid custom'>
    <div className='container primeiro'>
      <div className='container segundo'>
      <BarraPesquisa className="container barra-pesquisa" filtro={filtro} onChange={e => setFiltro(e.target.value)} />
      </div>
      <ListaCarro
        carros={carros}
        filtro={filtro}
        onExcluir={handleExcluir}
        onFavoritar={handleFavoritar}
      />
    </div>
    </div>
  );
};

export default App;
