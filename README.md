<div align="center">

  # ⚡ Adalberto Silvestre — Developer Portfolio

  <p align="center">
    <strong>Portfólio de Engenharia de Software & Desenvolvimento Web Front-End</strong><br />
    Combinando a velocidade do ecossistema React/Next.js com a disciplina e rigor algorítmico da <strong>42 Luanda</strong>.
  </p>

  <p align="center">
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-estrutura-do-projeto">Estrutura</a> •
    <a href="#-como-executar">Como Executar</a> •
    <a href="#-contacto">Contacto</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-18.x-38BDF8?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/42_Luanda-Core_Student-000000?style=for-the-badge&logo=42&logoColor=white" alt="42 Luanda" />
  </p>

</div>

---

## 📌 Visão Geral

Este portfólio foi desenhado com um conceito **SaaS / Cyber-HUD Premium**, focado em demonstrar a dualidade do meu perfil técnico:

1. **Engenharia de Produto & Impacto de Negócio:** Desenvolvimento Front-End e Full-Stack com foco em métricas reais (+210% de tráfego SEO na Vianet, -35% de perdas operacionais documentais).
2. **Fundamentos de Ciência da Computação:** Demonstração prática dos projetos em C/C++ desenvolvidos no *Core Curriculum* da **42 Luanda** (`push_swap`, `Libft`, `get_next_line`, `ft_printf`).

---

## 🚀 Funcionalidades & Destaques Visuais

- 🌌 **Partículas Interativas em Canvas:** Fundo reativo de nós e conexões que se ligam ao movimento do cursor do utilizador.
- 🎯 **Tech Custom Cursor (HUD):** Ponteiro cibernético com efeito magnético, retículo de precisão e estado de *hover* ativo.
- 🔓 **Text Scramble / Hacker Effect:** Efeito de descriptografia de símbolos em tempo real ao passar o cursor pelos elementos principais.
- ✍️ **Typed.js + GSAP Text Reveal:** Título interativo animado caractere a caractere com efeito *backspace* dinâmico.
- 🎮 **42 Core Lab (Simulador Interativo do `push_swap`):**
  - Controlo completo de 2 pilhas simultâneas (**Stack A** e **Stack B**).
  - Conjunto completo de instruções em C: `sa`, `sb`, `pa`, `pb`, `ra`, `rb`, `rra`, `rrb`.
  - Validação em tempo real de ordenação crescente com **disparo de confetes cibernéticos em Canvas** e modal de celebração.
- 📁 **Página Dedicada de Estudo de Caso (`ProjectDetail`):**
  - Galeria interativa com suporte para **3 ou mais capturas por projeto**.
  - Detalhe do desafio de negócio, arquitetura de dados e botão direto para produção e repositórios Git.
- 🎨 **Dark Mode Exclusivo:** Paleta de cores inspirada em ecossistemas de alta performance (*Deep Navy*, *Pure Black* e *Neon Cyan*).

---

## 🛠️ Tecnologias & Bibliotecas

| Categoria | Tecnologia / Biblioteca | Descrição |
| :--- | :--- | :--- |
| **Core Framework** | `React` + `TypeScript` + `Vite` | Estrutura ultra-rápida de desenvolvimento e type safety |
| **Estilização** | `Tailwind CSS v4` | Motor de CSS utilitário com variáveis declarativas em `@theme` |
| **Animações** | `GSAP` + `Framer Motion` | Animações de física, layout reativo e revelação 3D de texto |
| **Efeitos de Scroll** | `AOS` (Animate On Scroll) | Entradas e transições suaves de secções durante a navegação |
| **Efeitos de Texto** | `Typed.js` | Animação de máquina de escrever no Hero |
| **Ícones** | `Lucide React` & `Native Tech SVGs` | Ícones vetoriais customizados e otimizados |

---

## 📂 Estrutura do Projeto

```text
portfolio-dev/
├── public/
│   ├── sua-foto.jpg               # Fotografia de perfil do Hero
│   └── projects/                  # Capturas de ecrã dos projetos
│       ├── vianet-1.jpg
│       ├── vianet-2.jpg
│       ├── vianet-3.jpg
│       ├── transgest-1.jpg
│       ├── transgest-2.jpg
│       └── transgest-3.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Navegação fixa com indicador 42 Core e CTA
│   │   ├── Hero.tsx               # Secção principal com Typed.js, GSAP e Métricas
│   │   ├── AboutMe.tsx            # Perfil pessoal/profissional e linha do tempo académica
│   │   ├── ValueTriangle.tsx      # Triângulo de valor (Design, Produto e CS)
│   │   ├── TechStack.tsx          # Grelha de tecnologias categorizada com Spotlight
│   │   ├── TechIcons.tsx          # Biblioteca de SVGs nativos de tecnologias
│   │   ├── GlowCard.tsx           # Wrapper de cartão com rastreio de luz 3D
│   │   ├── TechCursor.tsx         # Cursor de precisão estilo HUD
│   │   ├── TechTextScramble.tsx   # Efeito hacker de descriptografia
│   │   ├── GsapTextReveal.tsx     # Revelação de caracteres via GSAP
│   │   ├── SectionReveal.tsx      # Divisor neon e entrada de secção
│   │   ├── Projects.tsx           # Lista de casos de estudo em produção
│   │   ├── ProjectDetail.tsx      # Página dedicada de projeto com galeria multi-foto
│   │   ├── Lab42.tsx              # Terminal interativo e simulador push_swap
│   │   ├── ParticlesBg.tsx        # Fundo interativo em Canvas
│   │   └── Footer.tsx             # Formulario de contacto e status do sistema
│   ├── App.tsx                    # Gestão de estados de navegação e inicialização de libs
│   ├── index.css                  # Configuração do Tailwind v4 e animações globais
│   └── main.tsx                   # Ponto de entrada da aplicação React
├── package.json
└── README.md
```

---

## 📦 Como Executar Localmente

### Pré-requisitos
Certifica-te de que tens instalado no teu sistema:
- **Node.js** (`v18.0.0` ou superior)
- **npm** ou **yarn** / **pnpm**

### Passos
1. **Clona o repositório:**
   ```bash
   git clone https://github.com/AdalbertoAo/portfolio-dev.git
   cd portfolio-dev
   ```

2. **Instala as dependências:**
   ```bash
   npm install
   ```

3. **Inicia o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acede no navegador:**
   Navega para `http://localhost:5173` para visualizar o portfólio.

5. **Gerar versão de produção (Build):**
   ```bash
   npm run build
   ```

---

## 🎨 Guia de Personalização Rápida

- **Substituir Fotografia:** Adiciona a tua foto em `public/sua-foto.jpg`.
- **Substituir Imagens dos Projetos:** Adiciona as capturas dos teus projetos na pasta `public/projects/`.
- **Atualizar Links Sociais e Repositórios:** Altera os links no `Footer.tsx`, `Hero.tsx`, `Projects.tsx` e `Lab42.tsx`.

---

## 📬 Contacto

- **Desenvolvedor:** Adalberto Silvestre
- **LinkedIn:** [linkedin.com/in/adalberto-silvestre](https://linkedin.com/in/adalberto-silvestre)
- **GitHub:** [github.com/AdalbertoAo](https://github.com/AdalbertoAo)
- **Email:** 4dalbertosil@gmail.com
- **42 Luanda Intra:** `adasilve`

---

<div align="center">
  <p>Construído com 💙 em Luanda, Angola 🇦🇴</p>
</div>