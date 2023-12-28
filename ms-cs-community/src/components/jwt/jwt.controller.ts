import { Request, Response } from 'express';
import jwtService from './jwt.service';

const createToken = (req: Request, res: Response) => {
  const token = jwtService.createToken();
  res.json({ msg: 'succes', token: `Bearer ${token}` });
};

const jwtController = {
  createToken,
};

export default jwtController;
