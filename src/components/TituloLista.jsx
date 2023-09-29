import React, { useContext, useState } from 'react'
import { InputBase, Typography, makeStyles } from '@material-ui/core'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ContextAPI from '../ContextAPI'

const TituloLista = ({titulo, listaId}) => {
    const clases = useStyle();
    const [abierto, setAbierto]=useState(false);
    const [tituloNuevo, setTitulonuevo] = useState(titulo);
    const {actualizarTituloLista} =useContext(ContextAPI)


    const handleBlur=()=>{
        actualizarTituloLista(tituloNuevo, listaId)
        setAbierto(false)
    }
  return (

    < >
    {
        abierto ?
        (
            <InputBase
                value={tituloNuevo}
                onChange={e=>setTitulonuevo(e.target.value)}
                onBlur={handleBlur}
                autoFocus
                fullWidth
                inputProps={{className: clases.input}}
            />
        ): (
            <div className={clases.titulo}>
            <Typography className={clases.tituloTexto} onClick={()=>setAbierto(true)}>
                {titulo}
            </Typography>
            <MoreHorizIcon/>
        
    </div>
        )
    }
    </>
  )
}

const useStyle =makeStyles(theme => ({
    titulo:{
        display:"flex",
        margin:theme.spacing(1)
    },
    tituloTexto:{
        fontSize:"1.2rem",
        fontWeight:"bold",
        flexGrow:1
    },
    input:{
        fontSize: "1.2 rem",
        fontWeight: "bold",
        margin: theme.spacing(1),
        "&:focus":{
            background:"#ddd"
        }
    }
}))

export default TituloLista