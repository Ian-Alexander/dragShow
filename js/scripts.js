// Bussiness End Logic for Address Book

function AddressBook() {
  this.contacts = []
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    return this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
      }
    }
  };
  return false;
}

//Bussiness End Logic for Contacts

function Contact(firstName, lastName, phoneNumber, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.address = address;
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}


// User Interface Logic
var myAddressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedAddress = $("input#new-address").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedAddress);
    myAddressBook.addContact(newContact);
    displayContactDetails(myAddressBook);
  })
})




// var addressBook = new AddressBook();
// var contact = new Contact("Ada", "Lovelace", "503-555-0100");
// var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
// var contact3 = new Contact("Charles", "Gnarles", "503-256-2810");
// var contact4 = new Contact("Snooty", "Booty", "503-256-2800");
// var contact5 = new Contact("Richardo", "Bacardi", "503-250-2810");
//
// addressBook.addContact(contact);
// addressBook.addContact(contact2);
// addressBook.addContact(contact3);
// addressBook.addContact(contact4);
// addressBook.addContact(contact5);
