import * as dotenv from 'dotenv';

dotenv.config();

export const BLING_API_URL = 'https://bling.com.br/Api/v2';
const {
    PIPEDRIVE_API_TOKEN,
    PIPEDRIVE_COMPANY_DOMAIN_URL,
    BLING_API_KEY,
    MONGO_URI,
    PORT,
} = process.env;

export {
    PIPEDRIVE_API_TOKEN,
    PIPEDRIVE_COMPANY_DOMAIN_URL,
    BLING_API_KEY,
    MONGO_URI,
    PORT,
};
