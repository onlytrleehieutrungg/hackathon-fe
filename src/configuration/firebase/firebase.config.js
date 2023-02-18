import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MEASUREMETN_ID,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from "../env/env.config";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMETN_ID,
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
