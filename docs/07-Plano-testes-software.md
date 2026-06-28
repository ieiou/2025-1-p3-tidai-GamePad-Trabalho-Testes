# Plano de testes de software

<!--<span style="color:red">Pré-requisitos: <a href="02-Especificacao.md"> Especificação do projeto</a></span>, <a href="04-Projeto-interface.md"> Projeto de interface</a>-->

Requisitos associados cê encontram em: <a href="02-Especificacao.md">Especificação do projeto</a>.


| **Caso de teste**  | **CT-001 – Cadastrar perfil**  |
|:---: |:---: |
| Requisito associado | RF-004 - Permitir a criação de perfis de usuários |
| Objetivo do teste | Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos | - Acessar o navegador <br> - https://gamepad.com/home <br> - Clicar em "Registrar" <br> - Preencher os campos obrigatórios (Nome de usuário, E-mail, Senha e Confirmar senha) <br> - Clicar em "Registrar" |
| Critério de êxito | - O cadastro foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Andry Marques |
| Tela 1  | <img src="../docs/images/testes/ct1/p1.png" width="2000px">
| Tela 2  | <img src="../docs/images/testes/ct1/p2.png" width="2000px">
| Tela 3  | <img src="../docs/images/testes/ct1/p3.png" width="2000px">



<br>

| **Caso de teste**  | **CT-002 – Efetuar login**  |
|:---: |:---: |
| Requisito associado | RF-006 - Permitir login do usuário |
| Objetivo do teste | Verificar se o usuário consegue realizar login. |
| Passos | - Acessar o navegador <br> - https://gamepad.com/home <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Login" |
| Critério de êxito | - O login foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Andry Marques |
| Tela 1  | <img src="../docs/images/testes/ct1/p1.png" width="2000px">
| Tela 2  | <img src="../docs/images/testes/ct2/p1.png" width="2000px">
| Tela 3  | <img src="../docs/images/testes/ct2/p2.png" width="2000px">

<br>

| **Caso de teste**  | **CT-003 – Editar perfil**  |
|:---: |:---: |
| Requisito associado | RF-008 - Permitir que usuário edite seu perfil  |
| Objetivo do teste | Verificar se o usuário consegue editar todos os campos de seu perfil. |
| Passos | - Acessar o navegador <br> - https://gamepad.com/ <br> - Clicar no icone de seu perfil nocanto superior direito <br> - Clicar em "Meu perfil" <br> - Clicar em "Editar Perfil" <br> - Editar todos os campos possiveis do usuário. |
| Critério de êxito | - Perfil atualizado!|
| Responsável pela elaboração do caso de teste | Andry Marques |
| Tela 1  | <img src="../docs/images/testes/ct3/p0.png" width="2000px">
| Tela 2  | <img src="../docs/images/testes/ct3/p1.png" width="2000px">
| Tela 3  | <img src="../docs/images/testes/ct3/p2.png" width="2000px">
| Tela 4  | <img src="../docs/images/testes/ct3/p3.png" width="2000px">
| Tela 5  | <img src="../docs/images/testes/ct3/p4.png" width="2000px">
| Tela 6  | <img src="../docs/images/testes/ct3/p5.png" width="2000px">
| Tela 7  | <img src="../docs/images/testes/ct3/p6.png" width="2000px">
| Tela 8  | <img src="../docs/images/testes/ct3/p8.png" width="2000px">

<br>

| **Caso de teste**  | **CT-004 – Pesquisar pelo nome de seus jogos**  |
|:---: |:---: |
| Requisito associado | RF-001 - Permitir que o usuário busque jogos pelo nome |
| Objetivo do teste | Verificar se o usuário consegue pesquisar jogo por nome. |
| Passos | - Acessar o navegador <br> - https://gamepad.com <br> - Navegar até a página de games pela navbar <br> - Clicar em "Busque por nome de jogo" <br> - Clique no jogo escolhido |
| Critério de êxito | - ir para a página do jogo |
| Responsável pela elaboração do caso de teste | Andry Marques |
| Tela 1  | <img src="../docs/images/testes/ct4/p1.png" width="2000px">
| Tela 2  | <img src="../docs/images/testes/ct4/p2.png" width="2000px">
| Tela 3  | <img src="../docs/images/testes/ct4/p3.png" width="2000px">

<br>

| **Caso de teste**  | **CT-005 – Usar os filtros de jogos**  |
|:---: |:---: |
| Requisito associado | RF-005 Possibilitar filtragem de pesquisas por categorias  |
| Objetivo do teste | Verificar se o usuário consegue usar todos os filtros na pesquisa de jogos. |
| Passos | - Acessar o navegador <br> - https://gamepad.com <br> - Navegar até a página de games pela navbar <br> - Clicar no inpute de Gênero <br> - Clicar no inpute de anos <br> - Clicar no inpute de Plataformas <br> - Clicar no inpute de Notas <br - Clicar no em limpar filtro |
| Critério de êxito | A cada filtro adicionado os jogos vão sendo filtrados e após a limpageme dos filtros voltar a primeira lista de jogos |
| Responsável pela elaboração do caso de teste | Andry Marques |
| Tela 1  | <img src="../docs/images/testes/ct5/p1.png" width="2000px">
| Tela 2  | <img src="../docs/images/testes/ct5/p2.png" width="2000px">
| Tela 3  | <img src="../docs/images/testes/ct5/p3.png" width="2000px">
| Tela 4  | <img src="../docs/images/testes/ct5/p4.png" width="2000px">
| Tela 5  | <img src="../docs/images/testes/ct5/p5.png" width="2000px">
| Tela 6  | <img src="../docs/images/testes/ct5/p6.png" width="2000px">

