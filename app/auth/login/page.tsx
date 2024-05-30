"use client";

import { useState, useEffect } from 'react';

export default function Page() {
  const clientId: string = "Ov23li3kJgisbMmtA44m";
  const state: string = "asdasd123123asdasd123";

  const handleGitHubLogin = () => {
    localStorage.setItem("latestCSRFToken", state);
    const link: string = `https://github.com/login/oauth/authorize?client_id=${clientId}&response_type=code&state=${state}`;
    window.location.assign(link);
  };

  // Función para enviar una solicitud Fetch con el código
  const sendFetchRequest = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      const fetchOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      };

      fetch('https://sonicjs-cf2.pages.dev/v1/auth/login_oauth', fetchOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Aquí puedes manejar la respuesta del servidor si es necesario
          console.log(data);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  };

  // Llama a la función sendFetchRequest() si el código está presente en la URL
  useEffect(() => {
    sendFetchRequest();
  }, []); // Ejecuta esta efecto solo una vez al cargar la página

  return (
    <div>
      <button onClick={handleGitHubLogin}>Login with GitHub</button>
    </div>
  );
}
