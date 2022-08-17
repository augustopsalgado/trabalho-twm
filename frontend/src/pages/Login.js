import "./styles.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
  <div className="main">
  <p className="sign">Bem vindo de volta</p>
  
  <form className="form">
    <input type="text" className="username" placeholder="Usuário" />
    <input type="password" className="password" placeholder="Senha" />
    <a href="#" className="submit">
      Entrar
    </a>
    <p className="forgot">
      <a href="#">
      <Link to ="../cadastro">Não possui conta ainda? Cadastre-se</Link>
        
      </a>
    </p>
  </form>
</div>);
}
