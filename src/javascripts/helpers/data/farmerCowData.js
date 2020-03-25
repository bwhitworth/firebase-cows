import Axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getFarmerCowsByFarmerUid = (uid) => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}/farmerCows.json?orderBy="farmerUid"&=equalTo="${uid}"`)
  // query string, orderBy "name of the key", & equalTo "(something here if you want specifics)"
    .then((response) => {
      const demFarmerCows = response.data;
      const farmerCows = [];
      // going to return something like: ['farmerCow1', 'farmerCow2'].forEach()
      Object.keys(demFarmerCows).forEach((farmerCowId) => {
        demFarmerCows[farmerCowId].id = farmerCowId;
        farmerCows.push(demFarmerCows[farmerCowId]);
      });
      resolve(farmerCows);
      console.error('farmerCows:', farmerCows);
    })
    .catch((err) => reject(err));
});

export default { getFarmerCowsByFarmerUid };
