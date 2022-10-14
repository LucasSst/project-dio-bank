import { PeopleAccount } from "./PeopleAccount"

export class VipAccount extends PeopleAccount{
    
    constructor (cod_id:number, name:string, accountNumber:number){
        super (cod_id, name, accountNumber)
    }

    deposit = (deposit:number):void => {
        (this.balance += deposit + 10) 
    }

}