
import {DioAccount} from "./DioAccount"

export class CompanyAccount extends DioAccount{

    constructor (name:string, accountNumber:number){
        super(name, accountNumber)
    }

    getloan = (loan:number):void => {
        if (this.getValidateStatus()){
            this.balance += loan
        }
   
    }
   
}