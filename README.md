# CursoReact - Portfolio de Estudos React.js

## 📋 Visão Geral

Este repositório contém uma coleção de projetos desenvolvidos durante meus estudos de React.js, demonstrando a progressão do aprendizado desde conceitos fundamentais até implementações mais avançadas. Cada projeto explora diferentes aspectos do ecossistema React moderno.

## 🛠 Stack Tecnológica

- **React** 19.1.1 - Biblioteca JavaScript para construção de interfaces de usuário
- **Vite** 7.1.0 - Build tool e bundler para desenvolvimento moderno
- **ESLint** 9.32.0 - Linting e análise estática de código
- **CSS3** - Estilização e layout responsivo
- **JavaScript ES6+** - Sintaxe moderna e features avançadas

## 📁 Estrutura de Projetos

### 1. hello-world
**Conceitos:** Primeiro contato com React e Vite

**Tecnologias Implementadas:**
- Setup básico do ambiente de desenvolvimento com Vite
- Estrutura fundamental de componentes React
- JSX syntax
- Importação de assets estáticos

### 2. criar-componente
**Conceitos:** Fundamentos de componentes e JSX

**Tecnologias Implementadas:**
- **Componentização**: Criação e organização de componentes funcionais
- **Template Expressions**: Interpolação de variáveis e objetos em JSX
- **Event Handling**: Manipulação de eventos com `onClick` e funções anônimas
- **Conditional Rendering**: Renderização condicional com operadores ternários
- **Props**: Passagem de dados entre componentes

**Componentes Desenvolvidos:**
```jsx
// Template Expressions com objetos
const data = { age: 29, job: "Developer" };
<p>Você atua como {data.job}</p>

// Event Handlers
const handleMyEvent = (e) => {
  console.log(e);
  console.log("Ativou o evento");
};

// Renderização condicional
const renderSomething = (condicao) => {
  return condicao ? <h1>Renderizando isso!</h1> : <h1>Também posso renderizar isso!</h1>;
};
```

### 3. hooks
**Conceitos:** State management com React Hooks

**Tecnologias Implementadas:**
- **useState Hook**: Gerenciamento de estado local em componentes funcionais
- **State vs Variables**: Demonstração prática da diferença entre variáveis normais e state
- **Re-rendering**: Compreensão do ciclo de re-renderização baseado em mudanças de estado

**Implementação Técnica:**
```jsx
// Demonstração de variável vs state
let someData = 10; // Não causa re-render
const [number, setNumber] = useState(15); // Causa re-render

// Atualização de state
<button onClick={() => setNumber(25)}>Mudar valor</button>
```

### 4. renderizar-lista
**Conceitos:** Renderização de listas, props e renderização condicional avançada

**Tecnologias Implementadas:**
- **Array Rendering**: Renderização de arrays com `.map()`
- **Key Props**: Uso correto de keys para otimização de performance
- **State Management**: Manipulação de arrays complexos no state
- **Props**: Passagem de propriedades entre componentes
- **Destructuring**: Desestruturação de props
- **Conditional Rendering**: Operadores ternários e logical AND
- **Immutable Updates**: Atualizações imutáveis do state

**Implementações Técnicas:**
```jsx
// Renderização com keys apropriadas
{users.map((user) => (
  <li key={user.id}>{user.name} - {user.age}</li>
))}

// Atualização imutável do state
const deleteRandom = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  setUsers(prevUsers => 
    prevUsers.filter(user => randomNumber !== user.id)
  );
};

// Destructuring de props
const CarDetails = ({brand, km, color}) => {
  return (
    <ul>
      <li>Marca: {brand}</li>
      <li>Km: {km}</li>
      <li>Cor: {color}</li>
    </ul>
  );
};

// Conditional rendering com operador ternário
{name === "Gabriel" ? (
  <div><p>O nome é Gabriel</p></div>
) : (
  <div><p>Nome não encontrado</p></div>
)}
```

### 5. imagens-publicas
**Conceitos:** Gerenciamento de assets estáticos e dinâmicos

**Tecnologias Implementadas:**
- **Static Assets**: Servindo arquivos da pasta `public/`
- **Dynamic Imports**: Importação de assets com `import`
- **Asset Optimization**: Configuração de assets com Vite
- **Public vs Assets**: Diferenciação entre pasta public e src/assets

**Implementação:**
```jsx
// Importação dinâmica de assets
import madara from "./assets/madara.webp";

// Asset da pasta public
<img src="/akatsuki-1.jpg" alt="Akatsuki de Naruto" />

// Asset importado dinamicamente
<img src={madara} alt="Madara de Naruto" />
```

### 6. formularios
**Conceitos:** Controlled components e form handling

**Tecnologias Implementadas:**
- **Controlled Components**: Inputs controlados pelo state do React
- **Form Handling**: Manipulação de eventos de formulário
- **Validation**: Validação básica de campos
- **Event Prevention**: Uso de `preventDefault()`
- **Conditional Logic**: Lógica condicional para validação

