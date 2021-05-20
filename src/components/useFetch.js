import {useState,useEffect} from 'react';


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(resposta =>{
            if(!resposta.ok){
                setData(null);
                throw Error('Não conseguimos acessar o recurso');
            }
            return resposta.json()
        })
        .then((data)=>{
           setData(data);
           setCarregando(false);
           setErro(null);
        }).catch(erro =>{
            setCarregando(false);
            setErro(erro.message);
        })
    },[url]);

    return {data,carregando,erro}
}
 
export default useFetch;