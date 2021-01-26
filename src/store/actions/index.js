export function adicionarFavorito(musicas) {
    return {
      type: "ADICIONAR_FAVORITO",
      musicas,
    };
  }
  