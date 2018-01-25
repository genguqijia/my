var w=1000
var h=500
var x=10
var y=5
imgs='img/b.jpg'
alert('11')
var one=document.getElementById('one')
var two=[]
for(var i=0;i<y;i++){
  for(var o=0;o<x;o++){
    var div=document.createElement('div')
    div.style.width=(w/x-2)+'px'
    div.style.height=(h/y-2)+'px'
    div.style.border='1px solid red'
    div.className='div'+(i*x+o+1)
    div.style.float='left'
    div.style.position='relative'
    div.style.overflow='hidden'

    var img=document.createElement('img')
    img.src=imgs
    img.style.width=w+'px'
    img.style.height=h+'px'
    img.style.position='absolute'
    img.style.left=-(w/x-2)*o+'px'
    img.style.top=-(h/y-2)*i+'px'

    two.push(div)
    div.appendChild(img)
    one.appendChild(div)
  }
}
var btn=document.getElementById('btn')
function bianhuan(){
  for(var i=0;i<two.length/3;i++){
    var num=Math.floor(Math.random()*(two.length-1))
    var num2=Math.floor(Math.random()*(two.length-1))
    var a=two[num]
    two[num]=two[num2]
    two[num2]=a
  }
  for(var o=0;o<two.length;o++){
    one.removeChild(one.firstChild)
  }
  for(var o=0;o<two.length;o++){
    one.appendChild(two[o])
  }
  add()
}

btn.onclick=bianhuan
//bianhuan()
var div=''
two[two.length-1].children[0].style.display='none'
add()
function add(){
  for(let i=0;i<two.length;i++){
    two[i].onclick=function(){
      //alert(i)
      if(i+1<two.length){
        if(two[i+1].className=='div'+two.length && (i+1)%x!=0){
          div=two[i]
          two[i]=two[i+1]
          two[i+1]=div
          for(var o=0;o<two.length;o++){
            one.removeChild(one.firstChild)
          }
          for(var o=0;o<two.length;o++){
            one.appendChild(two[o])
          }
          add()
        }//i+1
      }

      if(i-1>=0){
        if(two[i-1].className=='div'+two.length){
          div=two[i]
          two[i]=two[i-1]
          two[i-1]=div
          for(var o=0;o<two.length;o++){
            one.removeChild(one.firstChild)
          }
          for(var o=0;o<two.length;o++){
            one.appendChild(two[o])
          }
          add()
        }//i-1
      }
      if(i+x<two.length){
        if(two[i+x].className=='div'+two.length){
          div=two[i]
          two[i]=two[i+x]
          two[i+x]=div
          for(var o=0;o<two.length;o++){
            one.removeChild(one.firstChild)
          }
          for(var o=0;o<two.length;o++){
            one.appendChild(two[o])
          }
          add()
        }//i+x
      }

      if(i-x>=0){
        if(two[i-x].className=='div'+two.length){
          div=two[i]
          two[i]=two[i-x]
          two[i-x]=div
          for(var o=0;o<two.length;o++){
            one.removeChild(one.firstChild)
          }
          for(var o=0;o<two.length;o++){
            one.appendChild(two[o])
          }
          add()
        }//i+x
      }
      var aa=0
      for(var p=0;p<one.children.length;p++){
        if(one.children[p].className==='div'+(p+1)){
          aa=aa+1
        }
      }

      if(aa==one.children.length){
        for(var o=0;o<two.length;o++){
          one.removeChild(one.firstChild)
        }
        var img=document.createElement('img')
        img.src=imgs
        img.style.width=w+'px'
        img.style.height=h+'px'
        one.appendChild(img)
      }
    }
  }
}
