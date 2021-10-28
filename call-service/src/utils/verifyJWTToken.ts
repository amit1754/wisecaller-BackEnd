import { verify } from 'jsonwebtoken';
require('dotenv').config({ path: '.env' });

const secret:any = process.env.JWT_ACCOUNT_ACTIVATION;

const verifyJWTToken = (token:any) => {
	const verifyToken = verify(token, "secret");
	return verifyToken;
};

export default verifyJWTToken;
