function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

async function fetchData(url, body = null, method = 'GET') {
  let headers = new Headers();
  headers.set('Content-Type', 'application/json');
  const options = { method, headers };

  if (body !== null) {
    options.body = JSON.stringify(body);
  }

  try {
    let urls = 'http://localhost:5000' + url;
    const res = await fetch(urls, options);
    let data = '';
    if (res.headers.get('Content-type') === 'text/html; charset=utf-8') {
      data = await res.text();
    } else {
      data = await res.json();
    }
    if (data.errors) {
      data.errors.forEach((error) => {
        console.log(error.msg, 'Y a eu une erreur');
      });
      return false;
    }

    if (data.err) {
      // throw : Envoie une exception : coupe l'exécution du code
      throw new Error(data.err);
    }

    return data;
  } catch (err) {
    let message = err.message.split(',');
    return message.join('<br>');
  }
}
export { validateEmail, fetchData };
