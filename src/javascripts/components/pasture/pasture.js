import cowData from '../../helpers/data/cowData';

const buildCows = () => {
  cowData.getCows()
    .then((response) => console.error('getCows worked!', response))
    .catch((err) => console.error('getCows broke...', err));
};

export default { buildCows };
