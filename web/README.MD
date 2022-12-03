## Levantamento de Requisitos

### Tela Inicial

    1. Campo para usuário colocar CPF. -> Ok.
        1.1 Verificar se o CPF foi encontrado na API.
        1.2 Se for encontrado redirecionar para a tela do usuário.
        1.3 Se não for encontrado redirecionar para a tela de registro.

### Tela do usuário

    1. Campo com butões para o depósito, realizar a transferência e ver o histórico das suas transferências -> Ok.

### Tela de registro

    1. Campo para o usuário colocar CPF e Nome Completo -> Ok.

### Api's

    Depósito: `http://localhost:3333/deposit`
    Transferências: `http://localhost:3333/transfer`
    Registro: `http://localhost:3333/signup`
    Login: `http://localhost:3333/login`

### Start

    1. Iniciar a consumir as APIs principais do Login.

### Adicionais/Rever/Não esquecer.

    1. Responsividade
    2. Protected Routes
