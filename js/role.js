// 导航
heads()
for(let i = 0;i < li.length;i++){
  li[i].addEventListener('mouseenter', function(){
    li[i].classList.add('active')
    let x = this.getBoundingClientRect().left - li[0].getBoundingClientRect().left
    blue.style.transform = `translateX(${x}px)`
  })
  li[i].addEventListener('mouseleave', function(){
    if(i !== 2){
      li[i].classList.remove('active')
    }
  })
}
ul.addEventListener('mouseleave', function(){
  blue.style.transform = `translateX(250px)`
})
// 背景图片切换
const img = document.querySelectorAll('.role .roleBg img')
let i = 0
let n = 0
n = setInterval(function(){
  i++
  i = i > 1 ? 0 : i
  document.querySelector('.role .roleBg img.active').classList.remove('active')
  img[i].classList.add('active')
}, 8000)
// 角色背景切换
const li1 = document.querySelectorAll('.role .roles .middle ul li')
const li2 = document.querySelectorAll('.role .role1 ul li')
const left = document.querySelector('.role .roles .left')
const right = document.querySelector('.role .roles .right')
let j = 1
for(let i = 0;i < li1.length;i++){
  li1[i].addEventListener('mouseenter',function(){
    this.classList.add('active')
  })
  li1[i].addEventListener('mouseleave',function(){
    this.classList.remove('active')
    document.querySelector(`.role .roles .middle ul li:nth-child(${j})`).classList.add('active')
  })
  if(i >= 3 && i <= li1.length - 4){
    li1[i].addEventListener('click',function(){
      document.querySelector('.role .roles .middle ul').style.transform = `translateX(-${(i - 2) * 144}px)`
      document.querySelector(`.role .roles .middle ul li:nth-child(${j})`).classList.remove('active')
      this.classList.add('active')
      document.querySelector('.role .role1 ul li.active').classList.remove('active')
      li2[i].classList.add('active')
      j = i + 1
    })
  }else if(i < 3){
    li1[i].addEventListener('click',function(){
      document.querySelector('.role .roles .middle ul').style.transform = `translateX(0px)`
      document.querySelector(`.role .roles .middle ul li:nth-child(${j})`).classList.remove('active')
      this.classList.add('active')
      document.querySelector('.role .role1 ul li.active').classList.remove('active')
      li2[i].classList.add('active')
      j = i + 1
    })
  }else{
    li1[i].addEventListener('click',function(){
      document.querySelector('.role .roles .middle ul').style.transform = `translateX(-${(li1.length - 6) * 144}px)`
      document.querySelector(`.role .roles .middle ul li:nth-child(${j})`).classList.remove('active')
      this.classList.add('active')
      document.querySelector('.role .role1 ul li.active').classList.remove('active')
      li2[i].classList.add('active')
      j = i + 1
    })
  }
}
left.addEventListener('click', function(){
  document.querySelector(`.role .roles .middle ul li:nth-child(${j})`).classList.remove('active')
  j--
  j = j < 1 ? li1.length : j
  document.querySelector(`.role .roles .middle ul li:nth-child(${j})`).classList.add('active')
  if(j >= 4 && j <= li1.length - 3){
    document.querySelector('.role .roles .middle ul').style.transform = `translateX(-${(j - 3) * 144}px)`
    document.querySelector('.role .role1 ul li.active').classList.remove('active')
    li2[j - 1].classList.add('active')
  }else if(j < 4){
    document.querySelector('.role .roles .middle ul').style.transform = `translateX(0px)`
    document.querySelector('.role .role1 ul li.active').classList.remove('active')
    li2[j - 1].classList.add('active')
  }else{
    document.querySelector('.role .roles .middle ul').style.transform = `translateX(-${(li1.length - 6) * 144}px)`
    document.querySelector('.role .role1 ul li.active').classList.remove('active')
    li2[j - 1].classList.add('active')
  }
})
right.addEventListener('click', function(){
  document.querySelector(`.role .roles .middle ul li:nth-child(${j})`).classList.remove('active')
  j++
  j = j > li1.length ? 1 : j
  document.querySelector(`.role .roles .middle ul li:nth-child(${j})`).classList.add('active')
  if(j >= 4 && j <= li1.length - 3){
    document.querySelector('.role .roles .middle ul').style.transform = `translateX(-${(j - 3) * 144}px)`
    document.querySelector('.role .role1 ul li.active').classList.remove('active')
    li2[j - 1].classList.add('active')
  }else if(j < 4){
    document.querySelector('.role .roles .middle ul').style.transform = `translateX(0px)`
    document.querySelector('.role .role1 ul li.active').classList.remove('active')
    li2[j - 1].classList.add('active')
  }else{
    document.querySelector('.role .roles .middle ul').style.transform = `translateX(-${(li1.length - 6) * 144}px)`
    document.querySelector('.role .role1 ul li.active').classList.remove('active')
    li2[j - 1].classList.add('active')
  }
})
// 导航栏切换
const li3 = document.querySelectorAll('.role .nav ul li')
const arrRole = ["./yyhs.html", "./dfyz.html", "./syyz.html", "./ccgz.html", "./llzx.html"]
for(let i = 0;i < li3.length;i++){
  li3[i].addEventListener('click', function(){
    location.href = `${arrRole[i]}`
  })
}
