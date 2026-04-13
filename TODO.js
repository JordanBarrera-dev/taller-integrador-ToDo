


let tareaUser = document.getElementById("tareaUsuario")
    const botonAdd = document.getElementById("botonAdd")
    const botonClean = document.getElementById("botonClean")
    const botonEliminar = document.getElementById("botonEliminar")
    const visor = document.getElementById("totalTareas")
    let contador = 0
    
    
    
    
    
    
    botonAdd.addEventListener("click",function(){
        tareaLimpia =tareaUser.value.trim()
        if (tareaLimpia === ""){
            alert `ingresa una tarea`   

            return
        }
        
    
        else{
        
        const listaTarea = document.createElement("li")
        const btnBorrar = document.createElement("button")
        const btnHecho = document.createElement("button")
        const btnUrgente = document.createElement("button")
        const contenedorTareas = document.getElementById("respuesta")

        btnBorrar.addEventListener("click", function(){
        listaTarea.remove()
        })

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

        listaTarea.innerText = `${emoji} ${tareaLimpia}`
        btnBorrar.innerText = `eliminar`
        btnHecho.innerText = `realizado`
        btnUrgente.innerText = `urgente`
        
        btnBorrar.onclick = function(){
            listaTarea.remove()
            contador -= 1
            visor.innerText = contador
            
        }
        btnHecho.onclick = function(){
            listaTarea.style.textDecoration = "line-through"

        }
        btnUrgente.onclick = function(){

            listaTarea.clean()
        }
        listaTarea.appendChild(btnBorrar)
        listaTarea.appendChild(btnHecho)
        listaTarea.appendChild(btnUrgente)

        contenedorTareas.appendChild(listaTarea)
        
        contador += 1
        visor.innerText = contador
        
        
        tareaUser.value = ""
        
        }
        
    })


    






