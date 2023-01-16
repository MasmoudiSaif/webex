const quizData = [
    {
        question: "Quelle organisation définit les standards Web?",
        a: "Apple Inc.",
        b: "IBM Corporation",
        c: "World Wide Web Consortium",
        d: "Microsoft Corporation",
        correct: "c",
    },
    {
        question: "HTML est considéré comme ______ ?",
        a: "Langage de programmation",
        b: " Langage POO",
        c: "Langage de haut niveau",
        d: " Langage de balisage",
        correct: "d",
    },
    {
        question: "HTML utilise des ______?",
        a: " Balises définis par l’utilisateur",
        b: "Balises prédéfinis",
        c: "Balises fixes définis par le langage",
        d: "Balises uniquement pour les liens",
        correct: "c",
    },
    {
        question: "HTML a été proposé pour la première fois l’année ___",
        a: "1980",
        b: "1990",
        c: "1995",
        d: "2000",
        correct: "b",
    },
    {
        question: "Lequel des éléments suivants n’est pas un exemple de navigateur?",
        a: "Mozilla Firefox",
        b: "Netscape",
        c: "Microsoft Bing",
        d: "Opéra",
        correct: "c",
    },
    {
        question: "Qui est l’auteur principal du HTML?",
        a: "Brendan Eich",
        b: "Tim Berners-Lee",
        c: " Développeur web",
        d: "Google Inc",
        correct: "b",
    },
    {
        question: " Si nous souhaitons définir le style d’un seule élément, quel sélecteur css utiliserons-nous?",
        a: " id",
        b: "text",
        c: "class",
        d: "name ",
        correct: "a",
    },
    {
        question: "La balise HTML qui spécifie un style CSS intégré dans un élément est appelée ____?",
        a: "Design",
        b: "Style",
        c: "Modify",
        d: "Define",
        correct: "b",
    },
    {
        question: "La norme HTML qui n’exige pas des double quotes autour des valeurs d’un attribut est dite ______?",
        a: "HTML 1",
        b: "HTML 3",
        c: "HTML 5",
        d: "HTML 7",
        correct: "c",
    },
    {
        question: "Un type de document HTML plus strict est connu sous ______ ?",
        a: "DHTML",
        b: "XHTML",
        c: "XML",
        d: "HTML",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})