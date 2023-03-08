import { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utilities';
import { useCookies } from 'react-cookie';
const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [cookies, setCookie] = useCookies(['pseudo']);
  const [vide, setVide] = useState({ email: '' });
  console.log(cookies);
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!validateEmail(email) || password === '') {
      return console.log("l'email ou le mot de passe est incorrect");
    }

    let headers = new Headers();
    headers.set('Content-Type', 'application/json');

    const options = { method: 'POST', headers };

    if (formData !== null) {
      options.body = JSON.stringify(formData);
    }

    try {
      const res = await fetch('http://localhost:5000/api/users/login', options);

      let data = '';

      if (res.headers.get('Content-type') === 'text/html; charset=utf-8') {
        data = res.text();
        console.log(data);
      } else {
        data = await res.json();
        setCookie('email', data.payload.user.email, { path: '/' });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className='loginPage'>
      <h2>Bonjour {cookies ? 'cookies' : 'connecte toi'}</h2>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor=''>Login</label>
        <input
          type='text'
          name='email'
          className='form-control'
          id='inputEmail4'
          onChange={onChangeHandler}
        />
        <label htmlFor=''>Mot de passe</label>
        <input
          name='password'
          type='password'
          className='form-control'
          id='password'
          onChange={onChangeHandler}
        />
        <input name='submitButton' type='submit' />
      </form>
      <Link to={'/Register'}> You don't have any account ?</Link>
    </section>
  );
};

export default Login;
