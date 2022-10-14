import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
    private cod_id: number


    constructor (cod_id:number, name:string, accountNumber:number){
        super(name, accountNumber)
        this.cod_id = cod_id
    }
        

   
}