import React from 'react';
import CarroItem from './CarroItem';

const ListaCarro = ({ carros, filtro, onExcluir, onFavoritar }) => {
  // Filtrar os carros com base no valor da barra de pesquisa
  const carrosFiltrados = carros.filter(carro =>
    carro.modelo.toLowerCase().includes(filtro.toLowerCase())
  );

  // Ordenar os carros para que os favoritados fiquem no topo da lista
  const carrosOrdenados = [...carrosFiltrados].sort((a, b) => {
    if (a.favorito && !b.favorito) {
      return -1; // Carro favoritado vem primeiro
    } else if (!a.favorito && b.favorito) {
      return 1; // Carro não favoritado vem depois
    } else {
      return 0; // Manter a ordem original
    }
  });

  return (
    <div className='container'>
      {carrosOrdenados.map(carro => (
        <CarroItem
          key={carro.id}
          carro={carro}
          onExcluir={onExcluir}
          onFavoritar={onFavoritar}
        />
      ))}
    </div>
  );
};

export default ListaCarro;
