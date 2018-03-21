const axios=require('axios');


var weather=function getCall(url,params=null){
	return axios.get(url,{params : params});
}

module.exports=weather


// axios.get(url,)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log('Error:::::::',error);
//   });
