# osrs-mobile-item-checker
A Grand Exchange item detail checker for Old School RuneScape.

Este aplicativo permite que os usuários pesquisem e vejam os detalhes dos itens da **Grand Exchange** do **Old School RuneScape (OSRS)**. O app conecta-se à API oficial do jogo para fornecer informações detalhadas sobre os itens, incluindo preços atuais e dados adicionais como o valor base, alchemical high/low, entre outros.

## Funcionalidades
- Pesquisa por nome de item.
- Exibição de informações detalhadas sobre o item, incluindo:
  - ID do item.
  - Descrição do item ("examine").
  - Status de "membro" (se é exclusivo para membros).
  - Preços de mercado atualizados (preços altos e baixos).
  - Valor base (para compra na loja).
  - Valores de High Alch e Low Alch.
  - Limite de trades a cada 4 horas.

## Instalação

### 1. Clonando o repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/osrs-mobile-item-checker.git
```

### 2. Instalando dependências

Navegue até o diretório do projeto e instale as dependências necessárias:

```bash
cd osrs-mobile-item-checker
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

## Contribuições

Se você deseja contribuir para o projeto, sinta-se à vontade para abrir **issues** ou **pull requests**.

## Licença

Este projeto está licenciado sob a **MIT License** - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.