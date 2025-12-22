## Funcionalidades

### Paginação
- Tela principal para ver todas as news (/)
- Visualizar uma news (/noticia/[id])
- Tela de gerenciamento (/manager)

### Visualização de noticias
- Loading para as noticias
- Buscar informações dessa [API](https://newsdata.io/api/1/latest?apikey=YOUR_API_KEY&q=ti) 
- Manter por 60 segundos um cache da informação trazida da API
- Visualizar detalhe da noticia

### Autenticação
- Ao tentar acessar a tela sem passar o parametro de token, deve ser redirecionado par aa pag inicial, isso usando middleware