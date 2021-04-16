const BASE_URL = 'http://localhost:3001/';

async function callApi(endpoint, options = {}) {
  
    options.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
}

const api = {
    proveedor: {
      lista() {
        console.log("consultando...");
        return callApi(`proveedores`);
      },
      crear(proveedor) {
        return callApi(`proveedores`, {
          method: 'POST',
          body: JSON.stringify(proveedor),
        });
      }
    }
}

export default api;