
- [ ] Desenvolver o layout da tela, seguindo o [figma](https://www.figma.com/design/f8790N51hmJF6ExZl1uokf/News-dev?node-id=2-3&p=f&t=LD4InUkU2nLoot16-0), nesse momento sem se preocupar com lógica, só com a estrutura do sistema as telas sendo Home (/), Visualizar uma news (/noticia/[id]), Tela de gerenciamento (/manager?token=123) 
- [ ] Na tela de gerenciamento validar usando middleware se na URL estiver passando um parâmetro chamado ?token=123, se não tiver redireciono para Home, do contrario deixo prosseguir para a tela normal.
- [ ] Conectar com a [API](https://newsdata.io/api/1/latest?apikey=YOUR_API_KEY&q=ti), retornando os valores na tela home
- [ ] Redenrizar a lista retornada na tela inicial
- [ ] Add a lógica de loading na tela de noticias e de detalhes de noticias
- [ ] Fazer com que ao clicar no card da noticia seja aberta em details com a noticia correspondente ao id selecionado
- [ ] Manter por 60 segundos um cache da informação trazida da API e usar esses valores.
- [ ] O título e a descrição da página devem ser configurados dinamicamente para SEO Metadata.