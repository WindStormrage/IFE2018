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


document.getElementById("man").addEventListener("mouseover",function (e) {
	console.log(e);
	animation2.play()
})
document.getElementById("man").addEventListener("mouseout",function (e) {
	console.log(e);
	animation2.stop()
})