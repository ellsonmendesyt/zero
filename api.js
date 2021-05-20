
const express = require('express');

const app= express();
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    return res.json({message:'Ola'});
});

//PLANOS
const planos= [
  {
    "id": 1,
    "titulo": "FaleMais30",
    "descricao": "perfeito para quem que falar a vontade e usar as redes sociais",
    "franquia": "30"
  },
  {
    "id": 2,
    "titulo": "FaleMais60",
    "descricao": "Ideal para quem quer compartilhar com a familia e ficar contado o tempo todo",
    "franquia": "60"
  },
  {
    "id": 3,
    "titulo": "FaleMais120",
    "descricao": "Para internautas hard-core, contectado o tempo todo acesso ao conteudo premium de streaming",
    "franquia": "120"
  }];




//traz todos os planos
app.get('/planos', (req,res)=>{res.json(planos);});



///traz  um plano pelo id
 app.get('/planos/:id',(req,res)=>{
   const id = req.params.id;
   return res.send(planos.find(plano => plano.id==id));
 })  
 
 
 app.get('/plano',(req,res)=>{
   const {start,end,dur,plano} = req.query;
   
   let tarifa=0;
  
   const {franquia} = planos.find(p=>p.titulo==plano);

   if(start==='11' && end==='16'){
            tarifa =1.9;
        }else if(start==='11' && end==='17'){
          tarifa=1.7;
        }else if(start==='11' && end==='18'){
         tarifa =0.9;
        } else if(start==='16' && end==='11'){
           tarifa = 2.9;
        } else if(start==='17' && end==='11'){
          tarifa = 2.7;
        }else if(start==='18' && end==='11'){
          tarifa = 1.9; 
        }

        let excedente=0;
        let custocomplano=0;

        if(dur > franquia){
            excedente= dur-franquia;
            custocomplano = excedente * (tarifa + tarifa*0.1) ;
            // custocomplano=200;
        }
    
        let avulso = tarifa * dur;

    

   return res.send({comFaleMais: custocomplano,SemFaleMais: avulso})
 })

app.listen(8000,()=>{
    console.log('servidor ativo');
});



