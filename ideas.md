um usuario tem um ou varios apps
cada app tem seu subdominio / grupo de permissoes:
eu posso acessar direto: https://l17s.zetsu.io
fazendo login normalmente
ou via https://zetsu.io/login
fazendo login, e depois escolhendo o app dentre os que ele tem acesso
ou indo direto se ele somente tiver um
isso eh bom, pois tem usuarios que sabem que estao usando o zetsu
e tem acesso a varios apps
e tem outros que tem acesso somente a um, e provavelmente pra sempre so pra 1


## wip

```js

// User
{
  id: '1',
  firstName: 'Lucas',
  lastName: 'Leandro',

  // must be unique
  email: 'lucas@l17s.dev',
  password: 'encryptedpassword',

  createdAt: null,
  updatedAt: null,

  deletedAt: null,
}

// App
{
  id: '1',
  userId: '1',

  // app name
  name: 'L17S',

  // must be unique and lowercase
  // can contain letters and numbers
  slug: 'l17s',

  // guest permissions
  guest: {
    // if disabled, users are going to be redirected to auth page
    // if enabled, users will be able to view all non auth / allowed content

    status: 'enabled',

    permissions: {

    },
  },
  users: {
    '1': {
      permissions: {
        // admin permission, manage everything from "appId"
        'manage': 'all',
      },
    },
  },

  //
}
```

## notes

- app pode ser publico ou privado
- audit logs
- permitir que dados de usuarios sejam anonimizados a pedido


quase uma rede social da empresa

permitir ter um "feed" de atualizacoes (e comentar elas)

menu de "membros"

e menu de admin

poder seguir e tal o outro funcionario

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . .";
}


-----


eu quero poder:

- entrar no app
- adicionar uma nova pagina
  - posso dar um nome pra pagina
- poder adicionar um elemento > selecinoar de lista (botao por enquanto)
- poder selecionar o elemento
- poder alterar a classe do elemento selecionado
- adicionar filhos (filtrar quais sao possiveis)
- clonar o elemento
- selecionar varios e alterar as classes em comum
