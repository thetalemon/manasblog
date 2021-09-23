// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'manasblog',
  apiKey: process.env.API_KEY,
});