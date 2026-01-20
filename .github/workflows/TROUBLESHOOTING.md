# Troubleshooting - NPM Token Issues

## Erro: Invalid npm token

Se você está recebendo o erro "Invalid npm token", siga estes passos:

### 1. Verificar o Token no NPM

1. Acesse: https://www.npmjs.com/settings/[seu-usuario]/tokens
2. Verifique se o token existe e está ativo
3. Confirme que o token tem permissão "Read and Publish"
4. Se o token foi revogado ou expirado, crie um novo

### 2. Verificar a Secret no GitHub

1. Vá para: Settings > Secrets and variables > Actions
2. Verifique se a secret `NPM_TOKEN_NEXT_CNPJ` existe
3. Confirme que o valor está correto (deve começar com `npm_`)
4. Se necessário, atualize o valor da secret

### 3. Verificar Two-Factor Authentication (2FA)

Se você tem 2FA habilitado no NPM:

1. Acesse: https://www.npmjs.com/settings/[seu-usuario]/profile
2. Vá para "Two-Factor Authentication"
3. **IMPORTANTE**: Configure o nível como "Authorization only" (não "Authorization and writes")
4. O semantic-release não funciona com "Authorization and writes"

### 4. Verificar Permissões do Token

O token precisa ter:
- ✅ Tipo: "Automation" ou "Publish"
- ✅ Permissão: "Read and Publish"
- ✅ Status: Ativo (não revogado)

### 5. Verificar o Nome do Pacote

1. Verifique se o pacote `next-cnpj` já existe no NPM
2. Se existir, você precisa ter permissão para publicar nele
3. Se não tiver permissão, você pode:
   - Solicitar acesso ao pacote existente
   - Ou usar um nome diferente no `package.json`

### 6. Testar o Token Localmente

Para testar se o token funciona:

```bash
# Configure o token
export NPM_TOKEN="seu-token-aqui"
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc

# Teste a autenticação
npm whoami

# Se funcionar, você verá seu username do NPM
```

### 7. Verificar os Logs do GitHub Actions

1. Vá para: Actions > Selecione o workflow que falhou
2. Expanda o step "Configure NPM registry"
3. Verifique se o `npm whoami` retorna seu username
4. Se retornar erro, o token está inválido ou sem permissões

### 8. Recriar o Token

Se nada funcionar, recrie o token:

1. Revogue o token antigo no NPM
2. Crie um novo token do tipo "Automation"
3. Atualize a secret `NPM_TOKEN_NEXT_CNPJ` no GitHub
4. Execute o workflow novamente

## Formato do Token

O token NPM deve:
- Começar com `npm_`
- Ter aproximadamente 40-50 caracteres
- Ser do tipo "Automation" ou "Publish"

Exemplo: `npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

## Checklist Rápido

- [ ] Token existe e está ativo no NPM
- [ ] Token tem permissão "Read and Publish"
- [ ] 2FA está configurado como "Authorization only" (se habilitado)
- [ ] Secret `NPM_TOKEN_NEXT_CNPJ` existe no GitHub
- [ ] Valor da secret está correto (começa com `npm_`)
- [ ] Você tem permissão para publicar no pacote `next-cnpj` (se já existir)
