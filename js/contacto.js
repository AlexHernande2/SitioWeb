

emailjs.init("m4o02SDrQIh5kt72f");

const formulario = document.querySelector(".formulario_contacto");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.send("service_6kgi99q", "template_hy11vrd", {

        nombre: document.querySelector(".nombre").value,

        contacto: document.querySelector(".contacto").value,

        mensaje: document.querySelector("#descripcion").value

    })

    .then(() => {

        alert("Mensaje enviado correctamente");

        formulario.reset();

    })

    .catch((error) => {

        alert("Error al enviar");

        console.log(error);

    });

});