import { ApiWorld } from '../api-world';

const apiWorld = new ApiWorld();

const imageIdRegex = /([a-z0-9]{2,3}|[A-Z0-9]{7}|[a-zA-Z0-9]{9,10})/;
const userIdRegex = /[a-z0-9]{6}/;
const createdAtRegex = /[-0-9TZ:.]{24}/;
const countryCodeRegex = /[A-Z]{2}/;

export { apiWorld, imageIdRegex, userIdRegex, createdAtRegex, countryCodeRegex };
