import axios from 'axios';

const API_KEY = 'AIzaSyD75vS3mMqxfitrGdEBlDDeOw1PcZQonSw';

async function authenticate(mode, email, password) {
  try {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });

    const token = response.data.idToken;

    return token;
  } catch (error) {
    throw new Error('Authentication failed. Please check your credentials.');
  }
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}
