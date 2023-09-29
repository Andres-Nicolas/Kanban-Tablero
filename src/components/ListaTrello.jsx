import { Paper, CssBaseline, makeStyles } from '@material-ui/core'
import React from 'react'
import TituloLista from './TituloLista'
import CartaTrello from './CartaTrello'
import AgregarCartaoLista from './AgregarCartaoLista'
import { Draggable, Droppable } from '@hello-pangea/dnd'

const useStyle =makeStyles(theme => ({
    root:{
        width:"300px",
        background:"#ebecf0",
        margin: theme.spacing(1)

    }
}))

const ListaTrello = ({lista, index}) => {
    console.log(lista)
    const clases =useStyle();
  return (
    <Draggable draggableId={lista.id} index={index}>
        {
            (provided)=>(
            <div ref={provided.innerRef}{...provided.draggableProps}>
                <Paper className={clases.root}  {...provided.dragHandleProps}>
                <CssBaseline/>
                <TituloLista titulo={lista.titulo} listaId={lista.id}/>
                <Droppable key={lista.id} droppableId={lista.id} index={index}>
                    {
                        (provided)=>(
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {

                                    lista.cartas.map((carta, index)=>(

                                        <CartaTrello carta={ carta } key={ carta.id } index={index} />
                                    ))
                                }
                                
                                {provided.placeholder }
                            </div>
                        )
                    }
                </Droppable>
                <AgregarCartaoLista type="carta" listaId={lista.id}/>
                </Paper>
            </div>
            )
        }

    </Draggable>
  )
}

export default ListaTrello