$('#addmore').click(function(){
    let labelclass = $('.onerow:last').find('.labelclass').attr('id');
    let lastcounter = labelclass.split('label');
    let newcounter = parseInt(lastcounter[1]) + 1;
    let newlabelid = "label"+newcounter;
    let newvalid = "val"+newcounter;
    $('.onerow:last').clone().insertAfter($('.onerow:last'));    
    $('.onerow:last').find('.labelclass').val('').attr('placeholder', 'Enter your label here');
    $('.onerow:last').find('.numberclass').val('0');
    $('.onerow:last').find('.labelclass').attr('id', newlabelid);
    $('.onerow:last').find('.numberclass').attr('id', newvalid);
})
var sum = 0;
var total = 0;
setTotalVal = function(){    
    sum = 0;
    $('.numberclass').each(function () {
        var counter = $(this).val();        
        sum += parseInt(counter);
    });
    total = $('#totalcount').text();      
    total = parseInt(total);          
    let remain = total - sum;
    $('#pendingcount').text(remain);
};
setTotalVal();
$('input').on('blur, change',function(){    
    setTotalVal();     
    if(sum>total){
        $('#pendingcount').css('color', 'red');
    } else{
        $('#pendingcount').css('color', '#212529');
    } 
})