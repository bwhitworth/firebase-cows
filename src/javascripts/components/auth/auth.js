import utils from '../../helpers/utils';

const loginButton = () => {
  const domString = '<button class="btn btn-primary">GOOGLE LOGIN</button>';
  utils.printToDom('auth', domString);
};

export default { loginButton };
