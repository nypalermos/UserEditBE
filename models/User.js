var Enum = require('enum');

const Genders = new Enum({MALE: 'Male',FEMALE: 'Female',NON_BINARY: 'Non Binary',OTHER: 'Other'});

// Constructor
function User(id, firstName, lastName, age, gender) {
  // always initialize all instance properties
  
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

// class methods
User.prototype.getFullName = function() {
	return this.firstName + " " + this.lastName;
};

const Schema = {
  Id: { type: Number, required: true },
  FirstName: String,
  LastName: String,
  Age: { type: Number, min: 18, max: 65, required: true },
  Gender: String
};

// export the class and constants
module.exports = {
  User, Genders, Schema
}