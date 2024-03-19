// 导航
heads()
for(let i = 0;i < li.length;i++){
  li[i].addEventListener('mouseenter', function(e){
    li[i].classList.add('active')
    let x = this.getBoundingClientRect().left - li[0].getBoundingClientRect().left
    blue.style.transform = `translateX(${x}px)`
  })
  li[i].addEventListener('mouseleave', function(){
    if(i !== 0){
      li[i].classList.remove('active')
    }
  })
}
ul.addEventListener('mouseleave', function(){
  blue.style.transform = `translateX(0px)`
})
// 箭头的动画
const spans = document.querySelectorAll('.index .icon ul li span')
let a = 0
let b = 1
let c = 2
setInterval(function(){
  for(let i = 0;i < spans.length;i++){
    spans[i].className = 'iconfont icon-a-xiala2'
  }
  a++
  b++
  c++
  a = a >= 3 ? 0 : a
  b = b >= 3 ? 0 : b
  c = c >= 3 ? 0 : c
  spans[0].classList.add(`color${a + 1}`)
  spans[1].classList.add(`color${b + 1}`)
  spans[2].classList.add(`color${c + 1}`)
},300)

// 轮播图
const imgs = document.querySelector('.news .banner .img')
const img = document.querySelectorAll('.news .banner .img img')
const li1 = document.querySelectorAll('.news .banner .img ul li')
let i = 0
let n = 0
imgs.addEventListener('mouseenter', function(){
  clearInterval(n)
})
imgs.addEventListener('mouseleave', function(){
  n = setInterval(function(){
    i++
    i = i >= 4 ? 0 : i
    document.querySelector('.news .banner .img img.active').classList.remove('active')
    document.querySelector('.news .banner .img ul li.active').classList.remove('active')
    img[i].classList.add('active')
    li1[i].classList.add('active')
  },1500)
})
for(let j = 0;j < li1.length;j++){
  li1[j].addEventListener('click', function(){
    i = j
    document.querySelector('.news .banner .img img.active').classList.remove('active')
    document.querySelector('.news .banner .img ul li.active').classList.remove('active')
    img[i].classList.add('active')
    li1[i].classList.add('active')      
  })
}
n = setInterval(function(){
  i++
  i = i >= 4 ? 0 : i
  document.querySelector('.news .banner .img img.active').classList.remove('active')
  document.querySelector('.news .banner .img ul li.active').classList.remove('active')
  img[i].classList.add('active')
  li1[i].classList.add('active')
},1500)
// 新闻资讯内容
const li2 = document.querySelectorAll('.news .banner .text .nav ul li')
const ul1 = document.querySelectorAll('.news .banner .text .new ul')
for(let i = 0;i < li2.length;i++){
  li2[i].addEventListener('click', function(){
    document.querySelector('.news .banner .text .nav ul li span.active').classList.remove('active')
    document.querySelector('.news .banner .text .nav ul li .bottom.active').classList.remove('active')
    li2[i].querySelector('span').classList.add('active')
    li2[i].querySelector('.bottom').classList.add('active')
    document.querySelector('.news .banner .text .new ul.active').classList.remove('active')
    ul1[i].classList.add('active')
  })
}
// 世界
const li3 = document.querySelectorAll('.worlds ul li')
const border = document.querySelectorAll('.worlds ul li .world .border')
let w = (+li3[0].offsetWidth - 10) + 0.2
let h = (+li3[0].offsetHeight - 10) + 0.1
window.addEventListener('resize', function(){
  w = (+li3[0].offsetWidth - 10) + 0.2
  h = (+li3[0].offsetHeight - 10) + 0.1
  for(let i = 0;i < li3.length;i++){
    border[i].style.width = `${w}px`
    border[i].style.height = `${h}px`
  }
})
console.log(w, h);
for(let i = 0;i < li3.length;i++){
  border[i].style.width = `${w}px`
  border[i].style.height = `${h}px`
  li3[i].addEventListener('mouseenter', function(){
    this.querySelector('.world .logo img:nth-child(2)').classList.add('active')
    this.querySelector('.world .text img').classList.add('active')
    this.querySelector('.world .img').style.transform = 'scale(1.2)'
    border[i].classList.add('active')
  })
  li3[i].addEventListener('mouseleave', function(){
    this.querySelector('.world .logo img:nth-child(2)').classList.remove('active')
    this.querySelector('.world .text img').classList.remove('active')
    this.querySelector('.world .img').style.transform = 'scale(1)'
    border[i].classList.remove('active')
  })
}