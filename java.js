document.getElementById("formulario-baguette").addEventListener("input", calcularTotal);

function calcularTotal() {
    
    let especialidad = parseInt(document.getElementById("especialidad").value);

    
    let pan = document.querySelector('input[name="pan"]:checked');
    let costoPan = pan ? parseInt(pan.value) : 0;

    let ingredientes = document.querySelectorAll('input[name="ingrediente"]:checked');
    let costoIngredientes = 0;
    ingredientes.forEach(ing => costoIngredientes += parseInt(ing.value));

    
    let cantidad = parseInt(document.getElementById("cantidad").value) || 1;

    
    let domicilio = document.getElementById("domicilio").checked ? parseInt(document.getElementById("domicilio").value) : 0;

    
    let total = (especialidad + costoPan + costoIngredientes) * cantidad + domicilio;

    
    document.getElementById("total").textContent = "Total: $" + total.toFixed(2) + " MXN";
}
