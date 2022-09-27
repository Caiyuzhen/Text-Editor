//一边输入一边变小的算法
let textBox = document.getElementById('textBox');
textBox.addEventListener('input',function(){
    let len = this.value.length/1
    textBox.style.fontSize =  40 * 1/len + 'px'
},false) //不冒泡



// //中文算 2 个，英文算 1 个的做法
// function TipLen(obj,num){
// 	let Val = obj.value;//获取输入的value值
// 	let reg = /^[\u4e00-\u9fa5]{0,}$///定义正则表达式
// 	let len = 0

// 	for(let i = 0; i<Val.length; i++){
// 		if(reg.test(Val[i])){//如果是中文，则让len+2
// 			len+=2;
// 		}else{
// 			len++;//反之英文len+1
// 		}
// 	}

// 	if(len>num){//如果英文和汉字加起来长度超过设定的字符数，截取字数，并提示用户
// 	   obj.value=Val.substring(0,num);
// 		// alert("不能输入"+num+'个字')
// 		return
// 	}
// }





// 🌟_____
// for (var j = 0; j < textBox.length; j++) {
// 	const textH = textBox[j]//输入框的高度

// 	textH.style.fontSize = '12px'//初始字体

// 	// textH.addEventListener('onchange', function(){
// 		for (var i = 12; i < maxHeight; i++) {

// 			// 如果元素本身的高度（offsetHeight）大于了最大高度（maxHeight），就跳出循环
// 			if (textH.offsetHeight > maxHeight) {
// 				textH.style.fontSize = (i - 2) + 'px'
// 				break;
// 			} else {
// 				//如果没达到最大高度，则字体大小 +1
// 				textH.style.fontSize = i + 'px'
// 			}
// 		}
// 		// console.log(textH)
// 	// })
// }





// 🌟_____
// for(let i = 0; i < 200; i++) {
// 	if(avatarInputs.height() > maxHeight) {
// 		avatarInputs.css('font-size', (i - 2) + 'px');
// 	}else {
//         //如果小于最大高度，文字大小加1继续尝试
//         avatarInputs.css('font-size', i + 'px');
//     }
// }

// document.addEventListener('DOMContentLoaded', function(){
// 	let domContainer = document.querySelector('.avatar-container');
// 	let domText = document.querySelector('.avatar-inputs');

// 	function changeText(){
// 		if(domText.clientWidth <= domContainer.clientWidth)
// 		{
// 			domText.style.transform = 'none';
// 		}
// 		else
// 		{
// 			let r = domContainer.clientWidth/domText.clientWidth;
// 			domText.style.transform = 'scale('+r+')';
// 		}
// 	}
// 	changeText()
// })




// 中文算 2 个，英文算 1 个的做法
// function TipLen(obj,num){
// 	var Val = obj.value;//获取输入的value值
// 	var reg = /^[\u4e00-\u9fa5]{0,}$/;//定义正则表达式
// 	var len = 0;
// 	for(var i = 0;i<Val.length;i++){
// 		if(reg.test(Val[i])){//如果是中文，则让len+2
// 			len+=2;
// 		}else{
// 			len++;//反之英文len+1
// 		}
// 	}
// 	if(len>num){//如果英文和汉字加起来长度超过设定的字符数，截取字数，并提示用户
// 	   obj.value=Val.substring(0,num);
// 		alert("不能输入"+num+'个字')
// 	}
// }


// Tiplen(avatarInputs,2)




// //计算字符长度，（含中文，英文混合字符-中文算作 1 个的情况）  
// function CharLength(parameters){
// 	let w=0;
// 	for (let i=0;i<parameters.length; i++) {
//  	let c = parameters.charCodeAt(i)
//    //单字节加1
//     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
// 	  w++;
//    }
//    else {
//       w+=2;
//   }
// }
// 	return w;
// }
// //截取字符串长度（中英文混合字符）
// function subString(str,len,hasDot){
// 	let newLength = 0; 
// 	let newStr = ""; 
// 	let chineseRegex = /[^\x00-\xff]/g; 
// 	let singleChar = ""; 
// 	let strLength = str.replace(chineseRegex,"**").length; 

// for(let i = 0;i < strLength;i++) { 
// 	singleChar = str.charAt(i).toString()

// 	if(singleChar.match(chineseRegex) != null) { 
// 		newLength += 2; 
// 	} else { 
// 		newLength++; 
// 	} 
// 	if(newLength > len) { 
// 		break; 
// 	} 
// 		newStr += singleChar; 
// 	} 

// 	if(hasDot && strLength > len) { 
// 		newStr += "..."; 
// 	} 
// 	return newStr; 
// }


// function onchangeSub(obj){

// 	let objValue=obj.value
// 	let maxlength=obj.getAttribute? parseInt(obj.getAttribute("maxlength")) : ""
// 	let objLength=CharLength(objValue)

// 	if(objLength > maxlength) {
// 		obj.value=subString(objValue,maxlength)
// 	}
// }

