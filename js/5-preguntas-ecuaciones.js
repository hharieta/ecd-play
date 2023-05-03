
let questions = [
    {
        numb: 1,
        question: "¿Qué es una ecuación diferencial?",
        answer:   "Una ecuación matemática que relaciona una función con sus derivadas. ",
        options: [
            "Una ecuación matemática que relaciona una función con sus derivadas. ",
            "Es una generalización de la suma de infinitos sumandos, infinitesimalmente pequeños.",
            "Cambio instantánea con la que varía el valor de dicha función matemática, según se modifique el valor de su variable independiente.",
            "Es una ecuación diferencial ordinaria junto con un valor especificado."
        ]
    },

    {
        numb: 2,
        question: "Determine que tipo es la siguiente ecuación: x d^2y/dx^3 - (dy/dx)^4 + y = 0 ",
        answer:   "No lineal",
        options: [
        
            "Valor inicial",
            "Inderteminada",
            "Lineal",
            "No lineal"
        ]
    },

    {
        numb: 3,
        question: "Determine que tipo es la siguiente ecuación: (1-x)y'' - 4xy' + 5y = cos x",
        answer:   "Lineal",
        options: [
            "No lineal",
            "Lineal",
            "indertiminado",
            "Valor inicial"
        ]
    },

    {
        numb: 4,
        question: "y'= 25 + y^2; y = 5 tan 5x",
        answer:   "y = 25",
        options: [
            "y = 20",
            "y = 10",
            "y = 25",
            "y = 15"
        ]
    },

    {
        numb: 5,
        question: "3xy' + 5y = 10",
        answer:  "y = 2",
        options: [
            "y = 4",
            "y = 6",
            "y = 8",
            "y = 2"
        ]
    },

    {
        numb: 6,
        question: "dy/dx + 2y = 0 ",
        answer: "ce^(-2x)",

        options: [
            "ce^(2x)",
            "ce^x",
            "ce^(3x)",
            "ce^(-2x)"
        ]
    },

    {
        numb: 7,
        question: "dy/dx = 5y",
        answer: "y = ce^5x",

        options: [
            "y = ce^x",
            "y = ce^5x",
            "y = ce^4x - cex^5x",
            "y = ce^2x + y = cex^4x"
        ]
    },

    {
        numb: 8,
        question: "Resuelva la siguiente Ecuación Diferencial Homogena: 2x dy = (x + y)dx",
        answer:   "y - D√x",
 
        options: [
            "y - D√x",
            "y^2 + 2D",
            "x^2 - 2x^x",
            "y + 2D√x"
        ]
    },
    
    {
        numb: 9,
        question: "Resuelva la siguiente Ecuación Diferencial Homogena: (x - y)dx + x dy = 0",
        answer:   "y = -x ln x + cx",

        options: [
            "y = 2/3x tan x + c",
            "y = y = x^2 cos x + cx",
            "y = -x ln x + cx",
            "y = 2x ln x + c"
        ]
    },

    {
        numb: 10,
        question: "Resuelva la siguiente Ecuación Diferencial Exacta: (y + 2) dx + (x + y^2) dy",
        answer: "xy + 2x + y^3/3 = c",

        options: [
            "x + 2y - y^2 = c",
            "xy + 2x + y^3/3 = c",
            "xy + 2x + y^6 = c",
            "xy + 3x -3y ^2",
        ]
    },

    {
        numb: 11,
        question: "Ecuaciones diferenciales de variables separables: dy/dx = (3x^2 + 4x + 2)/(2(y-1))",
        answer:   "y^2 - 2y = x^3 + 2x^2 + 2x +c",

        options: [
            "y^2 - 2y = x^3 + 2x^2 - 2x +c",
            "y^2 - 2y = 2x^3 + 2x^2 - x +c",
            "y^2 - 2y = 3x^3 + 2x +c",
            "y^2 - 2y = x^3 + 2x^2 + 2x +c"
        ]
    },

    {
        numb: 12,
        question: "Ecuaciones diferenciales de variables separables: dy/dx = (y cos x)/(1-2y) ",
        answer: "ln -2y = sen x +c",

        options: [
            " -2y = cos x +c",
            "ln = sen x +c",
            "ln -2y = cos x +c",
            "ln -2y = sen x +c"
        ]
    },

    {
        numb: 13,
        question: "Ecuaciones diferenciales de variables separables: xy' = y",
        answer:   "xC = xC",

        options: [
            "x = -x",
            "xy = y",
            "yC = yC",
            "xC = xC"
        ]
    },

    {
        numb: 14,
        question: "Ecuaciones diferenciales de variables separables: dy/dx +4xy = 0",
        answer:   "y = ce^(-2x^2)",

        options: [
            "y = ex^(2x^2) +c",
            "y = ce^(-2x^2) +c",
            "y = ce^(3x^2) +c",
            "y = ce^(2x) +c"
        ]
    },

    {
        numb: 15,
        question: "Ecuaciones diferenciales de variables separables: dy/dx - e^(x+y) = 0",
        answer:   "y = -ln(C - e^x) +c",

        options: [
            "y = -ln(C - e^x) +c",
            "y = ln(y - e) +c",
            "y = -ln(C - e^3x) +c",
            "y = ln x(C - e^2x) +c"
        ]
    },

    {
        numb: 16,
        question: "Ecuaciones diferenciales de variables separables: dy/dx + e^(x-y) = 0",
        answer:   "y = ln(C - e^x)",

        options: [
            "y = ln(C - e^x) +c",
            "y = (C - e^3x) +c",
            "y = (C - e^2x) +c",
            "y = ln x(C - e) +c"
        ]
    },

    {
        numb: 17,
        question: "Ecuaciones diferenciales de variables separables: (xy - y)dy - (y + 1)dx = 0",
        answer:   "y - ln(y + 1) = ln(x - 1) +c",

        options: [
            "ln(y + 1) = ln(x - 1) +c",
            "ln(y - 1) = ln(x + 1) +c",
            "y + ln(y - 1) = ln(x + 1) +c",
            "y - ln(y + 1) = ln(x - 1) +c"
        ]
    },

    {
        numb: 18,
        question: "Ecuaciones diferenciales de variables separables: dy/dx = x^2 + x^2y^2",
        answer:   "y = tan (x^3/3 +c)",

        options: [
            "y = tan (x^3/3 +c)",
            "y = cosc (x^3 +c)",
            "y = sen (x^2/2 +c)",
            "y = cos (x^2 +c)"
        ]
    },

    {
        numb: 19,
        question: "Ecuaciones diferenciales de variables separables: y' - e^(3+2y) =0",
        answer: "y = (ln(-2e^x + c1))/-2",

        options: [
            "y = (ln x(2e^3x + c1))/2",
            "y = (ln(-2e^x + c1))/-2",
            "y = (ln(2e^x + c))/2x",
            "y = (ln(-2e^2x + c))/-2"
        ]
    },

    {
        numb: 20,
        question: "Ecuaciones diferenciales de variables separables: dy/dx - x^3 y^2 = y^2",
        answer:   "y = 3^√(ln (1+x)^3 +c1)",

        options: [
            "y = 2^√(ln (x)^2 +c1)",
            "y = √(ln x +c1)",
            "y = 3^√(ln (1+x)^3 +c1)",
            "y = √(ln (2+x)^2 +c1)"
        ]
    },

    {
        numb: 21,
        question: "Ecuaciones diferenciales exactas: e^x (y^3 + xy^3 + 1)dx + 3y^2(xe^x - 6)dy = 0",
        answer:   "e^x (xy^3 + 1) - 6y^3 = c",

        options: [
            "e^x (x^2) - 3y^3 = c",
            "e (xy^2) + 6y^2 = c",
            "ex^x (y^3 - 2) + 4y^2 = c",
            "e^x (xy^3 + 1) - 6y^3 = c"
        ]
    },

    {
        numb: 22,
        question: "Ecuaciones diferenciales exactas: (2xy + y^2)dx + (x^2 + 2xy -y) dy = 0 ",
        answer:   "x^2 y + y^2 x - y^2/2 = c",

        options: [
            "x^2 x - y + y/2 = c",
            "x^2 y + y^2 x - y^2/2 = c",
            "ex^x (y^3 - 2) + 4y^2 = c",
            "e^x (xy^3 + 1) - 6y^3 = c"
        ]
    },

    {
        numb: 23,
        question: "Ecuaciones diferenciales exactas: (x + ycosx)dx + senx dy = 0",
        answer: "y sen x + x^2/2 = c",

        options: [
            "y cos x + x^3/3 = c",
            "y sen x + x^2/2 = c",
            "y tan x + x = c",
            "y cos x + x^2 = c"
        ]
    },

    {
        numb: 24,
        question: "Ecuaciones diferenciales exactas: (2xe^y + e^x)dx + (x^2 + 1)e^y dy = 0",
        answer: "x^2 e^y + e^x + e^y = (x^2 + 1)e^y + e^x = c",

        options: [
            "x^2 e^y + e^x + e^y = (x^2 + 1)e^y + e^x = c",
            "x^2 e^y - e^x - e^y = (x^2 - 1)e^y - e^x = c",
            "-3x^2 e^y + e^x = (x^2) = c",
            "e^y + e^x = (x^2 - 1) = c"
        ]
    },

    {
        numb: 25,
        question: "Ecuaciones diferenciales lineales: dy/dx = 5y ",
        answer:   "y = ce^(5x) = ce^(5x)",

        options: [
            "y = ce^(5x) = cex^(5x)",
            "y = ce^(5x - 1) = ce^(5x + 1)",
            "y = ce^(x) = ce^(x)",
            "y = ce^(5x) = ce^(5x)"
        ]
    },

    {
        numb: 26,
        question: "Ecuaciones diferenciales lineales: dy/dx + 2y = 0",
        answer: "y = ce^(-2x) = ce^(-2x)",

        options: [
            "y = ce^(2x) = ce^(2x)",
            "y = ce^(-2x) = ce^(-2x)",
            "y = ce^(-4x) = ce^(4x)",
            "y = ce^(x) = ce^(2x)"
        ]
    },

    {
        numb: 27,
        question: "Ecuaciones diferenciales lineales: de/dx + y = e^(3x)",
        answer:   "ce^(-x) + 1/4e^(3x) dx",

        options: [
            "ce^(x) - 1/3e^(2x) dx",
            "ce^(2x^2) + 1/4e^(4x) dx",
            "ce^(-x) + 1/4e^(3x) dx",
            "ce^(x) + e^(3x) dx"
        ]
    },

    {
        numb: 28,
        question: "Ecuaciones diferenciales lineales: 3 dy/dx + 12y = 4",
        answer:   "y = ce^(-4x) + 1/3",

        options: [
            "y = ce^(6x) + 1/2",
            "y = ce^(-4x) + 1/3",
            "y = ce^(4x) + 1/4",
            "y = ce^(-6x) + 1/2"
        ]
    },

    {
        numb: 29,
        question: "Ecuaciones diferenciales lineales: y´ + 3x^2y = x^2",
        answer: "ce^-x^3 + 1/3",

        options: [
            "ce^x^3 + 1/4",
            "ce^-x^3 - 1/3",
            "ce^-x^3 + 1/3",
            "ce^x^2 - 1/4"
        ]
    },

    {
        numb: 30,
        question: "Determinar la solución general de la ecuación diferencial: 8 dy/dx + 16y = 0",
        answer: "y = c1e^(-2x)",

        options: [
            "y = c1e^(-2x)",
            "y = c1e^(2x)",
            "y = c1e^(2x^2)",
            "y = c1e^(-2x^2)"
        ]
    },

    {
        numb: 31,
        question: "Método de coeficientes idertimados: (d^2 y)/(dx^2) - y =0",
        answer:   "2x^2 - x -3",

        options: [
            "2x^2/2 + x + 3",
            "2x^3 - x",
            "2x^2 - x -3",
            "x-^2 + 3"
        ]
    },

    {
        numb: 32,
        question: "Método de coeficientes idertimados: d^2y/dx^2 -y = 0, la ecuación caracteristicas r^2 - 1 = 0 ",
        answer:   "y = -2x^2 + x - 1",

        options: [
            "y = 2x^3 + 3x - 2",
            "y = -2x^2/2 + x + 1",
            "y = 2x^4 - 2x - 3",
            "y = -2x^2 + x - 1"
        ]
    },

    {
        numb: 33,
        question: "Método de variación de parámetros: d^2y/dx^2 -3 dy/dx + 2y = e^3x",
        answer:   "y = Ae^x + Be^(2x) + 1/2 e^(3x)",

        options: [
            "y = Ae^x + Be^(2x) + 1/3 e^(3x)",
            "y = Ae^(2x) + Be^(2x) + 2 e^(2x)",
            "y = Ae^x + Be^x + 1/4 e^(4x)",
            "y = Ae^x + Be^(2x) + 1/2 e^(3x)"
        ]
    },

    {
        numb: 34,
        question: "Método de variación de parámetros: d^2y/dx^2 - y = 2x^2 - x - 3",
        answer:   "y = Ae^x + Be^(-x) -2x^2 + x -1",

        options: [
            "y = Ae^x + Be^(x) -2x^3 - x^2 1",
            "y = Ae^x + Be^(-x^2/2) + 2x + x",
            "y = Ae^x + Be^(x) 2x^4 + x^3/#",
            "y = Ae^x + Be^(-x) -2x^2 + x -1"
        ]
    },

    {
        numb: 35,
        question: "Método de variación de parámetros: d^2y/dx^2 - 6 dy/dx +9y = 1/x",
        answer:   "y = Ae^(3x) + Bxe^(3x) + 1/3 + xe^(3x) ∫e^(-3x) x^(-1) ",

        options: [
            "y = Ae^(3x) + Bxe^(3x) + 1/3 + xe^(3x) ∫e^(-3x) x^(-1)",
            "y = Ae^(-2x) + Bxe^(-3x) + 1/4 + xe^(-3x) ∫e^(3x) x^(-1)",
            "y = Ae^(2x) + Bxe^(2x) + 1/5 + xe^(3x) ∫e^(3x^2/2) x^(2x)",
            "y = Ae^(3x) + Bxe^(3x) + 1/3 + xe^(3x) ∫e^(-3x) x^(-1) "
        ]
    },

    {
        numb: 36,
        question: "Hallar la transformada de Laplace para la función f(t) = 1",
        answer:   "L{t} = 1/S",

        options: [
            "L{t} = 1/S^2",
            "L{t} = 1/S",
            "L{t} = 1",
            "L{t} = 1^2/2"
        ]
    },

    {
        numb: 37,
        question: "Hallar la transformada de Laplace para la función f(t) = t",
        answer:   "L{1} = 1/S^2",

        options: [
            "L{1} = t/t^2",
            "L{1} = 1/t^2",
            "L{1} = 1/S",
            "L{1} = 1/S^2"
        ]
    },

    {
        numb: 38,
        question: "Hallar la transformada de Laplace para la función f(t) = cosh kt",
        answer:   "s/(s^2 - k^2)",

        options: [
            "s^2/(s^2 - k^2)",
            "s/(s^2 + k^2)",
            "s/(s - k)",
            "s/(s^2 - k^2)"
        ]
    },

    {
        numb: 39,
        question: "Hallar la transformada de Laplace para la función f(t) = 2t^4",
        answer:   "48/ s^5",

        options: [
            "48/ s^5",
            "21/ s^4",
            "21/ s^5",
            "48/ s^6"
        ]
    },

    {
        numb: 40,
        question: "Hallar la transformada de Laplace para la función f(t) = t cos t",
        answer:   "s^2 -1/ (s^2 + 1)^2",

        options: [
            "s^2 +1/ (s^3 + 1)^3",
            "s^2 / (s^2 + 2)^2",
            "s^2 / (s^4 + 1)^3",
            "s^2 -1/ (s^2 + 1)^2"
        ]
    },

    {
        numb: 41,
        question: "Hallar la transformada inversa de Laplace: L^-1 {1/s^2 - 48/s^5}",
        answer: "t - 2t^4",

        options: [
            "2t - 2t^4",
            "t + 2t^2",
            "t + 2t^4",
            "t - 2t^4"
        ]
    },

    {
        numb: 42,
        question: "Hallar la transformada inversa de Laplace: L^-1 {(s + 1)^3/ s^4}",
        answer: "1 + 3t + 3/2t^2 + 1/6 t^3",

        options: [
            "1 + 2t - 1/2t^2 - 1/3 t^4",
            "1 - 3t + 3/2t^2 + 1/6 t^2",
            "1 + 4t - 2/4t^3 - 2/4 t^3",
            "1 + 3t + 3/2t^2 + 1/6 t^3"
        ]
    },

    {
        numb: 43,
        question: "Hallar la transformada inversa de Laplace: L^-1 {1/s^2 - 1/s + 1/ s - 2}",
        answer:  "t - 1 + e^(2t)",

        options: [
            "3t - 3 + e^(2t/2)",
            "2t + 2 + e^(2t/s)",
            "t - 1 + e^(2t^3)",
            "t - 1 + e^(2t)"
        ]
    },

    {
        numb: 44,
        question: "Hallar la transformada inversa de Laplace: L^-1 {5 / s^2 + 49}",
        answer: "s/7 sen 7t",

        options: [
            "6/4 tan 14t",
            "3/2 cos 5t",
            "2/3 senh 5t",
            "s/7 sen 7t"
        ]
    },

    {
        numb: 45,
        question: "Hallar la transformada inversa de Laplace: L^-1 {4s/ 4s^2 + 1}",
        answer:   "cos t/2",

        options: [
            "cos t/2",
            "sen x/2",
            "sen t^3/3",
            "cos t^2/2"
        ]
    },

    {
        numb: 46,
        question: "Hallar la transformada inversa de Laplace: L^-1 {(2s - 6)/(s^2 + 9)",
        answer:   "2 cos 3t - 2 sen 3t",

        options: [
            "2 cos 3t - 2 sen 3t^2/2",
            "x tan 3t + 3 cos 4t",
            "2 cos 3t - 2 sen 3t",
            "2 cos 3t^3/3 - 2 sen 3t^2/2"
        ]
    },

    {
        numb: 47,
        question: "Hallar la transformada inversa de Laplace: L^-1 {1/ s^3 + 5s}",
        answer:   "1/5 - 1/5 cos √5t",

        options: [
            "1/3 + 1/2 cos 5t",
            "2/3 - 1/3 sen 6t",
            "1/5 + 1/5 cos √5t",
            "1/5 - 1/5 cos √5t"
        ]
    },

    {
        numb: 48,
        question: "Use la transformada de Laplace para resolver el problema e valores iniciales: dy/dt - y = 1,  y(0) = 0",
        answer: "y(t) = -1 + e^t",

        options: [
            "y(t) = -3 + e^2t",
            "y(t) = -1 + e^t",
            "y(t) = 1 + e^4x",
            "y(t) = 2 + e^2t"
        ]
    },

    {
        numb: 49,
        question: "Use la transformada de Laplace para resolver el problema e valores iniciales: y' + 6y = e^(4t), y(0) = 2 ",
        answer:   "1/10 e^(4t) + 19/10 e^(-6t)",

        options: [
            "2/10 e^(3t) + 18/10 e^(6t^2)",
            "10 e^(2t) - 17/10 e^(-6t)",
            "1/2 e^(4t) + 10 e^(6t)",
            "1/10 e^(4t) + 19/10 e^(-6t)"
        ]
    },

    {
        numb: 50,
        question: "Use la transformada de Laplace para resolver el problema e valores iniciales: y' - y = 2 cos 5t, y(0) = 0",
        answer: "- 1/13 cos 5t + 5/13 sen 5t + 1/13 e^t",

        options: [
            "5/13 sen 5t + 1/13 e^t",
            "- 1/13 tan 5t + 13 sen 6t + 4 e^t",
            "13 sen 6t + 5/ cos 4t + 13 e^t",
            "- 1/13 cos 5t + 5/13 sen 5t + 1/13 e^t"
        ]
    },








];