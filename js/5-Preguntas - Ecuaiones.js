const base_url = `https://cdn.jsdelivr.net/npm/latex.js/dist/`
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
        question: "Determine que tipo es la siguiente ecuación" + "<latex-js baseURL="+base_url+">$${\\LARGE x { d^2 y \\over dx^2} - { d^4 y \\over dx^4} + y = 0}$$</latex-js>",
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
        question: "y'= 25 + y²; y = 5 tan 5x",
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
        question: "Resolver el siguiente problema:" + "<latex-js baseURL="+base_url+">$${\\LARGE { dy \\over dx} + 2y = 0}$$</latex-js>",
        answer: "ce⁻²ˣ",

        options: [
            "ce²ˣ",
            "ceˣ",
            "ce⁻³ˣ",
            "ce⁻²ˣ"
        ]
    },

    {
        numb: 7,
        question: "Resolver el siguiente problema:"+" <latex-js baseURL="+base_url+">$${\\LARGE { dy \\over dx} =  5y}$$</latex-js>",
        answer: "y = ce⁵ˣ",

        options: [
            "y = ceˣ",
            "y = ce⁵ˣ",
            "y = ce⁴ˣ - cex⁵ˣ",
            "y = ce²ˣ + y = cex⁴ˣ"
        ]
    },

    {
        numb: 8,
        question: "Resuelva la siguiente Ecuación Diferencial Homogenea: 2x dy = (x + y)dx",
        answer:   "y = x + c₁ √x",
 
        options: [
            "y = x + c₁ √x",
            "y = x + c₁ ",
            "y = x + c₁ 2x²",
            "y = x² + c₁ √x"
        ]
    },
    
    {
        numb: 9,
        question: "Resuelva la siguiente Ecuación Diferencial Homogenea: (x - y)dx + x dy = 0",
        answer:   "y = -x ln x + cx",

        options: [
            "y = 3x tan x + c",
            "y = y = x² cos x + cx",
            "y = -x ln x + cx",
            "y = 2x ln x + c"
        ]
    },

    {
        numb: 10,
        question: "Resuelva la siguiente Ecuación Diferencial Exacta: (y + 2) dx + (x + y²) dy",
        answer: "$${\\LARGE xy + 2x + { y^3 \\over 3} = c}$$",

        options: [

            
            "<latex-js baseURL="+base_url+">$${\\LARGE xy + 2x + { y^3 \\over 3} = c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE xy - 2x - { y^3 \\over 3} = c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y + 2x + { y^3 \\over x} = c}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE xy + 2x - { y^3 \\over 3} = c}$$</latex-js>",
        ]
    },

    {
        numb: 11,
        question: "Ecuaciones diferenciales de variables separables:" + "<latex-js baseURL="+base_url+">$${\\LARGE {dy \\over dx} = {3x +4x + 2\\over 2 y - 1}}$$</latex-js>",
        answer:   "y² - 2y = x³ + 2x² + 2x +c",

        options: [
            "y² - 2y = x³ + 2x² - 2x +c",
            "y² - 2y = 2x³ + 2x² - x +c",
            "y² - 2y = 3x³ + 2x +c",
            "y² - 2y = x³ + 2x² + 2x +c"
        ]
    },

    {
        numb: 12,
        question: "Ecuaciones diferenciales de variables separables: " + "<latex-js baseURL="+base_url+">$${\\LARGE { dy \\over dx} = { y cos x \\over 1 - 2y}}$$</latex-js>",
        answer: "ln -2y = sen x + c",

        options: [
            " -2y = cos x + c",
            "ln = sen x + c",
            "ln -2y = cos x + c",
            "ln -2y = sen x + c"
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
        question: "Ecuaciones diferenciales de variables separables: " + "<latex-js baseURL="+base_url+">$${\\LARGE { dy \\over dx} + 4xy = 0}$$</latex-js>",
        answer:   "y = ce²ˣ² + c1",

        options: [
            "y = ex⁻³ˣ² + c",
            "y = ce⁻³ˣ + c",
            "y = ce³ˣ +c",
            "y = ce²ˣ² + c1"
        ]
    },

    {
        numb: 15,
        question: "Ecuaciones diferenciales de variables separables:" + "<latex-js baseURL="+base_url+">$${\\LARGE { dy \\over dx} - eˣ⁺ʸ = 0}$$</latex-js>",
        answer:   "y = -ln(eˣ - c1) ",

        options: [
            "y = -ln(eˣ - c1) ",
            "y = ln(e + c1) ",
            "y = -ln(C - e³ˣ) ",
            "y = ln x(C - e²ˣ) "
        ]
    },

    {
        numb: 16,
        question: "Ecuaciones diferenciales de variables separables: " + "<latex-js baseURL="+base_url+">$${\\LARGE { dy \\over dx} + eˣ⁻ʸ = 0 }$$</latex-js>", 
        answer:   "y = ln(eˣ + c1) + c",

        options: [
            "y = ln(eˣ + c1) + c",
            "y = (C1 - e³ˣ) + c",
            "y = (C1 - e²ˣ) + c",
            "y = ln x(e - c1) + c"
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
        question: "Ecuaciones diferenciales de variables separables: " + "<latex-js baseURL="+base_url+">$${\\LARGE { dy \\over dx} =  x^2 + x^2 y^2 }$$</latex-js>",
        answer:   "y = tan (x³/³ +c)",

        options: [
            "y = tan (x³/³ +c)",
            "y = cosc (x³ +c)",
            "y = sen (x²/² +c)",
            "y = cos (x² +c)"
        ]
    },
    

    {
        numb: 19,
        question: "Ecuaciones diferenciales de variables separables: y' - e³⁺²ʸ =0",
        answer: "$${\\LARGE y =  { ln x (2e^3x + c1) \\over 2}}$$",

        options: [
            
            "<latex-js baseURL="+base_url+">$${\\LARGE y =  { ln x (2e^2x + c1) \\over 3}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y =  { ln x (2e + c1) \\over 4}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y =  { ln x (2e) \\over 3}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y =  { ln x (2e^3x + c1) \\over 2}}$$</latex-js>"
        ]
    },

    {
        numb: 20,
        question: "Ecuaciones diferenciales de variables separables:"+ "<latex-js baseURL="+base_url+">$${\\LARGE  { dy \\over dx} - x³ y² = y²}$$</latex-js>",
        answer:   "y = ³√(ln (1 + x)³ +c1)",

        options: [
            "y = ²√(ln (x)² +c1)",
            "y = √(ln x + c1)",
            "y = ³√(ln (1 + x)³ +c1)",
            "y = √(ln (2 + x)² +c1)"
        ]
    },

    {
        numb: 21,
        question: "Ecuaciones diferenciales exactas:  <span><p>\n</span> eˣ (y³ + xy³ + 1)dx + 3y²(xeˣ - 6)dy = 0",
        answer:   "eˣ (xy³ + 1) - 6y³ = c",

        options: [
            "eˣ (x²) - 3y³ = c",
            "e (xy²) + 6y² = c",
            "exˣ (y³ - 2) + 4y² = c",
            "eˣ (xy³ + 1) - 6y³ = c"
        ]
    },

    {
        numb: 22,
        question: "Ecuaciones diferenciales exactas:  <span><p>\n</span> (2xy + y²)dx + (x² + 2xy -y) dy = 0 ",
        answer:   "x²y + y² x - y²/² = c",

        options: [

            "x² x - y + y² = c",
            "x²y + y² x - y²/² = c",
            "exˣ (y³ - 2) + 4y² = c",
            "eˣ (xy³ + 1) - 6y³ = c"
        ]
    },

    {
        numb: 23,
        question: "Ecuaciones diferenciales exactas: <span><p>\n</span> (x + y cosx)dx + sen x dy = 0",
        answer: "y sen x + x²/² = c",

        options: [
            "y tan x + x² = c",
            "y sen x + x²/² = c",
            "x sen y + x²/² = c",
            "x sen y + x² = c"
        ]
    },

    {
        numb: 24,
        question: "Ecuaciones diferenciales exactas: <span><p>\n</span> (2xeʸ + eˣ)dx + (x² + 1)eʸ dy = 0",
        answer: "x² eʸ + eˣ + eʸ = (x² + 1)eʸ + eˣ = c",

        options: [
            "x² eʸ + eˣ + eʸ = (x² + 1)eʸ + eˣ = c",
            "x² eʸ - eˣ - eʸ = (x² - 1)eʸ - eˣ = c",
            "-3x² eʸ + eˣ = (x²) = c",
            "eʸ + eˣ = (x² - 1) = c"
        ]
    },

    {
        numb: 25,
        question: "Ecuaciones diferenciales lineales:" + "<latex-js baseURL="+base_url+">$${\\LARGE { dy \\over dx} = 5y }$$</latex-js>",  
        answer:   "y = c₁e⁵ˣ",

        options: [
            "y = c₁e⁵ˣ",
            "y = c1e⁵ˣ⁻¹",
            "y = c1eˣ",
            "y = c1eˣ⁺¹"
        ]
    },

    {
        numb: 26,
        question: "Ecuaciones diferenciales lineales: " + "<latex-js baseURL="+base_url+">$${\\LARGE { dy \\over dx} + 2y = 0}$$</latex-js>",
        answer: "y = ce⁻²ˣ = ce⁻²ˣ",

        options: [
            "y = ce²ˣ = ce²ˣ",
            "y = ce⁻²ˣ = ce⁻²ˣ",
            "y = ceˣ = ceˣ",
            "y = ceˣ = ce²ˣ"
        ]
    },

    {
        numb: 27,
        question: "Ecuaciones diferenciales lineales: <span><p>\n</span>"  + "<latex-js baseURL="+base_url+">$${\\LARGE  { de \\over dx} + y = e³ˣ}$$</latex-js>",
                answer:   "$${\\LARGE ce⁻ˣ +  { 1 \\over 4e³ˣ} dx}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE ce⁻ˣ +  { 1 \\over 4e³ˣ} dx}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE ce²ˣ +  { 1 \\over 4eˣ} dx}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE ce³ˣˣ +  { 1 \\over 4e²ˣ} dx}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE ceˣ +  { 1 \\over 4e²ˣˣ} dx}$$</latex-js>"
        ]
    },

    //
    {
        numb: 28,
        question: "Ecuaciones diferenciales lineales:  <span><p>\n</span>" + "<latex-js baseURL="+base_url+">$${\\LARGE  3{ dy \\over dx} + 12y = 4}$$</latex-js>",
        answer:   "$${\\LARGE y = ce⁻⁴ˣ + { 1 \\over 3}}$$",

        options: [
            
            "<latex-js baseURL="+base_url+">$${\\LARGE y = ceˣ + { 3 \\over 4}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y = ce⁻ˣ + { 5 \\over 8}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y = ce⁴ˣ + { 1 \\over 5}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE y = ce⁻⁴ˣ + { 1 \\over 3}}$$</latex-js>"
        ]
    },

    {
        numb: 28,
        question: "Hallar la transformada de Laplace para la función L =  {π}",
        answer:    "$${\\LARGE L = {  π \\over s}}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE L = {  π \\over s}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE L = {  π \\over s²}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE L = {  π \\over 2}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE L = {  π \\over 2s}}$$</latex-js>"
        ]
    },

    {
        numb: 30,
        question: "Determinar la solución general de la ecuación diferencial: " + "<latex-js baseURL="+base_url+">$${\\LARGE 8 { dy \\over dx} + 16y = 0 }$$</latex-js>",
        answer: "y = c₁e²ˣ",

        options: [
            "y = c₁e⁻²ˣ",
            "y = c₁e²ˣ",
            "y = c₁eˣ",
            "y = c₁e⁻ˣ"
        ]
    },

    {
        numb: 31,
        question: "Método de coeficientes idertimados:" + "<latex-js baseURL="+base_url+">$${\\LARGE { d^2 y \\over dx^2} - y = 0}$$</latex-js>",
        answer:   "2x² - x -3",

        options: [
            "2x² + x + 3",
            "2x³ - x",
            "2x² - x -3",
            "x-² + 3"
        ]
    },

    {
        numb: 32,
        question: "Método de coeficientes idertimados:" + "<latex-js baseURL="+base_url+">$${\\LARGE { d^2 y \\over dx^2} - y = 0 }$$</latex-js>" + " la ecuación caracteristicas r² - 1 = 0 ",
        answer:   "y = -2x² + x - 1",

        options: [
            "y = 2x³ + 3x - 2",
            "y = -2x² + x + 1",
            "y = 2x⁴ - 2x - 3",
            "y = -2x² + x - 1"
        ]
    },

    {
        numb: 33,
        question: "Ecuaciones diferenciales exactas:  <span><p>\n</span> (2xeʸ + eˣ)dx + (x² + 1)eʸ dy = 0",
        answer: "x² eʸ + eˣ + eʸ = (x² + 1)eʸ + eˣ = c",

        options: [
            "x² eʸ + eˣ + eʸ = (x² + 1)eʸ + eˣ = c",
            "x² eʸ - eˣ - eʸ = (x² - 1)eʸ - eˣ = c",
            "-3x² eʸ + eˣ = (x²) = c",
            "eʸ + eˣ = (x² - 1) = c"
        ]
    },

    {
        numb: 34,
        question: "Método de variación de parámetros:"+"<latex-js baseURL="+base_url+">$${\\LARGE  {d²y \\over dx²} - y = 2x² - x - 3}$$</latex-js>",
        answer:   "y = eˣ + e²⁻ˣ -2x² + x -1",

        options: [
            "y = eˣ + eˣ -2x³ - x² 1",
            "y = eˣ + e⁻ˣ + 2x + x",
            "y = eˣ + eˣ 2x³ + x",
            "y = eˣ + e²⁻ˣ -2x² + x -1"
        ]
    },

    {
        numb: 35,
        question: "Resolver el siguiente problema: <span><p>\n</span> 3xy' + 5y = 10",
        answer:  "y = 2",
        options: [
            "y = 4",
            "y = 6",
            "y = 8",
            "y = 2"
        ]
    },

    {
        numb: 36,
        question: "Hallar la transformada de Laplace para la función f(t) = 1",
        answer:   "$${\\LARGE L(t) = { 1 \\over s}}$$",

        options: [

            
            "<latex-js baseURL="+base_url+">$${\\LARGE L(t) = { s \\over s^2}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE L(t) = { 2 \\over s}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE L(t) = { 1 \\over s}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE L(t) = { 1 \\over s^2}}$$</latex-js>"
        ]
    },

    {
        numb: 37,
        question: "Hallar la transformada de Laplace para la función f(t) = t",
        answer:   "$${\\LARGE L{1} = { 1 \\over s^2}}$$",

        options: [

            
            "<latex-js baseURL="+base_url+">$${\\LARGE L{1} = { 1 \\over s}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE L{1} = { 2 \\over s}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE L{1} = { s \\over s^2}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE L{1} = { 1 \\over s^2}}$$</latex-js>"
        ]
    },

    {
        numb: 38,
        question: "Hallar la transformada de Laplace para la función f(t) = cosh kt",
        answer:   "$${\\LARGE  { s \\over (s^2 - k^2) }}$$",

        options: [

            "<latex-js baseURL="+base_url+">$${\\LARGE  { s \\over (s^2 - k^2) }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { s^2 \\over (s^2 - k^2) }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 2 \\over (s^2 - k^2) }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { s^3 \\over (s^2 - k^2) }}$$</latex-js>"
        ]
    },

    {
        numb: 39,
        question: "Hallar la transformada de Laplace para la función f(t) = 2t⁴",
        answer:   "$${\\LARGE  { 48 \\over s^5 }}$$",

        options: [

            "<latex-js baseURL="+base_url+">$${\\LARGE  { 48 \\over s^5 }}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 21 \\over s^4 }}$$</latex-js",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 48 \\over s^4 }}$$</latex-js",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 21 \\over s^5 }}$$</latex-js"
        ]
    },

    {
        numb: 40,
        question: "Hallar la transformada de Laplace para la función f(t) = t cos t",
        answer:   "$${\\LARGE  { (s^2 - 1) \\over (s^2 + 1)²}}$$",

        options: [

           
            "<latex-js baseURL="+base_url+">$${\\LARGE  { (s^2 + 1) \\over (s^2 - 1)}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { (s^3 - 3) \\over (s^2 + 1)²}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { (s^2 + 1) \\over (s^3 + 1)}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { (s^2 - 1) \\over (s^2 + 1)²}}$$</latex-js>"
        ]
    },

    {
        numb: 41,
        question: "Hallar la transformada inversa de Laplace: " + "<latex-js baseURL="+base_url+">$${\\LARGE L⁻¹ { 1 \\over s^2} - { 48 \\over s^5} }$$</latex-js>",
        answer: "t - 2t⁴",

        options: [
            "2t - 2t⁴",
            "t + 2t²",
            "t + 2t⁴",
            "t - 2t⁴"
        ]
    },

    {
        numb: 42,
        question: "Hallar la transformada inversa de Laplace:" + "<latex-js baseURL="+base_url+">$${\\LARGE L⁻¹ { (s + 1)^3 \\over s^4}}$$</latex-js>", 
        answer: "$${\\LARGE 1 + 3t + { 3t² \\over 2} + { t³ \\over 6}}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE 1 + 2t + { 3t \\over 2} + { t³ \\over 3}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE 1 - 5t + { 3t² \\over 2} - { t³ \\over 5}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE 1 - 4t + { 3t \\over 2} - { t³ \\over 4}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE 1 + 3t + { 3t² \\over 2} + { t³ \\over 6}}$$</latex-js>"
        ]
    },

    {
        numb: 43,
        question: "Hallar la transformada inversa de Laplace:" + "<latex-js baseURL="+base_url+">$${\\LARGE L⁻¹ { 1 \\over s^2} - { 1 \\over s} + { 1 \\over s - 2}}$$</latex-js>",
        answer:  "t - 1 + e²ᵗ",

        options: [
            "3t - 3 + e²ᵗ",
            "2t + 2 + e²ᵗ",
            "t - 1 + e²",
            "t - 1 + e²ᵗ"
        ]
    },

    {
        numb: 44,
        question: "Hallar la transformada inversa de Laplace:" + "<latex-js baseURL="+base_url+">$${\\LARGE L⁻¹ { 5 \\over s^2 + 49}}$$</latex-js>", 
        answer: "$${\\LARGE  { s \\over 7} sen 7t}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE  { s \\over 7} sen 7t}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 3 \\over s²} cos 5t}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE - { 3 \\over s²} cos 3t}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  { 3 \\over s²} senh 4t}$$</latex-js>"
        ]
    },

    {
        numb: 45,
        question: "Hallar la transformada inversa de Laplace:" + "<latex-js baseURL="+base_url+">$${\\LARGE L⁻¹ { 4s \\over 4s^2 + 1}}$$</latex-js>", 
        answer:   "$${\\LARGE cos { t \\over 2}}$$",

        options: [

            "<latex-js baseURL="+base_url+">$${\\LARGE cos { t \\over 2}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE - sen { t² \\over 2}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE sen² { t² \\over 2}}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE - cos { t \\over 4}}$$</latex-js>"
        ]
    },

    {
        numb: 46,
        question: "Hallar la transformada inversa de Laplace:" + "<latex-js baseURL="+base_url+">$${\\LARGE L⁻¹ { 2s - 6 \\over s^2 + 9}}$$</latex-js>", 
        answer:   "2 cos 3t - 2 sen 3t",

        options: [
            "2 cos 3t - 2 sen 3t²",
            "x tan 3t + 3 cos 4t",
            "2 cos 3t - 2 sen 3t",
            "2 cos 3t³ - 2 sen 3t²"
        ]
    },

    {
        numb: 47,
        question: "Hallar la transformada inversa de Laplace:" + "<latex-js baseURL="+base_url+">$${\\LARGE L⁻¹ { 1 \\over s^3 + 5s}}$$</latex-js>",
        answer:   "$${\\LARGE { 1 \\over 5} - { 1 \\over 5} cos √5t}$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE { 2 \\over 3} - { 1 \\over 3} sen 6t}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 4} + { 1 \\over 6} cos √5t}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 5} - { 1 \\over 5} cos √5t}$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE { 1 \\over 4} + { 1 \\over 4} cos √5t}$$</latex-js>"
        ]
    },

    {
        numb: 48,
        question: "Use la transformada de Laplace para resolver el problema e valores iniciales: " + "<latex-js baseURL="+base_url+">$${\\LARGE  { dy \\over dt} - y = 1, y(0) = 0 }$$</latex-js>",
        answer: "y(t) = -1 + eᵗ",

        options: [
            "y(t) = -3 + e²ᵗ",
            "y(t) = -1 + eᵗ",
            "y(t) = 1 + e⁴ᵗ",
            "y(t) = 2 + e²ᵗ"
        ]
    },

    {
        
        numb: 49,
        question: "Hallar la transformada inversa de Laplace:" + "<latex-js baseURL="+base_url+">$${\\LARGE L⁻¹ { 2s - 6 \\over s^2 + 9}}$$</latex-js>", 
        answer:   "2 cos 3t - 2 sen 3t",

        options: [
            "2 cos 3t - 2 sen 3t²",
            "x tan 3t + 3 cos 4t",
            "2 cos 3t - 2 sen 3t",
            "2 cos 3t³ - 2 sen 3t²"
        ]
    },
    

    {
        numb: 50,
        question: "Use la transformada de Laplace para resolver el problema e valores iniciales: <span><p>\n</span> y' - y = 2 cos 5t, y(0) = 0",
        answer: "$${\\LARGE  -{1 \\over 13} cos 5t + {5 \\over 13} sen 5t + {1 \\over 13} eᵗ }$$",

        options: [
            "<latex-js baseURL="+base_url+">$${\\LARGE  -{1 \\over 13} cos 5t + {5 \\over 13} sen 5t + {1 \\over 13} eᵗ }$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  {1 \\over 13} cos 5t - {5 \\over 13} sen 5t - {1 \\over 13} eᵗ }$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  -{1 \\over 14} cos 5t - {5 \\over 14} sen 5t }$$</latex-js>",
            "<latex-js baseURL="+base_url+">$${\\LARGE  {1 \\over 14} cos 5t + {1 \\over 14} sen 5t }$$</latex-js>"
        ]
    },








];