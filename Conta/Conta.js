
// Classe Abstrata - que so pode ser herdada, e nao instanciada.



export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Erro("vc não deveria instanciar um objeto do tipo Conta pois ela é uma classe abstrata")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

         
    
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }


    sacar(valor) {
        throw new Erro("O Metodo Sacar da Conta é Abstrato")
        }
        _sacar (valor, taxa) {
            const valorSacado = taxa * valor;
            if (this._saldo >= valorSacado) {
                this._saldo -= valorSacado;
                return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }


    }
