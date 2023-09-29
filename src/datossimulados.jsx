import uuid from "react-uuid";

 const datosSimulados={
    listas:{
        "01lista":{
            id:"01lista",
            titulo:"Por hacer",
            cartas:[
                {
                id:"01carta",
                titulo:"configuracion entorno"
                },
                {
                id:"02carta",
                titulo:"Instalar dependencias"
                },
                {
                id:"03carta",
                titulo: "iniciar repositorio"
                }
            ]
        },
        "02lista":{
            id:"02lista",
            titulo: "En desarrollo",
            cartas:[
                {
                    id:"011carta",
                    titulo:"consulta del proyecto"
                    }
            ]
        }
    },
    listaIds:["01lista","02lista"]
 }

 export default datosSimulados;