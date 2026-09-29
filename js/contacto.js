const contactForm = document.querySelector('#contact-form');
const contactFormStatus = document.querySelector('#contact-form-status');

if (contactForm && contactFormStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get('name')).trim();
    const email = String(formData.get('email')).trim();
    const reason = String(formData.get('reason'));
    const message = String(formData.get('message')).trim();
    const subject = `${reason} - ${name}`;
    const body = [
      'Hola, Moisés:',
      '',
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `Motivo: ${reason}`,
      '',
      message,
    ].join('\n');

    const draftLink = document.createElement('a');
    draftLink.className = 'contact-draft-link';
    draftLink.href = `mailto:moises10giraldo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    draftLink.textContent = 'Abrir borrador de correo';
    contactFormStatus.replaceChildren(
      document.createTextNode('Revisa y envía tu solicitud desde el correo. '),
      draftLink,
    );
  });
}