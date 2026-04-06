 // codigo del TODO!


    let tareaUser = document.getElementById("tareaUsuario")
    const botonAdd = document.getElementById("botonAdd")
    const contenedorTareas = document.getElementById("respuesta")
    const botonClean = document.getElementById("botonClean")
    const botonEliminar = document.getElementById("botonEliminar")

    listaToDo = []
    botonAdd.addEventListener("click",function(){
        tareaLimpia =tareaUser.value.trim()
        if (tareaLimpia === ""){
            alert `ingresa una tarea`
            return
        }
        else{
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
        let catYtarea = `${emoji} ${tareaLimpia}`
        listaToDo.push(catYtarea)
        document.getElementById("añadido").innerHTML = `tu tarea ${catYtarea} ha sido añadida`
        tareaUser.value = ""
        document.getElementById("totalTareas").innerText = listaToDo.length
        contenedorTareas.innerHTML = ""
            listaToDo.forEach(element => {
            contenedorTareas.innerHTML += `<li>${element}</li>`
        
    
        })
        }
    })   

    botonClean.addEventListener("click", function(){

    listaToDo = []
    contenedorTareas.innerHTML = ""
    document.getElementById("totalTareas").innerText = "0"
    document.getElementById("añadido").innerHTML = `tus tareas han sido eliminadas`
    document.getElementById("añadido").innerHTML = `tus tareas han sido eliminadas`
    document.getElementById("limpio").innerHTML = `lista impia`
    })

    botonEliminar.addEventListener("click",function(){
    if(listaToDo.length < 1){
        document.getElementById("añadido").innerHTML = `no tienes tareas que eliminar`
    }
    else{
        listaToDo.pop()
        contenedorTareas.innerHTML = ""
            listaToDo.forEach(element => {
            contenedorTareas.innerHTML += `<li>${element}</li>`
            })
        document.getElementById("totalTareas").innerText = listaToDo.length
        document.getElementById("añadido").innerHTML = `tu ultima tarea ha sido eliminada`}

    })
    
    