<br>

| **Caso de teste**  | **CT-006 – Filtragem das notícias**  |
|:---: |:---: |
| Requisito associado | RF-007 - Exibir notícias do mundo dos games |
| Objetivo do teste | Verificar se o usuário consegue acompanhar notícias dos games pela aplicação e se as filtragens funcionam |
| Passos | - Acessar o navegador <br> - https://gamepad.com/news <br> - Verificar se as noticias estão carregadas <br> - Filtrar pela plataforma <br> - Filtrar por jogo ou termo <br> - Verificar se as notícias condizem com as filtragens <br> - Acessar uma notícia  |
| Critério de êxito | - Filtragens corretas e acesso a notícia. |
| Responsável pela elaboração do caso de teste | Andry Marques |
| Tela 1  | <img src="../docs/images/testes/ct6/p1.png" width="2000px">
| Tela 2  | <img src="../docs/images/testes/ct6/p2.png" width="2000px">
| Tela 3  | <img src="../docs/images/testes/ct6/p3.png" width="2000px">
| Tela 4  | <img src="../docs/images/testes/ct6/p5.png" width="2000px">
| Tela 5  | <img src="../docs/images/testes/ct6/p4.png" width="2000px">

<br>

| **Caso de teste**  | **CT-007 – Novas Listas**  |
|:---: |:---: |
| Requisito associado | RF-011 - Permitir que usuários crie suas listas de jogos |
| Objetivo do teste | O usuário poderá criar e editar listas de jogos |
| Passos | - Acessar o navegador <br> - https://gamepad.com <br> - Ir em "Meu Perfil" <br> - Ir em "Listas" <br> - "Nova Lista" ou "Editar Lista" <br> - Criar o nome e definir os jogos da lista <br> - Salvar  |
| Critério de êxito | - Verificar se o usuário consegue seguir este fluxo |
| Responsável pela elaboração do caso de teste | Andry Marques |
| Tela 1  | <img src="../docs/images/testes/ct7/p1.png" width="2000px">
| Tela 2  | <img src="../docs/images/testes/ct7/p2.png" width="2000px">
| Tela 3  | <img src="../docs/images/testes/ct7/p6.png" width="2000px">
| Tela 4  | <img src="../docs/images/testes/ct7/p3.png" width="2000px">
| Tela 5  | <img src="../docs/images/testes/ct7/p4.png" width="2000px">
| Tela 6  | <img src="../docs/images/testes/ct7/p5.png" width="2000px">

<br>

| **Caso de teste**  | **CT-008 – Reviews**  |
|:---: |:---: |
| Requisito associado | RF-002 - Permitir que o usuário avalie jogos com notas e comentários |
| Objetivo do teste | Verificar se o usuário dar notas e fazer comentários em jogos |
| Passos |- https://gamepad.com/games <br> - Selecionar o jogo no qual ele quer avaliar <br> - Clicar em fazer review <br> - Preencher os campos que ela quiser <br> - Clicar em "Salvar Review" |
| Critério de êxito | - Comentário salvo e aparece na página do jogo |
| Responsável pela elaboração do caso de teste | Andry Marques |
| Tela 1  | <img src="../docs/images/testes/ct8/p1.png" width="2000px">
| Tela 2  | <img src="../docs/images/testes/ct8/p2.png" width="2000px">
| Tela 3  | <img src="../docs/images/testes/ct8/p3.png" width="2000px">
| Tela 4  | <img src="../docs/images/testes/ct8/p4.png" width="2000px">

## Testes automatizados com Selenium

Os casos de teste abaixo foram automatizados com Selenium WebDriver + pytest. Os scripts ficam em [`tests-selenium/`](../tests-selenium/) e podem ser executados com `./tests-selenium/run_tests.sh` (Linux/Mac) ou `tests-selenium\run_tests.bat` (Windows).

| **Caso de teste**  | **CT-S01 – Carregamento da Home**  |
|:---: |:---: |
| Requisito associado | RF-007 - Exibir conteúdo inicial da aplicação |
| Objetivo do teste | Verificar se a página inicial carrega com o título e a navbar visíveis. |
| Passos | - Acessar `base_url` <br> - Validar título "GamePad" e presença do elemento `<nav>` |
| Critério de êxito | - Página renderiza sem erro e navbar é exibida |
| Script | [`tests-selenium/test_home.py::test_home_loads`](../tests-selenium/test_home.py) |
| Responsável | Joao Pedro Rafael Santos Silva |

