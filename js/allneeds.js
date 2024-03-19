//检测登陆状态
const li = document.querySelectorAll('.navs .nav ul li')
const blue = document.querySelector('.navs .nav .blue')
const ul = document.querySelector('.navs .nav ul')
const head = document.querySelector('.navs .land')
function heads(){
  if(localStorage.getItem('head')){
    head.innerHTML = `
      <span>End of World</span>
      <img src="./img/head1.png" alt="">
    `
    head.href = ''
  }else{
    head.innerHTML = `
      <span>登 录</span>
      <img src="./img/head.png" alt="">
    `
    head.href = './land.html'
  }
}
// 退出登录
const exits = document.querySelector('.navs .exit')
function exit(){
  head.addEventListener('mouseenter',function(){
    if(localStorage.getItem('head')){
      exits.classList.add('active')
    }
  })
  exits.addEventListener('click', function(){
    if(localStorage.getItem('head')){
      localStorage.removeItem('head')
      heads()
      location.href = './index.html'
    }
  })
  exits.addEventListener('mouseleave', function(){
    exits.classList.remove('active')
  })
}
exit()
// 背景音乐
const img1 = document.querySelectorAll('.navs .logo img')
const audio = document.querySelector('.navs .logo audio')
for(let i = 0;i < img1.length;i++){
  img1[i].addEventListener('click',function(){
    this.classList.remove('active')
    img1[1 - i].classList.add('active')
    if(i === 0){
      audio.play()
    }else{
      audio.pause()
      audio.currentTime = 0
    }
  })
}