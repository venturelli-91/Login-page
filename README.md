# Sistema de Login - Refatorando

Um sistema de autenticação moderno desenvolvido com Next.js, Tailwind CSS, Flowbite e Zustand.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento web
- **TypeScript**: Superset JavaScript com tipagem estática
- **Tailwind CSS**: Framework CSS utilitário
- **Flowbite**: Componentes UI baseados em Tailwind
- **Zustand**: Gerenciamento de estado global

## Funcionalidades

- Login de usuários
- Cadastro de novos usuários
- Validação de formulários
- Persistência de estado de autenticação
- Interface responsiva e moderna

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:3000` no seu navegador

## Estrutura do Projeto

- `src/app`: Páginas e layout da aplicação Next.js
- `src/components`: Componentes React reutilizáveis
- `src/store`: Gerenciamento de estado com Zustand

## Implementação do Estado Global

O projeto utiliza Zustand para gerenciar o estado global da aplicação, incluindo:

- Estado de autenticação do usuário
- Dados dos formulários
- Validação e erros
- Alternância entre telas de login e cadastro

## Licença

MIT
