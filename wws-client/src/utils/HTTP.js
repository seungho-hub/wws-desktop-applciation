const getJWT = () => localStorage.getItem('jwt');

async function wwsfetch(path, params) {
  const jwt = getJWT();

  const endPoint = new URL(path, process.env.API_SERVER_ORIGIN);

  if (params) {
    Object.keys(params).forEach((key) => {
      endPoint.addParams(key, params[key]);
    });
  }

  const res = await fetch(endPoint, {
    headers: { Authorization: `Bearer ${jwt}` },
  });

  if (res.status === 401) {
    return window.electronAPI.login();
  }
  const body = await res.json();

  return body;
}

module.exports = {
  wwsfetch,
};
