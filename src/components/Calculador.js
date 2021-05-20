import {useState,useEffect} from 'react';
import Button from './Button';
const Calculador = () => {

    ///estados
  const [origens,setOrigens]=useState([11,16,17,18]);
  const [destinos,setDestinos]=useState([]);
    // dados para submeter
  const [start, setStart]=useState(11);
  const [end, setEnd]=useState(16);
  const [dur,setDur]=useState(0);
  const [plano, setPlano]=useState('FaleMais30')
    // RESPOSTA
  const [dados, setDados]=useState(null);

    ///metodos
  const definirDestino=(e)=>{
    const origem = e.target.value;
    if(origem==='11'){                ///se origem for 11 temos as opçoes abaixo
        setDestinos([16,17,18])
        setEnd(16);                 
    }else{
        setDestinos([11]);
        setEnd(11);  
    }
  }

  ///enviar formulario
  const handleSubmit=(e)=>{
    e.preventDefault();
    //cria o corpo
    const corpo={
        start,
        end,
        dur:parseInt(dur,10),
        plano
    }

    fetch(`http://localhost:8000/plano?start=${start}&end=${end}&dur=${dur}&plano=${plano}`)
    .then((resposta)=>{
      console.log(resposta)
        return resposta.json();
        }).then((dados)=>{
      setDados(JSON.stringify(dados));
        }).catch(erro=>{
      console.log(erro.message);
        })
    }





  useEffect(()=>{
      setDestinos([16,17,18])
      
  },[]);
 
 useEffect(()=>{
     setDur(0)
 },[]);



    return ( 
        <div className="criar mx-auto bg-dark w-50 my-5 p-4">
            <h4 className='text-white text-center'>SIMULADOR</h4>
            <form className='form py-4'  onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="origem" className='text-white '>Origem</label>
                            <select class="custom-select form-control" id="origem" onChange={(e)=>{ definirDestino(e);setStart(e.target.value)}}>
                             {
                                 origens.map(origem=> <option key={origem}>{origem}</option>)
                             }
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="destino" className='text-white '>Destino</label>
                        <select className="custom-select"  value={end} onChange={(e)=>{setEnd(e.target.value)}}>
                            {
                                 destinos.map(dest=> <option key={dest} >{dest}</option>)
                             }
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                    <label htmlFor="dur" className='text-white'>Duração</label>
                    <div className="form-group"  >                          {/**  dur*/}
                 <input type="number" min='1' value={dur} required className='form-control' onChange={(e)=>setDur(e.target.value)} />
                    </div>

                    </div>
                    <div className="col-md-10">
                        <div className="form-group">
                            <label htmlFor="plano" className='text-white mx-2'>Plano</label>
                            <select class="custom-select" id="plano" value={plano} onChange={(e)=>setPlano(e.target.value)}>
                                <option value="FaleMais30">FaleMais30</option>
                                <option value="FaleMais60">FaleMais60</option>
                                <option value="FaleMais120">FaleMais120</option>
                            </select>
                        </div>
                    </div>
                </div>
             
                
               
                 <h6 className={dados ? 'alert alert-warning' : ''}>{dados && dados }</h6>
                <button type='submit' className='btn btn-info btn-block mt-4' onClick={handleSubmit}>Calcular</button>
            </form>
        </div>
     );
}
 
export default Calculador;