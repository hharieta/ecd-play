const base_url = `https://cdn.jsdelivr.net/npm/latex.js/dist/`
let questions = [

    {
        numb: 1,
        question: "Selecciona la opción correcta de la siguiente expresión <span><p>\n</span>''El doble de un número x''.",
        answer: "El doble de un número se obtiene multiplicándolo por 2, por tanto, el doble de x es 2x.",
        options: [
            "El doble de un número se obtiene multiplicándolo por 2x, por tanto, el doble de x es, 4x.",
            "El doble de un número se obtiene multiplicándolo por 2, por tanto, el doble de x es 2x.",
            "El doble de x es 2x².",
            "El doble de un numero es dos veces mayor y lo dividimos entre dos."
          
        ]
    },

    {
        numb: 2,
        question: "Selecciona la opción correcta de la siguiente expresión <span><p>\n</span> ''El triple de un número x''.",
        answer:   "El triple de un número se obtiene multiplicándolo por 3, por tanto, el triple de x es 3x.",
        options: [

            "El triple se multiplica por 3 y se divide, de ese modo el triple de x se obtine.",
            "El triple de x se sumapor lo tanto es 6x.",
            "El triple de un número se obtiene multiplicándolo por 3, por tanto, el triple de x es 3x.",
            "Ninguna de las opciones."
        ]
    },

    {
        numb: 3,
        question: "<latex-js baseURL="+base_url+">$${\\LARGE f(x)=6x^2+4x+1}$$</latex-js> ¿es cuadrática?",
        answer: "Si",
        options: [
            "Si",
            "Tal vez",
            "No",
            "Ninguna de las anteriores"
        ]
    },

    {
        numb: 4,
        question: "Resuelve el siguiente problema: <span><p>\n</span>  x + 15 = 2 (x - 5)",
        answer: "x = 25",
        options: [
            "x = 42",
            "x = 39",
            "x = 15",
            "x = 25"
        ]
    },

    {
        numb: 5,
        question: "Resuelve el siguiente problema: <span><p>\n</span> " + "<latex-js baseURL="+base_url+">$${\\LARGE 9 + x = { 1 \\over 2 (35 + x)}}$$</latex-js>",
        answer:   "x = 17",

        options: [
            "x = 25",
            "x = 21",
            "x = 17",
            "x = 14"
        ]
    },

    {
        numb: 6,
        question: "Resuelve el siguiente problema: <span><p>\n</span> (x + 1) + 5 = x",
        answer: "x = -6",
        options: [
            "x = 8",
            "x = 4",
            "x = -6",
            "x = 12"
        ]
    },
    
    {
        numb: 7,
        question: "Realiza: " + "<latex-js baseURL="+base_url+">$${\\LARGE 5x^2 \\cdot (2x^3 + 3y^3)}$$</latex-js>",
        answer: "$${\\Large 10x^5 + 15x^2 y^3}$$",
        options: [
            "<latex-js baseURL="+base_url+">$${\\Large 15x5  + 20y^5}$$</latex-js>", 
            "<latex-js baseURL="+base_url+">$${\\Large 7x^3  + 10y^5}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\Large 12x^5 + 16y^2}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\Large 10x^5 + 15x^2 y^3}$$</latex-js>"
        ]
    },

    {
        numb: 8,
        question: "Factoriza el trinomio: " + "<latex-js baseURL="+base_url+">$${\\LARGE 5x^2 + 7x + 2}$$</latex-js>",
        answer: "(5x + 2) (x + 1)",
        options: [
            "(4x + 13) (7x - 5)",
            "(x + 1) (5x + 2)",
            "(5x + 2) (x + 1)",
            "Ninguna"
        ]
    },

    {
        numb: 9,
        question: "Factoriza el trinomio: " + "<latex-js baseURL="+base_url+">$${\\LARGE 3x^2 + 7x - 6}$$</latex-js>",
        answer: "(3x - 2) (x + 3)",
        options: [
            "(3x - 2) (x + 3)",
            "(x + 1) (5x + 2)",
            "(5x + 2) (x + 1)",
            "(7x - 4) (6 - x)"
        ]
    },

    {
        numb: 10,
        question: "Resuelve el siguiente problema: " + "<span><p>\n</span> <latex-js baseURL="+base_url+">$${\\LARGE 5(x + 5)-3(x + 5)}$$</latex-js>",
        answer:   "2(x + 5)",
        options: [
            "(2x + 5)",
            "(5 + x)" ,
            "(2x + 4)",
            "2(x + 5)"
        ]
    },

    {
        numb: 11,
        question: "Calcula el perimetro  Base = 2x + 2x = 4x y Altura x + x = 2x ",
        answer: "Ancho mide 5 cm y el largo 10 cm",
        options: [
            "Ancho mide 12 cm y el largo 14 cm",
            "Ancho mide 4 cm y el largo 8  cm" ,
            "Ancho mide 6 cm y el largo 12 cm",
            "Ancho mide 5 cm y el largo 10 cm"
        ]
    },

    {
        numb: 12,
        question: " Factorizar: " + "<latex-js baseURL="+base_url+">$${\\LARGE x^4 + x^2 +1 }$$</latex-js>",
        answer: "$${\\Large (x² + x + 1)(x² - x + 1)}$$",
        options: [
            "<latex-js baseURL="+base_url+">$${\\Large (x² + x + 1)(x² - x + 1)}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\Large (x⁴ + x + 3)(x³ - x + 2)}$$</latex-js>" ,
            "<latex-js baseURL="+base_url+">$${\\Large (x³ + x)(x - x + 14)}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\Large (x⁶ + x + 15)(- x + 14)}$$</latex-js>"
        ]
    },

    {
        numb: 13,
        question: " Base: x+18 (mide 18 cm más que la altura) Altura: x (desconocemos la logitud de la altura)",
        answer:   " Base: 28 cm y Altura 10 ",
        options: [
            " Base: 38 cm y Alura 6 ",
            " Base: 28 cm y Altura 10 " ,
            " Base: 16 cm y Alura 12 ",
            " Base: 19 cm y Alura 14 "
        ]
    },

    {
        numb: 14,
        question: " Un padre tiene 47 años y su hijo 11. ¿Cuántos años han de transcurrir para que la edad del padre sea triple que la del hijo?",
        answer:   " x = 7 años transcurridos ",
        options: [
            " x = 9 años transcurridos ",
            " x = 8 años transcurridos " ,
            " x = 6 años transcurridos ", 
            " x = 7 años transcurridos "
        ]
    },

    {
        numb: 15,
        question: "Sistemas de ecuaciones lineales " + "<latex-js baseURL="+base_url+">$${\\LARGE \\left\\{ 3x - 2y = 4 \\atop 5x + 2y = 12 \\right. } $$</latex-js>",
        answer:   " x = 2 , y = 1 ",
        options: [
            " x = 5 , y = 3 ",
            " x = 3 , y = 4 " ,
            " x = 2 , y = 1 ",
            " x = 4 , y = 2 "
        ]
    },

    {
        numb: 16,
        question: "Clasificación de matrices: ¿Cuál es la clasificación de la siguiente matriz dada?" + "<latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} 1 & 2 & 5 \\\\  9 & 1 & 3 \\end{vmatrix}}$</latex-js>",
        answer: "Matriz Rectangular",

        options: [
            "Matriz Rectangular",
            "Matriz Cuadrada",
            "Matriz Triangular Superior",
            "Mátriz Diagonal"
        ]
    },

    {
        numb: 17,
        question: "Clasificación de matrices: ¿Cuál es la clasificación de la siguiente matriz dada?" + "<latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} 1 & 2 & -5 \\\\ 3 & 6 & 5 \\\\ 0 & -1 & 4 \\end{vmatrix} }$</latex-js>",
        answer: "Matriz Cuadrada",

        options: [
            "Matriz Rectangular",
            "Matriz Cuadrada",
            "Matriz Triangular Superior",
            "Mátriz Diagonal"
        ]
    },

    {
        numb: 18,
        question: "Clasificación de matrices: ¿Cuál es la clasificación de la siguiente matriz dada?<span><p>\n</span> "+" <latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} 2 & 0 & 0 \\\\ 0 & -3 & 0 \\\\ 2 & 0 & 2 \\end{vmatrix}}$</latex-js>",
        answer:  "Matriz Triangular inferior",

        options: [
            "Matriz Rectangular",
            "Matriz Cuadrada",
            "Matriz Triangular inferior",
            "Mátriz Diagonal"
        ]
    },

    {
        numb: 19,
        question: "Operaciones con Martices Suma de la siguiente matrices: <span><p>\n</span> " + " <latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} 4 & 0 & -3\\\\ -7 & 2 & 6 \\end{vmatrix}}$</latex-js>" +" + "+ " <latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} -1 & -4 & 3\\\\ 8 & 2 & -9 \\end{vmatrix}}$</latex-js>",
        answer:   "${\\huge \\begin{vmatrix} 3 & -4 & 0\\\\ 1 & 4 & -3 \\end{vmatrix}}$",  

        options: [

            "<latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} 3 & -4 & 0\\\\ 1 & 4 & -3 \\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} 2 & 4 & 2\\\\ 1 & 5 & -6\\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} 2 & -2 & -2\\\\ -3 & 4 & 3 \\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} 6 & -3 & 2\\\\ 2 & 8 & -5 \\end{vmatrix}}$</latex-js>"
        ]
    },

    {
        numb: 20,
        question: "Operaciones con Martices Resta de la siguiente matrices: <span><p>\n</span> " + " <latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} 8 & 0 & 11\\\\ -10 & 3 & 7 \\end{vmatrix}}$</latex-js>" +" - "+ " <latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} -5 & 1 & 7\\\\ 9 & -6 & 2 \\end{vmatrix}}$</latex-js>",
        answer: "${\\huge A - B = \\begin{vmatrix} 13 & -1 & 4\\\\ -19 & 9 & 5 \\end{vmatrix}}$",
        

        options: [
            "<latex-js baseURL="+base_url+">${\\huge A - B = \\begin{vmatrix} 13 & -1 & 4\\\\ -19 & 9 & 5 \\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge A - B = \\begin{vmatrix} 7 & 4 & 6\\\\ 9 & 5 & -4 \\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge A - B = \\begin{vmatrix} 21 & -6 & -4\\\\ 23 & -9 & 5 \\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge A - B = \\begin{vmatrix} 2 & 4 & 8\\\\ -19 & 8 & 6 \\end{vmatrix}}$</latex-js>"
        
        ]
    },

    {
        numb: 21,
        question: "Operaciones con Martices Multiplicación de la siguiente matrices: <span><p>\n</span> " + " A = "+" <latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} 4 & 0 & -3\\\\ -7 & 2 & 6 \\end{vmatrix}}$</latex-js>" + " * " + " <span><p>\n</span> B = " + " <latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} 5 & 1 & -10\\\\ 5 & 2 & 6 \\end{vmatrix}}$</latex-js>",
        answer: "${\\huge A x B = \\begin{vmatrix} 14 & -14\\\\ -43 & 32 \\end{vmatrix}}$", 

        options: [
            "<latex-js baseURL="+base_url+">${\\huge A x B = \\begin{vmatrix} 14 & -14\\\\ -43 & 32 \\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge A x B = \\begin{vmatrix} 13 & -1\\\\ -19 & 9 \\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge A x B = \\begin{vmatrix} 16& -6 & 4\\\\ 9 & 5 \\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge A x B = \\begin{vmatrix} 13 & 4\\\\ 32 & 5 \\end{vmatrix}}$</latex-js>"
        ]
    },

    {
        numb: 22,
        question: "Matriz inversa de la siguiente matriz: <span><p>\n</span>" + "<latex-js baseURL="+base_url+">${\\huge A⁻¹ = \\begin{vmatrix} 1 & 2  \\\\  2 & 3  \\end{vmatrix}}$</latex-js>",
        answer: "${\\huge = \\begin{vmatrix} -3 & 2  \\\\  2 & -1  \\end{vmatrix}}$",

        options: [
            "<latex-js baseURL="+base_url+">${\\huge = \\begin{vmatrix} -2 & 4  \\\\  2 & -2  \\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge = \\begin{vmatrix} -2 & 3  \\\\  4 & 4  \\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge = \\begin{vmatrix} 3 & -2  \\\\  -2 & 1  \\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge = \\begin{vmatrix} -3 & 2  \\\\  2 & -1  \\end{vmatrix}}$</latex-js>"
        ]
    },

    {
        numb: 23,
        question: "¿Qué es una ecuación de sistema lineal?",
        answer: "Es un conjunto de dos o más ecuaciones de primer grado, en el cual se relacionan dos o más incógnitas",

        options: [
            "Es un conjunto de dos o más ecuaciones de primer grado, en el cual se relacionan dos o más incógnitas",
            "multiplicar una ó las dos ecuaciones por algún número de modo que obtengamos un sistema en que los coeficientes de x o de y sean iguales",
            "Método que permite calcular rápidamente el determinante de una matriz",
            "Consiste en despejar la misma incógnita en las dos ecuaciones y después igualar los resultados"
        ]
    },

    {
        numb: 24,
        question: "Clasificación de sistemas de ecuaciones: ¿Cuál es la clasificación del siguiente sistema de ecuaciones? 4x - 2(6x-5) = 3x + 12(2x + 16) ",
        answer: "Ecuaciones lineales",

        options: [
            "Ecuaciones lineales",
            "Ecuaciones literales",
            "Ecuaciones fraccionarias",
            "Ecuaciones lineales independientes"
        ]
    },

    {
        numb: 25,
        question: "Clasificación de sistemas de ecuaciones: ¿Cuál es la clasificación del siguiente sistema de ecuaciones?" + "<latex-js baseURL="+base_url+">$${\\LARGE { x \\over a} + x = {2a \\over b}}$$</latex-js>",
        answer: "Ecuaciones literales",
        options: [
            "Ecuaciones lineales propiamente tales",
            "Ecuaciones literales",
            "Ecuaciones fraccionarias",
            "Ecuaciones lineales independientes"
        ]
        
    },

    {
        numb: 26,
        question: "Clasificación de sistemas de ecuaciones: ¿Cuál es la clasificación del siguiente sistema de ecuaciones?" + "<latex-js baseURL="+base_url+">$${\\LARGE { 3x \\over 2} + { 1 \\over 4 } + 2 = {3x \\over 4} - {x \\over 3}}$$</latex-js>",
        answer: "Ecuaciones fraccionarias",

        options: [
            "Ecuaciones lineales",
            "Ecuaciones literales",
            "Ecuaciones fraccionarias",
            "Ecuaciones lineales independientes"
        ]
    },

    {
        numb: 27,
        question: "Sistemas de ecuaciones lineales:" + "<latex-js baseURL="+base_url+">$${\\LARGE \\left\\{ 3x - 5y = 7 \\atop 4x + 2y = 2 \\right. } $$</latex-js>", 
        answer:   "x = 1, y = -1",
 
        options: [
            "x = -2, y = 2",
            "x = 2, y = -1",
            "x = 1, y = 2",
            "x = 1, y = -1"
        ]
    },

    {
        numb: 28,
        question: "Sistemas de ecuaciones lineales:" + "<latex-js baseURL="+base_url+">$${\\LARGE \\left\\{ 5x - 3y = -1 \\atop 2x + 4y = 10 \\right. } $$</latex-js>",
        answer: "x = 1, y = 2",

        options: [

            "x = -2, y = 2",
            "x = 2, y = -1",
            "x = 1, y = 2",
            "x = 1, y = -1"
        ]
    },

    {
        numb: 29,
        question: "Sistemas de ecuaciones lineales:" + "<latex-js baseURL="+base_url+">$${\\LARGE \\left\\{ 2x + 3y = 7 \\atop 3x - 2y = 4 \\right. } $$</latex-js>",
        answer:   "x = 2, y = 1",

        options: [
            "x = -2, y = 2",
            "x = 2, y = 1",
            "x = 1, y = 2",
            "x = 1, y = -1"
        ]
    },

    {
        numb: 30,
        question: "Sistemas de ecuaciones lineales:" + "<latex-js baseURL="+base_url+">$${\\LARGE \\left\\{ x + 3y = 7 \\atop 5x - y = 3 \\right. } $$</latex-js>",
        answer:   "x = 1, y = 2",

        options: [
            "x = -2, y = 2",
            "x = 2, y = 1",
            "x = 2, y = 4",
            "x = 1, y = 2"
        ]
    },

    {
        numb: 31,
        question: "Sistemas de ecuaciones lineales:" + "<latex-js baseURL="+base_url+">$${\\LARGE \\left\\{ 3x + y = -4 \\atop -x - 4y = -6 \\right. } $$</latex-js>",
        answer: "x = -2, y = 2",

        options: [
            "x = -2, y = 2",
            "x = 2, y = 1",
            "x = 2, y = 4",
            "x = 1, y = -1"
        ]
    },

    {
        numb: 32,
        question: "Sistemas de ecuaciones lineales:" + "<latex-js baseURL="+base_url+">$${\\LARGE \\left\\{ 5x - 2y = -2 \\atop -3x + 7y = -22 \\right. } $$</latex-js>", 
        answer: "x = -2 , y = -4",

        options: [
            "x = 2, y = 1",
            "x = 2, y = 4",
            "x = 1, y = -1",
            "x = -2 , y = -4"
        ]
    },

    {
        numb: 33,
        question: "Sistemas de ecuaciones lineales:" + "<latex-js baseURL="+base_url+">$${\\LARGE \\left\\{ 5x + 6y = 20 \\atop 3x + 8y = 34 \\right. } $$</latex-js>",
        answer: "x = -2 , y = 5",

        options: [
            "x = 1, y = -1",
            "x = -2 , y = 5",
            "x = 2, y = 1",
            "x = -2 , y = -4"
        ]
    },

    {
        numb: 34,
        question: "Sistemas de ecuaciones lineales:" + "<latex-js baseURL="+base_url+">$${\\LARGE \\left\\{ 2x + 3y = 12  \\atop 3x - 5y = 12 \\right. } $$</latex-js>",
        answer:   "x = 4, y = 0",

        options: [
            "x = 4, y = 0",
            "x = 3, y = -3",
            "x = 2, y = 4 ",
            "x = 1, y = 2"
        ]
    },

    {
        numb: 35,
        question: "Sistemas de ecuaciones lineales:" + "<latex-js baseURL="+base_url+">$${\\LARGE \\left\\{ 9x + 3y = -3  \\atop 4x + 2y = 8 \\right. } $$</latex-js>",
        answer: "x = -5, y = 14",

        options: [
            "x = 2, y = 21",
            "x = 3, y = 1",
            "x = -5, y = 14",
            "x = 1, y = 2"
        ]
    },

    {
        numb: 36,
        question: "¿Qué es un espacio vectorial?",
        answer:   "Es un conjunto no vacío V de objetos, llamados vectores, en el que se han definido dos operaciones.",

        options: [
            "El espacio una entidad geométrica en la que interactúan los objetos físicos y en el que los sucesos que ocurren tienen una posición y dirección.",
            "Es un conjunto no vacío V de objetos, llamados vectores, en el que se han definido dos operaciones.",
            "El espacio es la rama de la geometría que se encarga del estudio de las figuras geométricas voluminosas.",
            "Conjunto de variables que inciden en la delimitación del espacio personal, el entorno físico y sus características pueden jugar un papel determinante."
        ]
    },

    {
        numb: 37,
        question: "¿Qué es un subespacio vectorial?",
        answer:   "Es el subconjunto de un espacio vectorial, que satisface por sí mismo la definición de espacio vectorial con las mismas operaciones que V.",

        options: [
            "Es el subconjunto de un espacio vectorial, que satisface por sí mismo la definición de espacio vectorial con las mismas operaciones que V.",
            "El espacio es la rama de la geometría que se encarga del estudio de las figuras geométricas voluminosas.",
            "Conjunto de variables que inciden en la delimitación del espacio personal, el entorno físico y sus características pueden jugar un papel determinante.",
            "Es un conjunto no vacío V de objetos, llamados vectores, en el que se han definido dos operaciones."
        ]
    },

    {
        numb: 38,
        question: "Propiedades de subespacio vectorial",
        answer: "El vector cero de V está en H.2, H es cerrado bajo la suma de vectores y H es cerrado bajo la multiplicación por escalares",
        

        options: [
            "El vector cero de V está en H.2, H es cerrado bajo la suma de vectores y H es cerrado bajo la división por escalares",
            "El vector cero de V está en H.2, H es cerrado bajo la resta de vectores y H es cerrado bajo la multiplicación por escalares",
            "El vector uno de V está en H.2, H es cerrado bajo la suma de vectores y  H es cerrado bajo la multiplicación por escalares",
            "El vector cero de V está en H.2, H es cerrado bajo la suma de vectores y H es cerrado bajo la multiplicación por escalares"
        ]
    },

    {
        numb: 39,
        question: "Qué combinación lineal de:  <span><p>\n</span> M(7, - 4) y N (-5, -2) da como resultado el vector w(11, 18)?",
        answer: "-2(7, - 4) -5 (-5, -2) = (11, 18)",

        options: [
            "-3(5, + 4) 4 (-4, -7) = (11, 18)",
            "3(6, - 5) -2 (3, -3) = (11, 18)",
            "-2(7, - 4) -5 (-5, -2) = (11, 18)",
            "2(6, - 3) + 5 (5, 2) = (11, 18)"
        ]
    },

    {
        numb: 40,
        question: "Determinar la Ecuación del plano que contiene: <span><p>\n</span> p(1, 2 -3), q(2, 3 ,1) y r(0, -2, -1)",
        answer:   "6p - 2q - r = 5",

        options: [
            "3p + 3q - 3r = 15",
            "6p - 2q - r = 5",
            "5p - q - 4r = 7",
            "p - q - r = 8"
        ]
    },

    {
        numb: 41,
        question: "Qué combinación lineal de <span><p>\n</span> M = (1, 2) y N = (3, -1) puede hallar el vector de la combinación lineal z = 2M + 3N?",
        answer:   "z = (11,1)",

        options: [
            "z = (11,1)",
            "z = (2,12)",
            "z = (12,2)",
            "z = (1,11)"
        ]
    },

    {
        numb: 42,
        question: "Sean los vectores libres <span><p>\n</span> u=(2,1), v=(1,4) y w=(5,6). <span><p>\n</span> Determinar Si forman una base u y w",
        answer: "(5, 6) = u(2, 1) + v(1, 4)",

        options: [
            "(5, 6) = u(2, 1) + v(1, 4)",
            "(1, 4) = u(5, 6) + v(1, 4)",
            "(5, 4) = u(2, 1) + v(2, 1)",
            "(1,3) = u(2, 6) + v(2, 1)"
        ]
    },

    {
        numb: 43,
        question: "Combinación lineal de  <span><p>\n</span> M = (1, -3) y N = (1, 2) para hallar el vector de la combinación lineal z = 3M - 4N",
        answer: "z = (-1,-17)",

        options: [
            "z = (-1,-17)",
            "z = (1,17)",
            "z = (3,12)",
            "z = (-3,-12)"
        ]
    },

    {
        numb: 44,
        question: "Combinación lineal de <span><p>\n</span> M = (2, -2) y N = (2, -2) para hallar el vector de la combinación lineal z = -5M + 2N ",
        answer:   "z = (-6, 6)",

        options: [
            "z = (-6, 6)",
            "z = (6, -6)",
            "z = (3, -3)",
            "z = (-3, 3)"
        ]
    },

    {
        numb: 45,
        question: "Resuelve el siguiente problema: " + "<span><p>\n</span> <latex-js baseURL="+base_url+">$${\\LARGE 2(x + 3) - 3(2x + 6)}$$</latex-js>",
        answer:   "4(x + 3)",

        options: [
            "6(x + 3)",
            "4(x + 3)",
            "-6(x + 2)",
            "-4(x + 3)"
        ]
    },

    {
        numb: 46,
        question: "Factorización de la expresión: <span><p>\n</span> 3x³ + 6x² + 12x",
        answer: "3x(x² + 2x + 4)",

        options: [
            "3x(x² + 2x + 4)",
            "2x(x + 2)",
            "(x³ + x² + 2)",
            "x(2x + 2)"
        ]
    },

    {
        numb: 47,
        question: "Operaciones con Martices resta de las siguiente matrices: <span><p>\n</span> " + " A = " + "<latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} 3 & -3 & 2\\\\ -8 & 6 & 2 \\end{vmatrix}}$</latex-js>" + " - " + " <span><p>\n</span> B = " + " <latex-js baseURL="+base_url+">${\\huge \\begin{vmatrix} 5 & -3 & 4\\\\ -4 & 2 & 1 \\end{vmatrix}}$</latex-js>",
        answer: "${\\huge A x B = \\begin{vmatrix} -2 & 0 & -2\\\\ -4 & 4 & 1 \\end{vmatrix}}$",

        options: [
            "<latex-js baseURL="+base_url+">${\\huge A x B = \\begin{vmatrix} -2 & 0 & -2\\\\ -4 & 4 & 1 \\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge A x B = \\begin{vmatrix} 6 & 3 & -2\\\\ -3 & 3 & 0 \\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge A x B = \\begin{vmatrix} 2 & 0 & 2\\\\ 2 & 6 & 2 \\end{vmatrix}}$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge A x B = \\begin{vmatrix} 2 & -4 & 1\\\\ 4 & -2 & 3 \\end{vmatrix}}$</latex-js>"
        ]
    },

    {
        numb: 48,
        question: "Transformaciones lineales: <span><p>\n</span> ¿Qué es rotación?",
        answer:  "Se realiza para un cierto grado el cual es expresado en forma de un ángulo",

        options: [
            "Es una transformación que aplica cada punto del plano en su imagen como en un espejo, respecto a la recta.",
            "Procedimiento inverso de la expansión",
            "s una transformación que incrementa distancias",
            "Se realiza para un cierto grado el cual es expresado en forma de un ángulo"
        ]
    },

    {
        numb: 49,
        question: "La inversa de: <span><p>\n</span>" + "<latex-js baseURL="+base_url+">${\\huge A = \\begin{vmatrix} 2 & 3  \\\\  3 & 4  \\end{vmatrix}}$</latex-js>",
        answer:  "${\\huge = \\begin{vmatrix} -4 & 3  \\\\  3 & -2  \\end{vmatrix} }$",

        options: [
            "<latex-js baseURL="+base_url+">${\\huge = \\begin{vmatrix} -4 & 3  \\\\  3 & -2  \\end{vmatrix} }$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge = \\begin{vmatrix} 6 & -2  \\\\ -4 & 8  \\end{vmatrix} }$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge = \\begin{vmatrix} -6 & 2  \\\\  4 & -8  \\end{vmatrix} }$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge = \\begin{vmatrix} 4 & -3  \\\\  -3 & 22  \\end{vmatrix} }$</latex-js>"
        ]
    },

    {
        numb: 50, 
        question: "La inversa de: <span><p>\n</span>" + "<latex-js baseURL="+base_url+">${\\huge A = \\begin{vmatrix} 3 & -2  \\\\  4 & -3  \\end{vmatrix}}$</latex-js>",
        answer:  "${\\huge = \\begin{vmatrix} 3 & -2  \\\\  4 & -3  \\end{vmatrix} }$",

        options: [
            "<latex-js baseURL="+base_url+">${\\huge = \\begin{vmatrix} 6 & 4  \\\\  4 & 3  \\end{vmatrix} }$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge = \\begin{vmatrix} 3 & -2  \\\\  6 & 2  \\end{vmatrix} }$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge = \\begin{vmatrix} 4 & 2  \\\\   3 & -3  \\end{vmatrix} }$</latex-js>",
            "<latex-js baseURL="+base_url+">${\\huge = \\begin{vmatrix} 3 & -2  \\\\  4 & -3  \\end{vmatrix} }$</latex-js>",
        ]
    },


    
];