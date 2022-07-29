let butt = document.getElementById('button'); // кнопка добавления
const tasksTextArea = document.getElementById('place'); //строка ввода
let taskList = document.getElementById("taskList"); // раздел для добавления задач
let storagedHtml = localStorage.getItem('localizedHtml'); // данные из localStorage


  //чтение из localStorage
  if (storagedHtml != 'null') {
  taskList.insertAdjacentHTML('afterend', storagedHtml);
  }
  let closeButtonS = document.querySelectorAll('.close');
  butt = document.getElementById('button');
  //функция удаления
  function ClearTasksOnClick() {
  for( let closeButtonOff of closeButtonS) {
    closeButtonOff.onclick = function() { 
      closeButtonOff.parentNode.remove();   
      //запись  в localStorage 
      html = taskList.outerHTML;
      localStorage.setItem('localizedHtml', html);
    }      
  }   
  }
  ClearTasksOnClick()
  
butt.onclick = function() {
  let data = tasksTextArea.value;
    if (data) {
      //создание раздела: текст задачи + кнопка управления
      const division = document.createElement('div');
      division.classList.add("division");
      taskList.appendChild(division);

      //создание поля с текстом задачи
      const span = document.createElement('span');
      span.classList.add("do");
      span.textContent = data;
      division.appendChild(span);

      //создание кнопки удаления
      const closeButton = document.createElement('button');
      closeButton.classList.add("close");
      closeButton.innerHTML = 'X';
      division.appendChild(closeButton); 
      
      //удаление содержимого поля ввода
      tasksTextArea.value = '';
    }
    closeButtonS = document.querySelectorAll('.close');

      // запись в localStorage
      html = taskList.outerHTML;
      console.log(html);
      localStorage.setItem('localizedHtml', html);
     
      //функция удаления
      ClearTasksOnClick() 
}
