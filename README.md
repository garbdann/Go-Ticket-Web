# Go-Ticket-Web

OBJETIVO:
Criar as telas de uma aplicação web simulando um site de criação e pesquisa de eventos, além da aquisição de convites. Em outras palavras, um site onde você pode criar um evento para uma festa em sua casa, por exemplo, e postar para pessoas. 
Inspirações: Ingresso.com e Facebook.
As linguagens e frameworks incluem HTML, CSS, JavaScript, React e React Bootstrap.

TELAS:
- Login de usuário
- Cadastro de usuário
- Criar evento
- Pesquisa de eventos (Com um filtro de eventos)
- Visualização de evento (Tela da visualização de um evento específico)
- Home (Onde ficarão o componente de carrosel de eventos próximos, eventos que acontecerão em breve, etc.)

ADIÇÕES FUTURAS (Com banco de dados):
- Meus eventos
- Meus convites

COISAS A FAZER
- Adicionar cards e, com map, conseguir listar todos os eventos

EXPLICAÇÃO DA LÓGICA DE BOXES
Container -> São as divs padrão de tela, equivalem ao tamanho inteiro da tela
ContentBox -> São divs de conteúdo genérica, no qual os componentes podem estilizar com estilos simples (Inline) ou mais extensos (Styled-component)
CustomContentBox -> São os estilos mais extensos (Styled-component) das ContentBox
FormBox -> São os ContentBox estilizados para um componente de formulário

EXPLICAÇÃO DA LÓGICA DE HOOKS
Eu encontrei uma forma de criar hooks, dado que eu estava repetindo demais as funções da DialogBox. Então, eu pesquisei e achei uma forma de conseguir criar um hook para que eu pudesse importar somente ele e usar em todos os componentes, visto que todos usam DialogBox.