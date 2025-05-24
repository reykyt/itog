// // Объявление переменных
// const myBtn = document.querySelector("#myBtn");
// const nameInput = document.querySelector("#name");
// const list = document.querySelector("#list");

let myBtn = document.querySelector("#myBtn");
let  tovarInput = document.querySelector("#tovar");
let priceInput = document.querySelector("#price");
let categoryInput = document.querySelector("#category");
let transactions_onlist= document.querySelector(".transactions_onlist")

myBtn.addEventListener('click', () => {
    //проверка на пустоту полей
    if (tovarInput.value != "" &&  priceInput.value != "" &&
        categoryInput.value != "" ) {
//создание массива 
let object=["","",""];
//присвоени значений
object[0]=tovarInput.value;
object[1]=priceInput.value;
object[2]=categoryInput.value;
//создание в dom дереве
let newList=document.createElement('ul');
let newItem = document.createElement('li');
let newItem2 = document.createElement('li');
let newItem3= document.createElement('li');
//добавление текста
newItem.textContent=object[0]
newItem2.textContent=object[1]
newItem3.textContent=object[2]
//инициализация табла на сайт
transactions_onlist.appendChild(newList);
newList.appendChild(newItem);
newList.appendChild(newItem2);
newList.appendChild(newItem3);
//очищение полей
priceInput.value ="";
categoryInput.value ="";
tovarInput.value ="";
let deleteButton = document.createElement("button");
newList.classList.add("transactions_list")
newItem.classList.add("transactions_item")
newItem2.classList.add("transactions_item")
newItem3.classList.add("transactions_item")
       //добавление текста к кнопке
         deleteButton.textContent = "✕";
        deleteButton.classList.add("del")
    //добавть в эл списка
      newList.appendChild(deleteButton);


// // Обработчик события кнопки
// myBtn.addEventListener('click', () => {
//     if (nameInput.value != "") {

//         // Создание элемента li (в памяти, на странице его пока нет)
//         const newItem = document.createElement('li');
//         // Добавить элементу newItem класс item
//         newItem.classList.add('item');
//         // Добавить элементу текстовое содержимое из поля ввода
//         newItem.textContent = nameInput.value

//         // Добавить элемент в список
//         list.appendChild(newItem);
//         newItem.addEventListener("click", () => {
//             newItem.classList.toggle("new")
//         })
//         // Очистить поле ввода
//         nameInput.value = "";
//         //создание кнопки для удаления элемента
//         let deleteButton = document.createElement("button");
//         //добавление текста к кнопке
//         deleteButton.textContent = "удалить";

//         deleteButton.classList.add("del")
//         //добавть в эл списка
//         newItem.appendChild(deleteButton);

        const divv = document.querySelector(".divv");
        const btnNo = document.querySelector(".btnNo");
        const btnDell = document.querySelector(".btnDell");

        deleteButton.addEventListener("click", () => {
            // list.removeChild(newItem);
         divv.classList.add("divvv")
           btnDell.addEventListener("click", deleteee)
            function deleteee() {
                transactions_onlist.removeChild(newList);
                divv.classList.remove("divvv")

                deleteButton.classList.add("btndelllle")

            }

            btnNo.addEventListener("click", () => {
                // list.removeChild(newItem);
                divv.classList.remove("divvv")
                btnDell.removeEventListener("click", deleteee)

            })
        })



   }

    else {

        alert("заполните поле!")
    }
});