**Implementação Técnica:**
```jsx
const [nome, setName] = useState("");
const [email, setEmail] = useState("");

// Controlled input
<input
  type="text"
  value={nome}
  onChange={(e) => setName(e.target.value)}
/>

// Form submission com validação
const handleSubmit = (e) => {
  e.preventDefault();
  nome.trim() === "" 
    ? alert("Por favor, preencha o campo nome") 
    : alert("Enviando o formulário " + nome);
};
```

### 7. secret-world (Projeto Avançado)
**Conceitos:** Aplicação completa de jogo com state management complexo

**Tecnologias Implementadas:**
- **useCallback Hook**: Otimização de performance com memoização de funções
- **useEffect Hook**: Efeitos colaterais e ciclo de vida de componentes
- **useRef Hook**: Referências diretas a elementos DOM
- **Complex State Management**: Gerenciamento de múltiplos states inter-relacionados
- **Game Logic**: Implementação de lógica de jogo
- **Component Communication**: Comunicação entre componentes via props
- **Conditional Rendering**: Renderização baseada em estado do jogo

**Arquitetura de Componentes:**
```jsx
// Game stages management
const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
];

// useCallback para otimização
const pickWordAndCategory = useCallback(() => {
  const categories = Object.keys(words);
  const category = categories[Math.floor(Math.random() * categories.length)];
  const word = words[category][Math.floor(Math.random() * words[category].length)];
  return {word, category};
}, [words]);

// useEffect para game over logic
useEffect(() => {
  if(guesses <= 0){
    clearLetterStates();
    setGameStage(stages[2].name);
  }
}, [guesses]);

// useRef para focus management
const letterInputRef = useRef(null);
letterInputRef.current.focus();
```

**Features Implementadas:**
- Sistema de pontuação dinâmica
- Gerenciamento de tentativas restantes
- Validação de letras duplicadas
- Auto-focus em inputs
- Transições entre telas de jogo
- Lógica de vitória e derrota
- Reinicialização de jogo

## 🏗 Conceitos React Demonstrados

### Hooks Utilizados
- **useState**: Gerenciamento de estado local
- **useEffect**: Efeitos colaterais e cleanup
- **useCallback**: Memoização de funções para otimização
- **useRef**: Referências diretas ao DOM

### Padrões de Desenvolvimento
- **Functional Components**: Componentes funcionais modernos
- **Controlled Components**: Inputs controlados pelo React
- **Lifting State Up**: Elevação de estado para componentes pai
- **Component Composition**: Composição de componentes
- **Props Drilling**: Passagem de props através da árvore de componentes

### Performance e Otimização
- **Key Props**: Otimização de re-renderização de listas
- **useCallback**: Prevenção de re-criação desnecessária de funções
- **Immutable Updates**: Atualizações imutáveis do state
- **Conditional Rendering**: Renderização eficiente baseada em condições

### Gerenciamento de Estado
- **Local State**: Estado local de componentes
- **State Lifting**: Compartilhamento de estado entre componentes
- **State Normalization**: Estruturação adequada do estado
- **State Updates**: Atualizações funcionais do estado

## 🔧 Configuração de Desenvolvimento

### Build Tools
- **Vite**: Build tool moderna com HMR (Hot Module Replacement)
- **ESLint**: Linting com regras para React Hooks
- **Plugins**: @vitejs/plugin-react para transformação JSX

### Estrutura de Arquivos
```
projeto/
├── public/          # Assets estáticos
├── src/
│   ├── components/  # Componentes reutilizáveis
│   ├── assets/      # Assets dinâmicos
│   ├── data/        # Dados da aplicação
│   ├── App.jsx      # Componente principal
│   └── main.jsx     # Entry point
├── package.json     # Dependências e scripts
└── vite.config.js   # Configuração do Vite
```

## 📚 Conceitos Técnicos Avançados

### Event Handling
- Synthetic Events do React
- Event delegation
- Event prevention e propagation
- Custom event handlers

### Rendering Patterns
- Conditional rendering com logical operators
- List rendering com .map()
- Fragment usage para múltiplos elementos
- Dynamic class assignment

### Data Flow
- Unidirectional data flow
- Props vs State
- Component communication patterns
- Data normalization

## 🚀 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento com HMR
npm run build    # Build para produção
npm run lint     # Análise de código
npm run preview  # Preview do build
```

## 📈 Evolução do Aprendizado

1. **Fundamentos**: JSX, componentes, props
2. **State Management**: Hooks, state updates
3. **Interatividade**: Events, forms, validation
4. **Lists & Conditionals**: Rendering patterns
5. **Assets**: Static vs dynamic imports
6. **Advanced Patterns**: Optimization, refs, complex state

## 🎯 Próximos Passos

- **Context API**: Gerenciamento de estado global
- **Custom Hooks**: Criação de hooks reutilizáveis
- **Testing**: Jest, React Testing Library
- **Routing**: React Router para SPAs
- **State Management**: Redux ou Zustand
- **API Integration**: Fetch, axios, async operations
- **TypeScript**: Tipagem estática
- **Styled Components**: CSS-in-JS
- **Performance**: React.memo, useMemo, lazy loading

---

*Este repositório representa uma jornada progressiva de aprendizado em React.js, demonstrando a evolução desde conceitos básicos até implementações mais sofisticadas.*