// DIO Banking

//name, accountNumber
//depositar, sacar

import {PeopleAccount} from "./class/PeopleAccount"

import { CompanyAccount } from "./class/CompanyAccount"

import {VipAccount} from "./class/VipAccount"





const peopleAccount = new PeopleAccount (1, 'João', 15)

console.log(peopleAccount.getName())

peopleAccount.deposit(30)
console.log(peopleAccount.getBalance())

peopleAccount.withdraw(29)
console.log(peopleAccount.getBalance())

peopleAccount.getValidateStatus()


const companyAccount = new CompanyAccount ('Dio', 10)
companyAccount.getloan(3023)
console.log(companyAccount.getBalance())



const vipAccount = new VipAccount (3, 'Lucas', 10)
vipAccount.deposit(10)
console.log(vipAccount.getBalance())

