const quizData = [
    {
        question: "Procesory Core 2 posiadają współczynnik IPC(Instruction Per Cycle) równy:",
        a: "4",
        b: "3,5",
        c: "2,5",
        d: "2",
        e: "3",
        correct: "b"
    },
    {
        question: "Wykonując instrukcję push byte ptr[eax] procesor używa segmentów:",
        a: "CS i DS",
        b: "ES i DS",
        c: "DS i SS",
        d: "SS i GS",
        e: "FS i CS",
        correct: "a"
    },
    {
        question: "Pośredni bazowy tryb adresowania występuje w instrukcji::",
        a: "inc ecx",
        b: "mov edi, offset zmienna",
        c: "or edx, [ebx+tab]",
        d: "mov [edi*8+tablica],edx",
        e: "mov zmienna, edx",
        correct: "c"
    }, {
        question: "Która instrukcja nie jest poprawna:",
        a: "Fcmovne",
        b: "Fcmovnbe",
        c: "Fcmovnu",
        d: "Fcmovnb",
        e: "Fcmovl",
        correct: "e"
    }, {
        question: "Która z instrukcji nie zmienia flagi Z:",
        a: "Ficom flagi C3 C2 C0",
        b: "Neg flagi OSZAPC",
        c: "Dec flagi OSZAP",
        d: "Cmp flagi OSZAPC",
        e: "Xadd flagi OSZAPC",
        correct: "a"
    }, {
        question: "Która z instrukcji nie zmienia flagi CF ?",
        a: "Cmc zanegowanie CF, flagi C",
        b: "Add dodawanie, flagi OSZAPC",
        c: "Stc ustawienie CF, flagi C",
        d: "Clc zerowanie CF, flagi C",
        e: "Inc flagi OSZAP",
        correct: "e"
    }, {
        question: "Kopiując tekst użyjemy instrukcji:",
        a: "Copysb",
        b: "Movsb",
        c: "Lodsb",
        d: "Cpsb",
        e: "Stosb",
        correct: "b"
    }, {
        question: "Do przeszukiwania bitów wstecz służy instrukcja:",
        a: "bsr",
        b: "btc",
        c: "test",
        d: "lea",
        e: "Fbsf",
        correct: "a"
    }, {
        question: "Jednostkę zarządzania pamięcią Intel wprowadził po raz pierwszy w procesorze:",
        a: "Pentiunm 4",
        b: "Pentium III",
        c: "80486 DX",
        d: "80386",
        e: "80286",
        correct: "d"
    }, {
        question: "Ile rejestrów segmentowych dołożono w trybie EMT64T procesorów Intel:",
        a: "2",
        b: "4",
        c: "6",
        d: "8",
        e: "Żadne z powyższych",
        correct: "e"
    }, {
        question: "Ile rejestrów XMM posiadają w trybie EMT64T procesory Intel:",
        a: "8",
        b: "16",
        c: "32",
        d: "64",
        e: "Nie ma takich rejestrów",
        correct: "e"
    }, {
        question: "Która instrukcja dla liczb bez znaku zmienia bajt na podwójne słowo:",
        a: "Xlatb",
        b: "Movzx",
        c: "Cbw",
        d: "Cbdw",
        e: "Bswap",
        correct: "b"
    }, {
        question: "Która z instrukcji dla liczb ze znakiem przesyła dla warunku mniejszośc?:",
        a: "Cmpbe",
        b: "Movl",
        c: "Movae",
        d: "Cmovnge – ani większe ani równe – czyli mniejsze",
        e: "Cmovnae",
        correct: "d"
    }, {
        question: "Ile instrukcji na słowach może wykonad jedna instrukcja MMX:",
        a: "4",
        b: "8",
        c: "16",
        d: "32",
        e: "64",
        correct: "a"
    }, {
        question: "Gównym konstruktorem procesorów 8086 był:",
        a: "Steve Balmer",
        b: "Steve Jobs",
        c: "Stephen Morse",
        d: "Bill Gates",
        e: "Żadne z powyższych",
        correct: "c"
    }, {
        question: "Ile rejestrów XMM występuje w trybie EM64T procesorów Intel?:",
        a: "8",
        b: "16",
        c: "64",
        d: "256",
        e: "Żadne z powyższych",
        correct: "b"
    }, {
        question: "Natychmiastowy tryb adresowania występuje w instrukcji:",
        a: "Inc ecx",
        b: "Mov edi, offset tabela",
        c: "Mov Zmienna, edx",
        d: "Or Edx, [ebx]",
        e: "Mov [Edi*8+tablica], edx",
        correct: "b"
    }, {
        question: "Po wykonaniu instrukcji || Mov edx, 0f459a01h  ||  Bswap edx || Rejestr edx będzie zawieriał:",
        a: "0f459a01h",
        b: "9a010f45h",
        c: "10a954f0h",
        d: "019a450fh",
        e: "Żadne z powyższych",
        correct: "d"
    }, {
        question: "Instrukcja Dec zmienia flagi:",
        a: "OZAPC",
        b: "OSAPC",
        c: "OSZPC",
        d: "OSZAC",
        e: "OSZAP",
        correct: "e"
    }, {
        question: "Współczesne procesory Intel i7 zbudowane są z około :",
        a: "100 tys, tranzystorów",
        b: "1 mln tranzystorów",
        c: "10 mln tranzystorów",
        d: "100 mln tranzystorów",
        e: "770 mln tranzystorów",
        correct: "e"
    }, {
        question: "Do odwołania się do zmiennych lokalnych stosuje się rejestr:",
        a: "Eax",
        b: "Ebx",
        c: "Ebp",
        d: "Esi",
        e: "Ds",
        correct: "c"
    }, {
        question: "Która z instrukcji nie jest poprawna:",
        a: "Fmul",
        b: "fadd ST, ST(1)",
        c: "faddp ST, ST(1)",
        d: "fsubr ST(1),ST",
        e: "fsubrp ST(1),ST",
        correct: "c"
    }, {
        question: "Która z instrukcji zmienia flagę C:",
        a: "Bswap",
        b: "Dec",
        c: "Ewd",
        d: "Fmul",
        e: "Fcomi",
        correct: "e"
    }, {
        question: "Która z instrukcji wpisuję 0 do flagi CF?:",
        a: "cmc",
        b: "eld",
        c: "stc",
        d: "clc",
        e: "vld",
        correct: "d"
    }, {
        question: "Która z instrukcji pozwala na poszukiwanie podanego znaku w tekście?:",
        a: "Scasb",
        b: "Movsd",
        c: "Lodsw",
        d: "Cmpsb",
        e: "Stosw",
        correct: "a"
    }, {
        question: "Prefix LOCK może odnosid się do instrukcji:",
        a: "Nop",
        b: "Xchg",
        c: "Cmp",
        d: "Mov",
        e: "Fdiv",
        correct: "b"
    }, {
        question: "Instrukcjie AVX Intel wprowadził po raz pierwszy w procesorze:",
        a: "Pentium II",
        b: "Pentium 4",
        c: "Pentium D",
        d: "Sandy Bridge",
        e: "Ivy Bridge",
        correct: "d"
    }, {
        question: "Ile rejestrów XMM posiadająw trybie EMT64T procesory Intel:",
        a: "8",
        b: "16",
        c: "32",
        d: "64",
        e: "Nie ma takich rejestrów",
        correct: "e"
    }, {
        question: "Ile rejestrów XMM posiadająw trybie EM64T procesory Intel:",
        a: "8",
        b: "16",
        c: "32",
        d: "64",
        e: "Nie ma takich rejestrów",
        correct: "b"
    }, {
        question: "Do prostego szyfrowania danych może służyd instrukcja:",
        a: "Movsd",
        b: "Btr",
        c: "Cwde",
        d: "Xlatb",
        e: "Les",
        correct: "d"
    }, {
        question: "Która z instrukcji dla liczb ze znakiem przesyła dla warunku większości ?:",
        a: "Movg",
        b: "Movae",
        c: "Cmovnle",
        d: "Cmoka",
        e: "Cmpa",
        correct: "c"
    }, {
        question: "Do zmiany kolejności słów w rejestrze MMX służy instrukcja:",
        a: "Ldmxesr",
        b: "Pmovmskb",
        c: "Cmovnge",
        d: "Psadbw",
        e: "Pushfw",
        correct: "e"
    },
    {
        question: "Wykonanie instrukcji  Push [edx] a następnie Pop[ebx]",
        a: "Xor [edx], [ebx]",
        b: "Xchg [edx],[ebx]",
        c: "Xchg edx,ebx",
        d: "Fxch [edx],[ebx]",
        e: "Żadne z powyższych",
        correct: "e"
    },
    {
        question: "Instrukcja włączająca przerwania to:",
        a: "Sti - set interrupt",
        b: "Cmc",
        c: "Cmp",
        d: "Stp",
        e: "Cli",
        correct: "a"
    },
    {
        question: "Po wykonaniu instrukcji Mov edx, 0f459101h  --->> Bswap edx Rejestr edx będzie zawierał:",
        a: "0f459a01h",
        b: "9a010f45h",
        c: "10a95410h",
        d: "0191450fh",
        e: "Żadne z powyższych",
        correct: "d"
    },
    {
        question: "Innstrukcja Dec zmienia flagi",
        a: "OSZAPC",
        b: "OSAPC",
        c: "OSZPC",
        d: "OSZPC",
        e: "OSZAP",
        correct: "e"
    },
    {
        question: "Po wykonaniu której instrukcji zawartośd AL. Zmieni się 0c9h na 92h?",
        a: "Or al,92h",
        b: "Neg al",
        c: "Rol al,l",
        d: "Shl al,l",
        e: "Mov 92h, al",
        correct: "d"
    },
    {
        question: "W którym procesorze Intel po raz pierwszy zastosował tryb chorniony?:",
        a: "8086",
        b: "80286",
        c: "80386",
        d: "Pentium Pro",
        e: "Żadne z powyższych",
        correct: "b"
    },
    {
        question: "W którym roku powstał pierwszy procesor?:",
        a: "1972",
        b: "1971",
        c: "1967",
        d: "1975",
        e: "1978",
        correct: "b"
    },
    {
        question: "Natychmiastowy tryb adresowania występuje w instrukcji:",
        a: "or edx,[ebx]",
        b: "inc ecx",
        c: "mov edi, offset tabela",
        d: "mov [edi*8+tablica],edx",
        e: "mov zmienna, edx",
        correct: "c"
    },
    {
        question: "Po wykonaniu której instrukcji rejestr edx będzie zawierał sumę zawartości rejestrów eax i ebx",
        a: "add edx,eax,ebx",
        b: "sbb edx,eax,ebx",
        c: "żadna z powyższych",
        d: "lea edx,[eax+ebx]",
        e: "mul edx,eax,ebx",
        correct: "d"
    },
    {
        question: "Instrukcja cpiuid zmienia rejestry:",
        a: "nie ma takiej instrukcji",
        b: "eax;edx",
        c: "eax;ebx",
        d: "eax;ebx;ecx;edx",
        e: "eax",
        correct: "d"
    },
    {
        question: "Stosując rejestr BP do adresowania procesor odwołuje się do segmentu:",
        a: "DS",
        b: "SS",
        c: "GS",
        d: "ES",
        e: "CS",
        correct: "b"
    },
    {
        question: "W trybie 32 bitowym procesorów intel rejestry segmentowane są?:",
        a: "64b",
        b: "48b",
        c: "32b",
        d: "16b",
        e: "8b",
        correct: "d"
    },
    {
        question: "Jaki tryb adresowania występuje w instrukcji mov ebx, eax:",
        a: "pośredni bazowo-indeksowy",
        b: "żaden z pozostałych",
        c: "bezpośredni",
        d: "pośredni bazowy",
        e: "natychmiastowy",
        correct: "b"
    },
    {
        question: "Stronicowanie pamięci zostało wprowadzone po raz pierwszy przez Intela w procesorze:",
        a: "8086",
        b: "80286",
        c: "80486DX",
        d: "Pentium Pro",
        e: "80386",
        correct: "e"
    },
    {
        question: "Procesor 8086 zbudowany jest z:",
        a: "8086 tranzystorów",
        b: "86 tys. tranzystorów",
        c: "29 tys. tranzystorów",
        d: "1,32 mln tranzystorów",
        e: "żadne z powyższych",
        correct: "c"
    },
    {
        question: "Maksymalna częstotliwość taktowania procesora 4004 firmy Intel to:",
        a: "740 MHz",
        b: "74 kHz",
        c: "740 kHz",
        d: "740 Hz",
        e: "74 Mhz",
        correct: "c"
    },
    {
        question: "By wykryć, że pierwszy argument (U2) porównania jest mniejszy bądź równy wykonami:",
        a: "jnle",
        b: "jge",
        c: "jnb",
        d: "jng",
        e: "ja",
        correct: "d"
    },
    {
        question: "By wykryć, że pierwszy argument (U2) porównania jest większy wykonamy:",
        a: "jng",
        b: "jnb",
        c: "jnle",
        d: "ja",
        e: "jge",
        correct: "c"
    },
    {
        question: "W instrukcji [ebx+edi*8+tablica],edx występuje tryb adresowania:",
        a: "pośredni bazowy",
        b: "natychmiastowy",
        c: "żaden z pozostałych",
        d: "bezpośredni",
        e: "pośredni bazowo-indeksowy",
        correct: "e"
    },
    {
        question: "Instrukcja zmieniająca rejestr flag to",
        a: "cwd",
        b: "xchg",
        c: "jnz",
        d: "fadd",
        e: "fcomip",
        correct: "e"
    },
    {
        question: "Pośredni rejestrowy tryb adresowania występuje w instrukcji",
        a: "or edx, [ebx]",
        b: "mov edi,offset tabela",
        c: "mov [edi*8+tablica],edx",
        d: "inc ecx",
        e: "mov zmienna, edx",
        correct: "a"
    }
    ,
    {
        question: "Ile rejestrów segmentowych wysępuje w trybie EM64T procesorów Intel",
        a: "8",
        b: "4",
        c: "2",
        d: "6",
        e: "12",
        correct: "d"
    },
    {
        question: "Ile rejestrów ogólnego przeznaczenia dodano w trybie EM64T procesorów Intela",
        a: "32",
        b: "2",
        c: "4",
        d: "żadne z pozostałych",
        e: "16",
        correct: "d"
    },
    {
        question: "Instrukcja włączająca przerwania to:",
        a: "cmp",
        b: "cli",
        c: "cmc",
        d: "stp",
        e: "sti",
        correct: "e"
    },
    {
        question: "Procesor 8086",
        a: "Żadne z pozostałych",
        b: "1978",
        c: "1974",
        d: "1970",
        e: "1986",
        correct: "b"
    },
    {
        question: "Która instrukcja pozwala dodać zawartość dwóch rejestrów i stałej",
        a: "add",
        b: "fadd",
        c: "adc",
        d: "żadna z pozostałych",
        e: "lea",
        correct: "e"
    },
    {
        question: "Która z instrukcji jest poprawna",
        a: "movsx eax,bx",
        b: "movsx ax,ebx",
        c: "movsx al,bx",
        d: "movsx eax,ebx",
        e: "żadna z pozostałych",
        correct: "a"
    },
    {
        question: "Po wykonaniu, której instrukcji zawartość AL zmieni się z 0c9h na 0cbh",
        a: "mov 43, al",
        b: "shl al,1",
        c: "rol al,1",
        d: "or al,43h",
        e: "neg al",
        correct: "d"
    },
    {
        question: "Która z instrukcji nie jest poprawna",
        a: "fdiv st,st(1)",
        b: "fdivrp st(1),st",
        c: "fdivp st,st(1)",
        d: "fdiv",
        e: "fdivr st(1),st",
        correct: "c"
    },
    {
        question: "W którym procesorze Intela pojawił się po raz pierwszy tryb chroniony?",
        a: "8086",
        b: "80286",
        c: "80486DX",
        d: "Pentium Pro",
        e: "zadnego z powyższych",
        correct: "b"
    },
    {
        question: "Parametry aktualne przechowuje się w segmencie:",
        a: "CS",
        b: "DS",
        c: "ES",
        d: "SS",
        e: "FS",
        correct: ""
    },
    {
        question: "Indeksowy tryb adresowania występuje w instrukcji:",
        a: "inc  esi",
        b: "mov  edi, offset zmienna",
        c: "mov zmienna, rdx",
        d: "or edx, [rbx]",
        e: "mov [rax*8+tablica],rdx",
        correct: "e"
    },
    {
        question: "Która z instrukcji nie jest poprawna?",
        a: "fmul",
        b: "fadd st,st(1)",
        c: "fstp st(1)",
        d: "fbld st(1)",
        e: "fsubr st(1),st",
        correct: "d"
    },
    {
        question: "Która z instrukcji nie zmienia flagi P?",
        a: "dec",
        b: "cmp",
        c: "paddd",
        d: "xadd",
        e: "fcomi",
        correct: "c"
    },
    {
        question: "Która z instrukcji neguje flagę CF?",
        a: "cmc",
        b: "stc",
        c: "cld",
        d: "std",
        e: "clc",
        correct: "a"
    },
    {
        question: "Która z instrukcji umożliwia wpisanie wartości do dwu rejestrów?",
        a: "rlc",
        b: "lds",
        c: "add",
        d: "movbe",
        e: "żadna z powyższych",
        correct: "b"
    },
    {
        question: "Która z instrukcji pozwala na wypełnienie tekstu znakiem?",
        a: "scasb",
        b: "movsd",
        c: "lodsd",
        d: "cmpsb",
        e: "stosb",
        correct: "a"
    },
    {
        question: "Prefix LOCK nie odnosi się do instrukcji:",
        a: "lea",
        b: "btr",
        c: "xchg",
        d: "cmpxch8b",
        e: "neg",
        correct: "a"
    },
    {
        question: "Instrukcje SSE Intel wprowadził po raz pierwszy w procesorze:",
        a: "Ivy Bridge",
        b: "Sandy Bridge",
        c: "Core2Duo",
        d: "Pentium III",
        e: "Pentium MMX",
        correct: "d"
    },
    {
        question: "Ile rejestrów YMM używają w trybie x86 procesory Intel?",
        a: "8",
        b: "16",
        c: "32",
        d: "64",
        e: "nie ma takich rejestrów",
        correct: "e"
    },
    {
        question: "Która instrukcja dla liczb ze znakiem zmienia słowo na podwójne słowo?",
        a: "movzx",
        b: "cbw",
        c: "cwde",
        d: "xlatb",
        e: "bswap",
        correct: "a"
    },
    {
        question: "Która z instrukcji dla liczb bez znaku przesyła dla warunku większości?",
        a: "cmpbe",
        b: "movb",
        c: "movac",
        d: "cmovnge",
        e: "cmovnbe",
        correct: "e"
    },
    {
        question: "Do zmiany kolejności słów w rejestrze MMX służy instrukcja",
        a: "cmovnge",
        b: "pmovmsb",
        c: "psadbw",
        d: "pshufw",
        e: "ldmxcsr",
        correct: "d"
    }
]

