$('#itemContent').css({
    display: 'none'
})

$('#orderContent').css({
    display: 'none'
})
$('#btnCustomer').on('click',()=>{
    $('#itemContent').css({
        display: 'none'
    })

    $('#orderContent').css({
        display: 'none'
    })

    $('#customerContent').css({
        display: 'block'
    })
})

$('#btnItem').on('click',()=>{
    $('#customerContent').css({
        display: 'none'
    })

    $('#orderContent').css({
        display: 'none'
    })

    $('#itemContent').css({
        display: 'block'
    })
})

$('#btnOrder').on('click',()=>{
    $('#customerContent').css({
        display: 'none'
    })

    $('#orderContent').css({
        display: 'block'
    })

    $('#itemContent').css({
        display: 'none'
    })
})