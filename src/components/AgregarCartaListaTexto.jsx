import React, { useContext, useState } from 'react'
import { Paper,InputBase, makeStyles, Button, IconButton, alpha } from '@material-ui/core'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ContextAPI from '../ContextAPI';

const AgregarCartaListaTexto = ({type, setAbierto, listaId}) => {
    const [titulo, setTitulo]=useState("")
    const clases = useStyle();
    const {agregarCarta, agregarLista}=useContext(ContextAPI)
  
  
    const manejoAgregarcartaoLista=()=>{
      if (type==="carta"){
        agregarCarta(titulo,listaId)
      }
      else{
        agregarLista(titulo)
      }
      setTitulo("")
      setAbierto(false)
    }
  
  
    console.log(titulo)
    return (
      < >
      <Paper className={clases.carta}>
          <InputBase 
            value={titulo} 
            onBlur={()=> setAbierto(false)}
            onChange={e=>setTitulo(e.target.value)}
            multiline
            placeholder={
              type==="carta"? "Ingresa un titulo para esta carta. " : "Ingresa un titulo para esta lista"
            }  
            inputProps={{className: clases.input}}     
          />
       </Paper>
       <div className={clases.confirmar}>
        <div>
          <Button className={clases.btnConfirmar} onClick={manejoAgregarcartaoLista}>
            {
              type==="carta" ? "Ageregar carta" : "Agregar lista"
            }
          </Button>
          <IconButton onClick={()=>setAbierto(false)}>
          <HighlightOffIcon/>
          </IconButton>
        </div>
       </div>
      </>
    )
  }
  
  const useStyle =makeStyles(theme => ({
    carta:{
      width: "280px",
      margin: theme.spacing(0,1,1,1),
      paddingBottom: theme.spacing(4)    
    },
    input:{
      margin: theme.spacing(1)
    },
    confirmar:{
      display:"flex",
      margin:theme.spacing(0,1,1,1)
    },
    opciones:{
      flexGrow:1
    },
    btnConfirmar:{
      background:"#5aac44",
      color:"#fff",
      "&:hover":{
        background: alpha("#5aac44", 0.75)
      }
    }
  }))
  
  
  export default AgregarCartaListaTexto