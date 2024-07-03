let addtask = document.getElementById('addtask');

let store =document.getElementById('store');

function btnclick(){
    if(addtask.value === ''){
        alert('your task is empty');
    }else{

        let li = document.createElement('li');
        li.innerHTML = addtask.value;
        store.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
  
    addtask.value = '';
    save();
}
store.addEventListener('click',(f)=>{
if(f.target.tagName == 'LI'){
    f.target.style.color='wheat';
    save();
}
else if(f.target.tagName == 'SPAN'){
    f.target.parentElement.remove();
    save();
}
})

function save(){
    localStorage.setItem('data',store.innerHTML);
}
function show(){
    store.innerHTML= localStorage.getItem('data');
}
show();