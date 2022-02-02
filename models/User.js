var Enum = require('enum');

const Genders = new Enum({MALE: 'Male',FEMALE: 'Female',NON_BINARY: 'Non Binary',OTHER: 'Other'});

// Constructor
function User(id, firstName, lastName, age, gender) {
  // always initialize all instance properties
  this.Id = id;
  this.FirstName = firstName;
  this.LastName = lastName;
  this.Age = age;
  this.Gender = gender;
}

// class methods
User.prototype.getFullName = function() {
	return this.FirstName + " " + this.LastName;
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