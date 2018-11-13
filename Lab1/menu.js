function mainMenuPrinter() {
    console.log(
        "*************Hello***************\n",
        "1. Add book, author, publisher, etc\n",
        "2. Find value by parameter (tableName, param, value)\n",
        "3. Update book, author, publisher, etc\n",
        "4. Get all data from table (table name)\n",
        "5. Delete value by parameter (tableName, param, value)\n",
        "6. Find authors of book from min to max pages count\n",
        "7. Find authors by nationality\n",
        "8. Generate random data \n",
        "9. Find word\n",
        "10. Find phrase\n",
        "Press q - to exit"
    )
}

function firstPrinter() {
    console.log(
        "1. Add book\n",
        "2. Add author\n",
        "3. Add publisher\n",
        "4. Add city\n",
        "5. Add zip\n",
        "Press q - to exit"
    )
}

function secondPrinter() {
    console.log(
        "1. Update book\n",
        "2. Update author\n",
        "3. Update publisher\n",
        "4. Update city\n",
        "5. Update zip\n",
        "Press q - to exit"
    )
}


module.exports = {
    mainMenuPrinter,
    firstPrinter,
    secondPrinter
}