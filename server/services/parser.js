const Gmail = require('node-gmail-api');
const mongoose = require('mongoose');

function parseMessage(message){



}


module.exports = (accessToken,user) => {
      const gmail = new Gmail(accessToken);
      const s = gmail.messages('label:inbox', {max: 20});
	let count = 0;
      s.on('data', function (d) {

      	      let mes = {}; 
      	      let obj = d.payload;

	      if(count == 0) {
	 	//console.log(obj);
		let  headerArray = obj.headers;
	
		for(let i = 0; i < headerArray.length; i++){
			switch(headerArray[i].name){
		 		
				case 'Received':
					mes.received =  headerArray[i].value;
					break;
				case 'From':
					mes.from = headerArray[i].value;
					break;
				case 'Subject':
					mes.subject = headerArray[i].value;
					break;	
				default:
					//do nothing
					}
	     		 }

		let partArray = obj.parts;

		for(let i = 0; i < partArray.length; i++){
		     if(partArray[i].partId == 1){
			let body = partArray[i].body;
			let data = body.data;
			let strdata = Buffer.from(data,'base64').toString('utf8');
			console.log(strdata);
		     }
		}

	      }


	      count++
      });
}




