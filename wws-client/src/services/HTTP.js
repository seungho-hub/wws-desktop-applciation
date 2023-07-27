const wwsOrigin = 'http://localhost:8000';

const getJWT = () => localStorage.getItem('jwt');

async function wwsfetch(path, params) {
  const jwt = getJWT();

  const endPoint = new URL(path, wwsOrigin);

  if (params) {
    Object.keys(params).forEach((key) => {
      endPoint.addParams(key, params[key]);
    });
  }

  const res = await fetch(endPoint, {
    withCredentials: true,
    credentials: 'include',
    headers: { Authorization: `Bearer ${jwt}` },
  });

  if (res.status === 401) {
    await window.electronAPI.login();

    return undefined;
  }
  const body = await res.json();

  return body;
}

module.exports = {
  wwsfetch,
};
