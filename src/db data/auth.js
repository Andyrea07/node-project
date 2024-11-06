import client from './db.js'

export function createLogin() {
  client.query(`
      CREATE TABLE IF NOT EXISTS login (
      user_id INT GENERATED ALWAYS AS IDENTITY,
      jelszo VARCHAR(100),
  
      PRIMARY KEY (user_id),
  
      CONSTRAINT fk_userID
      FOREIGN KEY (user_id)
      REFERENCES Felhasznalok(id)
    )`)
}

export async function getLogin() {
  const users = await client.query(`
          SELECT * FROM login
          `)
  return users.rows
}

export async function addLogin(jelszo) {
  await client.query(`
      INSERT INTO login
      VALUES (default, '${jelszo}')
      `)
}

export async function updateLogin(user_id, jelszo) {
  const login = await client.query(`
      UPDATE login
      SET jelszo = '${jelszo}'
      WHERE user_id = ${user_id}
      `)
  return login.rows
}

export async function deleteLogin(user_id) {
  const login = await client.query(`
      DELETE FROM login
      WHERE user_id = ${user_id}
      `)
  return login.rows
}
