document.addEventListener("DOMContentLoaded", contarVisitas);

function contarVisitas() {
    if (typeof(Storage) !== "undefined") {
        
     
        if (localStorage.getItem("visitas")) {
            
        localStorage.setItem("visitas", parseInt(localStorage.getItem("visitas")) + 1);

        }else{
        
            localStorage.setItem("visitas", 1);

        }
            document.getElementById("contadorVisitas").textContent = localStorage.getItem("visitas");
        }else{
                console.log("Tu navegador no soporta almacenamiento local. El contador de visitas no funcionará correctamente.");
    }
}

