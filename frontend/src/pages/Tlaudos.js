import "./styles.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";



export default function Tlaudos() {

 //declarar os métodos que serão utilizados para manipular o form

 const { register, handleSubmit, watch, formState: { errors }, reset } =  useForm();

 //declarar para qual função o método handleSubmit irá enviar as informações

 const  loginUser  =  data  =>  console.log(data);
  return (
    
    <div className="main">
        <h1>Responder um chamado</h1>
        <div className="line-post"> </div>
        <div className="card-body-post">
            <form>
                <div className="fields">
                    <label>Nome do técnico</label>
                    <input type="text"/>
                </div>
                <div className="fields">
                    <label>Assunto:</label>
                    <input type="text"/>
                </div>
                <div className="fields">
                    <label>Valor:</label>
                    <input type="text"/>
                </div>
                <div className="fields">
                    <label>Descrição</label>
                    <textarea type="text"></textarea>
                </div>
                
                <div className="fields">
                <input type="file" name="picture" />
             
                </div>
                
                <div className="btn-post">
                    <button type="submit">Enviar</button>

                </div>



            </form>


        </div>



    </div>



    

);
}