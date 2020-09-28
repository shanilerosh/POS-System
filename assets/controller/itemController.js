
//Save Item
$('#btnSaveItem').on('click', function(){
    let itemId=$('#itemId').val();
    let itemName=$('#itemName').val();
    let itemPrice =$('#itemPrice').val();
    let itemQty =$('#itemQty').val();

    if(validateItemTextFields(itemId,itemName,itemPrice,itemQty)){
        let isSave=itemList(new Item(itemId,itemName,itemPrice,itemQty));
        console.log(isSave);
        if(isSave){
            loadItemTableData();
            clearItemFields();
            loadItemToOrders();
        }else{
            alert('Error Please try again');
        }
    }


    $('#itemtablebody').children().on('click',function(){
        let iid=$($(this).children().get(0)).text();
        let itemName=$($(this).children().get(1)).text();
        let itemPrice=$($(this).children().get(2)).text();
        let itemQty=$($(this).children().get(3)).text();

        
        $('#itemId').val(iid);
        $('#itemName').val(itemName);
        $('#itemPrice').val(itemPrice);
        $('#itemQty').val(itemQty);
    });
    
});

//     // Delete on Double Clic
    
//     // $('#custTbleBdy').children().on('dblclick',function(){
//     //     console.log("Clicked");
//     //     for (let i = 0; i < customerArr.length; i++) {
//     //         if($($(this).children().get(0)).text()==customerArr[i].getCusId()){
//     //             customerArr.splice(i,1);
//     //             $(this).remove();
//     //         }   
//     //     }
//     // })


//     // Fetch to textfield on click



$('#btnUpdateItem').on('click',function (){
    if($('#itemId').val()==''){
        alert('Please select a row to make an update')
    }else{
        //Update the array
        for(var i = 0; i< itemArray.length; i++){
            if(itemArray[i].getItemId()==$('#itemId').val()){
                itemArray[i].setItemName($('#itemName').val());
                itemArray[i].setItemQty($('#itemPrice').val());
                itemArray[i].setItemPrice($('#itemQty').val());   
            }
        }

        //Udate Manually

        $('#itemtablebody>tr').each(function(){
            if($('#itemId').val() == $($(this).children().get(0)).text()){
                $($(this).children().get(1)).text($('#itemName').val());
                $($(this).children().get(2)).text($('#itemPrice').val());
                $($(this).children().get(3)).text($('#itemQty').val());
            }
        })
        loadItemToOrders();
        clearItemFields();
    }
});


function validateItemTextFields(itemId,itemName,itemPrice,itemQty){
    if(itemId==''){
        $('#itemId').css({
            border:'2px solid red'
        })
        $('#itemId').focus();
        return false
    }else{
        $('#itemId').css({
            border:'2px #CED4DA solid'
        })
        if(itemName==''){
            $('#itemName').css({
                border:'2px solid red'
            })
            $('#itemName').focus();
            return false
        }else{
            $('#itemName').css({
                border:'2px #CED4DA solid'
            })
            if(itemPrice==''){
                $('#itemPrice').css({
                    border:'2px solid red'
                })
                $('#itemPrice').focus();
                return false
            }else{
                $('#itemPrice').css({
                    border:'2px #CED4DA solid'
                })
                if(itemQty==''){
                    $('#itemQty').css({
                        border:'2px solid red'
                    })
                    $('#itemQty').focus();
                    return false
                }else{
                    $('#itemQty').css({
                        border:'2px #CED4DA solid'
                    })
        
                }
            }
        }
    }
    return true
}


function loadItemTableData(){
    let dataSet='';
    for (let i = 0; i < itemArray.length; i++) {
        dataSet=`<tr>
        <th scope="row">${itemArray[i].getItemId()}</th>
        <td>${itemArray[i].getItemName()}</td>
        <td>${itemArray[i].getItemPrice()}</td>
        <td>${itemArray[i].getItemQty()}</td>
      </tr>`
    }
    $('#itemtablebody').append(dataSet);
}


function clearItemFields(){
    $('#itemId').val('');
    $('#itemName').val('');
    $('#itemPrice').val('');
    $('#itemQty').val('');
}
