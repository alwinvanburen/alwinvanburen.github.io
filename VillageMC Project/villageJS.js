let headerImage = document.querySelector('.headerImage')
let status = document.querySelector('.status')
let valute = document.querySelector('.valute')
let key = document.querySelector('.key')
let site_vk = document.querySelector('.site_vk')
let vk = document.querySelector('.vk')
let sponge = document.querySelector('.sponge')

// Наведение курсора на картинку
headerImage.onmouseover = () => {
	headerImage.style.width = "156px"
	headerImage.style.transform = "translateY(3%)"
	headerImage.style.cursor = "url(image/blue_pointer.png), pointer"
}
headerImage.onmouseout = () => {
	headerImage.style.transform = "none"
	headerImage.style.width = "153px"
}
// Наведение курсора на ВК
vk.onmouseover = () => {
	site_vk.style.color = "white"
	site_vk.style.cursor = "url(image/sword.png), pointer"
	vk.style.cursor = "url(image/sword.png), pointer"
	vk.style.backgroundColor = "green"
	vk.style.transform = "translateY(10%)"
}
vk.onmouseout = () => {
	site_vk.style.color = "yellow"
	vk.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
	vk.style.transform = "none"
}
// Смена цвета SPONGE 
let spongeArr = ['gray', 'yellow', 'aqua', 'lime', '#ff2d15', 'green', 'orange', 'turquoise', 'deeppink', 'purple']
let i = 0
setInterval(() => {
		sponge.style.color = spongeArr[i]
		i++
		if(i >= spongeArr.length)
		i = 0
	},1000)




