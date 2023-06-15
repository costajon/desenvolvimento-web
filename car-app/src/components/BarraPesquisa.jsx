import React from 'react';
import '../App.css';

const BarraPesquisa = ({ filtro, onChange }) => {
  return (
    <input className='inputPesquisa'
      type="text"
      placeholder="Pesquisar..."
      value={filtro}
      onChange={onChange}
    />
  );
};

export default BarraPesquisa;
