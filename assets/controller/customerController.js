
//Save Customer
$('#btnSaveCustomer').on('click', function(){
    let custId=$('#custId').val();
    let custName=$('#custName').val();
    let custMobile =$('#custMobile').val();
    let custAddress =$('#custAddress').val();

        
    if(validateTextFields(custId,custName,custMobile,custAddress)){
        let isSave=custList(new Customer(custId,custName,custMobile,custAddress));
        if(isSave){
            loadTableData();
            loadCustomerToOrders();
            clearFields();
        }else{
            alert('Error Please try again');
        }
    }



    // Delete on Double Clic
    
    // $('#custTbleBdy').children().on('dblclick',function(){
    //     console.log("Clicked");
    //     for (let i = 0; i < customerArr.length; i++) {
    //         if($($(this).children().get(0)).text()==customerArr[i].getCusId()){
    //             customerArr.splice(i,1);
    //             $(this).remove();
    //         }   
    //     }
    // })


    // Fetch to textfield on click

    $('#custTbleBdy').children().on('click',function(){
        let cid=$($(this).children().get(0)).text();
        let custName=$($(this).children().get(1)).text();
        let custMobile=$($(this).children().get(2)).text();
        let custAddress=$($(this).children().get(3)).text();

        
        $('#custId').val(cid);
        $('#custName').val(custName);
        $('#custMobile').val(custMobile);
        $('#custAddress').val(custAddress);
    });
    
});




$('#btnUpdateustomer').on('click',function (){
    if($('#custId').val()==''){
        alert('Please select a row to make an update')
    }else{
        //Update the array
        for(var i = 0; i< customerArr.length; i++){
            if(customerArr[i].getCusId()==$('#custId').val()){
                customerArr[i].setName($('#custName').val());
                customerArr[i].setPno($('#custMobile').val());
                customerArr[i].setAddress($('#custAddress').val());   
            }
        }

        //Udate Manually

        $('#custTbleBdy>tr').each(function(){
            if($('#custId').val() == $($(this).children().get(0)).text()){
                $($(this).children().get(1)).text($('#custName').val());
                $($(this).children().get(2)).text($('#custMobile').val());
                $($(this).children().get(3)).text($('#custAddress').val());
            }
        })
        loadCustomerToOrders();
        clearFields();
    }
});


function loadTableData(){
    console.log("inside load");
    let dataSet='';
    for (let i = 0; i < customerArr.length; i++) {
        dataSet=`<tr>
        <th scope="row">${customerArr[i].getCusId()}</th>
        <td>${customerArr[i].getName()}</td>
        <td>${customerArr[i].getPno()}</td>
        <td>${customerArr[i].getAddress()}</td>
      </tr>`
    }
    $('#custTbleBdy').append(dataSet);
}


function clearFields(){
    $('#custId').val('');
    $('#custName').val('');
    $('#custMobile').val('');
    $('#custAddress').val('');
}



function validateTextFields(custId,custName,custMobile,custAddress){
    console.log("Valud");
    if(custId==''){
        $('#custId').css({
            border:'2px solid red'
        })
        $('#custId').focus();
        return false
    }else{
        $('#custId').css({
            border:'2px #CED4DA solid'
        })
        if(custName==''){
            $('#custName').css({
                border:'2px solid red'
            })
            $('#custName').focus();
            return false
        }else{
            $('#custName').css({
                border:'2px #CED4DA solid'
            })
            if(custMobile==''){
                $('#custMobile').css({
                    border:'2px solid red'
                })
                $('#custMobile').focus();
                return false
            }else{
                $('#custMobile').css({
                    border:'2px #CED4DA solid'
                })
                if(custAddress==''){
                    $('#custAddress').css({
                        border:'2px solid red'
                    })
                    $('#custAddress').focus();
                    return false
                }else{
                    $('#custAddress').css({
                        border:'2px #CED4DA solid'
                    })
        
                }
            }
        }
    }
    return true;
}