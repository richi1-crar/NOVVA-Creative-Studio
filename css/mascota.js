const mascotaEsquina = document.getElementById('mascotaEsquina');
const saludoEsquina = document.getElementById('saludoEsquina');

const mensajes = [
  "¡Hola! 👋 Soy NOVVA",
  "¿Listo para crear? 🚀",
  "Las ideas se convierten ✨",
  "Estamos contigo 💙",
  "¡Hablemos! 🐻"
];

if (mascotaEsquina && saludoEsquina) {
  let indice = 0;
  mascotaEsquina.addEventListener('click', () => {
    indice = (indice + 1) % mensajes.length;
    saludoEsquina.textContent = mensajes[indice];
    saludoEsquina.style.opacity = '1';
    saludoEsquina.style.visibility = 'visible';
    clearTimeout(window.ocultarSaludo);
    window.ocultarSaludo = setTimeout(() => {
      saludoEsquina.style.opacity = '';
      saludoEsquina.style.visibility = '';
    }, 3000);
  });
}