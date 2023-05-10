
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
        question: "Resolver la integral de: ∫ x^2 dx",
        answer: "x^3 / 3 +c",
        options: [
            "x^2 / 4 +c",
            "x^3 / 2 +c",
            "x^2 / 2 +c",
            "x^3 / 3 +c"
        ]
    },

    {
        numb: 3,
        question: "Resolver la integral de: ∫ x^2 / √x dx ",
        answer: "2 / 5 x^2 √x +c",
        options: [
            "2 / 4 x^6 √2 +c",
            "2 / 5 x^2 √x +c",
            "4 / 6 x^3 √x +c",
            "Ninguna de las anteriores"
        ]
    },

    {
        numb: 4,
        question: "Resolver la integral de: ∫ 2/3x +2 dx ",
        answer: "2/3 ln|3x + 2| +c",

        options: [
            "4/3 ln|3| +c ",
            "2 ln|4| +c ",
            "2/3 ln|3x + 2| +c",
            "ln|4x| +c "
        ]
    },

    {
        numb: 5,
        question: "Resolver la integral de: ∫ tan 5x dx",
        answer: "- 1/5 ln(cos 5x)+c",

        options: [
            "- 1/5 ln(cos 5x)+c",
            "1/5 ln(cos 5x)+c",
            "5 ln(sen 5x)+c ",
            "-4 ln(tan 5x)+c "
        ]
    },

    {
        numb: 6,
        question: "Resolver la integral de: ∫ dx/ tan x",
        answer: "ln(sen x) +c",

        options: [
            "ln(sen x) +c",
            "ln(cos x) +c ",
            "5x ln(sen x) +c ",
            "3x ln(x cos x) +c "
        ]
    },

    {
        numb: 7,
        question: "Resolver la integral de: ∫ (cos x - sen x) dx",
        answer: "sen x + cos x +c",

        options: [
            "Tan x + cos x +c",
            "sec^2 + cos x +c ",
            "cos x + tan 2x + c ",
            "sen x + cos x +c"
        ]
    },

    {
        numb: 8,
        question: "Resolver la integral de: ∫ (3x^2 - sec^2 x) dx",
        answer: "3x^3/3 - tan x +c",

        options: [
            "3x^3/3 - tan x +c",
            "3x^3/3 - sen x + tan x +c ",
            "3x^3/3 +c ",
            "2x^2/2 + cos x +c"
        ]
    },
    
    {
        numb: 9,
        question: "Resolver la integral de: ∫ e^x cos e^x dx",
        answer: "sen e^x +c",

        options: [
            "tan e^x + sen x ",
            "sen e^x +c",
            "Sec^2 - sen x^3 ",
            "cos - sen x "
        ]
    },

    {
        numb: 10,
        question: "Resolver la integral de: ∫ x sen (x^2 + 5)dx",
        answer: "-cos(x^2 + 5) +c",

        options: [
            "sen( 5x) +c",
            "sec-cos-x +c",
            "tan(x^4 + 5) +c ",
            "-cos(x^2 + 5) +c"
        ]
    },

    {
        numb: 11,
        question: "Resolver la integral de: ∫ cos^3 x dx",
        answer: "sen x - sen^3 x/ 3 +c",

        options: [
            "sen x- sen^6 x/ 6 +c ",
            "sen x - sen^3 x/ 3 +c",
            "tan x - cos 2x +c",
            "cos 2x - tan^6 + c "
        ]
    },

    {
        numb: 12,
        question: "Resolver la integral de: ∫ sen^4 x dx",
        answer: "3/8(x) - 1/4 sen 2x + 1/32 sen 4x +c",

        options: [
            "sen x - sen^3 x/ 3 + 8/4x - 14 +c ",
            "tan x - cos 2x +c ",
            "cos 2x - tan^6 + 1/8x + 32 +c ",
            "3/8(x) - 1/4 sen 2x + 1/32 sen 4x +c"
        ]
    },

    {
        numb: 13,
        question: "Resolver la integral de: ∫ x^2 e^x dx",
        answer: "(x^2 - 2x + 2)e^x +c",

        options: [
            "(x^2 - 2x + 2)e^x +c",
            "tan x - cos 2x +c  ",
            "sec - tan - 2x",
            "(x^2 - 2x + 2) +c "
        ]
    },

    {
        numb: 14,
        question: "Resolver la integral de: ∫ e^x sen x dx",
        answer: "e^x(sen(x) - cos(x)) / 2 +c",

        options: [
            "e^x(sen(x) - cos(x)) / 2 +c",
            "tan x - sec 2x / x-1 +c ",
            "sec(x) - tan(x) +c",
            "e^x-1 (sen(x) - cos(x)) / 2 + tan 2x - cos x +c "
        ]
    },

    {
        numb: 15,
        question: "Resolver la integral de: ∫ (3+1)^2 dx",
        answer: "3x^3 + 3x^2 +x +c",

        options: [
            "2x^4 + 3x^3 +c ",
            "3x^3 + 3x^2 +x +c",
            "5x^2 + 4x +c",
            "4x^6 - 2x^4 + x^2 +c"
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
        answer:   "3x +c",

        options: [
            "3x/x^3 +c",
            "x^3 +c",
            "3x +c",
            "3x^2 +c"
        ]
    },

    {
        numb: 18,
        question: "Integrales directas: ∫ 5x^2 dx",
        answer:   "5x^3/3 +c",

        options: [
            "5x^3/3 +c",
            "5x^2/3 +c",
            "5x^2 +c",
            "5x^2/2 +c"
        ]
    },

    {
        numb: 19,
        question: "Integrales directas: ∫ (5x^2 + 3) dx",
        answer:   "5x^3/3 + 3x +c",

        options: [
            "5x^3/3+c",
            "5x^2/2 + 2x +c",
            "5x^2/2 + 3x^3 +c",
            "5x^3/3 + 3x +c"
        ]
    },

    {
        numb: 20,
        question: "Integrales directas: ∫ (3x^2)/(x^3 -1) dx",
        answer: "ln|x^3-1| +c",

        options: [
            "ln|3x^2|",
            "ln|x^3-1| +c",
            "x^3/3-x^3 +c",
            "x^2-3x"
        ]
    },

    {
        numb: 21,
        question: "Integrales directas: ∫ sen(x) cos(x) dx",
        answer:   "cos^2(x)/2 +c",
 
        options: [
            "cos^2(x)/2 +c",
            "tan^2/2 +c",
            "cos^3(x)/3 +c",
            "sen^2(x) +c"
        ]
    },

    {
        numb: 22,
        question: "Integrales directas: ∫ 3^√x dx",
        answer: "3/4 x^(4/3) +c",

        options: [
            "3/4 x^(3) +c",
            "1/2 x^(2) +c",
            "4 x^(1/2) +c",
            "3/4 x^(4/3) +c"
        ]
    },

    {
        numb: 23,
        question: "Integrales directas: ∫ (1 + x)√x dx",
        answer:   "2/3 x^(3/2) + 2/5 x(5/2) +c",

        options: [
            "3 x^(3/2) - 2 x(5/2) +c",
            "4 x^(3) + 3 x(2) +c",
            "2/3 x^(3/2) + 2/5 x(5/2) +c",
            "2/3 - x^(3/2) - 2/5 (5/2) +c"
        ]
    },

    {
        numb: 24,
        question: "Integrales directas: ∫ ln(x^2)/x dx",
        answer:   "(ln(x^2))^2/4 +c",

        options: [
            "(ln(x^2))^2/4 +c",
            "(ln(x^2))^2 +c",
            "(ln(x^2))/4 +c",
            "(ln(x^4))^3/4 +c"
        ]
    },

    {
        numb: 25,
        question: "Integrales directas: ∫ coa^2 (x) dx",
        answer:   "x/2 + sen(2x)/4 +c",

        options: [
            "2 + sen(2x)/2 +c",
            "x + cos(2x)/3 +c",
            "x/2 + sen(2x)/4 +c",
            "x/3 + senh(2x) +c"
        ]
    },

    {
        numb: 26,
        question: "Integrales directas: ∫ 1/√(9 - x^2) dx",
        answer:   "arcsen (x/3) +c",

        options: [
            "arcsen (x/3) +c",
            "sen^2 + cos^2 +c",
            "senh (1/2) +c",
            "arccos (6/2) +c"
        ]
    },

    {
        numb: 27,
        question: "Integrales con cambio de variable: ∫ x^4/√(1 - x^2)^3 dx",
        answer:   "tan(arcsen x) + x/2 √(1 - x^2) - 3/2 arcsen x +c",

        options: [
            "cos(arcsen x) + x/√(x^2) +  1/2 arcsen x +c",
            "sen(arccos x) + 7x/√(x^2) -  1/3 arccos x^2 +c",
            "tan(arcsen x) + x/2 √(1 - x^2) - 3/2 arcsen x +c",
            "cos(arccos x) + 6/(x^2) +  1/2 arcsen x^2 +c"
        ]
    },

    {
        numb: 28,
        question: "Integrales con cambio de variable: ∫ dx/(1 + cos^2 x)",
        answer:   "√2/2 arctan (1/√2 tan x) +c",

        options: [
            "√2/3 arcsen (1/3 cos x) +c",
            "4/2 arctan (1/4 tan x) +c",
            "2/2x cos (1/√2 sen x) +c",
            "√2/2 arctan (1/√2 tan x) +c"
        ]
    },

    {
        numb: 29,
        question: "Integrales con cambio de variable: ∫ x/√(x^2 -4) dx",
        answer: "√(x^2 -4) +c",

        options: [
            "√(x^2 -4) +c",
            "4/(x^2) +c",
            "√(x^2 + x)",
            "1/2 √(x^2 -4) +c"
        ]
    },

    {
        numb: 30,
        question: "Integrales con cambio de variable: ∫ dx/x^2√(4 + x^2)",
        answer:   "- 1/ 4 sen[arctan  (x/2)] +c",

        options: [
            " 1/ 4 sen[arccos  (1/2)] +c",
            "- 1/ 3 cos[arcsen] +c",
            " 1/ 2 sen[arctan  (x/2)] +c",
            "- 1/ 4 sen[arctan  (x/2)] +c"
        ]
    },

    {
        numb: 31,
        question: "Integrales trigonometricas: ∫ (cos x - sen x) dx",
        answer:   "sen x + cos x +c",

        options: [
            "cosc x + tan x +c",
            "sen x + cos x +c",
            "sen x - tan x +c",
            "tan x - cos x +c"
        ]
    },

    {
        numb: 32,
        question: "Integrales trigonometricas: ∫ (3x^2 - sec^2 x) dx",
        answer:   "x^3 - tan x +c",

        options: [
            "x^3/3 - cosc x +c",
            "2x^2/2 + sen x +c",
            "x^2 + cos x +c",
            "x^3 - tan x +c"
        ]
    },

    {
        numb: 33,
        question: "Integrales trigonometricas: ∫ (e^x cos e^x) dx",
        answer:   "sen e^x +c",

        options: [
            "sen e^x +c",
            "cos ex^2",
            "tan e^x",
            "sen ex^2 +c"
        ]
    },

    {
        numb: 34,
        question: "Integrales trigonometricas: ∫ x sen(x^2 + 5) dx",
        answer:   "-1/2 cos (x^2 + 5) +c",

        options: [
            "4 cos (x^2 + 5) +c",
            "1/2 sen (x + 6) +c",
            "-1/2 cos (x^2 + 5) +c",
            "3/2 sen (x^3 + 4) +c"
        ]
    },

    {
        numb: 35,
        question: "Integrales trigonometricas: ∫ cos^3 dx",
        answer: "-1/3 sen^3 x +c",

        options: [
            "1/3 sen^3 x +c",
            "3/sen^3 x +c",
            "-1/3 sen^3 x +c",
            "-3/sen^3 x +c"
        ]
    },

    {
        numb: 36,
        question: "Integrales trigonometricas: ∫ sen^4 dx",
        answer: "3/8x - 1/4 sen 2x + 1/32 sen 4x + c",

        options: [
            "3/8x - 1/4 sen 2x + 1/32 sen 4x + c",
            "-sen 3x + sen 4x + c",
            "-3/8x + 1/4 cos 2x - 1/32 cos 4x + c",
            "sen 3x + sen 4x + c"
        ]
    },

    {
        numb: 37,
        question: "Integrales trigonometricas: ∫ sen^5 x cos^2 x dx",
        answer:   "-1/3 cos^3 x + 2/5 cos^5 x - 1/7 cos^7 x + c",

        options: [
            "-3 sen^2 x - 1/2 sen^4 x + tan^3 +c",
            "3 cos^2 x - 1/2 cos^4 x + cos^3 +c",
            "1/3 sen^3 x - 2/5 sen^5 x + 1/7 tan^7 x + c",
            "-1/3 cos^3 x + 2/5 cos^5 x - 1/7 cos^7 x + c"
        ]
    },

    {
        numb: 38,
        question: "Integrales trigonometricas: ∫ sen^2 4x dx",
        answer: "1/2x - 1/16 sen 8x +c",

        options: [
            "-1/2x - 1/16 cos 3x +c",
            "-3/4x + 1/6 tan x +c",
            "3/4x + 1/6 tan x +c",
            "1/2x - 1/16 sen 8x +c"
        ]
    },

    {
        numb: 39,
        question: "Integrales trigonometricas: ∫ cos^5 x dx",
        answer: "sen x - 2/3 sen^3 x + 1/5 sen^5 x + c",

        options: [
            " cos x + 2 tan^2 x + 3 sen^5 x + c",
            " -sen x + 3/2 tan^2 x + 1/3 sen^5 x + c",
            "- cos x + 1/2 cos^2 x + 1/2 sen^5 x + c",
            "sen x - 2/3 sen^3 x + 1/5 sen^5 x + c"
        ]
    },

    {
        numb: 40,
        question: "Integrales trigonometricas: ∫ dx/ (sen x cos x) dx",
        answer:   "- ln(cos x) + ln (sen x) + c",

        options: [
            " ln(sen x) + 1/2 ln (cos x) + c",
            "- ln(tan x) + 1/3 ln (sen x) + c",
            " ln(cosc x) + ln (sen x) + c",
            "- ln(cos x) + ln (sen x) + c"
        ]
    },
    
    {
        numb: 41,

        question: "Integrales con cambio de variable: ∫ dx/x^2√(4 + x^2)",
        answer:   "- 1/ 4 sen[arctan  (x/2)] +c",

        options: [
            " 1/ 4 sen[arccos  (1/2)] +c",

            "- 1/ 3 cos[arcsen] +c",
            " 1/ 2 sen[arctan  (x/2)] +c",
            "- 1/ 4 sen[arctan  (x/2)] +c"
        ]

    },

    {
        numb: 42,

        question: "Integrales trigonometricas: ∫ (cos x - sen x) dx",
        answer:   "sen x + cos x +c",



        options: [
            "cosc x + tan x +c",
            "sen x + cos x +c",

            "sen x - tan x +c",
            "tan x - cos x +c"
        ]
    },


    {
        numb: 43,

        question: "Integrales trigonometricas: ∫ (3x^2 - sec^2 x) dx",
        answer:   "x^3 - tan x +c",


        options: [
            "x^3/3 - cosc x +c",

            "2x^2/2 + sen x +c",
            "x^2 + cos x +c",

            "x^3 - tan x +c"
        ]
    },


    {

        numb: 44,
        question: "Integrales trigonometricas: ∫ (e^x cos e^x) dx",

        answer:   "sen e^x +c",


        options: [

            "sen e^x +c",
            "cos ex^2",
            "tan e^x",
            "sen ex^2 +c"
        ]
    },

    {
        numb: 45,
        question: "Integrales trigonometricas: ∫ x sen(x^2 + 5) dx",
        answer:   "-1/2 cos (x^2 + 5) +c",

        options: [
            "4 cos (x^2 + 5) +c",
            "1/2 sen (x + 6) +c",
            "-1/2 cos (x^2 + 5) +c",
            "3/2 sen (x^3 + 4) +c"

        ]
    },

    {
        numb: 46,
        question: "Integrales trigonometricas: ∫ cos^3 dx",
        answer: "-1/3 sen^3 x +c",

        options: [

            "1/3 sen^3 x +c",
            "3/sen^3 x +c",
            "-1/3 sen^3 x +c",
            "-3/sen^3 x +c"
        ]
    },

    {
        numb: 47,
        question: "Integrales trigonometricas: ∫ sen^4 dx",
        answer: "3/8x - 1/4 sen 2x + 1/32 sen 4x + c",


        options: [
            "3/8x - 1/4 sen 2x + 1/32 sen 4x + c",
            "-sen 3x + sen 4x + c",
            "-3/8x + 1/4 cos 2x - 1/32 cos 4x + c",
            "sen 3x + sen 4x + c"
        ]
    },

    {
        numb: 48,
        question: "Integrales trigonometricas: ∫ sen^5 x cos^2 x dx",
        answer:   "-1/3 cos^3 x + 2/5 cos^5 x - 1/7 cos^7 x + c",


        options: [
            "-3 sen^2 x - 1/2 sen^4 x + tan^3 +c",
            "3 cos^2 x - 1/2 cos^4 x + cos^3 +c",
            "1/3 sen^3 x - 2/5 sen^5 x + 1/7 tan^7 x + c",
            "-1/3 cos^3 x + 2/5 cos^5 x - 1/7 cos^7 x + c"
        ]
    },

    {
        numb: 49,

        question: "Integrales trigonometricas: ∫ sen^2 4x dx",
        answer: "1/2x - 1/16 sen 8x +c",

        options: [
            "-1/2x - 1/16 cos 3x +c",
            "-3/4x + 1/6 tan x +c",
            "3/4x + 1/6 tan x +c",
            "1/2x - 1/16 sen 8x +c"
        ]
    },


    {
        numb: 50,
        question: "Integrales trigonometricas: ∫ cos^5 x dx",
        answer: "sen x - 2/3 sen^3 x + 1/5 sen^5 x + c",

        options: [
            " cos x + 2 tan^2 x + 3 sen^5 x + c",
            " -sen x + 3/2 tan^2 x + 1/3 sen^5 x + c",

            "- cos x + 1/2 cos^2 x + 1/2 sen^5 x + c",
            "sen x - 2/3 sen^3 x + 1/5 sen^5 x + c"
        ]
    },

];
