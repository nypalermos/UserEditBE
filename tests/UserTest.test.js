// Requiring module
const User = require('../models/User.js').User;
const Genders = require('../models/User.js').Genders;

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
const assert = require('assert');
const expect = require("chai").expect;

//Mocha tests
describe("User Tests", function() {
    const user = new User(1, "Leon", "Palermo", 50, Genders.MALE.value);
    
    it("User Full Name Test", function() {
        expect(user.getFullName()).to.equal('Leon Palermo');
    });
	
    it("User Age Tests", function() {
        expect(user.age).to.be.above(40);
        expect(user.age).to.be.below(60);
    });
	
	it("Env Tests", function() {
		expect(process.env.DB_USERNAME).to.equal('administrator');
    });
});	