import React, { useState } from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import { Draggable } from '@hello-pangea/dnd'


const CartaTrello = ({carta, index}) => {
    const clases= useStyle();
  return (
    <Draggable draggableId={carta.id} index={index}>
      {
        (provided)=>(
          <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
            <Paper className={clases.cartatrello}>
              {carta.titulo}
            </Paper>
          </div>
            
          
        )
      }
    </Draggable>
  )
}

const useStyle =makeStyles(theme => ({
  cartatrello:{
    padding: theme.spacing(1,1,1,2),
    margin: theme.spacing(1)
  }
}))

export default CartaTrello