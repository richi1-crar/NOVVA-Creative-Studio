const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const opened = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', opened);
    menuButton.innerHTML = opened ? 'Cerrar <b>−</b>' : 'Menú <b>+</b>';
  });

  navigation.querySelectorAll('a').forEach((item) => {
    item.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.innerHTML = 'Menú <b>+</b>';
    });
  });
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const subject = encodeURIComponent(`Consulta NOVVA: ${formData.get('tema')}`);
    const body = encodeURIComponent(
      `Hola, NOVVA.\n\nNombre: ${formData.get('nombre')}\nCorreo: ${formData.get('correo')}\nServicio: ${formData.get('tema')}\n\nMensaje:\n${formData.get('mensaje')}`
    );

    // Cambia esta dirección por el correo oficial antes de publicar.
    document.querySelector('#form-status').textContent = 'Abriendo la aplicación de correo…';
    window.location.href = `mailto:contacto@novva.co?subject=${subject}&body=${body}`;
  });
}
