import axios from "axios";

/* Exercício
Transforme os seguintes trechos de código utilizando async/await:

Função delay aciona o .then após 1s 

                                  WITHOUT ASYNC

const delay = () => new Promise(resolve => setTimeout(resolve, 10000));

function umPorSegundo() {
  delay().then(() => {
    console.log("1s");
  });
  delay().then(() => {
    console.log("1s");
  });
  delay().then(() => {
    console.log("1s");
  });
}

umPorSegundo();
                          
                                ASYNC AWAIT  
*/

const delay = () => new Promise(resolve => setTimeout(resolve, 5000));

async function onePerSecond() {
  await delay();
  console.log("1 Second");
  await delay();
  console.log("2 Second");
  await delay();
  console.log("3 Second");
}
onePerSecond();

/* ---------------------------------------------------------------------

                            WITHOUT ASYNC

function getUserFromGithub(user) {
  axios.get(`https://api.github.com/users/${user}`)
  .then(response => {
  console.log(response.data);
  })
  .catch(err => {
  console.log('Usuário não existe');
  })
 }
 getUserFromGithub('diego3g');
 getUserFromGithub('diego3g124123');

                                    ASYNC AWAIT
 */

async function getUserGit(user) {
  try {
    const response = await axios.get(`http://api.github.com/users/${user}`);
    console.log(response.data.avatar_url);
  } catch (e) {
    await console.warn("Erro na Requisição - User not found");
  }
}
getUserGit("radaelilucca");

/* ---------------------------------------------------------------------

                                Without Async
class Github {
  static getRepos(repo) {
    axios
      .get(`https://api.github.com/repos/${repo}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log("Repo NÃO existe");
      });
  }
}
                                ASYNC AWAIT */

class Github {
  static async getRepos(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.warn("ERRO NA REQUISIÇÃO");
    }
  }
}

Github.getRepos("radaelilucca/todosApp");

// ________________________________________________________________________

// const buscaUsuario = usuario => {
//   axios.get(`https://api.github.com/users/${user}`)
//   .then(response => {
//   console.log(response.data);
//   })
//   .catch(err => {
//   console.log('Usuário não existe');
//   });
//  }
//  buscaUsuario('diego3g');

async function buscaUsuario(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (e) {
    console.warn("ERRO NA REQ");
  }
}
buscaUsuario("radaelilucca");
buscaUsuario("radaelilucas");
