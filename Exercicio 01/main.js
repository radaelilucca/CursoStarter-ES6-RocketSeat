class User {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }
  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends User {
  constructor(email, senha) {
    super(email, senha);

    this.admin = true;
  }
}

const User1 = new User("email@fake.com", "batatafrita123");
const Adm1 = new Admin("emaildeAdmboladao@adm.rh", "SenhaPika01210");

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
