window.onload=function () {
	// 侧边栏
	let zl=document.getElementsByClassName("zl")[0];
	let lis=zl.getElementsByTagName("li");
	let asidebox=zl.getElementsByClassName("asidebox")
	// console.log(zl,lis);
	for(let i=0;i<asidebox.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<asidebox.length;j++){
				asidebox[j].style.display="none";
			}
			asidebox[i].style.display="block";
		}
		lis[i].onmouseleave=function(){
			asidebox[i].style.display="none";
		}
	}
	let dhcon=document.querySelector(".tb .tb1 .tbdh .dhcon");
	let tbdh=document.querySelector(".tb .tb1 .tbdh")
		tbdh.onmouseenter=function(){
			dhcon.style.height='243px';
			dhcon.style.boxShadow="0 0 1px 2px #ccc";
		}
		tbdh.onmouseleave=function(){
			dhcon.style.height=0+"px"
			dhcon.style.boxShadow="none";
		}







//banner 轮播
	let banner=document.querySelector('.lunbo');
	let lis1=banner.querySelectorAll('.lunbo li ');
	let cricle=document.querySelectorAll('.cricle li');
	let bnWidth=parseInt(getComputedStyle(lis1[0],null).width);
	// console.log(banner,lis1,cricle,bnWidth)
	let current=0;
	let next=0;

	let t=setInterval(move, 2000)
	cricle[0].classList.add("hot");
//从右到左
	function move(){
		next++;
		if(next>lis1.length-1){
			next=0;
		}
		cricle[current].classList.remove("hot");
		cricle[next].classList.add("hot");
		lis1[next].style.left=bnWidth+'px';//就位
		animate(lis1[current],{left:-bnWidth})
		animate(lis1[next],{left:0})
		current=next;		 
	}
    banner.onmouseenter=function(){
		clearInterval(t);
	}
	//鼠标移出继续
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
//点击点
	cricle.forEach((e,i)=>{
		e.onclick=function(){
			cricle[current].classList.remove("hot");
			cricle[i].classList.add("hot");
			if(current<i){
				lis1[i].style.left=bnWidth+'px';//就位
				animate(lis1[current],{left:-bnWidth})
				animate(lis1[i],{left:0})
			}
			if(current>i){
				lis1[i].style.left=-bnWidth+'px';//就位
				animate(lis1[current],{left:bnWidth})
				animate(lis1[i],{left:0})
			}
			current=i
		}

	})
	
}