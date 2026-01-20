# GitHub Actions Workflows

## CI/CD Pipeline

O workflow de CI/CD é acionado automaticamente quando há push ou pull request na branch `main` ou `master`.

### Configuração Necessária

Para que o semantic-release funcione corretamente, você precisa configurar o seguinte secret no GitHub:

1. **NPM_TOKEN**: Token de autenticação do NPM (obrigatório para publicar no NPM)
   - Acesse: https://www.npmjs.com/settings/[seu-usuario]/tokens
   - Crie um token do tipo "Automation" ou "Publish"
   - Adicione como secret no GitHub: Settings > Secrets and variables > Actions > New repository secret
   - Nome: `NPM_TOKEN`
   - Valor: o token gerado

2. **GITHUB_TOKEN**: Já está disponível automaticamente nas Actions através de `secrets.GITHUB_TOKEN`, não precisa configurar manualmente
   - Este token é criado automaticamente pelo GitHub para cada workflow
   - Tem permissões para criar releases, tags e commits

### Como Funciona

O workflow possui dois jobs:

#### 1. Test Job (sempre executado)
- Executa linting do código
- Executa todos os testes
- Gera relatório de cobertura
- Compila o projeto TypeScript
- Valida se o build foi bem-sucedido

#### 2. Release Job (apenas em push para main/master)
- Executa após o job de testes passar
- Executa os testes novamente
- Compila o projeto
- O semantic-release:
  - Analisa os commits seguindo Conventional Commits
  - Gera notas de release
  - Atualiza o CHANGELOG.md
  - Cria uma tag Git
  - Publica no NPM
  - Cria um release no GitHub

### Convenções de Commit

Use Conventional Commits para que o semantic-release determine a versão:

- `feat:` - Nova funcionalidade (minor version)
- `fix:` - Correção de bug (patch version)
- `BREAKING CHANGE:` ou `!` - Mudança que quebra compatibilidade (major version)
- `docs:` - Apenas documentação (não gera release)
- `style:` - Formatação (não gera release)
- `refactor:` - Refatoração (não gera release)
- `test:` - Testes (não gera release)
- `chore:` - Manutenção (não gera release)

Exemplos:
```
feat: add support for custom validation rules
fix: correct digit calculation for alphanumeric CNPJ
feat!: change API to use async validation
```
