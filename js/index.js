document.addEventListener('DOMContentLoaded', function(){
    const gasto = document.getElementById('gasto');
    const descripcion = document.getElementById('descripcion');
    const categoria = document.getElementById('categoria');
    const addBtn = document.getElementById('addBtn');
    const tableGastosFijos = document.getElementById('tableGastosFijos');
    const tableComida = document.getElementById('tableComida');
    const tableTransporte = document.getElementById('tableTransporte');
    const tableLujos = document.getElementById('tableLujos');
    const alert = document.getElementById('alert');
    const form = document.getElementsByClassName('form')
    const removeBtn = document.getElementsByClassName('removeBtn');


    class DineroGastado {
        constructor (gasto, descripcion){
             this.gasto = gasto;
             this.descripcion = descripcion;
                   
        }      
    }

    class GastadoFijos extends DineroGastado{
           constructor (gasto, descripcion){
               super(gasto, descripcion);
               this.gasto = gasto;
               this.descripcion = descripcion;
           } 
    }

    class GastadoComida extends DineroGastado{
        constructor (gasto, descripcion){
            super(gasto, descripcion);
            this.gasto = gasto;
            this.descripcion = descripcion;
        } 
    }

    class GastadoTransporte extends DineroGastado{
        constructor (gasto, descripcion){
            super(gasto, descripcion);
            this.gasto = gasto;
            this.descripcion = descripcion;
        } 
    }

    class GastadoLujos extends DineroGastado{
        constructor (gasto, descripcion){
            super(gasto, descripcion);
            this.gasto = gasto;
            this.descripcion = descripcion;
        } 
    }


    function addGasto(){
        if(descripcion.value === "" || gasto.value === ""){
            alert.classList.remove("d-none");
            alert.innerText = "No ingresaste gasto/descripción"
        }
        else if(categoria.value === '1'){
            const rowGastosfijos = tableGastosFijos.insertRow();
            rowGastosfijos.innerHTML = `
            <td>${gasto.value}</td>
            <td>${descripcion.value}</td>
            <td> <button class="btn btn-danger ml-1 removeBtn">
                <i class="fa fa-trash"></i> </td> 
            `
            let gastoNuevo = new GastadoFijos();   
        } else if(categoria.value === '2'){
            const rowComida = tableComida.insertRow();
            rowComida.innerHTML = `
            <td>${gasto.value}</td>
            <td>${descripcion.value}</td>
            <td> <button class="btn btn-danger ml-1 removeBtn">
                <i class="fa fa-trash"></i> </td> 
            `
            let gastoNuevo = new GastadoComida();
        }else if(categoria.value === '3'){
            const rowTransporte = tableTransporte.insertRow();
            rowTransporte.innerHTML = `
            <td>${gasto.value}</td>
            <td>${descripcion.value}</td>
            <td> <button class="btn btn-danger ml-1 removeBtn">
                <i class="fa fa-trash"></i> </td> 
            `
            let gastoNuevo = new GastadoTransporte();
        }else{

            const rowLujos = tableLujos.insertRow();
            rowLujos.innerHTML = `
            <td>${gasto.value}</td>
            <td>${descripcion.value}</td>
            <td> <button class="btn btn-danger ml-1 removeBtn">
                <i class="fa fa-trash"></i> </td> 
            `
            let gastoNuevo = new GastadoLujos();
            console.log(gastoNuevo);

        }

    }


    
    
    addBtn.onclick = addGasto;
    
   
    
})