import { useState } from 'react';
import { validateEmail, fetchData } from '../../utilities';

/**
 * @params Request: req, Response: res
 * @route POST /api/users/register
 * @returns JSON
 */

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
    pseudo: '',
    phoneNumber: '',
    adress: '',
  });
  console.log(formData);
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password, password2 } = formData;

    if (password2 !== password) {
      return console.log('Whoops! les mot de passe sont pas les même');
    }
    if (!validateEmail(email)) {
      return console.log('l email n est pas bon');
    }
    const data = await fetchData('/api/users/register', formData, 'POST');
    console.log(data);
    if (data.msg) {
      console.log(data.msg);
    }

    if (!data.msg) {
      console.log('ptit problème ' + data);
    }

    return false;
  };
  return (
    <section className='registerPage'>
      <div className='formContainer'>
        <h2>Register</h2>
        <form action='' onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              name='password'
              type='password'
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor='password2'>Confirm password</label>
            <input
              id='password2'
              name='password2'
              type='password'
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor='pseudo'>Pseudo</label>
            <input
              type='tel'
              onChange={onChangeHandler}
              name='pseudo'
              id='pseudo'
            />
          </div>
          <div>
            <label htmlFor='phoneNumber'>Phone number</label>
            <input
              type='tel'
              onChange={onChangeHandler}
              name='phoneNumber'
              id='phoneNumber'
            />
          </div>
          <div>
            <label htmlFor='asress'>Adress</label>
            <input
              type='text'
              name='adress'
              id='adress'
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <button type='submit'>Create account</button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Register;
