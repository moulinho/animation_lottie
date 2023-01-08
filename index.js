import lottiteAnimation from "./lottiteAnimation.js";

const formsUser = document.forms.formUser;
const username = formsUser.username;
const password = formsUser.password;
let boolAnime = false;

let saveUser = (user) => {
  localStorage.setItem("users", JSON.stringify(user));
};
let getUsers = () => {
  return JSON.parse(localStorage.getItem("users") || "[]");
};

const users = getUsers();
let verifUserExiste = (data) => {
  for (let item of users) {
    if (item.username === data.username || item.password === data.password) {
      return item;
    }
    return;
  }
};

let addUser = (e) => {
  e.preventDefault();

  const dataUser = {
    id: Math.floor(Math.random() * 100000),
    username: username.value.trim(),
    password: password.value.trim(),
  };

  if (dataUser.username !== "" && dataUser.password !== "") {
    let datas = verifUserExiste(dataUser);

    if (datas === undefined) {
      users.push(dataUser);
      lottiteAnimation("ok");
      saveUser(users);
    } else {
      lottiteAnimation("no");
    }
  } else {
    alert(`Username or password is empty ${String.fromCodePoint(0x1f61e)} `);
  }

  username.value = "";
  password.value = "";
};

formsUser.addEventListener("submit", addUser);

AOS.init({
  duration: 1200,
});
