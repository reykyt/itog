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

let totalElement = document.querySelector(".total")
let total = 0


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
        let object = {};
        //присвоени значений
        object.tovar = tovarInput.value;
        object.price = priceInput.value;
        object.category = categoryInput.value;

        console.log(object);
        //создание в dom дереве
        let Expenses = document.createElement('ul');
        let nameExpenses = document.createElement('li');
        let priceExpenses = document.createElement('li');
        let categoryExpenses = document.createElement('li');
        //добавление текста
        nameExpenses.textContent = object.tovar
        priceExpenses.textContent = object.price
        categoryExpenses.textContent = object.category
        //инициализация табла на сайт
        transactions_onlist.appendChild(Expenses);
        Expenses.appendChild(nameExpenses);
        Expenses.appendChild(priceExpenses);
        Expenses.appendChild(categoryExpenses);
        //очищение полей
        priceInput.value = "";
        categoryInput.value = "";
        tovarInput.value = "";
        let deleteButton = document.createElement("button");
        Expenses.classList.add("transactions_list")
        nameExpenses.classList.add("transactions_item")
        priceExpenses.classList.add("transactions_item", "transactions_price")
        categoryExpenses.classList.add("transactions_item")
        //добавление текста к кнопке
        deleteButton.textContent = "✕";
        deleteButton.classList.add("del")
        deleteButton.classList.add("deletes")
        //добавть в эл списка
        Expenses.appendChild(deleteButton);




        const modal = document.querySelector(".modal");
        const btnNo = document.querySelector(".btnNo");
        const btnDell = document.querySelector(".btnDell");
        total = total + +priceExpenses.textContent
        totalElement.textContent = total
        infoTotal = infoTotal - +priceExpenses.textContent
        infoBalanse.textContent = infoTotal

        deleteButton.addEventListener("click", (del) => {
            modal.classList.add("active")
            btnDell.addEventListener("click", deleteee)
            function deleteee() {
                let price = +Expenses.querySelector(".transactions_price").textContent
                console.log(price);

                total = +total - price
                totalElement.textContent = total

                infoTotal = infoTotal + +price

                infoBalanse.textContent = infoTotal
                transactions_onlist.removeChild(Expenses);

                modal.classList.remove("active")

                price = 0
            }

            btnNo.addEventListener("click", () => {
                // list.removeChild(newItem);
                modal.classList.remove("active")
                btnDell.removeEventListener("click", deleteee)

            })
        })



    }

    else {

        alert("заполните поле !")
    }
});
