function he (texto) {
  const p = document.createElement('p');
  p.textContent = texto;
  return p.innerHTML;
}

/**
 *
 * @param {number} valor
 * @returns {string}
 */
function moeda (valor) {
  if (valor == null) {
    return '';
  }
  return valor.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/**
 *
 * @param {number} valor
 * @param {number} casas
 * @returns {string}
 */
function numero (valor, casas) {
  if (valor == null) {
    return '';
  }
  return valor.toLocaleString(undefined, { minimumFractionDigits: casas, maximumFractionDigits: casas });
}

function data (data) {
  if (data == null) {
    return '';
  }
  return (new Date(data.replace(/-/g, '/'))).toLocaleDateString();
}

function removeAcentos (s) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export { he, moeda, numero, data, removeAcentos };