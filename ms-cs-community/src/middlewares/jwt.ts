import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { privateKey } from '../components/jwt/private_key';

export const authToken = (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    const message = "veillez generer un jeton d'authentification.";
    return res.status(401).json({ message });
  }

  const token = authorizationHeader.split(' ')[1];

  jwt.verify(token, privateKey, (error: any, decodedtoken: any) => {
    if (error) {
      const message =
        "l'utilisateur n'est pas autorisé à acceder à la ressouce.";
      return res.status(401).json({ message });
    }

    if (decodedtoken.appName !== 'SuggestSystem') {
      return res.status(401).json({ message: 'non autorise' });
    }
    next();
  });
};
