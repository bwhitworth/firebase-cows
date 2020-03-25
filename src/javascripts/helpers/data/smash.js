import farmerData from './farmerData';
import farmerCowData from './farmerCowData';
import cowData from './cowData';

const getSingleFarmerWithCows = (farmerId) => new Promise((resolve, reject) => {
  farmerData.getFarmerById(farmerId)
    .then((response) => {
      const farmer = response.data;
      farmer.id = farmerId;
      farmer.cows = [];
      // 1. V get farmerCows by farmer uid, get uid from response.data ^
      farmerCowData.getFarmerCowsByFarmerUid(farmer.uid).then((farmerCows) => {
        // no need for a .catch here, because the catch at the end of this parent function will catch
        // 2. V get all cows (nested) (query string - can query by ONE THING)
        cowData.getCows().then((allCows) => {
          // 3. V smash (nested again)
          // loop over farmerCows, find the cow that matches farmerId, push into cows array
          farmerCows.forEach((farmerCow) => {
            const cow = allCows.find((x) => x.id === farmerCow.cowId);
            farmer.cows.push(cow);
          });
        });
      });
      resolve(farmer); // any data you want has to be in that farmer object
    })
    .catch((err) => reject(err));
});

export default { getSingleFarmerWithCows };
