//* Header To Do List1 *//

var headers = document.createElement('h1');

headers.textContent = "Practice Making To Do List";

headers.style.backgroundColor = "blue";
headers.style.color = 'white';
headers.style.padding = '15px';
headers.style.textAlign = 'center';
headers.style.borderRadius = '15px';

document.body.append(headers);

//* Input To Do List *//

var input = document.createElement('input');

input.style.width = '300px';
input.style.padding = '15px';
input.style.borderRadius = '15px';

document.body.append(input);

//* Button *//

var addButton =  document.createElement('button');

addButton.textContent = 'Add Task';

addButton.style.backgroundColor = 'blue';
addButton.style.color = 'white'
addButton.style.padding = '25px';
addButton.style.marginLeft = '12px';
addButton.style.borderRadius = '12px';

document.body.append(addButton);

//* listContainer *//

var listContainer = document.createElement('ul');

listContainer.style.fontSize = '20px';

document.body.append(listContainer)

//* Fungsionalitas *//

addButton.addEventListener('click', function () {
    var taskText = input.value.trim();
    if (taskText !== "") {
        var listItem = document.createElement('li');
        listItem.textContent = taskText;

        var deleteBtn = document.createElement('button');

deleteBtn.textContent = 'delete';
deleteBtn.style.marginLeft = '12px';
deleteBtn.style.backgroundColor = 'blue';
deleteBtn.style.color = 'white'
deleteBtn.style.marginTop = '12px';

deleteBtn.addEventListener('click', function () {
    listContainer.removeChild(listItem);
});

deleteBtn.style.padding = '15px';
deleteBtn.style.borderRadius = '12px';

listItem.appendChild(deleteBtn);

        listContainer.appendChild(listItem);

        input.value = "";
    }
});

const style = document.createElement('style');
style.textContent = `
@keyframes ZoomIn {
from {
transform: scale(0.5);
opacity: 0;
}
to{
transform: scale(1);
opacity: 1;
}
}
.Zoom-in {
animation: ZoomIn 0.4s ease-out;
animation-fill-mode: both;
}
`;
document.head.appendChild(style);
