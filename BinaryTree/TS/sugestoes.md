Sugestões de Melhoria:
Proteção contra Duplicatas: No método insertNode, seria interessante verificar se o valor já existe na árvore antes de inserir. Isso garantiria que não há nós duplicados.

Testes Automatizados: Adicionar testes para validar o comportamento correto de inserção e travessia da árvore pode ser útil para garantir a qualidade do código ao longo do tempo.

Tratamento de Erros: Considerar a possibilidade de lançar erros ou avisos no caso de inserções inválidas ou operações em árvores vazias pode ser útil.

Desempenho: Para árvores muito grandes, os métodos de travessia podem ser lentos devido ao uso de chamadas recursivas. Considere adicionar uma opção iterativa para otimização futura.

Tipagem: Alguns métodos podem ser otimizados usando Readonly na interface ou garantindo que atributos como node sejam imutáveis, caso isso seja relevante.