// Requiring module
const assert = require('assert');
const expect = require("chai").expect;
const prepare = require('mocha-prepare');
const { MongoMemoryServer } = require('mongodb-memory-server');

// Project requires
const User = require('../models/User.js').User;
const Genders = require('../models/User.js').Genders;
const MongoDBImpl = require('../services/MongoDBImpl.js');

var env = process.env.NODE_ENV;
var envPath = '.env';

if (env != undefined)
{
	envPath += '.' + env;
}

console.log(env);
console.log(envPath);
console.log(`${envPath}`);

require('dotenv').config({ path: `${envPath}` });

const mongoUnit = new MongoMemoryServer({instance: { port : 51000 }} );
const testData = require('./data/userdata.json');

const databaseImpl = new MongoDBImpl(process.env.
    DB_URI, process.env.DB_USERNAME, process.env.DB_PASSWORD);

//Mocha tests
describe("Mongo DB Tests", function ()
{
   beforeEach( async () => { await databaseImpl.initDatabase(); } );
   afterEach(async () => { await databaseImpl.closeDatabase(); } );

    it("DB Created Successfully", function () {
        expect(mongoUnit).to.exist;
    });

    it("DB Add User", async () => {
        let leon = new User(1, 'Leon', 'Palermo', 50, User.MALE);
        var json = JSON.stringify(leon);
        console.log(json);

        var userId = await databaseImpl.addUser(leon);

        expect(userId).to.equal(1)
    });

    it("DB Fetch User", async () => {
        let leon = new User(1, 'Leon', 'Palermo', 50, User.MALE);

        await databaseImpl.addUser(leon);

        var user = await databaseImpl.getUser(1).then(user =>
            expect(user.FirstName).to.equal('Leon'));
    });
});