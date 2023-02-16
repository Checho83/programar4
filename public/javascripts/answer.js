const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Mandando...';

   const serviceID = 'default_service';
   const templateID = 'template_pscjhim';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar consulta';
      alert('Enviada!');
      location.href = "/";
    }, (err) => {
      btn.value = 'Enviar consulta';
      alert(JSON.stringify(err));
    })

});