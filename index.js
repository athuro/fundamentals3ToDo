function listBuilder(listType){
    
    let title = document.createElement('input');
    title.setAttribute('placeholder','Insert List Title')
    title.setAttribute('type','text');
    title.setAttribute('class','titleName');
    builder.appendChild(title);

    let titleInput = document.querySelector('.titleName');
    titleInput.addEventListener("input", (eventObject) => userInput = eventObject.target.value);

    let submit = document.createElement('button')
    submit.innerHTML=('Create!')
    submit.setAttribute('class','listButton')
    builder.appendChild(submit);

    let submitButton = document.querySelector('.listButton');
    submitButton.addEventListener('click', ()=>addElement(listType, userInput));
}

function addElement(type, title){
    
    if(type === 'ol'){ 
        let newOl = document.createElement("ol");
        newOl.innerHTML=(`<h2 id="${title}">${title}</h2>`);

        let builder = document.querySelector("#builder");
        builder.appendChild(newOl);

        let listButton = document.querySelector('.listButton');
        listButton.remove();
        let titleInput = document.querySelector('.titleName');
        titleInput.remove();

        taskAdder(title)

    } else if(type ==="ul"){
        let newUl = document.createElement("ul");
        newUl.innerHTML=(`<h2 id="${title}">${title}</h2>`);
        
        let builder = document.querySelector("#builder");
        builder.appendChild(newUl);

        let listButton = document.querySelector('.listButton');
        listButton.remove();
        let titleInput = document.querySelector('.titleName');
        titleInput.remove();

        taskAdder(title)
    }
}

function taskAdder(title){
    let newList = document.querySelector(`#${title}`)

    let task = document.createElement('input');
    task.setAttribute('placeholder','Insert Task')
    task.setAttribute('type','text');
    task.setAttribute('class','taskInput');
    newList.appendChild(task);

    let taskInput = document.querySelector('.taskInput');
    taskInput.addEventListener("input", (eventObject) => userInput = eventObject.target.value);

    let submit = document.createElement('button')
    submit.innerHTML=('Add!')
    submit.setAttribute('class','taskButton')
    newList.appendChild(submit);

    let submitButton = document.querySelector('.taskButton');
    submitButton.addEventListener('click', ()=>{

        let item = document.createElement('li');
        item.setAttribute('class', 'incomplete');
        let check = document.createElement('input');
        check.setAttribute('type','checkbox')
        item.innerHTML = `${userInput}`;
        item.appendChild(check)
        newList.appendChild(item)
        taskInput.value='';
    });
}



// Button builders

let orderBtn = document.querySelector('#ordered');
orderBtn.addEventListener("click", ()=> {
    listBuilder('ol');

});

let unOrderBtn = document.querySelector('#unordered');
unOrderBtn.addEventListener("click", ()=> {
    listBuilder('ul');

});