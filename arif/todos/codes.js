const element=document.querySelector('p');
element.textContent=`${element.textContent}from sda`;
console.log(element);

const newParagraph=document.createElement('p')
newParagraph.textContent="hello word";
document.querySelector('body').appendChild(newParagraph);

document.querySelector('input').addEventListener('input',function(e){
    console.log(e.target.value);
});
document.querySelector('#myCheck').addEventListener('change',function(e){
    console.log(e.target.checked);
    e.target.value.textContent="Clicked";
});
document.querySelector('input').addEventListener('input',function(e){
    localStorage.setItem('username',e.target.value);
    document.getElementById('myLocal').innerHTML=localStorage.getItem('username');
    localStorage.removeItem('username');
});
const user=[
    {
        name:'santi',
        age :22
    },
    {
        name:'fani',
        age:22

    }

]
localStorage.setItem('myObj',JSON.stringify(user));
console.log(localStorage.getItem('myObj'));
console.log(
    JSON.parse(
        localStorage.getItem('myObj')
    )
);
letTodos=[
    {
        mytext:'todo1',
        complete=false
    },
    {
        mytext:'todo2',
        complete=true
    }

];
const generateTodos = function(todos){
    const p = document.createElement('p');
    p.textContent = todos.mytext;
    return p;
}
const renderTodos = function(todos){
    document.getElementById("todos").innerHTML="";
    todos.forEach(function(todos) {
        document.querySelector("#todos")
        .appendChild(generateTodos(todos));
    });
    
}
renderTodos(todos);
document.querySelector('#new-todo')
.addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        mytext : e.target.elements.text.value,
        complete : false
    })
    renderTodos(todos);
    e.target.elements.text.value="";
});
function tes5 (){
    console.log("es5");
}

let tes6 = () =>{
    console.log("es6");
}
const ages =[12,17,24,46,57];
const full = ages.map(function (arr){
        return arr >=18;
    }
);
console.log(ages[full.indexOf(true)]);
const foo = ['one', 'two', 'three'];
console.log(foo[0]);

const [red, yellow, green] = foo;
console.log(red);


const users ={
    name : 'Dandi',
    umur : 22
}
console.log(users.name);

const {name : nm, age} = users;
console.log(nm, age);