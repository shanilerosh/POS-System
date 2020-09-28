function Item(itemId,itemName,itemPrice,itemQty){
    let __itemId=itemId;
    let __itemName=itemName
    let __itemPrice=itemPrice;
    let __itemQty=itemQty;


    this.getItemId=function(){
        return __itemId;
    }

    this.getItemName=function(){
        return __itemName;
    }

    this.getItemPrice=function(){
        return __itemPrice;
    }

    this.getItemQty=function(){
        return __itemQty;
    }

    this.setItemId=function(itemId){
        __itemId=itemId;
    }

    this.setItemName=function(itemName){
        __itemName=itemName;
    }

    this.setItemQty=function(itemQty){
        __itemQty=itemQty;
    }

    this.setItemPrice=function(itemPrice){
        __itemPrice=itemPrice;
    }
}