import "./styles.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";



export default function Tchamado() {

 //declarar os métodos que serão utilizados para manipular o form

 const { register, handleSubmit, watch, formState: { errors }, reset } =  useForm();

 //declarar para qual função o método handleSubmit irá enviar as informações

 const  loginUser  =  data  =>  console.log(data);
  return (
    
    <div className="main">
        <h1>Vizualizar os chamados</h1>
        <div className="line-post"> </div>
        <div className="card-body-post">
            <form>
            <table id="customers">
                    <tr>
                        <th>Nome</th>
                        <th>Assunto</th>
                        <th>Descrição</th>
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
                                <button className="btn-answer" type="submit">Responder</button>
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
                                <button className="btn-answer" type="submit">Responder</button>
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
                                <button className="btn-answer" type="submit">Responder</button>
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
                                <button className="btn-answer" type="submit">Responder</button>
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
                                <button className="btn-answer" type="submit">Responder</button>
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
                                <button className="btn-answer" type="submit">Responder</button>
                        </div> </td>
                        <td>   <div>
                                <button  className="btn-delete" type="submit">Deletar</button>
                        </div> </td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                        <td>Germany</td>
                        <td>   <div >
                                <button className="btn-answer" type="submit">Responder</button>
                        </div> </td>
                        <td>   <div>
                                <button  className="btn-delete" type="submit">Deletar</button>
                        </div> </td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                        <td>Germany</td>
                        <td>   <div >
                                <button className="btn-answer" type="submit">Responder</button>
                        </div> </td>
                        <td>   <div>
                                <button  className="btn-delete" type="submit">Deletar</button>
                        </div> </td>
                    </tr>
                    <tr>
                        <td>North/South</td>
                        <td>Simon Crowther</td>
                        <td>UK</td>
                        <td>Germany</td>
                        <td>   <div >
                                <button className="btn-answer" type="submit">Responder</button>
                        </div> </td>
                        <td>   <div>
                                <button  className="btn-delete" type="submit">Deletar</button>
                        </div> </td>
                        
                    </tr>
                    <tr>
                        <td>Paris spécialités</td>
                        <td>Marie Bertrand</td>
                        <td>France</td>
                        <td>Germany</td>
                        <td>   <div >
                                <button className="btn-answer" type="submit">Responder</button>
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