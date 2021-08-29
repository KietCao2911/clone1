const getSend=document.querySelector('.icon-send')
const getList=document.querySelector('.list')
const getWrap=document.querySelector('.wrap')
let getinputValue=document.querySelector('input')


getSend.onclick=(ev)=>{
	if(getinputValue.value.length==0){
			ev.preventDefault ()
		alert('Bạn Phải Nhập Gì Đó...')	

	}
	else{
const newNode= document.createElement('LI')
const template="<div class='container_content'><span class='icon icon-checked'><ion-icon name='checkmark'></ion-icon></span><input  type='checkbox' id='checkbox'><label for='checkbox' class='content'>"+getinputValue.value+"</label></div><span class='icon icon-close'><ion-icon name='close'></ion-icon></span>"
newNode.innerHTML=template
getList.appendChild(newNode)
getinputValue.value=''
	}
	for(let i=0;i<getList.children.length;i++){
		let getClose=getList.querySelectorAll('.icon-close')
		getClose[i].onclick=()=>{
			getClose[i].parentElement.style.display='none	'
		}
		let getCheck=document.querySelectorAll('.icon-checked')
		let getconTent=document.querySelectorAll('.content')
		
		getList.children[i].onclick=()=>{
			getCheck[i].classList.toggle('toggle')
			getconTent[i].classList.toggle('op')
		}
	}

}





