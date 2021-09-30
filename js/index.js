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

    function addGasto(){
        if(categoria.value === '1'){
            const rowGastosfijos = tableGastosFijos.insertRow();
            rowGastosfijos.innerHTML = `
            <td>${gasto.value}</td>
            <td>${descripcion.value}</td>
            <td> <button class="btn btn-danger ml-1">
                <i class="fa fa-trash"></i> </td> 
            `
        }
    }


    addBtn.onclick = addGasto;
    
   
    
})