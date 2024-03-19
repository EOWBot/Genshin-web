// 导航
heads()
for(let i = 0;i < li.length;i++){
  li[i].addEventListener('mouseenter', function(){
    li[i].classList.add('active')
    let x = this.getBoundingClientRect().left - li[0].getBoundingClientRect().left
    blue.style.transform = `translateX(${x}px)`
  })
  li[i].addEventListener('mouseleave', function(){
    if(i !== 3){
      li[i].classList.remove('active')
    }
  })
}
ul.addEventListener('mouseleave', function(){
  blue.style.transform = `translateX(375px)`
})
// 侧边导航栏
const world1 = document.querySelector('.world1')
const world2 = document.querySelector('.world2')
const world3 = document.querySelector('.world3')
const world4 = document.querySelector('.world4')
const world5 = document.querySelector('.world5')
const world6 = document.querySelector('.world6')
const jump = document.querySelector('.jump')
const li1 = document.querySelectorAll('.jump ul li')
window.addEventListener('scroll', function(){
  const n = document.documentElement.scrollTop
  if(n >= world2.offsetTop && n < world3.offsetTop){
    document.querySelector('.jump ul li span.active').classList.remove('active')
    document.querySelector('.jump ul li:nth-child(2) span').classList.add('active')
    jump.classList.add('active')
  }else if(n >= world3.offsetTop && n < world4.offsetTop){
    document.querySelector('.jump ul li span.active').classList.remove('active')
    document.querySelector('.jump ul li:nth-child(3) span').classList.add('active')
    jump.classList.add('active')
  }else if(n >= world4.offsetTop && n < world5.offsetTop){
    document.querySelector('.jump ul li span.active').classList.remove('active')
    document.querySelector('.jump ul li:nth-child(4) span').classList.add('active')
    jump.classList.add('active')
  }else if(n >= world5.offsetTop && n < world6.offsetTop){
    document.querySelector('.jump ul li span.active').classList.remove('active')
    document.querySelector('.jump ul li:nth-child(5) span').classList.add('active')
    jump.classList.add('active')
  }else if(n >= world3.offsetTop){
    document.querySelector('.jump ul li span.active').classList.remove('active')
    document.querySelector('.jump ul li:nth-child(6) span').classList.add('active')
    jump.classList.add('active')
  }else{
    jump.classList.remove('active')
  }
  for(let i = 0;i < li1.length;i++){
    li1[i].addEventListener('click', function(){
      document.documentElement.scrollTop = document.querySelector(`.world${i + 1}`).offsetTop
    })
  } 
})