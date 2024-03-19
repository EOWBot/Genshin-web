// 导航
heads()
for(let i = 0;i < li.length;i++){
  li[i].addEventListener('mouseenter', function(){
    li[i].classList.add('active')
    let x = this.getBoundingClientRect().left - li[0].getBoundingClientRect().left
    blue.style.transform = `translateX(${x}px)`
  })
  li[i].addEventListener('mouseleave', function(){
    if(i !== 1){
      li[i].classList.remove('active')
    }
  })
}
ul.addEventListener('mouseleave', function(){
  blue.style.transform = `translateX(125px)`
})
// 概括
const li1 = document.querySelectorAll('.summarizes .summarize ul li')
for(let i = 0;i < li1.length;i++){
  li1[i].addEventListener('mouseenter', function(){ 
    this.querySelector('.img img').style.transform = 'scale(1.3)'
  })
  li1[i].addEventListener('mouseleave', function(){
    this.querySelector('.img img').style.transform = 'scale(1.0)'
  })
}
// 内容的导航
const li2 = document.querySelectorAll('.new .nav ul li')
for(let i = 0;i < li2.length;i++){
  li2[i].addEventListener('click', function(){
    document.querySelector('.new .nav ul li.active').classList.remove('active')
    this.classList.add('active')
    document.querySelector('.new .contents .content.active').classList.remove('active')
    document.querySelector(`.new .contents .content:nth-child(${i + 1})`).classList.add('active')
  })
}
// 电梯导航
const elevator = document.querySelector('.elevator')
const text = document.querySelector('.summarizes .summarize ul li .text')
window.addEventListener('scroll', function(){
  const n = document.documentElement.scrollTop
  if(n >= text.offsetTop){
    elevator.style.opacity = 1
  }else{
    elevator.style.opacity = 0
  }
})
elevator.addEventListener('click', function(){
  document.documentElement.scrollTop = 0
})