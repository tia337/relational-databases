const readline = require('readline-sync');
const menu = require('./menu');
const database = require('./database');
let exitProgrammCondition = false;

menu.mainMenuPrinter();
let menuOption = readline.question("Please, enter your choise:\n");

async function programMenu() {
    while (!exitProgrammCondition) {
        switch (menuOption) {
            case '1': {
                menu.firstPrinter()
                let selection = readline.question("Please, enter your choise:\n");
                switch (selection) {
                    case '1': {
                        console.log('Enter book title, price, pagesCount, authorId, publishId \n')
                        let infoForCreate = readline.question();
                        if (infoForCreate == 'q') { menu.mainMenuPrinter(); break; }
                        let options = infoForCreate.toString().split(" ");
                        console.log(options)
                        await database.addBook(options[0].toString(), parseInt(options[1]), parseInt(options[2]), parseInt(options[3]), options[4].toString(), parseInt(options[5]));
                        break;
                    }
                    case '2': {
                        console.log('Enter author name, alias, birth \n');
                        let infoForCreate = readline.question();
                        if (infoForCreate == 'q') { menu.mainMenuPrinter(); break; }
                        let options = infoForCreate.split(" ");
                        console.log(options)
                        await database.addAuthor(options[0].toString(), parseInt(options[1]), parseInt(options[2]));
                        break;
                    }
                    case '3': {
                        console.log('Enter publisher address, city, publisherName, zipId \n')
                        let infoForCreate = readline.question();
                        if (infoForCreate == 'q') { menu.mainMenuPrinter(); break; }
                        let options = infoForCreate.split(" ");
                        console.log(options)
                        await database.addPublisher(options[0].toString(), options[1].toString(), options[2].toString(), parseInt(options[3]));
                        break;
                    }
                    case '4': {
                        console.log('Enter city name \n')
                        let infoForCreate = readline.question();
                        if (infoForCreate == 'q') { menu.mainMenuPrinter(); break; }
                        let options = infoForCreate.split(" ");
                        console.log(options)
                        await database.addCity(options[0].toString());
                        break;
                    }
                    case '5': {
                        console.log('Enter zip, cityId \n')
                        let infoForCreate = readline.question();
                        if (infoForCreate == 'q') { menu.mainMenuPrinter(); break; }
                        let options = infoForCreate.split(" ");
                        console.log(options)
                        await database.addZip(options[0].toString(), parseInt(options[1]));
                        break;
                    }
                    case 'q': {
                        break;
                    }
                    default: {
                        console.log("select only 1-5");
                        break;
                    }
                }
                break;
            }
            case '2': {
                console.log("Please, enter following params by space: tableName, param, value \n")
                let infoForCreate = readline.question();
                let options = infoForCreate.toString().split(" ");
                console.log(await database.findByParam(options[0], options[1], options[2]));
                break;
            }
            case '3': {
                menu.secondPrinter();
                let selection = readline.question("Please, enter your choise:\n");
                switch (selection) {
                    case '1': {
                        console.log('Enter book title, price, pagesCount, author bookId \n')
                        let infoForCreate = readline.question();
                        if (infoForCreate == 'q') { menu.mainMenuPrinter(); break; }
                        let options = infoForCreate.toString().split(" ");
                        console.log(options)
                        await database.updateBook(options[0].toString(), parseInt(options[1]), parseInt(options[2]), options[3], parseInt(options[4]));
                        break;
                    }
                    case '2': {
                        console.log('Enter author name, alias, birth, authorId \n');
                        let infoForCreate = readline.question();
                        if (infoForCreate == 'q') { menu.mainMenuPrinter(); break; }
                        let options = infoForCreate.split(" ");
                        console.log(options)
                        await database.updateAuthor(options[0].toString(), parseInt(options[1]), parseInt(options[2]));
                        break;
                    }
                    case '3': {
                        console.log('Enter publisher address, city, publisherName, zipId \n')
                        let infoForCreate = readline.question();
                        if (infoForCreate == 'q') { menu.mainMenuPrinter(); break; }
                        let options = infoForCreate.split(" ");
                        console.log(options)
                        await database.updatePublisher(options[0].toString(), options[1].toString(), parseInt(options[2]));
                        break;
                    }
                    case '4': {
                        console.log('Enter city name, cityId \n')
                        let infoForCreate = readline.question();
                        if (infoForCreate == 'q') { menu.mainMenuPrinter(); break; }
                        let options = infoForCreate.split(" ");
                        console.log(options)
                        await database.updateCity(options[0].toString(), parseInt(options[1]));
                        break;
                    }
                    case 'q': {
                        break;
                    }
                    default: {
                        console.log("select only 1-4");
                        break;
                    }
                }
                break;
            }
            case '4': {
                console.log("Please, enter following params by space: tableName \n")
                let infoForCreate = readline.question();
                let options = infoForCreate.toString().split(" ");
                if (infoForCreate == 'q') break;
                console.log(await database.getAllFromTable(options[0]));
                break;
            }
            case '5': {
                console.log("Please, enter following params by space: tableName, param, value \n")
                let infoForCreate = readline.question();
                if (infoForCreate == 'q') break;
                let options = infoForCreate.toString().split(" ");
                await database.deleteByParam(options[0]);
                break;
            }
            case '6': {
                console.log("Please, enter following params by space: min page count and max \n")
                let infoForCreate = readline.question();
                if (infoForCreate == 'q') break;
                let options = infoForCreate.toString().split(" ");
                console.log(await database.advancedAuthorsSearch(options[0], options[1]));
                break;
            }
            case '7': {
                console.log("Please, enter nationality of author you wanna find \n")
                let infoForCreate = readline.question();
                if (infoForCreate == 'q') break;
                let options = infoForCreate.toString().split(" ");
                console.log(await database.findAuthorsByNationality(options[0]));
                break;
            }
            case '8': {
                console.log("Please, enter table name and number of records \n")
                let infoForCreate = readline.question();
                if (infoForCreate == 'q') break;
                let options = infoForCreate.toString().split(" ");
                await database.generateData(options[0], options[1]);
                break;
            }
            case '9': {
                console.log("Please, enter word to search \n")
                let infoForCreate = readline.question();
                if (infoForCreate == 'q') break;
                let options = infoForCreate.toString().split(" ");
                console.log(await database.wordSearch(options));
                break;
            }
            case '10': {
                console.log("Please, enter phrase to search\n")
                let infoForCreate = readline.question();
                let options = infoForCreate.toString().split(" ");
                console.log(await database.phraseSearch(infoForCreate.toString()));
                break;
            }

            case 'q': {
                exitProgrammCondition = true;
            }
            default: {
                console.log("Only 1-9 numbers")
                break;
            }
        }
    }
}
programMenu().then(() => { })