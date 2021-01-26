import React from 'react';
import { connect } from 'react-redux';
import '../playlist/index.css';

import { bindActionCreators } from 'redux';
import * as MusicaAction from '../../store/actions/index';

const playlist = ({ musicas, tocarMusica,pararMusica }) => {
  return (
    <section>
        <div className='navbar'>
            <h1>PlayList de Música</h1>
        </div>
      <ul>
        {musicas.map((musica) => (
          <li key={musica.id}>
            {musica.titulo} <br/> {musica.cantor} | {musica.ano}
            <button onClick={() => tocarMusica(musica)}> PLAY </button>
            <button onClick={() => pararMusica(musica)}> STOP </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  musicas: state.musicas.playlist,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(MusicaAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(playlist);

/*Feito por RayssaCoosta*/
