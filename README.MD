# Cálculos de Engenharia de Mecanismos - Prof. Adilson

Este projeto é uma aplicação web que permite realizar diversos cálculos relacionados a engenharia, como raio, velocidade, aceleração, e suas variantes com excentricidade de mecanismos

## Visão Geral

A aplicação oferece uma interface simples e intuitiva para calcular:
- **Raio** (`R1`)
- **Velocidade** (`V1`)
- **Aceleração** (`A1`)
- Com **Excentricidade** para cada um dos cálculos acima.

### Funcionalidades

- **Fórmulas de Cálculo:** Baseado em fórmulas específicas para cada tipo de cálculo.
- **Seleção de Fórmulas:** Escolha o cálculo desejado usando no menu dropdown.
- **Unidades de Ângulo:** Suporte para graus e radianos.
- **Resultados Dinâmicos:** Cálculos são atualizados e exibidos na mesma página.

## Estrutura do Projeto

### Diretórios e Arquivos

- `index.html`: Arquivo principal HTML contendo a estrutura da página.
- `styles.css`: Arquivo de estilos CSS para personalizar a aparência da aplicação.
- `scripts.js`: Arquivo JavaScript para a lógica de cálculo e manipulação da interface.
- `README.md`: Este arquivo.

### HTML

O arquivo `index.html` define a estrutura da aplicação com seções específicas para cada tipo de cálculo. Utiliza elementos HTML5 e a biblioteca MathJax para renderizar fórmulas matemáticas.

### CSS

O arquivo `styles.css` é responsável pelo estilo da aplicação, incluindo layout, cores e tipografia. Certifique-se de personalizá-lo de acordo com suas preferências.

### JavaScript

O arquivo `scripts.js` contém a lógica para calcular os valores baseados nas fórmulas fornecidas e manipula a interface para exibir os resultados.

## Fórmulas

As formulas usadas nas aplicação são:

### Raio

\[ R_1 = R_2 \cdot \cos(\theta) + \sqrt{R_3^2 - R_2^2 \cdot \sin^2(\theta)} \]

### Velocidade

\[ V_1 = - W_2 \cdot R_2 \cdot \left[\sin(\theta) + \frac{R_2 \cdot \sin(\theta) \cdot \cos(\theta)}{\sqrt{R_3^2 - R_2^2 \cdot \sin^2(\theta)}}\right] \]

### Aceleração

\[ A_1 = - W_2 \cdot R_2 \cdot \cos(\theta) - \frac{W_2^2 \cdot R_2^2 \cdot \left[\cos^2(\theta) - \sin^2(\theta)\right]}{\sqrt{R_3^2 - R_2^2 \cdot \sin^2(\theta)}} - \frac{W_2^2 \cdot R_2^4 \cdot \cos^2(\theta) \cdot \sin^2(\theta)}{\left(R_3^2 - R_2^2 \cdot \sin^2(\theta)\right)^{3/2}} \]

### Raio com Excentricidade

```math
\[ R_1 = R_2 \cdot \cos(\theta) + \sqrt{R_3^2 - (R_2^2 \cdot \sin(\theta) + e)^2} \]
```

### Velocidade com Excentricidade

```math
\[ V_1 = - W_2 \cdot R_2 \cdot \left[\sin(\theta) + \frac{R_2 \cdot \sin(\theta) \cdot \cos(\theta)}{\sqrt{R_3^2 - (R_2 \cdot \sin(\theta) + e)^2}}\right] \]
```

### Aceleração com Excentricidade

```math
\[ A_1 = - W_2 \cdot R_2 \cdot \cos(\theta) - \frac{W_2^2 \cdot R_2^2 \cdot \left[\cos^2(\theta) - \sin^2(\theta)\right]}{\sqrt{R_3^2 - (R_2 \cdot \sin(\theta) + e)^2}} - \frac{W_2^2 \cdot R_2^4 \cdot \cos^2(\theta) \cdot \sin^2(\theta)}{\left(R_3^2 - (R_2 \cdot \sin(\theta) + e)^2\right)^{3/2}} \]
```

## Como Usar

1. **Abrir a Aplicação:** Abra o arquivo `index.html` em seu navegador.
2. **Selecionar Fórmula:** Use o menu dropdown para escolher a fórmula desejada.
3. **Inserir Valores:** Preencha os campos com os valores necessários para o cálculo.
4. **Calcular Resultados:** Clique no botão correspondente para calcular e exibir o resultado.