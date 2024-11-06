import client from './db.js'

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
