var selectedRow=null;
function onFormSubmit(e){
    event.preventDefault();
    var formData= readFormData();
    if(selectedRow=== null){
        insertNewRecord (formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm(); 
}

//Retrive the data
function readFormData(){
    var formData = {};
    formData["productcode"]= document.getElementById("productcode").value;
    formData["product"]= document.getElementById("product").value;
    formData["Qty"]= document.getElementById("Qty").value;
    formData["perprice"]= document.getElementById("perprice").value;
    return formData;
}

//insert the data
function insertNewRecord(data){
    var table= document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow= table.insertRow (table.length);
    var cell1= newRow.insertCell(0);
        cell1.innerHTML= data.productcode;
    var cell2= newRow.insertCell(1);
        cell2.innerHTML= data.product;
    var cell3= newRow.insertCell(2);
        cell3.innerHTML= data.Qty;
    var cell4= newRow.insertCell(3);
        cell4.innerHTML= data.perprice;
    var cell5= newRow.insertCell(4);
        cell5.innerHTML= '<botton onClick=onEdit(this)>Edit</botton><bottom onClick=onDelete(this)>Delete</botton>';
}

//edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementsById('productcode').value = selectedRow.cells[0].innerHTML;
    document.getElementsById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementsById('Qty').value = selectedRow.cells[2].innerHTML;
    document.getElementsById('Perprice').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productcode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.Qty;
    selectedRow.cells[3].innerHTML = formData.perprice;

}

//Delete the data
function onDelete(td){
    if(confirm('do you wat to delete the record?')){
        row=td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);

    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('productcode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('Qty').value = '';
    document.getElementById('perprice').value = '';
   
}