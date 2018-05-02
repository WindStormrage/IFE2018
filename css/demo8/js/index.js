var animation = bodymovin.loadAnimation({
	container: document.getElementById('bm'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: './json/data.json'
})
var animation2 = bodymovin.loadAnimation({
	container: document.getElementById('man'),
	renderer: 'svg',
	loop: false,//循环
	autoplay: false,//是否自动播放
	path: './json/data32.json'
})


document.getElementById("man").addEventListener("mouseenter",function (e) {
	console.log(11111);
	animation2.play()
},false)
document.getElementById("man").addEventListener("mouseleave",function (e) {
	console.log(22222);
	animation2.stop()
},false)