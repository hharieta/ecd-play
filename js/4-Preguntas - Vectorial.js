const base_url = `https://cdn.jsdelivr.net/npm/latex.js/dist/`
let questions = [
    
    {
        numb: 1,
        question: "¿Qué es el cálculo vectorial?",
        answer:  "El una rama de la matematicas análisis vectorial o cálculo multivariable es un campo de las matemáticas referidas al análisis real multivariable de vectores en 2 o más dimensiones.",
        options: [
            "El una rama de la matematicas análisis vectorial o cálculo multivariable es un campo de las matemáticas referidas al análisis real multivariable de vectores en 2 o más dimensiones.",
            "Es una rama de la matemática que permite resolver diversos problemas de vectores donde el cambio de las variables",
            "Es una rama muy importante de las matemáticas. En la misma manera que la geometría estudia el espacio y el álgebra estudia las estructuras abstractas",
            "Es una rama de la matemática que permite resolver diversos problemas donde el cambio de las variables"
        ]
    },

    {
        numb: 2,
        question: "Sabiendo que el punto A es A[-3,-2] y que el vector AB es AB (9,5)determinar las coordenadas del punto B.",
        answer: "X = 6 , y = 3 ",
        options: [
            "X = 3 , y = 6",
            "X = 2 , y = 4",
            "X = 4 , y = 6 ",
            "X = 6 , y = 3 "
        ]
    },

    {
        numb: 3,
        question: "El vector AB viene determinado por los componentes [-11,8]. Sabemosque el punto extremo es B[-7,5]. Determinar el punto de origen A.",
        answer:   "A(4, -3)",
        options: [
            "A(4, -4)",
            "A(3, 6)",
            "A(4, -3)",
            "A(2, 2)"
        ]
    },
       
    {
        numb: 4,
        question: "Calcular el valor de ''K'' sabiendo que el modulo del vector V[k, 3] es 5.",
        answer:   "k = 4",
        options: [
            "k = 2",
            "k = 4",
            "k = 3",
            "k = 8"
        ]
    },

    {
        numb: 5,
        question: "Si V es un vector de componentes [3,4], hallar el vector unitario en su misma dirección y sentido.",
        answer: "u = 3/5 i + 4/5 j",

        options: [
            "u = 1/2 i + 1/4 j",
            "u = 6/4 i + 1/2 j",
            "u = 3/8 i + 1/5 j",
            "u = 3/5 i + 4/5 j"
        ]
    },

    {
        numb: 6,
        question: "Hallar los cosenos directores del vector u (2,2,1).",
        answer:   "$${\\LARGE{cos}" + " α = { 2 \\over 3} {cos β =}{ 2 \\over 3} {cos γ =}{1 \\over 3} }$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE{cos}" + " α = { 2 \\over 3} {cos β =}{ 2 \\over 3} {cos γ =}{1 \\over 3} }$$</latex-js>" ,
            "<latex-js baseURL="+base_url+">$${\\LARGE{cos}" + " α = { 3 \\over 2} {cos β =}{ 3 \\over 4} {cos γ =}{4 \\over 2} }$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE{cos}" + " α = { 1 \\over 5} {cos β =}{ 3 \\over 2} {cos γ =}{1 \\over 5} }$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE{cos}" + " α = { 3 \\over 4} {cos β =}{ 1 \\over 5} {cos γ =}{1 \\over 3} }$$</latex-js>"
        ]

    },

    {
        numb: 7,
        question: "Encuentre el ángulo entre dos vectores de 10 y 15 unidades de longitud sabiendo que su resultante tiene 20 unidades de longitud.",
        answer:   "α = 75,5 grados ",

        options: [
            "α = 15,5 grados",
            "α = 35,5 grados ",
            "α = 25,5 grados ",
            "α = 75,5 grados "
        ]
    },
     
    {
        numb: 8,
        question: "Calcular el valor de “a” para que los vectores: <span><p>\n</span>  u = 3 i + 4 j – 2 k    <span><p>\n</span>   v = a i – 2 j + 2 k <span><p>\n</span> formen un ángulo de 45 grados",
        answer: "a1 = 14,45 y a2 = -0.41 ",

        options: [
            "a1 = 8,25 y a2 = -0.20",
            "a1 = 14,45 y a2 = -0.41 ",
            "a1 = 15,75 y a2 = 0.32",
            "a1 = 14,65 y a2 = 0.41"
        ]
    },

    {
        numb: 9,
        question: "Dado los vectores <span><p>\n</span> A(4 , -3 , 0) y B(8 , 6 , 0), <span><p>\n</span> calcula: A + B",
        answer:   "(12, 3, 0)",

        options: [
            "(8, 2, 0)",
            "(12, 3, 0)",
            "(6, 5, 3)",
            "(8, 4, 2)"
        ]
    },

    {
        numb: 10,
        question: "Dado los vectores <span><p>\n</span> A(4 , -3 , 0) y B(8 , 6 , 0), <span><p>\n</span> calcula: El producto escalar de A*B",
        answer: "14",

        options: [
            "14",
            "16",
            "23",
            "8"
        ]
    },

    {
        numb: 11,
        question: "Dado los vectores <span><p>\n</span> A(4 , -3 , 0) y B(8 , 6 , 0), <span><p>\n</span> calcula: El ángulo que forman A y B",
        answer: "73,73 grados ",

        options: [
            "50,35 grados",
            "33,35 grados",
            "73,73 grados ",
            "75 grados "
        ]
    },

    {
        numb: 12,
        question: "Dado los vectores <span><p>\n</span> A( 2, -1, 1 ) y B( -1, 2, 1 ), <span><p>\n</span> calcular:  A * B",
        answer: "-3",

        options: [
            "-3",
            "-4",
            "-7",
            "2"
        ]
    },

    {
        numb: 13,
        question: "Dado los vectores <span><p>\n</span> A(2 , -1,  1 ) y B(-1,  2,  1 ) <span><p>\n</span> calcular: A - B",
        answer: "(3, -3, 0)",

        options: [
            "(3, -3, 0)",
            "(5, 3, 0)",
            "(2, -4, 0)",
            "(6, 5, 2)"
        ]
    },

    {
        numb: 14,
        question: "Dados los vectores: <span><p>\n</span> u = 3i – j + k   <span><p>\n</span>  v = 2i – 3j + k, <span><p>\n</span> hallar: El producto u + v",
        answer: " 5i – 4j + 2k",

        options: [
            " 3 i – 4 j + 4 k",
            " 2 i – 3 j + k",
            " 5i – 4j + 2k",
            " 3 i + 5 j+ k "
        ]
    },

    {
        numb: 15,
        question: "Dados los vectores <span><p>\n</span> u = 3i – j + k   <span><p>\n</span>  v = 4i – 3j + k, <span><p>\n</span> Hallar: El producto u * v",
        answer:  "7i - 4j + 2k",

        options: [
            "4i + 4j - 6k",
            "7i - 4j + 2k",
            "2i + 4j + 4k",
            "3i - 2j + 3k"
        ]
    },

    {
        numb: 16,
        question: " Ecuaciones paramétricas: Encuentra dy/dx en términos del parámetro t para: <span><p>\n</span> y = 3t² + 2t, x = 1 - 2t",
        answer:   "-3t -1",

        options: [
            "-3t -1",
            "3t + x",
            "2t + x",
            "-2t -2"
        ]
    },

    {
        numb: 17,
        question: "Ecuaciones paramétricas: <span><p>\n</span> ¿Cuál es la derivada dy/dx de las siguientes ecuaciones en términos del parámetro t? <span><p>\n</span> y = (1 + 2t)³ , x = t³",
        answer:   "$${\\LARGE {2(1 + 2t)² \\over t² }}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE {3(2t)² \\over t² }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {3(1 + 2t)² \\over 4t² }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {(1 + 4t)² \\over 6t² }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {2(1 + 2t)² \\over t² }}$$</latex-js>"
        
        ]
    },

    {
        numb: 18,
        question: "Encuentra dy/dx en términos de t de las siguientes ecuaciones: x = 3t⁴ , y = 2t² - 3",
        answer:   "$${\\LARGE { 1 \\over 3t^2}}$$",

        options: [

            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 5t^2}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 2 \\over 2t^2}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 3 \\over 4t^4}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 3t^2}}$$</latex-js>"
        ]
    },

    {
        numb: 19,
        question: "¿Cuál es derivada dy/dx de las siguientes ecuaciones? x = 2√t , y = 5t - 4",
        answer: "5√t",

        options: [
            "5√t",
            "5√t²",
            "4√x",
            "4√t"
        ]
    },

    {
        numb: 20,
        question: "Encuentra la ecuación de la recta tangente a la curva dada paramétricamente por: <span><p>\n</span>"+"<latex-js baseURL="+base_url+">$${\\LARGE x = { 2 \\over t} y = 3t² -1 }$$</latex-js>"+" en el punto (2,2)",
        answer:   "-3x + 8",
 
        options: [
            "2x - 8",
            "-3x + 8",
            "3x - 6",
            "4x + 8"
        ]
    },

    {
        numb: 21,
        question: "Encuentre la segunda derivada d²y/dx² en términos de t de las siguientes ecuaciones parámetricas:  x = t + 1, y = t³",
        answer:   "6t",

        options: [
            "9t",
            "3t²",
            "6t",
            "2t²"
        ]
    },

    {
        numb: 22,
        question: "Encuentre una expresión para dy/dx en términos de t con las ecuaciones <span><p>\n</span> x = t², y = 4t -1",
        answer:   "$${\\LARGE  { 2 \\over t  }}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 2 \\over t  }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { -3 \\over t  }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 3 \\over t  }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { -2 \\over t^2  }}$$</latex-js>"
        ]
    },

    {
        numb: 23,
        question: "Encuentra la derivada dy/dx en términos de t de las ecuaciones x = 6t -5, y = (2t - 1)³",
        answer: "(2t - 1)³",

        options: [
            "6t² - 2t - 10",
            "15(2t - 1)²",
            "3(2t - 1)²",
            "(2t - 1)³"
        ]
    },

    {
        numb: 24,
        question: "Encuentre dy/dx en términos de t de las ecuaciones" + "<latex-js baseURL="+base_url+">$${\\LARGE x = {1 \\over t }, y = t² + 4t -3 }$$</latex-js>",
        answer: "-2t²(t+2)",

        options: [
            "2t²(t)",
            "t²(t+2)",
            "-2t²(t+2)",
            "t²(t+2)"
        ]
    },

    {
        numb: 25,
        question: "Hallar una línea tangente, halle la ecuación de la línea tangente a la curva definida por las ecuaciones: x(t)= t² - 3, y(t)= 2t - 1, −3≤ t ≤4 cuando t= 2.",
        answer:   "$${\\LARGE  {1 \\over 2x} + {5 \\over 2} }$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE - {1 \\over 2x} - {5 \\over 2} }$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  {1 \\over 5x} + {3 \\over 4} }$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  {1 \\over 2x} + {5 \\over 2} }$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  -{1 \\over 5x} - {3 \\over 4} }$$</latex-js>"
        ]
    },

    {
        numb: 26,
        question: "Calcular una segunda derivada d²y/dx² para la curva plana definida por las ecuaciones paramétricas: <span><p>\n</span> x(t)=t² − 3,    y(t)=2t−1,    −3 ≤ t ≤4.",
        answer:   "$${\\LARGE  {1 \\over 2t³}}$$",

        options: [

            "<latex-js baseURL="+base_url+">$${\\LARGE - {3 \\over 2t}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  {3 \\over 4t²}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  {1 \\over 2t³}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  {4\\over 2t}}$$</latex-js>"
        ]
    },

    {
        numb: 27,
        question: "Tangente de una curva: ¿Cuál es la ecuación de la recta tangente a la curva: <span><p>\n</span> f(x) = x² en el punto P=(1,3)",
        answer: "2x + 1",

        options: [
            "x + 1",
            "-2x + 1",
            "2x + 1",
            "2x² + 2"
        ]
    },

    {
        numb: 28,
        question: "Encuentra la ecuación de la recta tangente a la función f(x) = x³ - 10x en el punto (2, 1)",
        answer:   "2x - 1",

        options: [
            "2x + 1",
            "2x - 1",
            "- 2x + 1",
            "2x³ - 1"
        ]
    },

    {
        numb: 29,
        question: "Si es que tenemos la función: <span><p>\n</span> f(x) = 2x³ - 7x², encuentre la ecuación de su tangente en el punto (2, 3)",
        answer:   "-4x + 11",

        options: [
            "4x - 11",
            "-2x² + 6",
            "-3x - 3",
            "-4x + 11"
        ]
    },

    {
        numb: 30,
        question: "Tenemos la función: <span><p>\n</span> "+" <latex-js baseURL="+base_url+">$${\\LARGE f(x) = x³ + { 8 \\over x}}$$</latex-js>" + "¿Cuál es la recta tangente en el punto (2, 4)?", 
        answer:   "10x - 15",

        options: [
            "x + 7",
            "2x² + 4",
            "5x - 5",
            "10x - 15"
        ]
    },

    {
        numb: 31,
        question: "Si es que tenemos la función:  <span><p>\n</span> f(x) = sen (x) - cos (x)  <span><p>\n</span> ¿Cuál es la ecuación de la recta tangente en el punto (0, 1)?",
        answer:   "x + 1",

        options: [
            "x² + 2",
            "x + 1",
            "x² + 2",
            "2x + 3"
        ]
    },

    {
        numb: 32,
        question: "Tenemos las coordenadas polares <span><p>\n</span> "+" <latex-js baseURL="+base_url+">$${\\LARGE 6 { 2π \\over 3}}$$</latex-js>" + "¿Cuál es su equivalente en coordenadas cartesionas?",
        answer:   "(-3, 5.2)",

        options: [
            "(4, 3)",
            "(3, 4.2)",
            "(-3, 5.2)",
            "(-2, 5)"
        ]
    },

    {
        numb: 33,
        question: "Tenemos las coordenadas polares <span><p>\n</span> "+" <latex-js baseURL="+base_url+">$${\\LARGE 5 { 5π \\over 4}}$$</latex-js>" + "¿Cuál es su equivalente en coordenadas cartesionas?",
        answer: "(-3.54, 3.54)",

        options: [
            "(1.23, 3.26)",
            "(-3.54, 3.54)",
            "(2.22, 3.57)",
            "(-4.34, 6.21)"
        ]
    },

    {
        numb: 34,
        question: "Si es que tenemos al punto (3, 5) en coordenadas cartesianas, ¿cuáles son sus coordenadas polares?",
        answer: "(5.83, 1.03 rad)",

        options: [
            "(6.34, 3.06 rad)",
            "(3.25, 2.04 rad)",
            "(7.43, 6.03 rad)",
            "(5.83, 1.03 rad)"
        ]
    },

    {
        numb: 35,
        question: "Tenemos al punto (-2, -6) en coordenadas cartesianas. ¿Cuál es su equivalencia en coordenadas polares?",
        answer:   "(6.32, 4.39 rad)",

        options: [
            "(3.22, 3.45 rad)",
            "(6.32, 4.39 rad)",
            "(4.43, 2.21 rad)",
            "(5.32, 6.19 rad)"
        ]
    },

    {
        numb: 36,
        question: "Hallar la longitud del arco de curva de la función: 24xy - x⁴ - 48 = 0",
        answer:   "$${\\LARGE {17 \\over 6 }u}$$",

        options: [

            "<latex-js baseURL="+base_url+">$${\\LARGE {15 \\over 4 }u}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {17 \\over 6 }u}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {4 \\over 8 }u}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {3 \\over 2 }u}$$</latex-js>"
        ]
    },

    {
        numb: 37,
        question: "Hallar la longitud del arco de curva de la función:" + "<latex-js baseURL="+base_url+">$${\\LARGE y = {(eˣ + eˣ) \\over 2 }}$$</latex-js>",
        answer:   "$${\\LARGE [e - { 1 \\over e }] u}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE [e - { 1 \\over e }] u}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE [e + { 1 \\over eˣ }] u}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE [e + { 1 \\over e }] u}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE [e - { 2 \\over eˣ }] u}$$</latex-js>"
        
        ]
    },

    {
        numb: 38,
        question: "Hallar la longitud del arco de la curva en 9y² = 4 x³ comprendido entre los puntos de la curva de abscisa    x = 0    y    x = 3",
        answer:   "$${\\LARGE { 2 \\over 3} √27 u}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE { 2 \\over 3} √27 u}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 3 \\over 4} √5 u}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { -2 \\over 3} √7 u}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 5} √6 u}$$</latex-js>"
        ]
    },

    {
        numb: 39,
        question: "Encuentre las derivadas parciales de la función:  z (x,y) = x²y - 3xy + 5y   ",
        answer:   "2 xy - 3y , -2y + 2x",

        options: [
            "2 xy - 3y , -2y + 2x",
            " 3 x - y, 6y - 3x",
            "-xy + y ,  2y + 3x",
            "xy + 4y ,  2y + x"
        ]
    },

    {
        numb: 40,
        question: "Encontrar las derivadas parciales:  <span><p>\n</span> z (x,y) = x² - y² + 2xy + 5 ",
        answer:   "2x + 2y , -2y + 2x ",

        options: [
            "2x + 3y , -y + 6x",
            "-x + 3y , y + 3x",
            "x + y , -y + x",
            "2x + 2y , -2y + 2x "
        ]
    },

    {
        numb: 41,
        question: "Encontrar las derivadas parciales: z = xʸ",
        answer:   "yxʸ⁻¹",

        options: [
            "yxʸ⁺²",
            "xyʸ⁻¹",
            "yxʸ⁻¹",
            "yx"
        ]
    },

    {
        numb: 42,
        question: "Encontrar las derivadas parciales: <span><p>\n</span> z = cos² (3x - y²)",
        answer:   "-6 sen (3x - y²) cos(3x - y²), 3y sen (3x - y²) cos(3x - y²)",

        options: [
            "6 cos (3x - y²) sen(3x - y²), 3y cos (3x - y²) sen(3x - y²)",
            "5 sen (x - y²) cos(2x - y²), 3y sen (3x - y²) cos(3x - y²)",
            "12 cos (3x - y²) sen(3x - y), 3y cos (4x - y)",
            "-6 sen (3x - y²) cos(3x - y²), 3y sen (3x - y²) cos(3x - y²)"
        ]
    },

    {
        numb: 43,
        question: "Deriva la siguiente función Implícita:<span><p>\n</span> 6x - 2y = 0 ",
        answer:   "y' = 3",

        options: [
            "y' = 2",
            "y' = 3",
            "y' = -3",
            "y' = 6"
        ]
    },

    {
        numb: 44,
        question: "Deriva la siguiente función Implícita: <span><p>\n</span> y³ - 4xy² = x³",
        answer:   "$${\\LARGE y´= { 3x² - 4y² \\over 3y² - 8xy }}$$",

        options: [

           
            "<latex-js baseURL="+base_url+">$${\\LARGE y´= { 3x² - 4y² \\over 3y² - 8xy }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y´= { 3x³ + 4y³ \\over 3y³ + 6y }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y´= { 6x - 5y \\over 4y - 8x }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y´= { 4x + 6y \\over 4y² - 6x }}$$</latex-js>"
        ]
    },

    {
        numb: 45,
        question: "Deriva la siguiente función Implícita: <span><p>\n</span> √(x + y) = xy",
        answer:   "$${\\LARGE y´= { 2y √(x + y)-1 \\over 1 - 2x √(x + y)  }}$$",

        options: [

            "<latex-js baseURL="+base_url+">$${\\LARGE y´= { 3y √(x + y²)1 \\over 1 - 2x √(x² + y)  }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y´= { 4y √(x + y)-1 \\over 1 + 2x √(x² + y)  }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y´= { 6y √(x + y²)1 \\over 1 + 2x √(x + y)  }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y´= { 2y √(x + y)-1 \\over 1 - 2x √(x + y)  }}$$</latex-js>"
        ]
    },

    {
        numb: 46,
        question: "Deriva la siguiente función Implícita:<span><p>\n</span>  y = ln xy",
        answer:   "$${\\LARGE y´= { y \\over xy - x   }}$$",

        options: [

            
            "<latex-js baseURL="+base_url+">$${\\LARGE y´= { y² \\over xy - x   }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y´= { y² \\over xy + x  }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y´= { y \\over xy + x   }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y´= { y \\over xy - x   }}$$</latex-js>"
        ]
    },

    {
        numb: 47,
        question: "Obtenga la segunda derivada de la siguiente función: y = 10x² - 3x + 1",
        answer: "y'' = 20",

        options: [
            "y'' = 20",
            "y'' = 20x - 3",
            "y'' = 20 + 3",
            "y'' = 20x - y"
        ]
    },

    {
        numb: 48,
        question: "Calcular la tercera derivada de la siguiente función: y = sen (7x)",
        answer: "-343 cos (7x)",

        options: [
            "-49 sen (7x)",
            "7 cos (7x)",
            "21 sen (7x)",
            "-343 cos (7x)"
        ]
    },

    {
        numb: 49,
        question: "Obtenga la tercera derivada de la siguiente función: y = ln cos 2x",
        answer:   "-16 sec² 2x tan 2x",

        options: [
            "8 sec 2x + tan 2x ",
            "-16 sec² 2x tan 2x",
            "182sec -2x -tan 2x",
            "-42 sec 2x sec 2x tan 2x"
        ]
    },

    {
        numb: 50,
        question: " Obtenga la segunda derivada de la siguiente función: y = √(1 + 2t)",
        answer:   "$${\\LARGE { -1 \\over √(1+2t)³ }}$$",

        options: [

        
            "<latex-js baseURL="+base_url+">$${\\LARGE { -3 \\over √(1+2t) }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { -1 \\over √(1+2t)³ }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 3 \\over √(1+2t)² }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over √(1+2t)⁴ }}$$</latex-js>"
        ]
    },












];