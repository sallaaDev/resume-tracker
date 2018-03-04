const Gmail = require('node-gmail-api');
module.exports = accessToken => {
      console.log('hello I am in parser.js');
      const gmail = new Gmail(accessToken);
      const s = gmail.messages('label:inbox', {max: 20});
 
      s.on('data', function (d) {
  	 console.log(d.id);
      });
	




}
