let showbossbutton = 1;
let bosses = 0;
function showboss(){
	var x = document.getElementsByClassName("bossbutton");
	if(showbossbutton == 1){
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "flex";
			showbossbutton = 2;
		}
	}else if(showbossbutton == 2){
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
			showbossbutton = 1;
		}
	}
}

function reset(){
	for(var i=1 ; i<=3 ; i++){
		document.getElementById("bossmap"+i).style.display = "none";
		document.getElementById("bossmap"+i).src = "";
		document.getElementById("mapmessage"+i).style.color = "white";
		document.getElementById("mapmessage"+i).style.textDecoration = "";
	}
}

function exitmessage(){
	document.getElementById("bossmessages").style.display = "none";
	reset();
}

function map(e){
	var mapimg = document.getElementById("bossmap"+e);
	var currentMap = document.querySelector('.mapimage.show');

	document.getElementById("mapmessage"+e).style.color = "red";
	document.getElementById("mapmessage"+e).style.textDecoration = "underline";
	mapimg.src = "tupian/map"+bosses+"-"+e+".png";
	mapimg.style.display = "flex";
	
	if (currentMap) {
	        currentMap.classList.remove('show');
	        currentMap.classList.add('hide');
	 
	        // 在淡出动画结束后，隐藏该元素并显示新的mapimage
	        currentMap.addEventListener('animationend', function () {
	            currentMap.style.display = 'none';
	            currentMap.classList.remove('hide'); // 移除hide类，以便下次可以使用
	 
	            // 显示新的mapimage并触发淡入动画
	            mapimg.src = "tupian/map" + bosses + "-" + e + ".png";
	            mapimg.style.display = 'flex';
	            mapimg.classList.add('show');
	        }, { once: true }); // 使用once选项确保事件监听器只触发一次
	    } else {
	        // 如果没有当前显示的mapimage，则直接显示新的mapimage并触发淡入动画
	        mapimg.src = "tupian/map" + bosses + "-" + e + ".png";
	        mapimg.style.display = 'flex';
	        mapimg.classList.add('show');
	    }
	 
	    // 重置其他mapmessage的样式（这部分代码也需要根据实际情况进行调整）
	    for (var i = 1; i <= 3; i++) {
	        if (i !== e) {
	            document.getElementById("mapmessage" + i).style.color = "white";
	            document.getElementById("mapmessage" + i).style.textDecoration = "";
	        }
	    }
}

function boss(e){
	bosses = e;
	reset();
	resetboss();
	
	const map1 = document.getElementById("maptext"+bosses+"-1").innerHTML;
	const map2 = document.getElementById("maptext"+bosses+"-2").innerHTML;
	const map3 = document.getElementById("maptext"+bosses+"-3").innerHTML;
	document.getElementById("mapmessage1").textContent = map1;
	document.getElementById("mapmessage2").textContent = map2;
	document.getElementById("mapmessage3").textContent = map3;
	document.getElementById("mapmessage1").style.color = "red";
	document.getElementById("mapmessage1").style.textDecoration = "underline";
	
	document.getElementById("bossmessages").style.display = "flex";
	
	document.getElementById("bossimg").src = "tupian/boss"+bosses+".png";
	document.getElementById("bossimg").style.display = "flex";

	    // 显示bossmessages和bossmap1，并触发淡入动画（如果需要的话）
	    var bossMap1 = document.getElementById("bossmap1");
	    bossMap1.src = "tupian/map" + e + "-1.png";
	    bossMap1.style.display = 'flex';
	    if (!bossMap1.classList.contains('show')) { // 如果之前没有添加过show类，则添加
	        bossMap1.classList.add('show');
	    }
	 
	    // 隐藏其他mapimage（如果需要的话，可以触发淡出动画）
	    var otherMapImages = document.querySelectorAll('.mapimage:not(#bossmap1)');
	    otherMapImages.forEach(function (img) {
	        if (img.style.display !== 'none') { // 如果当前是显示的，则触发淡出动画并隐藏
	            img.classList.remove('show');
	            img.classList.add('hide');
	 
	            // 在淡出动画结束后隐藏该元素并移除hide类
	            img.addEventListener('animationend', function () {
	                img.style.display = 'none';
	                img.classList.remove('hide');
	            }, { once: true });
	        }
	    })
		
	const lianjie = document.getElementById("boss0"+bosses).innerHTML;
	document.getElementById("bossmessage").href = lianjie;
}

function resetboss() {
    // 重置函数，用于在切换boss时重置mapimage和mapmessage的状态
    document.getElementById("bossmessages").style.display = 'none';
    var mapImages = document.querySelectorAll('.mapimage');
    mapImages.forEach(function (img) {
        img.style.display = 'none';
        img.classList.remove('show', 'hide'); // 移除show和hide类
    });
 
    var mapMessages = document.querySelectorAll('.maptext');
    mapMessages.forEach(function (msg) {
        msg.style.color = 'white';
        msg.style.textDecoration = '';
    });
}