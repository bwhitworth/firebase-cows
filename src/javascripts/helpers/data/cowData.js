import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCows = () => axios.get(`${baseUrl}/cows.json`); // return statement

export default { getCows };
