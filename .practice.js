ORDER OF OPERATIONS


function AddressBook() {
  this.contacts = []
}

function Contact(firstName, lastName, phoneNumber, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.address = address;
}
undefined

Contact
ƒ Contact(firstName, lastName, phoneNumber, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.address = address;
}
var addressBook = new AddressBook();
var contact = new Contact("Ada", "Lovelace", "503-555-0100");
var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
undefined

contact
Contact {firstName: "Ada", lastName: "Lovelace", phoneNumber: "503-555-0100", address: undefined}
Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}
ƒ () {
    return this.firstName + " " + this.lastName;
}
contact.fullName
ƒ () {
    return this.firstName + " " + this.lastName;
}
contact.fullName()
"Ada Lovelace"
contact2.fullName()
"Grace Hopper"

AddressBook.prototype.addContact = function(contact) {
    return this.contacts.push(contact);
}
ƒ (contact) {
    return this.contacts.push(contact);
}
addressBook.addContact(contact);
addressBook.addContact(contact2);
2
addressBook.contacts;
(2) [Contact, Contact]0: Contact {firstName: "Ada", lastName: "Lovelace", phoneNumber: "503-555-0100", address: undefined}1: Contact {firstName: "Grace", lastName: "Hopper", phoneNumber: "503-555-0199", address: undefined}length: 2__proto__: Array(0)concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Object
addressBook.contacts[0].firstName
"Ada"
