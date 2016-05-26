//Count characters while typing
function countChar(val) {
    var len = val.value.length;
    if (len > 140){
    	jQuery('#charNum').show().text(140 - len+" Characters left").css('color','red');
	    jQuery('.action-block .tweet-now').attr('disabled','');
	    jQuery('.action-block .add-to-queue').attr('disabled','');
	}
   else{
        jQuery('#charNum').show().text(140 - len+" Characters left").css('color','#1abc9c');
        jQuery('.tweet-now').removeAttr('disabled');
        jQuery('.add-to-queue').removeAttr('disabled');
    }
};