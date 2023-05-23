function listBuilder(listType){
    
    let title = document.createElement('input');
    title.setAttribute('placeholder','Insert List Title')
    title.setAttribute('type','text');
    title.setAttribute('class','titleName');
    builder.appendChild(title);

    let titleInput = document.querySelector('.titleName');
    titleInput.addEventListener("input", (eventObject) => {
        userInput = eventObject.target.value;
        title.setAttribute('id',`${userInput}-titleName`);
    });

    let submit = document.createElement('button')
    submit.innerHTML=('Create!')
    submit.setAttribute('class','listButton')
    builder.appendChild(submit);

    let submitButton = document.querySelector('.listButton');
    submitButton.addEventListener('click', ()=> {
        submit.setAttribute('id', `${userInput}-listButton`);
        addElement(listType, userInput)
        
    });
}

function addElement(type, title){
    
    if(type === 'ol'){ 
        let newOl = document.createElement("ol");
        newOl.innerHTML=(`<h2 id="${title}">${title}</h2>`);

        let builder = document.querySelector("#builder");
        builder.appendChild(newOl);

        let listButton = document.querySelector( `#${userInput}-listButton`);
        listButton.remove();
        let titleInput = document.querySelector(`#${userInput}-titleName`);
        titleInput.remove();

        taskAdder(title)

    } else if(type ==="ul"){
        let newUl = document.createElement("ul");
        newUl.innerHTML=(`<h2 id="${title}">${title}</h2>`);
        
        let builder = document.querySelector("#builder");
        builder.appendChild(newUl);

        let listButton = document.querySelector( `#${userInput}-listButton`);
        listButton.remove();
        let titleInput = document.querySelector(`#${userInput}-titleName`);
        titleInput.remove();

        taskAdder(title)
    }
}

function taskAdder(title){
    let newList = document.querySelector(`#${title}`)

    let task = document.createElement('input');
    task.setAttribute('placeholder','Insert Task')
    task.setAttribute('type','text');
    task.setAttribute('class','taskInput')
    task.setAttribute('id','current');
    newList.appendChild(task);

    let taskInput = document.querySelector('#current');
    taskInput.addEventListener("input", (eventObject) => {
        userInput = eventObject.target.value;
        taskInput.setAttribute('id',`${userInput}-taskContent`)
    });

    let submit = document.createElement('button');
    submit.innerHTML=('Add!');
    submit.setAttribute('class','taskButton');
    submit.setAttribute('id',`${userInput}-addButton`);
    newList.appendChild(submit);

    let addButton = document.querySelector(`#${userInput}-addButton`);
    addButton.addEventListener('click', ()=>{

        let taskInput = document.querySelector(`#${userInput}-taskContent`);
        taskInput.addEventListener("input", (eventObject) => {
            userInput = eventObject.target.value;
            taskInput.setAttribute('id',`${userInput}-taskContent`)
    });

 
        let item = document.createElement('li');
        item.setAttribute('class', 'incomplete');
        item.setAttribute('id', `${userInput}`);
        item.innerHTML = `${userInput}`;
        newList.appendChild(item)

        let check = document.createElement('input');
        check.setAttribute('type','checkbox');
        check.setAttribute('class', 'checks');
        check.setAttribute('id', `${userInput}`)
        item.appendChild(check)

        taskInput.value = '';
        userInput = '';

        check.addEventListener('change', () => {
            if(check.checked){
                item.setAttribute('class','complete')
            } else {
                item.setAttribute('class','incomplete')
            }
        });
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


