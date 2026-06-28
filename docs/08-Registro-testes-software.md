# Registro de testes de software

| **Caso de teste** 	| **CT-001 – Cadastrar perfil** 	|
|:---:	|:---:	|
| Requisito associado | RF-004 Permitir a criação de perfis de usuários |
| Registro de evidência | [https://drive.google.com/file/d/1EI_hLSBXu-slBH0dWklShActI7ovimfR/view?usp=drive_link](https://drive.google.com/file/d/1EI_hLSBXu-slBH0dWklShActI7ovimfR/view?usp=drive_link) |

##

| **Caso de teste** 	| **CT-002 – Efetuar login** 	|
|:---:	|:---:	|
| Requisito associado | RF-006 - Permitir login do usuário |
| Registro de evidência | [https://drive.google.com/file/d/1OWUkqn1q3ifUVyUIfBvEDqh2JjKFTKX5/view?usp=drive_link](https://drive.google.com/file/d/1OWUkqn1q3ifUVyUIfBvEDqh2JjKFTKX5/view?usp=drive_link) |

##

| **Caso de teste** 	| **CT-003 – Editar Perfil** 	|
|:---:	|:---:	|
| Requisito associado | RF-008 - Permitir que usuário edite seu perfil |
| Registro de evidência | [https://drive.google.com/file/d/1KeIlfPLTKgnB_U2fYB7UJQdGKDdiRUpz/view?usp=drive_link](https://drive.google.com/file/d/1KeIlfPLTKgnB_U2fYB7UJQdGKDdiRUpz/view?usp=drive_link) |

##

| **Caso de teste** 	| **CT-004 – Pesquisar pelo nome de seus jogos** 	|
|:---:	|:---:	|
| Requisito associado | RF-001 - Permitir que o usuário busque jogos pelo nome |
| Registro de evidência | [https://drive.google.com/file/d/1cv8HpK_VZtecirIKQcsLuQ4LK9C_bGsx/view?usp=drive_link](https://drive.google.com/file/d/1cv8HpK_VZtecirIKQcsLuQ4LK9C_bGsx/view?usp=drive_link) |


##

| **Caso de teste** 	| **CT-005 – Usar os filtros de jogos** 	|
|:---:	|:---:	|
| Requisito associado | RF-005 Possibilitar filtragem de pesquisas por categorias |
| Registro de evidência | [https://drive.google.com/file/d/1cv8HpK_VZtecirIKQcsLuQ4LK9C_bGsx/view?usp=drive_link](https://drive.google.com/file/d/1cv8HpK_VZtecirIKQcsLuQ4LK9C_bGsx/view?usp=drive_link) |

##

| **Caso de teste** 	| **CT-006 – Filtragem das notícias** 	|
|:---:	|:---:	|
| Requisito associado | RF-007 Exibir notícias do mundo dos games |
|Registro de evidência | [https://drive.google.com/file/d/1AtcbE9H9-2qpQgJpMiIKCJhFailDs1Xk/view?usp=drive_link](https://drive.google.com/file/d/1AtcbE9H9-2qpQgJpMiIKCJhFailDs1Xk/view?usp=drive_link)|

##

| **Caso de teste** 	| **CT-007 – Novas Listas** 	|
|:---:	|:---:	|
| Requisito associado | RF-011 Permitir que usuários crie suas listas de jogos |
| Registro de evidência | [https://drive.google.com/file/d/12lmaDRE00nnTl2OoSoGdm-H6xBePxzkM/view?usp=drive_link](https://drive.google.com/file/d/12lmaDRE00nnTl2OoSoGdm-H6xBePxzkM/view?usp=drive_link) |

##

| **Caso de teste** 	| **CT-008 – Reviews** 	|
|:---:	|:---:	|
| Requisito associado | RF-002 Permitir que o usuário avalie jogos com notas e comentários |
| Registro de evidência | [https://drive.google.com/file/d/1o3ihAro9_Dv17swFVBugYmtlB3fInNtd/view?usp=drive_link](https://drive.google.com/file/d/1o3ihAro9_Dv17swFVBugYmtlB3fInNtd/view?usp=drive_link) |


## Testes automatizados com Selenium

Execução local com `./tests-selenium/run_tests.sh` (ou `run_tests.bat`). Resultados resumidos abaixo.

| **Caso de teste** 	| **CT-S01 – Carregamento da Home** 	|
|:---:	|:---:	|
| Requisito associado | RF-007 |
| Script | [test_home.py::test_home_loads](../tests-selenium/test_home.py) |
| Resultado | ✅ Aprovado |

##

| **Caso de teste** 	| **CT-S02 – Links da navbar** 	|
|:---:	|:---:	|
| Requisito associado | RF-007 / Navegação |
| Script | [test_home.py::test_navbar_has_links](../tests-selenium/test_home.py) |
| Resultado | ✅ Aprovado |

##

| **Caso de teste** 	| **CT-S03 – Abertura do modal de registro** 	|
|:---:	|:---:	|
| Requisito associado | RF-004 |
| Script | [test_auth.py::test_register_modal_opens](../tests-selenium/test_auth.py) |
| Resultado | ✅ Aprovado |

##

| **Caso de teste** 	| **CT-S04 – Abertura do modal de login** 	|
|:---:	|:---:	|
| Requisito associado | RF-006 |
| Script | [test_auth.py::test_login_modal_opens](../tests-selenium/test_auth.py) |
| Resultado | ✅ Aprovado |

##

| **Caso de teste** 	| **CT-S05 – Registro via API + login pela UI** 	|
|:---:	|:---:	|
| Requisito associado | RF-004 + RF-006 |
| Script | [test_login_flow.py::test_login_after_register](../tests-selenium/test_login_flow.py) |
| Resultado | ✅ Aprovado |

##

| **Caso de teste** 	| **CT-S06 – Navegação para Notícias** 	|
|:---:	|:---:	|
| Requisito associado | RF-007 |
| Script | [test_navigation.py::test_nav_to_news](../tests-selenium/test_navigation.py) |
| Resultado | ✅ Aprovado |

##

| **Caso de teste** 	| **CT-S07 – Navegação para Guia** 	|
|:---:	|:---:	|
| Requisito associado | Navegação |
| Script | [test_navigation.py::test_nav_to_guia](../tests-selenium/test_navigation.py) |
| Resultado | ✅ Aprovado |

##

| **Caso de teste** 	| **CT-S08 – Retorno para Home** 	|
|:---:	|:---:	|
| Requisito associado | Navegação |
| Script | [test_navigation.py::test_nav_back_home](../tests-selenium/test_navigation.py) |
| Resultado | ✅ Aprovado |

##

## Avaliação

Com os testes planejados e executados tivemos alguns fatores de melhoria observado pelo grupo, os filtros das páginas de notícias devem ser ajustados para mostrar apenas notícias do mundo dos games, quando se vai pesquisar por alguns jogos é difícil achar qual o exato jogo que o usuário quer entre outros fatores de melhoria, mas com tudo os testes ocorreram bem como o planejado.