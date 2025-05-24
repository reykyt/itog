// // Объявление переменных
// const myBtn = document.querySelector("#myBtn");
// const nameInput = document.querySelector("#name");
// const list = document.querySelector("#list");

let myBtn = document.querySelector("#myBtn");
let tovarInput = document.querySelector("#tovar");
let priceInput = document.querySelector("#price");
let categoryInput = document.querySelector("#category");
let transactions_onlist = document.querySelector(".transactions_onlist")

let myBtnInfo = document.querySelector("#myBtnInfo");
let addMoney = document.querySelector("#addMoney");

let infoBalanse = document.querySelector("#infoBalanse");
let infoTotal = 0

let total = document.querySelector(".total")
let total2 = 0


myBtnInfo.addEventListener('click', () => {
    if (addMoney.value != "") {
        infoTotal = infoTotal + +addMoney.value
        infoBalanse.textContent = infoTotal
    }
    else {
        alert("заполните поле пополнения!")
    }
})
myBtn.addEventListener('click', () => {
    //проверка на пустоту полей
    if (tovarInput.value != "" && priceInput.value != "" &&
        categoryInput.value != "") {


        //создание массива 
        let object = ["", "", ""];
        //присвоени значений
        object[0] = tovarInput.value;
        object[1] = priceInput.value;
        object[2] = categoryInput.value;
        //создание в dom дереве
        let newList = document.createElement('ul');
        let newItem = document.createElement('li');
        let newItem2 = document.createElement('li');
        let newItem3 = document.createElement('li');
        //добавление текста
        newItem.textContent = object[0]
        newItem2.textContent = object[1]
        newItem3.textContent = object[2]
        //инициализация табла на сайт
        transactions_onlist.appendChild(newList);
        newList.appendChild(newItem);
        newList.appendChild(newItem2);
        newList.appendChild(newItem3);
        //очищение полей
        priceInput.value = "";
        categoryInput.value = "";
        tovarInput.value = "";
        let deleteButton = document.createElement("button");
        newList.classList.add("transactions_list")
        newItem.classList.add("transactions_item")
        newItem2.classList.add("transactions_item")
        newItem3.classList.add("transactions_item")
        newItem2.classList.add("transactions_price")
        //добавление текста к кнопке
        deleteButton.textContent = "✕";
        deleteButton.classList.add("del")
        deleteButton.classList.add("deletes")
        //добавть в эл списка
        newList.appendChild(deleteButton);




        const divv = document.querySelector(".divv");
        const btnNo = document.querySelector(".btnNo");
        const btnDell = document.querySelector(".btnDell");
        total2 = total2 + +newItem2.textContent
        total.textContent = total2
        infoTotal = infoTotal - total2
        infoBalanse.textContent = infoTotal

        deleteButton.addEventListener("click", () => {
            // list.removeChild(newItem);
            divv.classList.add("divvv")
            btnDell.addEventListener("click", deleteee)
            function deleteee() {
                let damma = +newList.querySelector(".transactions_price").textContent
                total2 = total2 - damma
                total.textContent = total2
                infoTotal = infoTotal + +damma
                infoBalanse.textContent = infoTotal
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

        alert("заполните поле !")
    }
});
