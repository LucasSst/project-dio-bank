

export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name:string, accountNumber:number){
        this.name = name
        this.accountNumber = accountNumber
    }



    getName = ():string => {
        return this.name
    }

    deposit = (deposit:number):void => {
        if (this.validateStatus()){
            this.balance += deposit
        }
         
    }

    withdraw = (withdraw:number):void => {
        if(this.balance >  withdraw && this.validateStatus() === true){
            this.balance -= withdraw
        }else {
            throw new Error('Valor insuficiente para saque')
        }
        
    }

    getBalance = ():number => {
        return this.balance
    }
    


    private validateStatus = ():boolean => {
        if(this.status){
            return this.status
        
        }    

        throw new Error('Conta inválida')
    }

    getValidateStatus = ():boolean =>{
        return this.validateStatus()
    }

}