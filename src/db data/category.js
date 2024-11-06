import client from './db.js'

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
