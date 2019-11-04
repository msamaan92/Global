function convertParagraph(paragraph){

var newParagraphHtml = "";
var wordsArray = paragraph.split(" ");

	for(var i=0; i< wordsArray.length; i++){

		var regex = new RegExp("^[\u0000-\u007F]+$");//Latin Unicode
		var isEnglish =regex.test( wordsArray[i]);

		
		if(isEnglish){
			var englishSentence = "<span class='english'>";
			englishSentence +=  ( i == 0)? wordsArray[i] : " " +wordsArray[i];

			for(var j=i+1; j< wordsArray.length; j++){
				isEnglish =regex.test( wordsArray[j]);
				if(isEnglish){
                            englishSentence +=  " "+ wordsArray[j];
                }else {
					englishSentence += "</span>";
					i =j-1;
					newParagraphHtml += (newParagraphHtml.length == 0 )? englishSentence : " "+ englishSentence ;
                    break;
				};
            }
		}
		else {
			newParagraphHtml+= (newParagraphHtml.length == 0 )? wordsArray[i] : " "+ wordsArray[i] ;
            continue;
            
		}

		
	}
console.log(newParagraphHtml);
console.warn("You need to have your default font for these paragraphs as your arabic font and link the english font to english class and set it to be important! ");
}

convertParagraph("محمد ادهم apple das dasd asd asdd محمد");// usage
