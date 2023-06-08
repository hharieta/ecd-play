const base_url = `https://cdn.jsdelivr.net/npm/latex.js/dist/`
let questions = [


    {
        numb: 1,
        question: "¿Qué es el calculo integral?",
        answer: "Es un método que permite hallar la relación entre magnitudes que cambian según ciertas reglas",
        options: [

            "Es una rama de las matemáticas que se ocupa del estudio de la variación y del movimiento",
            "Es un método que permite hallar la relación entre magnitudes que cambian según ciertas reglas",
            "Análisis vectorial o cálculo multivariable es un campo de las matemáticas referidas al análisis real multivariable de vectores en 2 o más dimensiones",
            "Ninguna"
        ]
    },

    {
        numb: 2,
        question: "Resolver la integral de: <latex-js baseURL="+base_url+">$${\\LARGE ∫ x² dx}$$</latex-js>",
        answer: "$${\\LARGE { x^3 \\over 3} + c}$$",
    
        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE { x^2 \\over 2} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 2x^3 \\over 3} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 2x \\over 2} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { x^3 \\over 3} + c}$$</latex-js>",
        ]
    },

    {
        numb: 3,
        question: "Resolver la integral de: <span><p>\n</span> "+"<latex-js baseURL="+base_url+">$${\\LARGE  ∫ { x^2 \\over x} dx}$$</latex-js>",
        answer: "$${\\LARGE   { x^2 \\over 2} + c}$$",
        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE   { x^2 \\over 2} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE   { x^2 \\over x^2} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE   { x^3 \\over 3} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE   { x \\over 2} + c}$$</latex-js>",
    
        ]
    },

    {
        numb: 4,
        question: "Resolver la integral de:  <span><p>\n</span> "+"<latex-js baseURL="+base_url+">$${\\LARGE  ∫ { 2 \\over 3x} + 2 dx}$$</latex-js>",
        answer: "$${\\LARGE   { 2 \\over 3} ln + 2x + c}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE   { 2 \\over 3} ln + 2x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE   { x^2 \\over 2} - ln x+ c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE   { x^2 \\over ln x} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE   { x^2 \\over 2x} + c}$$</latex-js>"
        ]
    },

    {
        numb: 5,
        question: "Resolver la integral de: ∫ tan 5x dx",
        answer: "$${\\LARGE   - { 1 \\over 5} ln (cos 5x) + c}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE   - { 1 \\over 5} ln (cos 5x) + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  5 ln (cos 5x) + c }$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE    { 1 \\over 4} ln (cos 3x) + c}$$</latex-js> ",
            "<latex-js baseURL="+base_url+">$${\\LARGE  -4 ln (tan 5x) + c  }$$</latex-js>"
        ] 
    },

    {
        numb: 6,
        question: "Resolver la integral de:  <span><p>\n</span> "+"<latex-js baseURL="+base_url+">$${\\LARGE  ∫ { dx \\over tan x}}$$</latex-js>",
        answer: "ln (sen x) +c",

        options: [
            "ln (sen x) +c",
            "ln (cos x) +c ",
            "5x ln (sen x) +c ",
            "3x ln (cos x) +c "
        ]
    },

    {
        numb: 7,
        question: "Resolver la integral de: ∫ (cos x - sen x) dx",
        answer: "sen x + cos x +c",

        options: [
            "sen x + ln |cos x| + c",
            "- cos x + ln |cos x| + c ",
            "cos x + tan 2x + c ",
            "sen x + cos x +c"
        ]
    },

    {
        numb: 8,
        question: "Resolver la integral de: ∫ (3x² - sec² x) dx",
        answer: "$${\\LARGE x³ - tan x + c}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE {2x² \\over 2} + tan x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE x³ - cos x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {3x² \\over 2} - sen x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE x³ - tan x + c}$$</latex-js>"
        ]
    },
    
    {
        numb: 9,
        question: "Resolver la integral de: ∫ eˣ cos eˣ dx",
        answer: "sen eˣ + c",

        options: [
            "cos x + sen x + c",
            "sen eˣ + c",
            "sen 2x - sen x² + c",
            "cos x - sen x + c "
        ]
    },

    {
        numb: 10,
        question: "Resolver la integral de: ∫ sen x (x² + 5)dx",
        answer: "- x² cos x + 2x sen x - 3 cos x + c",

        options: [
            "x² + 2x cos + 3x sen  + c",
            "- x² cos x + 2x sen x - 3 cos x + c",
            "- x² - sec  x + cos x + c ",
            "2x² + x sen + 3 tan x + c "
        ]
    },

    {
        numb: 11,
        question: "Resolver la integral de: ∫ cos³ x dx ",
        answer: "$${\\LARGE sen x - sen³ {x \\over 3} + c}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE tan x + cos³ x + c}$$</latex-js> ",
            "<latex-js baseURL="+base_url+">$${\\LARGE sen x + sen³ {x³ \\over 3} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE sec x - cos³ x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE sen x - sen³ {x \\over 3} + c}$$</latex-js>"
        ]
    },

    {
        numb: 12,
        question: "Resolver la integral de: ∫ sen⁴ x dx",
        answer: "$${\\LARGE { 3 \\over 8} x -  { 1 \\over 4} sen 2x + { 1 \\over 32} sen 4x + c}$$",

        options: [

            
            "<latex-js baseURL="+base_url+">$${\\LARGE { 2 \\over 8} x +  { 1 \\over 4} tan 4x + { 1 \\over 16} sen 4x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 3 \\over 8} x -  { 1 \\over 4} sen 5x + { 1 \\over 31} cos 4x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 2 \\over 4} 2x +  { 1 \\over 7} cos 2x + { 1 \\over 15} tan 4x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 3 \\over 8} x -  { 1 \\over 4} sen 2x + { 1 \\over 32} sen 4x + c}$$</latex-js>"
        ]
    },

    {
        numb: 13,
        question: "Resolver la integral de: ∫ x² eˣ dx",
        answer: "(x² - 2x + 2)eˣ + c",

        options: [
            "(x² - 2x + 2)eˣ + c",
            "tan x - cos 2x + c  ",
            "sec - tan - 2x + c",
            "(x² - 2x + 2) + c "
        ]
    },

    {
        numb: 14,
        question: "Resolver la integral de: ∫ eˣ sen x dx",
        answer: "$${\\LARGE { - eˣ cos x \\over 2} + { eˣ sen x \\over 2} + c dx}$$",
       
        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE { 2e sen x \\over 2} - { eˣ cos x \\over 2} + c dx}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { eˣ cos 2x \\over 2} + { eˣ sen 2x \\over 2} + c dx}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { - eˣ cos x \\over 2} + { eˣ sen x \\over 2} + c dx}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { eˣ tan 2x \\over 2} + { eˣ sen 2x \\over 2} + c dx}$$</latex-js>",
        ]
    },

    {
        numb: 15,
        question: "Resolver la integral de: ∫ (3x + 1)² dx",
        answer: "3x³ + 3x² +x +c",

        options: [
            "2x⁴ + 3x³ +c ",
            "3x³ + 3x² +x +c",
            "5x² + 4x +c",
            "4x⁵ - 2x⁴ + x² +c"
        ]
    },

    {
        numb: 16,
        question: "¿Qué es una de integral indefinida?",
        answer:  "Conjunto de las infinitas primitivas que puede tener una función.",

        options: [
            "Es una rama de las matemáticas que se ocupa del estudio de la variación y del movimiento",
            "Las funciones usualmente representan cantidades físicas, las derivadas representan sus razones de cambio y la ecuación define la relación entre ellas",
            "Se ocupa de hallar la derivada de una magnitud respecto de otra de la que es función.",
            "Conjunto de las infinitas primitivas que puede tener una función."
        ]
    },

    {
        numb: 17,
        question: "Integrales directas: ∫ 3 dx",
        answer:   "3x + c",

        options: [
            "3x³ + c",
            "x³ + c",
            "3x + c",
            "3x² + c"
        ]
    },

    {
        numb: 18,
        question: "Integrales directas: ∫ 5x² dx",
        answer:   "$${\\LARGE {5x³ \\over 3} + c}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE {5x³ \\over 3} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {5x² \\over 2} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE 5x³ + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {5x² \\over 3} + c}$$</latex-js>"
        ]
    },

    {
        numb: 19,
        question: "Integrales directas: ∫ (5x² + 3) dx",
        answer:   "$${\\LARGE {5x³ \\over 3} + 3x + c}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE {5x³ \\over 3} + 3x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {5x² \\over 2} + 2x + c}$$</latex-js> ",
            "<latex-js baseURL="+base_url+">$${\\LARGE {5x² \\over ²} + 3x³ + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {5x³ \\over 3} + x + c}$$</latex-js>"
        ]
    },

    {
        numb: 20,
        question: "Integrales directas: <span><p>\n</span> "+" <latex-js baseURL="+base_url+">$${\\LARGE  ∫ { 3x^2 \\over x^3 -1} dx }$$</latex-js>",
        answer: "ln|x³ - 1| + c",

        options: [
            "ln|3x²| + c",
            "ln|x³ - 1| + c",
            "x³ - 1 + c",
            "x² - 3x + c"
        ]
    },

    {
        numb: 21,
        question: "Integrales directas: ∫ sen x cos x dx",
        answer:   "$${\\LARGE {sen^2 x \\over 2} + c}$$",
 
        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE {sen^2 x \\over 2} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {tan^2 x \\over 2} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {cos^3 x \\over 3} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE {sec^2 2x \\over 2x} + c}$$</latex-js>"
        ]
    },

    {
        numb: 22,
        question: "Integrales directas: ∫ cos - 1 dx",
        answer: "cos x + c",

        options: [
            "cos x + c",
            "cos x² + c",
            "sen + c",
            "sen x² + c"
        ]
    },

    {
        numb: 23,
        question: "Integrales directas: ∫ (1 + x) dx",
        answer:   "$${\\LARGE x + { x^2 \\over 2} + c}$$",


        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE x^2 + { x^2 \\over 2} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE x - { x \\over 2x} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE x + { x^2 \\over 2} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE x^2 - { x \\over 2} + c}$$</latex-js>"
        ]
    },

    {
        numb: 24,
        question: "Integrales directas: <span><p>\n</span>" + "<latex-js baseURL="+base_url+">$${\\LARGE ∫ { ln x^2 \\over dx}}$$</latex-js>",
        answer:   "2x ln x -2x + c",

        options: [
            "2x ln x - cos x + c",
            "x ln x² + c",
            "x² ln x² + 2x + c",
            "2x ln x -2x + c"
        ]
    },

    {
        numb: 25,
        question: "Integrales directas: ∫ cos² x dx",
        answer:   "$${\\LARGE { 1 \\over 2} x + {1\\over 2} sen 2x + c}$$",

        options: [

            
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 2} x + {1\\over 2} sen 2x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { x² \\over 3} + cos {2x\\over 6} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 4} - sen {4x\\over 3} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 3x \\over 4} + tan {2x\\over 2} cos x + c}$$</latex-js>"
        ]
    },

    {
        numb: 26,
        question: "Integrales directas: <span><p>\n</span>" + "<latex-js baseURL="+base_url+">$${\\LARGE ∫ { 1 \\over √(9 - x^2)} dx}$$</latex-js>",
        answer:   "$${\\LARGE arcsen{ x \\over 3} + c}$$",

        
        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE -arcsen{ x³ \\over 6} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE arcsen{ x \\over 3} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE -arccos{ x \\over 3} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE arctan{ x² \\over 6} + c}$$</latex-js>"
        ]
    },

    {
        numb: 27,
        question: "Integrales directas: <span><p>\n</span>" + "<latex-js baseURL="+base_url+">$${\\LARGE ∫ { 1 \\over √9} dx}$$</latex-js>",
        answer:   "$${\\LARGE { 1 \\over 3} x + c}$$",

        
        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE -arcsen{ x³ \\over 6} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 4} x² + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 3} x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE arctan{ x² \\over 6} + c}$$</latex-js>"
        ]
    },

    {
        numb: 28,
        question: "Integrales con cambio de variable:<span><p>\n</span>" + "<latex-js baseURL="+base_url+">$${\\LARGE ∫ { dx \\over x + 5}}$$</latex-js>",
        answer:   "ln |x + 5| + c",

        options: [
            "ln |x + 5| + c",
            "ln |x² + 5| + c",
            "ln |x + 4| + c",
            "ln |x² - 4| + c"
        ]
    },

    {
        numb: 29,
        question: "Integrales con cambio de variable: <span><p>\n</span>" + "<latex-js baseURL="+base_url+">$${\\LARGE ∫ { x \\over √(x^2 -4)} dx}$$</latex-js>", 
        answer: "√(x² - 4) + c",

        options: [
            "√(x² - 2) + c",
            "√(x² + 2) + c",
            "√(x² + x) + c",
            "√(x² - 4) + c"
        ]
    },

    {
        numb: 30,
        question: "Integrales con cambio de variable: <span><p>\n</span>" + "<latex-js baseURL="+base_url+">$${\\LARGE ∫ { dx \\over x²√(4 + x²) }}$$</latex-js>", 
        answer:   "$${\\LARGE - { √(x² + 4) \\over 4x } + c}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE { √(x² + 4) \\over -4x } + c}$$</latex-js>", 
            "<latex-js baseURL="+base_url+">$${\\LARGE - { √(x² + 4) \\over 4x } + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { √(x + 4) \\over -2x } + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { √(x² + 4) \\over 4x } + c}$$</latex-js>"
        ]
    },

    {
        numb: 31,
        question: "Integrales trigonometricas:  <span><p>\n</span> ∫ (cos x - sen x) dx",
        answer:   "sen x + cos x +c",

        options: [
            "tan x + cos x +c",
            "sen x + cos x +c",
            "cos x - sen x +c",
            "sen x - cos x +c"
        ]
    },

    {
        numb: 32,
        question: "Integrales trigonometricas:  <span><p>\n</span> ∫ (3x² - sec² x) dx",
        answer:   "x³ - tan x + c",

        options: [
            "x³ - cosc x + c",
            "2x² + sen x + c",
            "x² + cos x + c",
            "x³ - tan x + c"
        ]
    },

    {
        numb: 33,
        question: "Integrales trigonometricas:  <span><p>\n</span> ∫ (eˣ cos eˣ) dx",
        answer:   "sen eˣ + c",

        options: [
            "sen eˣ + c",
            "cos eˣ + c",
            "tan eˣ + c",
            "sen eˣ +c"
        ]
    },

    {
        numb: 34,
        question: "Integrales trigonometricas:  <span><p>\n</span> ∫ x sen(x + 5) dx",
        answer:   "-x cos (x + 5) + sen (x + 5) + c",

        options: [
            
            "x cos (x + 5) + sen (x + 6x) + c",
            "-x sen (x + 2) + sen (x + 3x) + c",
            "-x cos (x + 5) + sen (x + 5) + c",
            "-x tan(x + 3) + sen (5x) + c"
        ]
    },

    {
        numb: 35,
        question: "Integrales trigonometricas: ∫ cos³ dx",
        answer: "$${\\LARGE - { 1 \\over 3} sen³ x + c}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 1 \\over 5} sen² x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE - { 1 \\over 3} sen³ x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE - { 1 \\over 4} sen² x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 1 \\over 3} - sen³ x + c}$$</latex-js>"
        ]
    },

    {
        numb: 36,
        question: "Integrales cambio de variable:  <span><p>\n</span> ∫ x(2x² + 3)² dx",
        answer: "$${\\LARGE { 1 \\over 24} (2x² + 3)²  + c}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 12} (2 + 3)  + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 4} (2 + 3x)²  + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 8} (2x + 3)  + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 24} (2x² + 3)²  + c}$$</latex-js>"
        ]
    },

    {
        numb: 37,
        question: "Integrales trigonometricas: ∫ sen dx",
        answer:   "$${\\LARGE  { 1 \\over 2} x² sen + c}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 1 \\over 5} x - sen + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 3 \\over 4} x³ sen + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 2 \\over 3} x³ - sen + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 1 \\over 2} x² sen + c}$$</latex-js>"
        ]
    },

    {
        numb: 38,
        question: "Integrales trigonometricas: ∫ sen² 4x dx",
        answer: "$${\\LARGE { 1 \\over 2} x - { 1 \\over 16} sen 8x + c}$$",

        options: [


            "<latex-js baseURL="+base_url+">$${\\LARGE { 3 \\over 4} x - { 1 \\over 16} sen  + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 5} x + { 1 \\over 16} sen 6x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 2} x - { 1 \\over 16} sen 8x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 2} x + { 1 \\over 16} sen 8x + c}$$</latex-js>"
        ]
    },

    {
        numb: 39,
        question: "Integrales trigonometricas: ∫ cos⁵ x dx",
        answer:   "$${\\LARGE sen x -{ 2 \\over 3} sen^3 x + { 1 \\over 5} sen^5 x + c }$$",

        options: [

            "<latex-js baseURL="+base_url+">$${\\LARGE sen x -{ 2 \\over 3} sen^3 x + { 1 \\over 5} sen^5 x + c }$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE sen x^2 { 2 \\over 3} sen x + { 1 \\over 5} cos^5 x + c }$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE sen x + { 2 \\over 3} cos x + { 1 \\over 5} cos x + c }$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE sen x + { 2 \\over 3} sen x + { 1 \\over 5} sen x + c }$$</latex-js>"
        ]
    },

    {
        numb: 40,
        question: "Integrales trigonometricas:<span><p>\n</span>" + "<latex-js baseURL="+base_url+">$${\\LARGE ∫ { dx \\over sen x cos x} dx}$$</latex-js>",
        answer:   "ln |tan x| + c",

        options: [
            "ln |cos x²| + c",
            "ln |sen x| + c",
            "ln |cos x| + c",
            "ln |tan x| + c"
        ]
    },
    
    {
        numb: 41,

        question: "Integrales con cambio de variable: <span><p>\n</span>  ∫ (4x - 3)⁵ dx",
        answer:   "$${\\LARGE { (4x - 3)⁶ \\over 24} + c}$$",

        options: [

            "<latex-js baseURL="+base_url+">$${\\LARGE { (4x³)⁵ \\over 24} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { (4x + 3)⁶ \\over 12} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { (4x + 2)⁵ \\over 7} + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { (4x - 3)⁶ \\over 24} + c}$$</latex-js>"
        ]

    },

    {
        numb: 42,

        question: "Integrales trigonometricas:  <span><p>\n</span> ∫ (cos x - tan x) dx",
        answer:   "sen x + ln |cos x| x +c",



        options: [
            "cosc x + tan x +c",
            "cos x + ln |sen x| x +c",
            "sen x + ln |cos x| x +c",
            "tan x - cos x +c"
        ]
    },

    {
        numb: 43,

        question: "Integrales trigonometricas:  <span><p>\n</span> ∫ (3x² + sec² x) dx",
        answer:   "x³ + tan x + c",


        options: [
            "x³ + tan x + c",
            "2x² + sen x + c",
            "x² + cos x + c",
            "x³ - tan x + c"
        ]
    },

    {

        numb: 44,
        question: "Integrales trigonometricas: ∫ (sec² x) dx",
        answer:   "tan x + c",


        options: [

            "tan x + c",
            "cos x + c",
            "tan eˣ + c",
            "sen e + c"
        ]
    },

    {
        numb: 45,
        question: "Integrales trigonometricas: <span><p>\n</span> ∫ sen x + tan x dx",
        answer:   "- cos x - ln |cos x| + c",

        options: [
            "- sen x² - ln |cos x| + c",
            "- tan x + ln |sen x| + c",
            "- cos x² + ln |cos x²| + c",
            "- cos x - ln |cos x| + c"

        ]
    },

    {
        numb: 46,
        question: "Integrales trigonometricas: ∫ cos³ dx",
        answer:   "$${\\LARGE - { 1 \\over 3}  sen^3 x + c}$$",

        options: [


            "<latex-js baseURL="+base_url+">$${\\LARGE  { 1 \\over 5}  sen x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE - { 1 \\over 2}  sen x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 1 \\over 4} - sen^3 x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE - { 1 \\over 3}  sen^3 x + c}$$</latex-js>"
        ]
    },

    {
        numb: 47,
        question: "Integrales trigonometricas: ∫ sen dx",
        answer:   "$${\\LARGE  { 1 \\over 2} x² sen + c}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 1 \\over 5} x - sen + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 3 \\over 4} x³ sen + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 2 \\over 3} x³ - sen + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 1 \\over 2} x² sen + c}$$</latex-js>"
        ]
    },

    {
        numb: 48,
        question: "Integrales trigonometricas:  <span><p>\n</span> ∫ sen x + cos x dx",
        answer:   "- cos  x + sen x + c",


        options: [
            "cos  x² + sen x² + c",
            "- cos  x³ + sen x² + c",
            "cos  x - sen x + c",
            "- cos  x + sen x + c"
        ]
    },

    {
        numb: 49,

        question: "Integrales trigonometricas: ∫ sen² 4x dx",
        answer: "$${\\LARGE  { 1 \\over 2} x - { 1 \\over 8} sen 8x + c}$$",

        options: [

            
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 1 \\over 2} x² + { 1 \\over 8} tan 8x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 1 \\over 2} x + { 1 \\over 8} - sen 8x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 1 \\over 2} x² - { 1 \\over 8} cos 8x² + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 1 \\over 2} x - { 1 \\over 8} sen 8x + c}$$</latex-js>"
        ]
    },

    {
        numb: 50,
        question: "Integrales trigonometricas: ∫ cos⁵ x dx",
        answer: "$${\\LARGE sen x - { 2 \\over 3} sen³ x + { 1 \\over 5} sen⁵ x + c}$$",

        options: [

    
            "<latex-js baseURL="+base_url+">$${\\LARGE - sen x - { 3 \\over 4} sen³ x + { 4 \\over 5} sen⁵ x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE sen x - { 2 \\over 3} sen³ x + { 1 \\over 5} sen⁵ x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE - sen x - { 2 \\over 3} sen³ x + { 3 \\over 4} sen⁵ x + c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE cos x + { 3 \\over 4} sen x + { 1 \\over 4} sen x + c}$$</latex-js>"
        ]
    },

];
