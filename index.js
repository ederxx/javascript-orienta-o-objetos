import {Cliente} from "./Cliente.js";
import  {Gerente} from "./Funcionarios/Gerente.js";
import  {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente ("Ricardo", 5000, 1237456232);
gerente.cadastrarSenha("123");
const cliente = new Cliente ("Lais", 1000, "1235123154")


const gerentEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const clientEstaLogado = SistemaAutenticacao.login(cliente, "1235123154");
console.log(clientEstaLogado, gerentEstaLogado, diretorEstaLogado);