//Load Customer Data

function loadCustomerToOrders(){
    $('#selectCusID').empty();
    let custDataSet="";
    for (let i = 0; i < customerArr.length; i++) {
    custDataSet=`<option>${customerArr[i].getCusId()}</option>`
    $('#selectCusID').append(custDataSet);
}
}


function loadItemToOrders(){
    $('#selectItemCode').empty();
    let itemDataSet="";
    for (let i = 0; i < itemArray.length; i++) {
    itemDataSet=`<option>${itemArray[i].getItemId()}</option>`
    $('#selectItemCode').append(itemDataSet);
}
}


$('#selectCusID').on('change',function(){
    let selectedValue=$('#selectCusID').val();
    for (let i = 0; i < customerArr.length; i++) {
        if(selectedValue == customerArr[i].getCusId()){
            $('#orderCustomerID').val(customerArr[i].getCusId());
            $('#orderCustomerName').val(customerArr[i].getName());
            $('#orderCustomerAddress').val(customerArr[i].getAddress());
            $('#orderCustomerSalary').val(customerArr[i].getPno());
        }
    }
});

$('#selectItemCode').on('change',function(){
    let selectedValue=$('#selectItemCode').val();
    for (let i = 0; i < itemArray.length; i++) {
        if(selectedValue == itemArray[i].getItemId()){
            $('#txtItemCode').val(itemArray[i].getItemId());
            $('#txtItemDescription').val(itemArray[i].getItemName());
            $('#txtItemPrice').val(itemArray[i].getItemPrice());
            $('#txtQTYOnHand').val(itemArray[i].getItemQty());
        }
    }
})

//Continue from here
$('#btnAddToTable').on('click',function(){
    
    
    if(validateOrderFields()){

    }
    
})