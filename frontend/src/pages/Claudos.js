import "./styles.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";



export default function Claudos() {

 //declarar os métodos que serão utilizados para manipular o form

 const { register, handleSubmit, watch, formState: { errors }, reset } =  useForm();

 //declarar para qual função o método handleSubmit irá enviar as informações

 const  loginUser  =  data  =>  console.log(data);
  return (
    
    <div className="main">
        <h1>Vizualizar seus laudos</h1>
        <div className="line-post"> </div>
        <div className="card-body-post">
            <form>
            <table id="customers">
                    <tr>
                        <th>Tecnico</th>
                        <th>Assunto</th>
                        <th>Resultado</th>
                        <th>Imagem</th>
                        <th>Responder</th>
                        <th>Deletar</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td>   <div >
                                <button className="btn-answer" type="submit">Confirmar</button>
                        </div> </td>
                        <td>   <div>
                                <button  className="btn-delete" type="submit">Deletar</button>
                        </div> </td>
                    </tr>
                    <tr>
                        <td>Berglunds snabbköp</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                        <td>Germany</td>
                        <td>   <div >
                                <button className="btn-answer" type="submit">Confirmar</button>
                        </div> </td>
                        <td>   <div>
                                <button  className="btn-delete" type="submit">Deletar</button>
                        </div> </td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>Germany</td>
                        <td>   <div >
                                <button className="btn-answer" type="submit">Confirmar</button>
                        </div> </td>
                        <td>   <div>
                                <button  className="btn-delete" type="submit">Deletar</button>
                        </div> </td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                        <td>Germany</td>
                        <td>   <div >
                                <button className="btn-answer" type="submit">Confirmar</button>
                        </div> </td>
                        <td>   <div>
                                <button  className="btn-delete" type="submit">Deletar</button>
                        </div> </td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                        <td>Germany</td>
                        <td>   <div >
                                <button className="btn-answer" type="submit">Confirmar</button>
                        </div> </td>
                        <td>   <div>
                                <button  className="btn-delete" type="submit">Deletar</button>
                        </div> </td>
                       
                    </tr>
                    <tr>
                        <td>Königlich Essen</td>
                        <td>Philip Cramer</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td>   <div >
                                <button className="btn-answer" type="submit">Confirmar</button>
                        </div> </td>
                        <td>   <div>
                                <button  className="btn-delete" type="submit">Deletar</button>
                        </div> </td>
                    </tr>
      
                    </table>

            </form>


        </div>



    </div>



    

);
}