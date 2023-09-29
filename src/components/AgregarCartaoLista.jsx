import React from 'react'
import { Paper, makeStyles, Collapse, Typography, alpha } from '@material-ui/core'
import { useState } from 'react'
import AgregarCartaListaTexto from './AgregarCartaListaTexto'

const AgregarCartaoLista = ({type,listaId}) => {
    const[abierto, setAbierto]=useState(false)
    const clases= useStyle();
  return (
    <div className={clases.root}>
        <Collapse in={abierto}>
            <AgregarCartaListaTexto type={type} setAbierto={setAbierto}  listaId={listaId}/>
        </Collapse>
        <Collapse in={!abierto}>
        <Paper className={clases.AgregarCartaListaTexto} onClick={()=>setAbierto(true)}>
          <Typography>
            {
              type ==="carta" ? "+ Agregar carta" : "+ Agregar otra lista"
            }
          </Typography>
        </Paper>
        </Collapse>
    </div>
  )
}

const useStyle =makeStyles(theme => ({
  root: {
    width: "300px",
    marginTop: theme.spacing(1)
  },
  AgregarCartaListaTexto: { 
    padding: theme.spacing (1,1,1,2),
    margin: theme.spacing(0,1,1,1),
    background:"#ebecf0",
    "&:hover":{
      backgroundColor:alpha("#000", 0.25)
    }
  }
}))



export default AgregarCartaoLista