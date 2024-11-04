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

export function createUser() {
  client.query(`
        CREATE TABLE IF NOT EXISTS felhasznalok (
            id INT GENERATED ALWAYS AS IDENTITY,
            nev VARCHAR(100) NOT NULL,
            email VARCHAR(100),
            jelszo VARCHAR(100),
            datum TIMESTAMP,
            PRIMARY KEY (id)
        )`)
}

export function createCikkek() {
  client.query(`
    CREATE TABLE IF NOT EXISTS Cikkek (
    CikkID int GENERATED ALWAYS AS IDENTITY,
    CikkCim varchar(800),
    CikkDatum TIMESTAMP,
    SzerzoID int,
    Szoveg varchar(800),
    
    PRIMARY KEY (CikkID),
    
    CONSTRAINT fk_SzerzoID 
    FOREIGN KEY (SzerzoID)
    REFERENCES Felhasznalok (id)
)
    `)
}

export async function addCikkek(CikkCim, SzerzoID, Szoveg) {
  await client.query(`
    INSERT INTO Cikkek (CikkID, CikkCim, CikkDatum,SzerzoID, Szoveg)
    VALUES (DEFAULT, '${CikkCim}', NOW(), ${SzerzoID}, '${Szoveg}')
    `)
}

export async function getCikkek() {
  const cikkek = await client.query(`
    SELECT * FROM Cikkek
    `)
  return cikkek.rows
}

export async function updateCikkek(CikkCim, CikkID) {
  const cikkek = await client.query(`
    UPDATE Cikkek
    SET CikkCim = '${CikkCim}'
    WHERE CikkID = ${CikkID}
    `)
  return cikkek.rows
}

export async function deleteCikkek(CikkID) {
  const cikkek = await client.query(`
    DELETE FROM Cikkek
    WHERE CikkID = ${CikkID}
    `)
  return cikkek.rows
}

export async function addUser(nev, email, jelszo) {
  await client.query(`
        INSERT INTO felhasznalok (id, nev, email, jelszo, datum)
        VALUES (default, '${nev}', '${email}', '${jelszo}', NOW() )
        `)
}

export async function getUser() {
  const users = await client.query(`
        SELECT * FROM felhasznalok
        `)
  return users.rows
}

export async function updateUser(id, nev, email) {
  const user = await client.query(`
    UPDATE felhasznalok 
    SET nev = '${nev}', email = '${email}'
    WHERE id = ${id}
    `)
  return user.rows
}

export async function deleteUser(id) {
  const users = await client.query(`
    DELETE FROM felhasznalok
    WHERE id = ${id}
    `)
  return users.rows
}

//KAtegoriak SELECT, INSERT, UPDATE, DELETE

export function category() {
  client.query(`
      CREATE TABLE IF NOT EXISTS Kategoriak (
      Kategoriaid INT GENERATED ALWAYS AS IDENTITY,
      KategoriaNev VARCHAR(100),
      PRIMARY KEY (Kategoriaid))
      `)
}

export async function getCategory() {
  const category = await client.query(`
    SELECT * FROM Kategoriak
    `)
  return category.rows
}

export function addCategory(kategorianev) {
  client.query(`
    INSERT INTO Kategoriak
    VALUES (default, '${kategorianev}')
    `)
}

export async function updateCategory(kategoriaid, kategorianev) {
  const category = await client.query(`
    UPDATE Kategoriak
    SET kategorianev = '${kategorianev}'
    WHERE kategoriaid = ${kategoriaid}
    `)
  return category.rows
}

export async function deleteCategory(kategoriaid) {
  const category = await client.query(`
    DELETE FROM Kategoriak
    WHERE kategoriaid = ${kategoriaid}
    `)
  return category.rows
}

export function createLogin() {
  client.query(`
    CREATE TABLE IF NOT EXISTS login (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    jelszo VARCHAR(100)
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
