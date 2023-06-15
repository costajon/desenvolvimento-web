import React from 'react';

const CarroItem = ({ carro, onExcluir, onFavoritar }) => {
  const { id, imagem, marca, modelo, ano, preco, favorito } = carro;

  const handleExcluir = () => {
    onExcluir(id);
  };

  const handleFavoritar = () => {
    onFavoritar(id);
  };

  return (
    <div className={`carro-item ${favorito ? 'favoritado' : ''}`}>
      <img className= "image-carro" src={imagem} alt={modelo} />
      <div className="carro-info">
        <br/>
        <h1>{marca}</h1>
        <br/>
        <h3>Modelo: {modelo}</h3>
        <br/>
        <h3>Ano: {ano}</h3>
        <br/>
        <h3>Preço: {preco}</h3>
        <br/>
      </div>
      <div className="carro-buttons">
        <button onClick={handleExcluir}>Excluir</button>
        <button
          onClick={handleFavoritar}
          style={{ backgroundColor: favorito ? 'orange' : 'white' }}
        >
          Favoritar
        </button>
      </div>
      <br/><br/>
      <hr className='linha-separa'></hr>
    </div>
  );
};

export default CarroItem;
