# REGRAS DE NEGÓCIO

### REGRA 001 - Acessar tela de gerenciamento somente com parametro de token
**Descrição:** Só é possivel conseguir entrar se passar um parâmetro ?token=123 na URL /manager
**Aplica-se a:** Adm  
**Onde:** Tela de gerenciamento
**Motivo:** Evitar acesso de pessoas não autenticadas  
**Ação esperada:** O sistema deve permitir a visualização se tiver passado o parametro, senão deve ser redirecionado para tela Home