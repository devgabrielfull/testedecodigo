import { Client } from 'pg';

function query() {
    const client = new Client();
    await client.connect();
    const result = await client.query(queryObject);
}

export default {
    query: query,
};