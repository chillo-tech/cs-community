import jwt from 'jsonwebtoken';
import { privateKey } from './private_key';

const createToken = () => {
  const token = jwt.sign(
    {
      appName: 'SuggestSystem',
    },
    privateKey,
    { expiresIn: '1y' }
  );

  return token;
};

const jwtService = {
  createToken,
};

export default jwtService;
