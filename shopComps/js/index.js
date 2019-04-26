var we = new Vue({
	el:"#app",
	data:{
        fv:false,
		arr:[],
		et:"df",
        bb:"",
		ws:"",
		wert:0,
	    er:"",
		but:false,
		we:[
		{url:"./img/5adef3e6N3b3d085a.jpg",message:"开间茶馆吧。在某个临水的地方，不招摇，不繁闹。有一些古旧，一些单薄,生意冷清，甚至被人",price:32.90,num:0,checked:false},
		{url:"./img/5b6299fdNa2588a6a.jpg",message:"开间茶馆吧。在某个临水的地方，不招摇，不繁闹。有一些古旧，一些单薄,生意冷清，甚至被人",price:109.00,num:0,checked:false},
		{url:"./img/5b779a23N8e4604a5.jpg",message:"开间茶馆吧。在某个临水的地方，不招摇，不繁闹。有一些古旧，一些单薄,生意冷清，甚至被人",price:59.90,num:0,checked:false},
		{url:"./img/5b7cb4b6Nce1debe2.jpg",message:"开间茶馆吧。在某个临水的地方，不招摇，不繁闹。有一些古旧，一些单薄,生意冷清，甚至被人",price:37.90,num:0,checked:false},
		{url:"./img/5bc040b3N96bdc3cd.jpg",message:"开间茶馆吧。在某个临水的地方，不招摇，不繁闹。有一些古旧，一些单薄,生意冷清，甚至被人",price:19.90,num:0,checked:false}
		]
	},methods:{
		ed:function(){
			this.we="";
			this.but=true;
			this.fv=false;
			document.getElementById("sure").disabled="disabled";

		},
		add:function(e){
			this.we[e].num++;


		},
		subtract:function(e){
			if (this.we[e].num<=0){
				alert('受不了啦，宝贝不能再减少啦')
				this.count=0;
			}else {
				this.we[e].num-=1;
			}
		},
		wq:function(e){
			//点击方框
			//console.log(this.we[e].checked)
			var  arrs=[];
			this.we[e].checked=!this.we[e].checked
			if(this.we[e].checked){
				document.getElementById("list").getElementsByClassName("et")[e].style.backgroundColor="red";

			}else{
				document.getElementById("list").getElementsByClassName("et")[e].style.backgroundColor="";
				//this.fv=false;
			}
			for (var i = 0;i<this.we.length;i++){

				arrs.push(this.we[i].checked);

			}
			if(arrs.indexOf(false)==-1){
				this.fv=true

			}else{
				this.fv=false
			}

		},

		fun:function(e){
			var  arrs=[];
		   this.ws=e;
			//console.log(this.ws==0)
			//删除

           if(this.ws !==(this.we.length-1)){
			   this.we[this.ws].checked== this.we[this.ws+1].checked;

		   }else{

		   }
			this.we.splice(e,1)
			for (var i = 0;i<this.we.length;i++){

				arrs.push(this.we[i].checked);

			}
			if(arrs.indexOf(false)==-1){
				this.fv=true
			}else{
				this.fv=false
			}
			for(var i=0;i<this.we.length;i++){
				if(this.we[i].checked){
					document.getElementById("list").getElementsByClassName("et")[i].style.backgroundColor="red";
				}else{
					document.getElementById("list").getElementsByClassName("et")[i].style.backgroundColor="";
				}
			}

			if(this.we==""){
				//this.ert=true;
				this.but=true;
				this.fv=false;
				document.getElementById("sure").disabled="disabled";


			}


		},
		sd:function(){
			console.log(this.we.length)
			if(this.fv){
				for(var i =0;i<this.we.length;i++){
					this.we[i].checked=false
					document.getElementById("list").getElementsByClassName("et")[i].style.backgroundColor="";
				}

			}else{
				for(var i =0;i<this.we.length;i++){
					console.log(i)

					this.we[i].checked=true
					this.fv=true;
					document.getElementById("list").getElementsByClassName("et")[i].style.backgroundColor="red";
				}
			}
		},
		wer:function(index){
			//this.sxc(index);
		//	console.log(Math.floor(this.we[index].price*Number(this.we[index].num)))
			return Math.floor(this.we[index].price*Number(this.we[index].num));

		},

		sde:function(){
			var  total=0;
			for(var i=0;i<this.we.length;i++){
				if(this.we[i].checked){
					total+=parseInt(this.we[i].num);
				}
			}
           return total;
         },
		wry:function(){
			var  totall=0;
			for(var i=0;i<this.we.length;i++){
				if(this.we[i].checked){
					totall+=parseInt(this.we[i].num*this.we[i].price);
				}
			}
			return totall;
		}



	},computed:{
		length:function(){
			return this.we.length;
		}

		
	},mounted:function() {
		/*for (var i = 0; i < this.we.length; i++) {
			this.arr.push(this.we[i].checked);
			console.log(this.arr[0]);
		}*/
		/*for (var i = 0;i<this.we.length;i++){
			var  arrs=[];
			arrs.push(this.we[i].checked);
			console.log(arrs)
		}*/
	}
})
