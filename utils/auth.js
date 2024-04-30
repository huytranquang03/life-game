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
    // Xử lý lỗi ở đây
    // Ví dụ:
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}
