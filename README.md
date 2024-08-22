# CyberSinuca
Aplicativo de Sinuca do DAICEx da UFMG

## Paleta de cores e Estilo

[Instagram da Singularidade]()https://www.instagram.com/singularidade.icex/)
A Singularidade é o nosso cliente. Idealmente, seguir o estilo visual dentro do
razoavel.

* #00FFFF
* #FFFF00
* #FF00FF

* #00091F

O Estilo da Singularidade é focado em uma estética cyberpunk com neon e cores
vibrantes. 
[Exemplo]

# Commits Specification: [Conventional Commits]([https://www.conventionalcommits.org/en/v1.0.0/])
Todas as features implementadas em branchs para posteriorments serem squashadas
e unificadas em um único commit na arvore principal

# Layout

## [Design no Figma](https://www.figma.com/files/team/1408517085156651275/)

# Features Iniciais

## Página Inicial
* sinucadaicex.com/
    Ranking e Historico Geral

##  Registro de Partidas:
1 usuario registra, oponente confirma (push notification)

## Perfil do Usuario (Público/Privado)
* /user/{user}
    Histórico, Ranking, Elo e estatisticas

Versão pública e versão privada/logada

## Históricos das Partidas
* /history
    Historico com pesquisa com filtro
    * /history/{user}
        Historico ja filtrado para um usuário especifico

## Rank de Todos os Jogadores
* /ranking
    Ranking Completo com busca com filtros

# Tech Stack

## TypeScript
* React(front) + Go(back)
    * OAuth

## Stilização
Tailwind

## HTML5 Semantico
Usar html semantico para facilitar a padronização do estilo

## Banco de Dados
* Postgress
    * Faz o prototipo das tabelas com dados semente

## Deploy no Docker
Fazer script de deployment para padronização

## Github Actions
Tests automatizados de Estilização
