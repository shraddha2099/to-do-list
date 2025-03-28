let input = document.querySelector('input')
let button = document.querySelector('button')
let ul = document.querySelector('ul')

const add = ()=>{
    let li = document.createElement('li')
    li.innerHTML=`${input.value}    <button onclick ="this.parentNode.remove()" class ="bts">delete</button>`;
    // remove method is used to remove the data inside the parent.
    ul.appendChild(li);
    input.value="";

}
button.addEventListener('click',add)