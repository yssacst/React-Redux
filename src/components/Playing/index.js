import React from 'react';
import { connect } from 'react-redux';
import './index.css';

const Playing = ({musica}) => {
  return (
    <div className="boxPrincipal">
      <h1>Tocando no momento...</h1>
      <div className="cardPrincipal">
        {musica.titulo == null?<marquee direction='right'>Nenhuma música tocando no momento</marquee>:''}
        <div className="cardLeft">
            <img src={musica.img}/>
        </div>
        <div className="cardRight">
          <h2 id='title'>{musica.titulo}</h2>
          <span id='subtitle'>{musica.cantor != null ? 'Cantor:':''} {musica.cantor}  {musica.ano != null ? '| Ano:':''}  {musica.ano}</span> 
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
    musica: state.musicas.musica
}))(Playing);
