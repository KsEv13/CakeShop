import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  // ... other configuration options
};
const app = firebase.initializeApp(firebaseConfig);

export default app;