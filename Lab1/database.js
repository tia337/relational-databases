require('dotenv').load()
const faker = require('faker');
faker.locale = "en";

const DB = require('./connection')

function addAuthor(name, alias, birth) {
  return DB.none('INSERT INTO authors(name, alias, birth) VALUES($1, $2, $3)', [name, alias, birth])
}

function addBook(title, price, pagesCount, authorId, publishId, description) {
  return DB.none('INSERT INTO books(title, price, p_count, author, published, description) VALUES($1, $2, $3, $4, $5, $6)',
    [title, price, pagesCount, authorId, publishId, description])
}

function addPublisher(address, city, publisherName, zipId) {
  return DB.none('INSERT INTO publishers(address, city, publisher_name, zip_id) VALUES($1, $2, $3, $4)', [address, city, publisherName, zipId])
}

function addCity(cityName) {
  return DB.none('INSERT INTO cities(city_name) VALUES($1)', [cityName])
}

function addZip(zip, cityId) {
  return DB.none('INSERT INTO zips(zip, city_id) VALUES($1, $2)', [zip, cityId])
}

function updateAuthor(name, alias, birth, id) {
  return DB.none('UPDATE authors SET name = ($1), alias = ($2), birth = ($3) WHERE id_author = $4', [name, alias, birth, id])
}

function updateBook(title, price, pagesCount, author, desc, id) {
  return DB.none('UPDATE books SET title = ($1), price = ($2), p_count = ($3), author = ($4) desc = ($5) WHERE id_book = $6', [title, price, pagesCount, author, desc, id])
}

function updatePublisher(address, city, publisherName, id) {
  return DB.none('UPDATE publishers SET address = ($1), city = ($2), publisher_name = ($3) WHERE id_publish = $5', [address, city, publisherName, id])
}

function updateCity(cityName, id) {
  return DB.none('UPDATE cities SET city_name = ($1) WHERE id_city = $2', [cityName, id])
}

function getAllFromTable(tableName) {
  return DB.any('SELECT * FROM ' + tableName)
}

function findByParam(tableName, param, value) {
  return DB.any('SELECT * FROM ' + tableName + ' WHERE ' + param + ' = $1', [value])
}

function deleteByParam(tableName, param, value) {
  return DB.any('DELETE FROM ' + tableName + ' WHERE ' + param + ' = $1', [value])
}

function advancedAuthorsSearch(minPageCount, maxPageCount) {
  return DB.any('SELECT a FROM authors a JOIN books b ON b.author = a.id_author WHERE b.p_count BETWEEN ($1) AND ($2)', [minPageCount, maxPageCount])
}

function findAuthorsByNationality(nationality) {
  return DB.any('SELECT * FROM authors WHERE country = ($1)', [nationality])
}

function wordSearch(words) {
  return DB.any(`SELECT title, price, author, ts_headline(description, q) FROM books, to_tsquery('$1^') q WHERE to_tsvector(description) @@ q`,
    words.map(word => '!' + word).join(' & '))
}

function phraseSearch(phrase) {
  return DB.any(`SELECT title, price, author, ts_headline(description, q) FROM books, phraseto_tsquery($1) q WHERE to_tsvector(description) @@ q`, [phrase])
}

function generateData(table, amountOfRecords) {
  if (table == 'authors') {
    for (let i = 0; i < amountOfRecords; i++) {
      addAuthor(faker.name.findName(), faker.name.title(), faker.random.number({ min: 1800, max: 1995 }))
    }
  } else if (table == 'books') {
    for (let i = 0; i < amountOfRecords; i++) {
      addBook(faker.commerce.productName(), faker.commerce.price(),
        faker.random.number({ min: 1800, max: 1995 }),
        faker.random.number({ min: 1, max: 14 }), faker.random.number({ min: 5, max: 17 }), faker.lorem.sentences());
    }
  } else if (table == 'publishers') {
    for (let i = 0; i < amountOfRecords; i++) {
      addPublisher(faker.address.streetAddress(), faker.address.city(),
        faker.company.companyName(), faker.random.number({ min: 1, max: 13 }));
    }
  } else if (table == 'cities') {
    for (let i = 0; i < amountOfRecords; i++) {
      addCity(faker.address.city())
    }
  } else if (table == 'zips') {
    for (let i = 0; i < amountOfRecords; i++) {
      addZip(faker.random.number({ min: 4658, max: 9999 }), faker.random.number({ min: 1, max: 16 }))
    }
  }
}

module.exports = {
  addAuthor,
  addBook,
  addPublisher,
  addCity,
  addZip,
  findByParam,
  updateAuthor,
  updateBook,
  updatePublisher,
  updateCity,
  getAllFromTable,
  deleteByParam,
  advancedAuthorsSearch,
  findAuthorsByNationality,
  wordSearch,
  phraseSearch,
  generateData
}


// generateData('publishers', 10)
// getAllFromTable('authors')
// findAuthorsByNationality('en')
// findByParam("authors", "name", "john");
// updateAuthor('test', 'test', '0000', 1)
// getAllFromTabe('authors');
// deleteByParam('authors', 'birth', 1111);
// getAllFromTabe('authors');
// addBook("harry potter", 152, 800, 3, 1999)
// getAllFromTable('zips')
// addPublisher("lenina", 'minsk', "minskBook", 5)
// addBook('witcher', 195, 30, 7, 7)
// getAllFromTable('publishers')

