# osrs-item-checker

A Grand Exchange item detail checker for Old School RuneScape.

Este aplicativo permite que os usuários pesquisem e vejam os detalhes dos itens da **Grand Exchange** do **Old School RuneScape (OSRS)**. O app conecta-se à API oficial do jogo para fornecer informações atualizadas e detalhadas, incluindo preços, descrição e imagens dos itens.

## Funcionalidades

- Barra de pesquisa com filtro por nome de item (autocomplete simples).
- Lista dinâmica dos itens carregados da API oficial.
- Tela de detalhes do item com informações completas:
  - ID, descrição ("examine"), status de membros, valores de compra e alchemy, limites de trade.
  - Preço de mercado (alta e baixa).
  - Imagem do item exibida via URL formatada.
  - Navegação entre telas usando React Navigation.

## Instalação

### 1. Clonando o repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/osrs-item-checker.git
```

### 2. Instalando dependências

Navegue até o diretório do projeto e instale as dependências necessárias:

```bash
cd osrs-item-checker
npm install
```

### 3. Rodando o app

Após a instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
npx expo start
```

Isso abrirá uma janela no navegador com a interface do Expo. Você pode visualizar o app em um emulador ou no seu dispositivo móvel com o aplicativo **Expo Go**.

## Estrutura do projeto

- `src/screens/`: Contém as telas do aplicativo, incluindo a tela inicial (`HomeScreen.tsx`) e a tela de detalhes do item (`ItemDetails.tsx`).
- `src/navigation/`: Configuração do React Navigation para gerenciar a navegação entre as telas.
- `src/services/`: Funções para buscar dados da API do OSRS.
- `src/types/`: Definições de tipos TypeScript para garantir a consistência dos dados manipulados.

## API utilizada

O aplicativo utiliza a **API do Old School RuneScape** para obter informações dos itens da Grand Exchange.

- [API de mapeamento de itens](https://prices.runescape.wiki/api/v1/osrs/mapping) - Retorna o mapeamento de itens.
- [API de preços mais recentes](https://prices.runescape.wiki/api/v1/osrs/latest?id=ITEM_ID) - Retorna o preço mais recente de um item específico.
