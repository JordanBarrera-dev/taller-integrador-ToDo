 let tareaUser = document.getElementById("tareaUsuario")
    const botonAdd = document.getElementById("botonAdd")
    const botonClean = document.getElementById("botonClean")
    const botonEliminar = document.getElementById("botonEliminar")
    
    
    
    
    
    botonAdd.addEventListener("click",function(){
        const listaTarea = document.createElement("li")
        tareaLimpia =tareaUser.value.trim()
        if (tareaLimpia === ""){
            alert `ingresa una tarea`   

            return
        }
            
        else{
        const nuevoContenedor = document.createElement("li")
        const listaTarea = document.createElement("li")
        const btnBorrar = document.createElement("button")
        const contenedorTareas = document.getElementById("respuesta")
        let categoria = document.getElementById("categoria")
        let escogida = categoria.value
        let emoji = ""
        switch(escogida){

            case "en blanco" : " ";
            break
            case "Trabajo" :
            emoji = "💼"
            break
            case "Estudio" :
            emoji = "✍️"
            break
            case "Personal" :
            emoji = "🏠"
            break
            case "Urgente" :
            emoji = "🚨"
            break
        }
        listaTarea.textContent = `${emoji} ${tareaLimpia}`
        btnBorrar.addEventListener("click", function(){
        listaTarea.remove()
        })
        tareaUser.value = ""
        }
    })




    