"use strict";
var ps = require("prompt-sync")
var prompt = ps();

class Contact{
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }

    set firstName(firstName) {
        let pattern = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(pattern.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "First Name is invalid.";
        }
    }
    get firstName() {
        return this._firstName;
    }

    set lastName(lastName) {
        let pattern = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
        if(pattern.test(lastName)) {
            this._lastName = lastName
        } else {
            throw "Last Name is invalid.";
        }
    }
    get lastName() {
        return this._lastName;
    }

    set address(address) {
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if(pattern.test(address)) {
          this._address = address;  
        } else throw "Address Must have 4 Characters";
    }

    get address() {
        return this._address;
    }

    set city(city) {
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if(pattern.test(city)) {
            this._city = city;
        } else throw "State Must have 4 Characters";
    }

    get city() {
        return this._city;
    }

    set state(state) {
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if(pattern.test(state)) {
            this._state = state;
        } else throw "State Must have 4 Charactes";
    }

    get state() {
        return this._state;
    }

    set zip(zip){
        let Pattern = RegExp('^[0-9]{6}$');
        if(Pattern.test(zip)) {
            this._zip = zip;
        } else throw 'Zip Code must be of 6 digits.';
    }

    get zip(){
        return this._zip;
    }

    set phoneNo(phoneNo) {
        let Pattern = RegExp('^[0-9]{2}|\s|[0-9]{10}$');
        if(Pattern.test(phoneNo)) {
            this._phoneNo = phoneNo;
        } else throw 'Invalid Phone Number.';
    }

    get phoneNo() {
        return this._phoneNo;
    }

    set email(email){
        let Pattern = RegExp('^[a-zA-Z0-9]+([+_.-][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');
        if(Pattern.test(email)){
            this._email = email;
        } else throw "Invalid Email ID";
    }

    get email() {
        return this._email;
    }

    toString(){
        return "First Name= "+ this.firstName
            + " Last Name= "+ this.lastName
            + " Address= "+ this.address
            + " City= "+ this.city
            + " State= "+ this.state
            + " Zip= "+ this.zip
            + " PhoneNo= "+ this.phoneNo
            + " Email = "+ this.email;
    }
}


function contactDetails(contact) {
    console.log("Enter the Last Name :");
    contact._lastName = prompt();
    console.log("Enter the Address :");
    contact._address = prompt();
    console.log("Enter the City :");
    contact._city = prompt();
    console.log("Enter the State :");
    contact._state = prompt();
    console.log("Enter the Zip :");
    contact._zip = prompt();
    console.log("Enter the Phone No :");
    contact._phoneno = prompt();
    console.log("Enter the Email ID :");
    contact._email = prompt();
}

function editContact() {
    console.log("Enter the First Name :");
    let firstName = prompt();
    for(let contact of addressBookArr) {
        if(contact._firstName == firstName){
            console.log("Contact with First Name Found.");
            contactDetails(contact);
        } 
    }
}


try{
    let contact1 = new Contact("Dhanshri","Zingae","Navimumbao","Pune","Maharashtra","412307","8657169656","dhanshri@gmail.com");
//    console.log(contact1.toString());
   
    let contact2 = new Contact("Rajshri","Zingade","Pune","Latur","Maharashtra","414141","9021473464","Rajshri@gmail.com");
//    console.log(contact2.toString());

    let contact3 = new Contact("Sapna","Gore","Lohara","Bider","Karnataka","123456","9876543210","Ssapna@gmail.com");
//    console.log(contact3.toString());

    var addressBookArr = [];
    addressBookArr.push(contact1);
    addressBookArr.push(contact2);
    addressBookArr.push(contact3);
} catch(e) {
    console.log(e);
}

console.log(addressBookArr);
editContact();
console.log(addressBookArr);
