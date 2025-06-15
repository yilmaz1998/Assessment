import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCz3jDt1z-MJsfU8dTPMDZFxZBUyHSdWvM",
    authDomain: "data-viz-platform-af35c.firebaseapp.com",
  };
  

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)