<br>

| **Caso de teste**  | **CT-S02 – Links da navbar**  |
|:---: |:---: |
| Requisito associado | RF-007 / Navegação |
| Objetivo do teste | Verificar se a navbar contém os links principais (Home, Notícias, Guia). |
| Passos | - Acessar `base_url` <br> - Ler o texto do elemento `<nav>` <br> - Verificar presença dos rótulos |
| Critério de êxito | - Os três rótulos estão presentes |
| Script | [`tests-selenium/test_home.py::test_navbar_has_links`](../tests-selenium/test_home.py) |
| Responsável | Joao Pedro Rafael Santos Silva |

<br>

| **Caso de teste**  | **CT-S03 – Abertura do modal de registro**  |
|:---: |:---: |
| Requisito associado | RF-004 - Permitir a criação de perfis de usuários |
| Objetivo do teste | Verificar se o modal de registro abre com todos os campos esperados. |
| Passos | - Acessar `base_url` <br> - Clicar em "Registrar" <br> - Aguardar campos `nome`, `email`, `senha`, `confirmarSenha` |
| Critério de êxito | - Todos os campos estão presentes no DOM |
| Script | [`tests-selenium/test_auth.py::test_register_modal_opens`](../tests-selenium/test_auth.py) |
| Responsável | Joao Pedro Rafael Santos Silva |

<br>

| **Caso de teste**  | **CT-S04 – Abertura do modal de login**  |
|:---: |:---: |
| Requisito associado | RF-006 - Permitir login do usuário |
| Objetivo do teste | Verificar se o modal de login abre com os campos de email e senha. |
| Passos | - Acessar `base_url` <br> - Clicar em "Entrar" <br> - Aguardar campos `email` e `senha` |
| Critério de êxito | - Campos de login presentes no DOM |
| Script | [`tests-selenium/test_auth.py::test_login_modal_opens`](../tests-selenium/test_auth.py) |
| Responsável | Joao Pedro Rafael Santos Silva |

<br>

| **Caso de teste**  | **CT-S05 – Fluxo completo: registro via API + login pela UI**  |
|:---: |:---: |
| Requisito associado | RF-004 + RF-006 |
| Objetivo do teste | Criar um usuário via API e validar o login pela interface. |
| Passos | - Gerar email único com uuid <br> - `POST /api/Usuarios` com nome/email/senha <br> - Acessar `base_url`, abrir modal "Entrar" <br> - Preencher email/senha e submeter <br> - Aguardar mensagem "Bem-vindo" ou fechamento do modal |
| Critério de êxito | - Login concluído (mensagem de boas-vindas ou modal fechado) |
| Script | [`tests-selenium/test_login_flow.py::test_login_after_register`](../tests-selenium/test_login_flow.py) |
| Responsável | Joao Pedro Rafael Santos Silva |

<br>

| **Caso de teste**  | **CT-S06 – Navegação para Notícias**  |
|:---: |:---: |
| Requisito associado | RF-007 - Exibir notícias do mundo dos games |
| Objetivo do teste | Verificar se o link "Notícias" da navbar leva para `/news`. |
| Passos | - Acessar `base_url` <br> - Clicar no link "Notícias" da navbar <br> - Aguardar URL conter `/news` |
| Critério de êxito | - URL atual contém `/news` |
| Script | [`tests-selenium/test_navigation.py::test_nav_to_news`](../tests-selenium/test_navigation.py) |
| Responsável | Joao Pedro Rafael Santos Silva |

<br>

| **Caso de teste**  | **CT-S07 – Navegação para Guia**  |
|:---: |:---: |
| Requisito associado | Navegação |
| Objetivo do teste | Verificar se o link "Guia" da navbar leva para `/guia`. |
| Passos | - Acessar `base_url` <br> - Clicar no link "Guia" da navbar <br> - Aguardar URL conter `/guia` |
| Critério de êxito | - URL atual contém `/guia` |
| Script | [`tests-selenium/test_navigation.py::test_nav_to_guia`](../tests-selenium/test_navigation.py) |
| Responsável | Joao Pedro Rafael Santos Silva |

<br>

| **Caso de teste**  | **CT-S08 – Retorno para Home**  |
|:---: |:---: |
| Requisito associado | Navegação |
| Objetivo do teste | Verificar que, estando em `/news`, o link "Home" retorna para a raiz. |
| Passos | - Acessar `base_url/news` <br> - Clicar no link "Home" da navbar <br> - Aguardar URL voltar para `base_url` |
| Critério de êxito | - URL atual igual a `base_url` |
| Script | [`tests-selenium/test_navigation.py::test_nav_back_home`](../tests-selenium/test_navigation.py) |
| Responsável | Joao Pedro Rafael Santos Silva |

<br>

<!--## Ferramentas de testes (opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links úteis**:
> - [IBM - criação e geração de planos de teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e técnicas de testes ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> - [Teste de software: conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e geração de planos de teste de software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de teste para JavaScript](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)-->
