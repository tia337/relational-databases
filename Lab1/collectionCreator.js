const DB = require('./connection')




// DB.query(
//     `CREATE TYPE nationality AS ENUM ('ukr', 'en', 'rus', 'pl');`
// )

// DB.query(
//     `ALTER TABLE books ADD COLUMN description text;`
// )

// DB.query(`CREATE TABLE authors
// (
//     id_author serial PRIMARY KEY NOT NULL,
//     name character varying(45) NOT NULL,
//     birth integer NOT NULL,
//     alias character varying(45) NOT NULL
// )`);

// DB.query(`CREATE TABLE books
// (
//     id_book serial PRIMARY KEY NOT NULL,
//     title character varying(45) NOT NULL,
//     price double precision NOT NULL,
//     p_count integer NOT NULL,
//     author integer NOT NULL REFERENCES authors(id_author),
//     published integer NOT NULL REFERENCES publishers(id_publish)
// )`)

// DB.query(`CREATE TABLE publishers
// (
//     id_publish serial PRIMARY KEY NOT NULL,
//     address character varying(45) NOT NULL,
//     city character varying(45) NOT NULL,
//     publisher_name character varying(45) NOT NULL,
//     zip_id integer NOT NULL REFERENCES zips(id_zip)
// )`)

// DB.query(`CREATE TABLE zips
// (
//     id_zip serial PRIMARY KEY NOT NULL,
//     zip integer NOT NULL,
//     city_id integer NOT NULL REFERENCES cities(id_city)
// )`)

// DB.query(`CREATE TABLE cities
// (
//     id_city serial PRIMARY KEY NOT NULL,
//     city_name character varying(45) NOT NULL
// )`)