const questionEl = document.querySelector('.quiz-questions__title');
const submitBtn = document.querySelector('.submitBtn');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const answerELs = document.querySelectorAll('.answer');
const quiz_question = document.querySelector('.list');
const info = document.querySelector('.info')
const reload = document.querySelector('.reload');
const questionCounter = document.querySelector('.question-counter')
const points = document.querySelector('.points');
const number = document.querySelector('.number');
let currentQuiz = GetRandQuestion();
let score = 0;

loadQuiz();

reload.addEventListener('click', () => {
    // currentQuizData = quizData[0];

    // currentQuiz = GetRandQuestion();
    deselectAnswer()
    data();
})


function GetRandQuestion() {
    return Math.floor(Math.random() * (quizData.length - 1)) + 1;
};


function loadQuiz() {
    // let currentQuiz = randQuestion();
    currentQuizData = quizData[currentQuiz];
    // questionCounter.innerHTML = `question ${currentQuiz + 1}/${quizData.length}`
    data();
}

function data() {
    questionEl.innerText = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    e_text.innerHTML = currentQuizData.e;
}
function deselectAnswer() {
    answerELs.forEach(answerEl => {
        answerEl.checked = false;
    });
}
function getAnswer() {
    let answer = undefined;

    answerELs.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;

        }
        else if (!answerEl.checked && currentQuiz < quizData.length) {
            info.classList.add('show');
            info.innerHTML = `You didn't check it`;

        }
    });
    return answer;
}



submitBtn.addEventListener("click", () => {
    const answer = getAnswer();

    deselectAnswer();
    if (answer) {
        console.log(quizData[currentQuiz].correct)
        if (answer == quizData[currentQuiz].correct) {
            // console.log(`score: ${score}`);
            info.innerHTML = `Poprawna odpowiedź`;
            currentQuiz++
            score++;
        } else {
            info.innerHTML = `You didn't check itsdasd`;
            info.innerText = `Błąd poprawna odpowiedź to ${quizData[currentQuiz].correct}`
            score = 0
        }





        console.log(`current quiz: ${currentQuiz}`)
        if (currentQuiz < quizData.length) {
            loadQuiz()
            points.innerHTML = `Zdobyłeś ${score} punktów`

            // info.innerHTML = ``;
        }
        // else {
        // info.innerHTML = `You finished, your score is ${score}/${quizData.length}`
        // }
    }

})



