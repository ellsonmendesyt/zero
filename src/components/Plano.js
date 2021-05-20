import useFetch from "./useFetch";
import {Link} from 'react-router-dom';

const Plano = (props) => {
    const {id} = props.match.params;

    const {data:plano, carregando:pendente,erro} = useFetch('http://localhost:8000/planos/'+id);
    return ( 
        <div className="detalhes">
           {pendente && <div>carregando</div>}
           {erro && <div>{erro}</div>}

            { plano && (
               
                <div clasName="card " style={{ width:400,backgroundColor:'orange',borderRadius:10 }}>
                    <h5 className="card-header">{plano.titulo}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{plano.descricao}</h5>
                        <h5 className="card-text">{plano.franquia}</h5>
                        <Link to="/" class="btn btn-primary">Adquira Já!</Link>
                    </div>
                </div>
            )}           
        </div>
     );
}
 
export default Plano;