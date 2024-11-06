import pg from 'pg'

const { Client } = pg

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Styxa2',
  password: 'Andromeda1997',
  port: 5432
})

await client.connect()

export default client
