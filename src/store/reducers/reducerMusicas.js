const ESTADO_INICIAL = {
  musica: [{}],
  playlist: [
    {
      id: 1,
      titulo: "A Cor É Rosa",
      cantor: "Silva",
      ano: 2018,
      img:"https://i.pinimg.com/originals/7c/d6/36/7cd6362b5b7e1114417dae62371dd6fe.gif",
    },
    {
      id: 2,
      titulo: "Será",
      cantor: "Lagum part. Iza",
      ano: 2020,
      img:"https://i.pinimg.com/originals/7c/d6/36/7cd6362b5b7e1114417dae62371dd6fe.gif",
    },
    {
      id: 3,
      titulo: "Hoje eu quero me perder",
      cantor: "Lagum",
      ano: 2020,
      img:"https://i.pinimg.com/originals/7c/d6/36/7cd6362b5b7e1114417dae62371dd6fe.gif",
    },
  ],
};

export default function musicas(state = ESTADO_INICIAL, action) {
  if (action.type === "TOCAR_MUSICA") {
    return {
      ...state,
      musica: action.musicas,
    };
  }
  if (action.type === "PARAR_MUSICA") {
    return {
      ...state,
      musica: ESTADO_INICIAL,
    };
  }
  return state;
}
