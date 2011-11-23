(function($){  
 $.fn.abbr = function() {
	//There are no options. Maybe a css class?
	
    return this.each(function() {  
		obj = $(this);
		var raw = obj.html();
		//alert(raw);
		var abbreviation = /\s[A-Z][A-Z0-9]{2,}\s/g; //new RegExp(" [A-Z][A-Z0-9]{2,}/g ");
		//Get all the abbreviations. 
		var i= 0;
		var abbrv = new Array;
		var isNull = 0;
		while(isNull == 0){
			abbrv[i]=abbreviation.exec(raw);
			if(abbrv[i]==null){
				isNull = 1;
				abbrv.pop();
			} 
			i++;
		}
		//alert(abbrv);
		var nonabbr = raw.split(abbreviation);
		var output = new Array;
		//rebuild the string = nonabbr[i].abbrv[i]; any remaining nonabbr
		var j = abbrv.length;
		//alert(j);
		for(i=0; i < j; i++){
			output.push(nonabbr[i],$.fn.abbr.wrap(abbrv[i]));
			//alert (i+" "+abbrv[i]);
		}
		//alert(nonabbr[i++]);
		output.push(nonabbr[j]);
		obj.html(output.join(""));		
    });
  
 };
$.fn.abbr.wrap = function (txt){
	return '<abbr>' + txt + '</abbr>';
};  
})(jQuery);