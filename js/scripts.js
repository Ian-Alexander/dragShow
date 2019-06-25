// Bussiness End Logic

function AddressBook() {
  this.contacts = []
  this.currentId = 0
}

function Contact(firstName, lastName, phoneNumber, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.address = address;
}

// User Interface Logic

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

AddressBook.prototype.addContact = function(contact) {
    return this.contacts.push(contact);
}

var addressBook = new AddressBook();
var contact = new Contact("Ada", "Lovelace", "503-555-0100");
var contact2 = new Contact("Grace", "Hopper", "503-555-0199");

addressBook.addContact(contact);
addressBook.addContact(contact2);
