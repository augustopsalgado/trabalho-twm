import "./styles.css";
import { Link } from "react-router-dom";
export default function Cadastro() {
  return (
    
  <div className="main">
  <p className="sign">Cadastro</p>
  
  <form className="form">
    <input type="text" className="username" placeholder="Usuário" />
    <input type="text" className="password" placeholder="Email" />
    <input type="password" className="password" placeholder="Senha" />
    <a href="#" className="submit">
      Cadastrar
    </a>
    <p className="forgot">
      <a href="#">
      <Link to ="../login">Já possui conta? Clique aqui</Link>
      </a>
    </p>
  </form>
</div>

);
}
