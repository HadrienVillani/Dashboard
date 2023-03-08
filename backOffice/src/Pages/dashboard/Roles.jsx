import React, { useState } from 'react';

function Roles() {
  const [formData, setFormData] = useState({ name: '', id: '' });

  const onChangeHandler = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!formData.name || formData.name === '') {
      setFormData({ name: '' });
      return console.log('le nom est obligatoire');
    }
    // Etape 1 : définir le header
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');

    // Etape 2 : créer une const objet avec la méthode et et le headers et l'appeler option

    const options = { method: 'POST', headers };

    // Etape 3 : vérifier si il y a de la data, si oui on la transforme en text et on l'ajoute aux options avec un .body

    if (formData !== null) {
      options.body = JSON.stringify(formData);
    } else {
      console.log('le formData est vide');
    }

    // Etape 4 : on utilise la fonction fecth avec un try/catch et en ajoutant les options que l'on a créé juste avant. La const res est une variable contenant la réponse du tech
    try {
      const res = await fetch(
        'http://localhost:5000/api/roles/create',
        options
      );
      if (res) {
        console.log(res);
      }
      let data = '';

      if (res.headers.get('Content-type') === 'text/html; charset= utf-8') {
        data = res.text();
        console.log(data + 'Vous avez créé un nouveau role');
      }
    } catch (err) {}
  };
  return (
    <div>
      <section>
        <h2>Roles</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ex sint
          aliquam ratione consequuntur, alias saepe mollitia ut quos dolor
          vitae. Quam reprehenderit reiciendis ipsam laboriosam ut adipisci
          ducimus provident.
        </p>
      </section>
      <section>
        <h3>Create Roles</h3>
        <form action='' onSubmit={onSubmitHandler}>
          <label htmlFor=''>Role name</label>
          <input type='text' name='name' id='name' onChange={onChangeHandler} />
          <button type='submit'>Créer un role</button>
        </form>
      </section>
    </div>
  );
}

export default Roles;
