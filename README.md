# Go-Ticket-Web

OBJETIVO:
Criar as telas de uma aplicação web simulando um site de criação e pesquisa de eventos, além da aquisição de convites. Em outras palavras, um site onde você pode criar um evento para uma festa em sua casa, por exemplo, e postar para pessoas. 
Inspirações: Ingresso.com e Facebook.
As linguagens e frameworks incluem HTML, CSS, JavaScript, React e React Bootstrap.

TELAS:
- Login de usuário
- Cadastro de usuário
- Meu perfil
- Meus eventos (Sessão onde poderá visualizar os meus eventos e criar novos eventos)
- Meus convites (Onde ficarão salvos os convites de eventos)
- Criar evento
- Pesquisa de eventos (Com um filtro de eventos)
- Visualização de evento (Tela da visualização de um evento específico)
- Home (Onde ficarão o componente de carrosel de eventos próximos, eventos que acontecerão em breve, etc. 

COISAS A FAZER
- Adicionar o cadastro de eventos
- Adicionar cards e, com map, conseguir listar todos os eventos
- Adicionar imagens aos eventos
- Conferir a relação de métodos de segurança entre datatable e os componentes

EXPLICAÇÃO DA LÓGICA DE BOXES
Container -> São as divs padrão de tela, equivalem ao tamanho inteiro da tela
ContentBox -> São divs de conteúdo genérica, no qual os componentes podem estilizar com estilos simples (Inline) ou mais extensos (Styled-component)
CustomContentBox -> São os estilos mais extensos (Styled-component) das ContentBox
FormBox -> São os ContentBox estilizados para um componente de formulário