// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'manasblog',
  // apiKey: '20e7dbeb-e638-4d33-8854-d3c88f2f8eb2',
  apiKey: process.env.API_KEY,
});