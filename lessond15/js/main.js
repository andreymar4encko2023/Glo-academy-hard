const selected = document.querySelector('.input')
const btn = document.querySelector('.header-btn')

const DomElement = function(values, ){
this.selector=values
this.height=values
this.width=values
this.bg=values
this.fontSize=values

}

//   let b =new DomElement()
//

DomElement.prototype.createElement = function () {
    const newBlock= document.querySelector('.section')
    let b =new DomElement
    b.selector=selected.value
   
    
  if(b.selector.indexOf('.')==0&& !Number(b.selector)){
    b.selector= b.selector.substring(1);
   console.dir(b)
   
    newBlock.insertAdjacentHTML(`afterbegin`,`<div class="${b.selector} block">
    этот блок имеет class ${b.selector} </div>`)
  } else if (b.selector.indexOf('#')==0){
    b.selector= b.selector.substring(1);
 
        newBlock.insertAdjacentHTML(`afterbegin`,`<div id="${b.selector}" class="block">
        <span>этот блок имеет id ${b.selector}</span></span></div>`)
      
  }
 
 

    
    
}

btn.addEventListener('click',()=>{
  
   const newDomElement = new DomElement();
   newDomElement.createElement();
   console.dir(newDomElement)
   selected.value=""
})
const create =function(){
    box= document.querySelector('.section')
    let a =new DomElement
    a.width='100px'
    a.height='100px'
    a.bg='#000'
    box.insertAdjacentHTML(`afterbegin`,`<div class="box" style=position:absolute;width:${a.width};height:${a.height};background:${a.bg};></div>`)
   
    console.log(a.width)
    let boxpositions=document.querySelector('.box')
     boxpositions.style.left = '916px'
     
     boxpositions.style.top = '345px'
   
     console.log(boxpositions)
  
    function positionLeft(){
       

        let left =boxpositions.style.left
        if(left!="") left=parseInt(left)
        else left =0
        left=left+10
        boxpositions.style.left = left +'px'
       
    }
    function  positiontop(){
    

        let top =boxpositions.style.top
        if(top!="") top=parseInt(top)
        else top =0
        top+=10
        boxpositions.style.top = top +'px'
       
       
    }
    function positionRight(){
        let left =boxpositions.style.left
        if(left!="") left=parseInt(left)
        else left =0
        left-=10
        boxpositions.style.left = left +'px'
    }
    function positionBottom(){
        let top =boxpositions.style.top
        if(top!="") top=parseInt(top)
        else top =0
        top-=10
        boxpositions.style.top = top +'px'
    }
    document.addEventListener('keyup', function(e){
        if(e.code==="ArrowUp"){
            positionBottom()
        } else if(e.code==="ArrowRight"){
            positionLeft()
           
        }
        else if(e.code==="ArrowDown"){
            positiontop()
           
        }
        else if(e.code==="ArrowLeft"){
            positionRight()
        }
       
      
       
      
  })
 
    
}

create()
const input = document.querySelector('input');


;