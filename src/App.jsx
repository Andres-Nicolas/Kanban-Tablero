import { useState } from 'react'
import ListaTrello from './components/ListaTrello';
import { makeStyles } from '@material-ui/core';
import backgroundImage from "./images/beemo.jpg"
import AgregarCartaoLista from './components/AgregarCartaoLista';
import datosSimulados from './datossimulados';
import ContextAPI from './ContextAPI';
import uuid from 'react-uuid';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';

function App({}) {
  const clases= useStyle();
  const [dato,setDato]= useState(datosSimulados)

  const actualizarTituloLista=(tituloActualizado, listaId)=>{
     const lista = dato.listas[listaId]
     lista.titulo = tituloActualizado;
     setDato({
       ...dato,
      listas:{
         ...dato.listas,
         [listaId]:lista
       }
     })
  }

  const agregarCarta=(titulo,listaId)=>{
    const nuevaIdCarta =uuid();
    const nuevaCarta ={
      id: nuevaIdCarta,
      titulo,
    }
    const lista =dato.listas[listaId] 
    lista.cartas = [...lista.cartas, nuevaCarta]
    setDato(
      {
        ...dato,
        listas:{
        ...dato.listas,
        [listaId]: lista
        }
      }
    )
  }

  const agregarLista=(titulo)=>{
    const nuevaIdLista =uuid();
    setDato({
      listaIds :[...dato.listaIds, nuevaIdLista],
      listas: {
        ...dato.listas,
        [nuevaIdLista]:{
          id: nuevaIdLista,
          titulo,
          cartas:[]
        }
      }
    })
  }

  const onDragEnd=(result)=>{
    const {destination,destination:{droppableId: destdroppableId, index:destIndex},
     source,source:{droppableId:sourcedroppableId, index:sourceIndex}, draggableId, type} = result
     console.table([
      {
        sourcedroppableId,
        destdroppableId,
        draggableId
      },
      {
        type,
        sourceIndex,
        destIndex
      }
    ])
    
    if (!source){
      return;
    }
    if (type==="lista"){
      const nuevoIdLista = dato.listaIds
      nuevoIdLista.splice(sourceIndex, 1)
      nuevoIdLista.splice(destIndex,0, draggableId)
      return;

    }

    const sourceLista = dato.listas[sourcedroppableId]
    const destinationLista= dato.listas[destdroppableId]

    const dragginCard = sourceLista.cartas.filter((carta)=> carta.id === draggableId)[0]

    if (sourcedroppableId === destdroppableId){
      sourceList.cartas.splice(fuenteIndex,1)
      destinoLista.cartas.splice(destIndex, 0, dragginCard)
      setDato({
        ...dato, listas:{
          [sourceLista.id]:destinationLista,
        }
      })
    }else{
      sourceLista.cartas.splice(sourceIndex,1)
      destinationLista.cartas.splice(destIndex)
      setDato({
        ...dato.lista,
        [sourceLista.id]:sourceLista,
        [destinationLista.id] : destinationLista
      })
    }
  }


  console.log(dato)
  return (
    
    <ContextAPI.Provider value={{actualizarTituloLista, agregarCarta, agregarLista}}>
    <div className={clases.root}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="12345" type="lista" direction="horizontal">
          {
            (provided)=>(
              <div className={clases.contenedor} ref={provided.innerRef} {...provided.droppableProps}>
              {
                dato.listaIds.map(listaID =>{
                const lista = dato.listas[listaID]
                return <ListaTrello lista={lista} key = {listaID}/>
                })
              } 
              <div>
                <AgregarCartaoLista type="lista"/>
                {provided.placeholder}
              </div>
            </div>
            )
          }
        </Droppable>
      </DragDropContext>
    </div>
    </ContextAPI.Provider>
  );
}

const useStyle =makeStyles(theme => ({
  root:{
    minHeight: "100vh",
    overflowY: "auto",
    backgroundImage:`url(${backgroundImage})`,
    backgroundPosition:"center",
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat"
  },
  contenedor: {
    display: "flex",
  }
}))


export default App