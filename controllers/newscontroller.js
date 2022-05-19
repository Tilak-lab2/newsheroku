const axios=require('axios')
module.exports.news=async(req,res)=>{
try{
	var data=""
	var url='https://newsapi.org/v2/top-headlines?country=in&apiKey='+process.env.apiKey;
var news =await axios.get(url).then((response)=>{
		console.log(response.status);
		data=response.data
		return data
})
}catch(err){
console.log(err,"Error")
}
res.render('index',{title:"NEWS X ",news:news.articles})
}
exports.topHeadlines=async(req,res)=>{
    var data=""
	var url='https://newsapi.org/v2/top-headlines?country=in&apiKey='+process.env.apiKey;
var news =await axios.get(url).then((response)=>{
		console.log(response.status);
		data=response.data
		return data
	}).catch(err=>{
		console.log(err)
	})
	// console.log(news);
	res.render('news',{news:news.articles,title:"Home"});
}
exports.search=async(req,res)=>{
	var data='';
	var url='https://newsapi.org/v2/everything?q='+req.body.query+'&apiKey='+process.env.apiKey;
var news =await axios.get(url).then((response)=>{
		console.log(response.status);
		data = response.data;
		// res.render('index',{news:data.articles})
		return data;
	}).catch(err=>{
		console.log(err)
	})
	// console.log(news);
	res.render('news',{news:news.articles,title:req.body.query});
}
exports.all=async(req,res)=>{
	try{
		var data=''
		var url='https://newsapi.org/v2/everything?q='+req.body.query+'&apiKey='+process.env.apiKey;
		var news =await axios.get(url).then((response)=>{
				console.log(response.status);
				data = response.data;
				// res.render('index',{news:data.articles})
				return data;
			})
	}catch(err){
		console.log(err)
	
  	}
	  res.render("news",{title:"NEWS X",news:news.articles})
}
exports.international=async(req,res)=>{
	try{
		var data=""
		var url='https://newsapi.org/v2/top-headlines?country=us&language=en&apiKey='+process.env.apiKey;
		var news =await axios.get(url).then((response)=>{
				console.log(response.status);
				data = response.data;
				// res.render('index',{news:data.articles})
				return data;
		})
	}catch(err){
		console.log(err)
	}
	res.render("news",{title:"NEWS X || International",news:news.articles})
}
exports.sports=async(req,res)=>{
	try{
		var url='https://newsapi.org/v2/top-headlines?language=en&category=sports&apiKey='+process.env.apiKey;
		var news =await axios.get(url).then((response)=>{
				console.log(response.status);
				data = response.data;
				return data;
		})
			}catch(err){
		console.log("Error",err)

	}
	res.render("news",{title:"NEWS X || Sports",news:news.articles })
}
exports.buisness=async(req,res)=>{
	try{
		var data=''
		var url='https://newsapi.org/v2/top-headlines?language=en&category=business&apiKey='+process.env.apiKey;
		var news =await axios.get(url).then((response)=>{
				console.log(response.status);
				data = response.data;
				return data;
		})
	}catch(err){
      console.log('err')
	}
	res.render("news",{title:"NEWS X || Buisness",news:news.articles})
	req.flash('success','WELCOME ')
}
exports.technology=async(req,res)=>{
	try{
		var data=''
		var url='https://newsapi.org/v2/top-headlines?language=en&category=technology&apiKey=86584eae3c3b4f6e899af4d4be08ce4e';
		var news =await axios.get(url).then((response)=>{
			console.log(response.status);
			data=response.data
			return data
		})
	}catch(err){

	}
	return res.render("news",{title:"NEWS X || Technology",news:news.articles})
}
exports.popular=async(req,res)=>{
	try{
		var data=''
    	var url='https://newsapi.org/v2/top-headlines?language=en&sortBy=popularity&apiKey=86584eae3c3b4f6e899af4d4be08ce4e';
		var news =await axios.get(url).then((response)=>{
			console.log(response.status);
			data=response.data
			return data
		})
	}catch(err){
		console.log("ERROR in popular",err)
		res.send("ERror")

	}
	return res.render("news",{title:"NEWS X || Popular",news:news.articles})
}
exports.Relevance=async(req,res)=>{
	try{
		var data=''
    	var url='https://newsapi.org/v2/top-headlines?country=in&sortBy=relevancy&apiKey=86584eae3c3b4f6e899af4d4be08ce4e';
		var news =await axios.get(url).then((response)=>{
			console.log(response.status);
			data=response.data
			return data
		})
	}catch(err){
		console.log("Error in sort",err)

	}
	return res.render("news",{title:"NEWS X || Relevance",news:news.articles})
}