

// --------------------------- music -------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const audio = document.querySelector('audio');
    const musicImg = document.querySelector('.music__img');

    // Ocultar el botón de pausa al inicio
    pauseButton.style.display = 'none';

    // Función para iniciar el spinner
    function startSpinner() {
        let rotation = 0;
        musicImg.style.transformOrigin = 'center center'; // Asegurar que el punto de origen esté centrado
        musicImg.dataset.rotating = 'true'; // Marcar que está girando

        // Función de animación
        function rotate() {
            if (musicImg.dataset.rotating !== 'true') return; // Salir si se detiene la rotación
            rotation += 2; // Ajustar velocidad de rotación (incremento de grados)
            musicImg.style.transform = `rotate(${rotation}deg)`; // Aplicar rotación
            requestAnimationFrame(rotate); // Siguiente frame de animación
        }

        // Iniciar la animación
        rotate();
    }

    // Función para detener el spinner
    function stopSpinner() {
        musicImg.dataset.rotating = 'false'; // Marcar que no está girando
    }

    playButton.addEventListener('click', function () {
        audio.play();
        playButton.style.display = 'none'; // Ocultar el botón de play
        pauseButton.style.display = 'inline-block'; // Mostrar el botón de pausa
        startSpinner(); // Iniciar el spinner cuando se inicie la música
    });

    pauseButton.addEventListener('click', function () {
        audio.pause();
        pauseButton.style.display = 'none'; // Ocultar el botón de pausa
        playButton.style.display = 'inline-block'; // Mostrar el botón de play
        stopSpinner(); // Detener el spinner cuando se pause la música
    });

    // Adelantar la canción
    document.getElementById('forward').addEventListener('click', function () {
        audio.currentTime += 10; // Adelantar 10 segundos (ajustable según necesidad)
    });

    // Rebobinar la canción
    document.getElementById('rewind').addEventListener('click', function () {
        audio.currentTime -= 10; // Rebobinar 10 segundos (ajustable según necesidad)
    });

});




// ------------------------ fecha --------------------------


(function () {
    const targetDate = new Date("july 17, 2026 20:30:00").getTime();

    const dObj = document.getElementById('val_days');
    const hObj = document.getElementById('val_hours');
    const mObj = document.getElementById('val_minutes');
    const sObj = document.getElementById('val_seconds');

    function runTimer() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff < 0) {
            dObj.innerText = "00";
            hObj.innerText = "00";
            mObj.innerText = "00";
            sObj.innerText = "00";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        const form = (n) => n < 10 ? '0' + n : n;

        if (dObj.innerText != form(d)) dObj.innerText = form(d);
        if (hObj.innerText != form(h)) hObj.innerText = form(h);
        if (mObj.innerText != form(m)) mObj.innerText = form(m);
        sObj.innerText = form(s);
    }

    setInterval(runTimer, 1000);
    runTimer();
})();

// --------------------------------fotos---------------------------------




document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
    });

    // Inicializar Fancybox
    $(".fancybox").fancybox({
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "thumbs",
            "close"
        ],
        loop: true,
        infobar: true,
        arrows: true,
        protect: true,
        animationEffect: "fade",
        transitionEffect: "slide",
        transitionDuration: 500,
        touch: {
            vertical: false,
        },
        autoFocus: false,
    });
});


// --------------------------- playlist --------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // Definir los números de teléfono
    const phoneNumber1 = '543872245229'; // Número para el primer botón
    const phoneNumber2 = '543816591298'; // Número para el segundo botón

    // Función para enviar mensaje por WhatsApp
    function sendMessage(phoneNumber) {
        const name = document.getElementById('userName').value;
        const message = document.getElementById('whatsappMessage').value;

        if (name.trim() === '' || message.trim() === '') {
            alert('Por favor, completa ambos campos antes de enviar.');
            return;
        }

        const fullMessage = `*Nombre y Apellido:* ${name}\n\n*Tema recomendado:* ${message}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

        // Abre la URL de WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');

        // Mostrar mensaje de confirmación
        alert('Mensaje enviado');

        // Limpiar los campos de entrada
        document.getElementById('userName').value = '';
        document.getElementById('whatsappMessage').value = '';

        // Volver al bloque de formulario
        document.querySelector('.playlist').scrollIntoView({ behavior: 'smooth' });
    }

    // Asignar eventos a los botones
    document.getElementById('botonplay1').addEventListener('click', function () {
        sendMessage(phoneNumber1);
    });

    document.getElementById('botonplay2').addEventListener('click', function () {
        sendMessage(phoneNumber2);
    });
});






// --------------- confirmacion --------------------------------------



document.addEventListener('DOMContentLoaded', function () {
    // Definir los números de teléfono
    const recipientNumber1 = '543872245229'; // Número para el primer botón
    const recipientNumber2 = '543815060457'; // Número para el segundo botón

    // Función para enviar mensaje por WhatsApp
    function sendMessage(phoneNumber) {
        const userName = document.getElementById('userFullName').value.trim();
        const userMessage = document.getElementById('customMessage').value.trim();
        const attendanceStatus = document.querySelector('input[name="attendanceOption"]:checked');

        if (!attendanceStatus) {
            alert('Por favor, selecciona si asistirás o no.');
            return;
        }

        if (userName === '') {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }

        const finalMessage = `*Presencia:* ${attendanceStatus.value}\n*Nombre y Apellido:* ${userName}\n*Mensaje:* ${userMessage ? userMessage : 'N/A'}`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;

        // Abre la URL de WhatsApp en una nueva pestaña
        window.open(whatsappLink, '_blank');

        // Mostrar mensaje de confirmación
        alert('Mensaje enviado');

        // Limpiar los campos de entrada
        document.getElementById('userFullName').value = '';
        document.getElementById('customMessage').value = '';
        document.querySelectorAll('input[name="attendanceOption"]').forEach(radio => radio.checked = false);

        // Volver al bloque de formulario
        document.getElementById('correo').scrollIntoView({ behavior: 'smooth' });
    }

    // Asignar eventos a los botones
    document.getElementById('botoncito1').addEventListener('click', function () {
        sendMessage(recipientNumber1);
    });

    document.getElementById('botoncito2').addEventListener('click', function () {
        sendMessage(recipientNumber2);
    });
});



// --------------------------------gift---------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('mostrarBoton');
    const textoDesplegable = document.getElementById('textoDesplegable');

    boton.addEventListener('click', function () {
        textoDesplegable.classList.toggle('mostrar');
    });
});


function copyText() {
    var aliasText = document.getElementById('alias').innerText; // Obtener el texto del alias
    var tempInput = document.createElement('input');
    tempInput.value = aliasText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Mostrar el mensaje de "¡Copiado!"
    var btn = document.querySelector('.alias__button');
    if (btn && !btn.dataset.copying) {
        btn.dataset.copying = true;
        var originalContent = btn.innerHTML;
        btn.innerText = '¡Copiado!';
        setTimeout(function () {
            btn.innerHTML = originalContent;
            delete btn.dataset.copying;
        }, 1500);
    }
}



function copyCbuText() {
    const aliasText = document.getElementById('cbuAlias').textContent;

    const textarea = document.createElement('textarea');
    textarea.value = aliasText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    const btn = document.querySelector('.cbu__button');
    if (btn && !btn.dataset.copying) {
        btn.dataset.copying = true;
        const originalContent = btn.innerHTML;
        btn.innerText = '¡Copiado!';
        setTimeout(() => {
            btn.innerHTML = originalContent;
            delete btn.dataset.copying;
        }, 1500);
    }
}
