"use client";
export default function Page() {
  const clientId: string = "Ov23li3kJgisbMmtA44m";
  const state: string = "asdasd123123asdasd123";

  const handleGitHubLogin = () => {
    localStorage.setItem("latestCSRFToken", state);
    const link: string = `https://github.com/login/oauth/authorize?client_id=${clientId}&response_type=code&state=${state}`;
    window.location.assign(link);
   };

  const clearCSRFToken = () => {
    localStorage.removeItem("latestCSRFToken");
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


          localStorage.setItem("bearer", JSON.stringify(data.bearer));

        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  };


  const logout = () => {
    // Obtener el token de localStorage
    const storedBearerToken = localStorage.getItem("bearer");

    // Verificar si el token está presente
    if (storedBearerToken) {
      //sacarle comillas al bearer...
      const tokenWithoutQuotes = storedBearerToken.replace(/"/g, '').replace(/'/g, '');
 const token = "bearer "+tokenWithoutQuotes;

      console.log( token);
      // Configurar las opciones de la solicitud Fetch
      const fetchOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token // Agregar el token al encabezado de autorización
        }
      };
  
      // Realizar la solicitud Fetch
      fetch('https://sonicjs-cf2.pages.dev/v1/auth/logout', fetchOptions)
        .then(response => {
          // Manejar la respuesta de la solicitud
        })
        .catch(error => {
          // Manejar errores de la solicitud
        });
    } else {
      console.log("No bearer token found in localStorage");
    }
  };

  
return (
  <div>
    <br/>
    <button onClick={handleGitHubLogin}>Login with GitHub</button>
    <br/>
    <button onClick={sendFetchRequest}>Hacer fetch a Backend</button>
    <br/>
    <button onClick={clearCSRFToken}>clear cookie</button>
    <br/>
    <button onClick={logout}>logout</button>
    <br/>
  </div>
);    
    };

