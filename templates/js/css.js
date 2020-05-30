const loadFile = async href => {
  const estilos = document.querySelectorAll('link[rel="stylesheet"]');
  let estilo;
  if (estilos.length == 1) {
    estilo = document.createElement('link');
    estilo.rel = 'stylesheet';
    document.head.appendChild(estilo);
  } else {
    estilo = estilos[1];
  }
  estilo.href = href;
};

export { loadFile };