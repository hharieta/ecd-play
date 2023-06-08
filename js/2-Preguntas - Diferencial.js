const base_url = `https://cdn.jsdelivr.net/npm/latex.js/dist/`
let questions = [
 
    {
        numb: 1,
        question: " ¿Qué es el cálculo diferencial? ",
        answer: "Es una rama de la matemática que permite resolver diversos problemas donde el cambio de las variables.",
        options: [
            "Es una rama de las matemáticas que estudia conceptos tales como vectores, matrices, espacio dual, sistemas de ecuaciones lineales y en su enfoque de manera más formal.",
            "Análisis vectorial o cálculo multivariable es un campo de las matemáticas referidas al análisis real multivariable de vectores en 2 o más dimensiones.",
            "Es una rama de la matemática que permite resolver diversos problemas donde el cambio de las variables.",
            "Es una rama muy importante de las matemáticas. En la misma manera que la geometría estudia el espacio y el álgebra estudia las estructuras abstractas."
        ]
    },

    {
        numb: 2,
        question: "Numeros Reales: Verifica la siguiente relación |x|<1 ",
        answer: "-1 < x < 1",
        options: [
            "-1 < x < 1",
            "3 < x < 2",
            "-1 < x < 2",
            "Indeterminado"
        ]
    },

    {
        numb: 3,
        question: "Numeros Reales: sumas de radicales <span><p>\n</span> 2√ 12 - 3√ 75 + √27 ",
        answer: "- 8√3",
        options: [
            "- 6 + 8√ 3",
            "-3√8",
            "7√6",
            "- 8√3"
        ]
    },
    
    {
        numb: 4,
        question: "Numeros Reales: (√7 - √2)²",
        answer: "9 - 2√14",
        options: [
            "9 - 2√14",
            "4√17",
            "6 - 4√110",
            "2√2"
        ]
    },

    {
        numb: 5,
        question: "Numeros Reales: (√5 + 2)(√5 - 2)",
        answer: "1",
        options: [
            "1",
            "4",
            "2",
            "0"
        ]
    },

    {
        numb: 6,
        question: "Funciones: <span><p>\n</span> ¿Qué es el dominio de una función?",
        answer: "El dominio de una función es el conjunto de todos los valores de la variable independiente",

        options: [
            "Se le llama dominio o recorrido de una función al conjunto de los valores reales que toma la variable",
            "Es dominio toma ciertos números como entradas y asigna a cada uno un número definitivo de salida. ",
            "Un dominio es el conjunto de todos los valores de la variable dependiente ",
            "El dominio de una función es el conjunto de todos los valores de la variable independiente"
        ]
    },

    {
        numb: 7,
        question: "¿La siguiente función f(x)= cos x es....?",
        answer: "No Sobreyectiva",

        options: [
            "No Sobreyectiva",
            "Ninguna,  ",
            "No Biyectiva",
            "No Inyectiva"
        ]
    },

    {
        numb: 8,
        question: "¿La siguiente función f(x) = x² es...?",
        answer: "Inyectiva",

        options: [
            "Sobreyectiva",
            "Ninguna,  ",
            "Biyectiva",
            "Inyectiva"
        ]
    },

    {
        numb: 9,
        question: "¿Cual es el grado de la siguiente función polinomial?  <span><p>\n</span>  f(x)=(x + 2)(x - 2)",
        answer: " n = 2",

        options: [
            " n = 2",
            " n = 3",
            " n = 4",
            " n = 6"
        ]
    },

    {
        numb: 10,
        question: "¿Cual es el grado de la siguiente función polinomial?, f(x)= x³ + x⁴ + x²",
        answer: "n = 4",

        options: [
            "n = 6",
            "n = 4",
            "n = 2",
            "n = 8"
        ]
    },

    {
        numb: 11,
        question: "Funciones trascendentes trigonometricas: calcule m si pertenece a la función seno" + "<latex-js baseURL="+base_url+">$${\\LARGE [ { π \\over 6} ;2m - 2]}$$</latex-js>",
        answer: "$${\\LARGE m = { 3 \\over 4}}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE m = { 3 \\over 5}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE m = { 1 \\over 2}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE m = { 1 \\over 6}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE m = { 3 \\over 4}}$$</latex-js>"
        ]
    },
    
    {
        numb: 12,
        question: "Funciones trascendentes trigonometricas: calcule n si: <span><p>\n</span> "+" <latex-js baseURL="+base_url+">$${\\LARGE [ { π \\over 3}; n - { 3 \\over 4}]}$$</latex-js>" + "pertenece a la función coseno",
        answer: "n = 5 ",

        options: [
            "n = 5 ",
            "n = 6 ",
            "n = 4 ",
            "n = 2 "
        ]
    },

    {
        numb: 13,
        question: "Funciones trascendentes trigonometricas: calcule q si: <span><p>\n</span> "+" <latex-js baseURL="+base_url+">$${\\LARGE [ { π \\over 4};  { 2q - 1 \\over 3}]}$$</latex-js>" + "pertenece a la función tangente",
        answer: "q = 2",

        options: [
            "q = 8 ",
            "q = 2",
            "q = 4",
            "q = 6 "
        ]
    },

    {
        numb: 14,
        question: "La siguiente función es de tipo: f(x)= tan x",
        answer:   "Sobreyectiva",

        options: [
            "Comparativa",
            "Inyectiva",
            "Sobreyectiva",
            "Biyectiva"
        
        ]
    },

    {
        numb: 15,
        question: "Desigualdades de primer orden: <span><p>\n</span> 8x + 4 < 2x + 10",
        answer: "x < 1",

        options: [
            "x < 1",
            "z < 2",
            "< < -2 ",
            "x < -1"
        ]
    },

    {
        numb: 16,
        question: "Desigualdades de primer orden: <span><p>\n</span> 7x +5 < 2x -10",
        answer: "x < -3",

        options: [
            "x < 3",
            "x < 6",
            "x < -6",
            "x < -3"
        ]
    },

    {
        numb: 17,
        question: "Desigualdades de primer orden: <span><p>\n</span> 3 (x + 5) > x-3",
        answer:   "x > -9",

        options: [
            "x > -9",
            "x > 4",
            "x > -4",
            "x > 9"
        ]
    },

    {
        numb: 18,
        question: "Desigualdades de segundo orden, notación de limites: <span><p>\n</span> 2x² - 2x - 2 > 0",
        answer:  "(-∞, -1)U(2, ∞)",

        options: [
            "( 1, 2)U(2, 4)",
            "(-4, 2)U(4, ∞)",
            "(-4, 2)U(4, 5)",
            "(-∞, -1)U(2, ∞)"
        ]
    },

    {
        numb: 19,
        question: "Desigualdades de segundo orden, notación de limites: <span><p>\n</span> x² - 2x - 24 ≥ 0",
        answer: "(-∞, -4]U[6, ∞)",

        options: [
            "(∞, 4]U[2, 8)",
            "(-∞, 4]U[5, ∞)",
            "(-∞, -4]U[6, ∞)",
            "(∞, -2]U[3, ∞)"
        ]
    },

    {
        numb: 20,
        question: "Desigualdades de segundo orden: <span><p>\n</span> x² + 3 - 23 > x²",
        answer: "x < √3 o x > √3",

        options: [
            " x > √6",
            "x < √3",
            "x < √2 o x > √4",
            "x < √3 o x > √3"
        ]
    },

    {
        numb: 21,
        question: "¿Qué es una variable?",
        answer: "Cualquier símbolo o palabra que represente a cualquier valor de los comprendidos en un conjunto",

        options: [
            "Cualquier símbolo o palabra que represente a cualquier valor de los comprendidos en un conjunto",
            "Es un objeto matemático que representa la parte intermediaria del cambio en la factorización de una función",
            "Conjunto de todos los posibles valores de entrada de la función",
            "Conjunto de números que dependen de la sustitución (tabulación) de los valores que puede tomar “x”, es decir, del dominio"
            
        ]
    },

    {
        numb: 22,
        question: "¿Qué es una función?",
        answer: "Es un objeto matemático que representa la parte intermediaria del cambio en la factorización de una función",

        options: [
            "Cualquier símbolo o palabra que represente a cualquier valor de los comprendidos en un conjunto",
            "Es un objeto matemático que representa la parte intermediaria del cambio en la factorización de una función",
            "Conjunto de todos los posibles valores de entrada de la función",
            "Conjunto de números que dependen de la sustitución (tabulación) de los valores que puede tomar “x”, es decir, del dominio"
            
        ]
    },

    {
        numb: 23,
        question: "¿Qué es un Dominio?",
        answer: "Conjunto de todos los posibles valores de entrada de la función.",

        options: [
            "Cualquier símbolo o palabra que represente a cualquier valor de los comprendidos en un conjunto",
            "Es un objeto matemático que representa la parte intermediaria del cambio en la factorización de una función",
            "Conjunto de todos los posibles valores de entrada de la función.",
            "Conjunto de números que dependen de la sustitución (tabulación) de los valores que puede tomar “x”, es decir, del dominio"
            
        ]
    },

    {
        numb: 24,
        question: "¿Qué es un rango?",
        answer:   "Conjunto de números que dependen de la sustitución (tabulación) de los valores que puede tomar “x”, es decir, del dominio",

        options: [
          
            "Cualquier símbolo o palabra que represente a cualquier valor de los comprendidos en un conjunto",
            "Es un objeto matemático que representa la parte intermediaria del cambio en la factorización de una función",
            "Conjunto de todos los posibles valores de entrada de la función.",
            "Conjunto de números que dependen de la sustitución (tabulación) de los valores que puede tomar “x”, es decir, del dominio"
        ]
    },

    {
        numb: 25,
        question: "Estudia el crecimiento o decrecimiento de la función f(x) = |x| en x = -2",
        answer:   "[-2, -1.999], es decreciente.",

        options: [
            "[-2, -1.999], es decreciente.",
            "[2, 1.888], es creciente.",
            "[-3, -3.333], es decreciente.",
            "[3, -2.444], es creciente."
        ]
    },

    {
        numb: 26,
        question: "Estudia el crecimiento o decrecimiento de la función f(x) = 1 + √(x + 3) en x = 0",
        answer: "[0, 0.001], es creciente.",

        options: [
            "[-2, 1.000], es decreciente.",
            "[0, 0.001], es creciente.",
            "[-2, 0.002], es creciente.",
            "[-1, 3.333], es decreciente."
        ]
    },

    {
        numb: 27,
        question: "La siguiente función es de tipo: f(x) = ln (x) ",
        answer:   "Biyectiva",

        options: [
            "Comparativa",
            "Inyectiva",
            "Sobreyectiva",
            "Biyectiva"
        
        ]
    },

    {
        numb: 28,
        question: "La siguiente función es de tipo:  <span><p>\n</span>  f(x)= 2 (x + 1) ",
        answer: "Sobreyectiva",

        options: [
            "Inyectiva",
            "Sobreyectiva",
            "Conmutativa",
            "biyectiva"
        ]
    },

    {
        numb: 29,
        question: "La siguiente función es de tipo: f(x)= eˣ",
        answer:   "Inyectiva",

        options: [
            "Comparativa",
            "Inyectiva",
            "Sobreyectiva",
            "biyectiva."
        ]
    },

    {
        numb: 30,
        question: "Determinar que tipo es la siguiente función: f(x)= 2x + 1",
        answer:   "sobreyectiva",

        options: [
            "No inyectiva",
            "inyectiva",
            "sobreyectiva",
            "biyectiva."
        ]
    },

    {
        numb: 31,
        question: "Determinar que tipo es la siguiente función: <span><p>\n</span> f(x)= x³ + 3",
        answer:   "biyectiva",

        options: [
            "No inyectiva",
            "inyectiva",
            "Sobreyectiva",
            "biyectiva"
        ]
    },

    {
        numb: 32,
        question: "Funciones algebraicas: polinomiales:  <span><p>\n</span> x⁴ - x³  + 2x² - 2x - x + 1",
        answer:   "f(x) = x⁴ - x³ + 2x² - 3x + 1",

        options: [
            "f(x) = x⁶ - x³ - x²",
            "f(x) = 3x⁵ - x⁴ + 7x³ - x + 3",
            "f(x) = x⁴ - x³ + 2x² - 3x + 1",
            "f(x) = 2x⁶ - x⁴ + x² + x"
        ]
    },

    {
        numb: 33,
        question: "Noción limite: <span><p>\n</span>" + "<latex-js baseURL="+base_url+">$${\\LARGE lim ₓ→∞, 1 + {2 \\over 3xˣ}}$$</latex-js>", 
        answer: "$${\\LARGE {1 \\over 3√e² }}$$",

        options: [

            "<latex-js baseURL="+base_url+">$${\\LARGE {3 \\over 7√e² }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {1 \\over 3√e² }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {2 \\over √e² }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {3 \\over 4√e² }}$$</latex-js>"
        ]
    },

    {
        numb: 34,
        question: "¿Qué es el limite de una función?",
        answer:   "En particular, el concepto se refiere en análisis real al estudio de límites, continuidad y derivabilidad de las funciones reales",

        options: [
            "En particular, el concepto se refiere en análisis real al estudio de límites, continuidad y derivabilidad de las funciones reales",
            "La derivada de una función es la razón de cambio instantánea con la que varía el valor de dicha función matemática",
            "Técnica que consiste en la descomposición en factores de una expresión algebraica ",
            "Es una generalización de la suma de infinitos sumandos, infinitesimalmente pequeños: una suma continua"
        ]
    },

    {
        numb: 35,
        question: "Unicidad del límite",
        answer: "Cuando el límite existe, el límite es único",

        options: [
            "El límite de la suma es la suma de los límites",
            "Cuando el límite existe, el límite es único",
            "En un límite de una constante multiplicada por una función se puede sacar la constante del límite sin que se afecte el resultado",
            "El límite de una función potencial es la potencia del límite de la base elevado al exponente"
        ]
    },

    {
        numb: 36,
        question: "Propiedad de la función logarítmica",
        answer: "El límite del logaritmo es el logaritmo del límite",

        options: [
            "El límite de la suma es la suma de los límites",
            "El límite del logaritmo es el logaritmo del límite",
            "Cuando el límite existe, el límite es único",
            "El límite de una raíz, es la raíz del límite"
        ]
    },

    {
        numb: 37,
        question: "Propiedad de la función exponencial",
        answer: "El límite de una función exponencial es la potencia de la base elevada al límite de la función exponente",

        options: [
            "El límite del logaritmo es el logaritmo del límite",
            "Cuando el límite existe, el límite es único",
            "El límite de una raíz, es la raíz del límite",
            "El límite de una función exponencial es la potencia de la base elevada al límite de la función exponente"
        ]
    },

    {
        numb: 38,
        question: "Cálculo de limites:  <span><p>\n</span>" + "<latex-js baseURL="+base_url+">$${\\LARGE lim ₓ→∞, { 3x⁶ + 3x³ +2 \\over 7x⁶ + x -1}}$$</latex-js>",
        answer: "$${\\LARGE { 3 \\over 7}}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 2}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 8 \\over 4}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 7}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 3 \\over 7}}$$</latex-js>"
        ]
    },

    {
        numb: 39,
        question: "Cálculo de limites: <span><p>\n</span> lim ₓ→∞ , (-5x³ - x√x)",
        answer: "-∞",

        options: [
            "-5x³",
            "∞",
            "-∞",
            "0"
        ]
    },

    {
        numb: 40,
        question: "Cálculo de limites: lim ₓ→-∞ , (-5x³ - x²)",
        answer: "∞",

        options: [
            "1",
            "∞",
            "-∞",
            "0"
        ]
    },

    {
        numb: 41,
        question: "Cálculo de limites: <span><p>\n</span> lim ₓ→∞ , √(2x + 3) - √5x)",
        answer:   "-∞",

        options: [
            "-∞",
            "1",
            "∞",
            "0"
        ]
    },

    {
        numb: 42,
        question: "Cálculo de limites:<span><p>\n</span>" + "<latex-js baseURL="+base_url+">$${\\LARGE lim ₓ→∞, { 5ˣ + 2ˣ \\over 5ˣ + 3ˣ}}$$</latex-js>",
        answer: "1",

        options: [
            "0",
            "-∞",
            "∞",
            "1"
        ]
    },

    {
        numb: 43,
        question: "Tipos de Descontinuidades: ¿Qué descontinuidad es la siguiente?. Es un tipo de discontinuidad que tiene una función en un punto si existe el límite en ese punto pero este no coincide con el valor de la función o la imagen de la función no existe.",
        answer:   "Discontinuidad evitable",

        options: [
            "Discontinuidad inevitable de salto finito",
            "Discontinuidad inevitable de salto infinito",
            "Discontinuidad Continua",
            "Discontinuidad evitable"
        ]
    },

    {
        numb: 44,
        question: "Halla qué tipo de discontinuidad presenta la siguiente función racional en los puntos que no pertenecen a su dominio: <span><p>\n</span>" + "" + "<latex-js baseURL="+base_url+">$${\\LARGE f(x) =  {(x² - 4)\\over (x + 2)} }$$</latex-js>", 
        answer: "x = -2 es una discontinuidad evitable.",

        options: [
            "x = -2 es una discontinuidad evitable.",
            "x = 2 es una descontinuidad inevitable de salto finito",
            "x = 2 es una descontinuidad inevitable de salto infinito",
            "x = 4 es una discontinuidad inevitable de salto infinito ."
        ]
    },

    {
        numb: 45,
        question: " Calcular el diferencial de las siguientes función: 3x² + 5x - 6",
        answer:   "df(x) = (6x + 5)dx",

        options: [
            "df(x) = (x + 6)dx",
            "df(x) = (3x + 4)dx",
            "df(x) = (6x + 5)dx",
            "df(x) = (2x² + 7)dx"
        ]
    },

    {
        numb: 46,
        question: "Calcular el diferencial de las siguientes función:" + "<latex-js baseURL="+base_url+">$${\\LARGE f(x) =  { x + 2 \\over x^2}}$$</latex-js>",
        answer: "$${\\LARGE df(x) = - { x + 4 \\over x^3}}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE df(x) = - { x + 4 \\over x^3}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE df(x) =  { x^2 + 6 \\over x^3}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE df(x) = - { x \\over x}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE df(x) =  { x^2 \\over x^2}}$$</latex-js>"
            
        ]
    },

    {
        numb: 47,
        question: "Calcula las derivadas de las función: <span><p>\n</span> f(x) = 5",
        answer: "0",

        options: [
            "0",
            "1",
            "-5",
            "2"
        ]
    },

    {
        numb: 48,
        question: "Calcula las derivadas de las función: <span><p>\n</span> f(x) = -2x² - 5",
        answer: "f'(x) = -4x",

        options: [
            "f'(x) = 4x",
            "f'(x) = 2x",
            "f'(x) = -6x",
            "f'(x) = -4x"
        ]
    },

    {
        numb: 49,
        question: "Calcula las derivadas de las función:  <span><p>\n</span> f(x) = 2x⁴ + x³ - x² + 4",
        answer: "f'(x) = 8x³ + 3x² - 2x",

        options: [
            "f'(x) = 4x³ + 2x² x",
            "f'(x) = 6x⁴ + 3x³ + 2x⁴",
            "f'(x) = 8x³ + 3x² - 2x",
            "f'(x) = 6x³ + 4x² + 2x"
        ]
    },

    {
        numb: 50,
        question: "Calcula las derivadas de las función:" + "<latex-js baseURL="+base_url+">$${\\LARGE f(x) =  { x³ + 2 \\over 3}}$$</latex-js>",
        answer:   "f'(x) = x²",

        options: [
            "f'(x) = x²",
            "f'(x) = 2x² + x",
            "f'(x) = 6x³ - x²",
            "f'(x) = x³"
        ]
    },

    







    
];
