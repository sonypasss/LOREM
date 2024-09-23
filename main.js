let password = document.getElementById('password');
let btn = document.getElementById('btn');
let err = document.getElementById('err');
let dialog = document.getElementById('dialog');
let acc = document.getElementById('acc');




const users = [
    {
        name: 'Amir', 
        age: '6.08.1992',
        email: 'zeRekis@mail.ru',
        password: '54fgd622#gG',
    },

    {
        name: 'Roman', 
        age: '4.03.2001',
        email: 'roroma@mail.ru',
        password: '473487dsfsh$',
    },

    {
        name: 'Dima', 
        age: '1.06.1998',
        email: 'dimonKr@mail.ru',
        password: '748539adaK$#',
    },

    {
        name: 'Alisa', 
        age: '5.10.2005',
        email: 'aliskiss@mail.ru',
        password: '4748_Hsldk$6',
    },
];



const checkPassword = () => {
    for (let i = 0; i < users.length; i++) {
        if (
            password.value === users[i].password &&
            email.value  === users[i].email
        ) {
            dialog.remove();
            user_name.textContent = users[i].name;
            user_email.textContent = users[i].email;
            user_age.textContent = users[i].age;
            acc.classList.remove("hide");
            acc.classList.add("visiblle");
        }
    }
    err.textContent = "Неверные данные";
};

btn.addEventListener("click", checkPassword);