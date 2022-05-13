const quizDB =[
    {
        question:"Q1 :From which country pizza came from ?",
        a:"America",
        b:"London",
        c:"Italy",
        d:"France",
        ans:"ans3"
    },
    {
        question:"Q2 :Who is current president of Ukraine ?",
        a:"Donald Trump",
        b:"Nikola Vlasic",
        c:"Vladmir Putin",
        d:"Volodymyr Zelenskyy",
        ans:"ans4"
        
    },
    { question:"Q3 :Who is director of film Dunkirk ?",
        a:"Christopher Nolan",
        b:"AR Rahman",
        c:"Daniel Freeman",
        d:"Zaeden",
        ans:"ans1"
    }    
    
    ];
    const question = document.querySelector('.question');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');
    const submit = document.querySelector('#submit');
    
    const answers = document.querySelectorAll('.answer')//declared answers because of multiple answers
    const ShowScore = document.querySelector('#ShowScore')
    let questionCount = 0;
    let score = 0;

    const loadQuestion=()=>{
        const questionList=quizDB[questionCount];

        question.innerHTML=questionList.question;

        option1.innerHTML=questionList.a;
        option2.innerHTML=questionList.b;
        option3.innerHTML=questionList.c;
        option4.innerHTML=questionList.d;

    }
    loadQuestion();

    const getCheckAnswer = () => {
        let answer;

        answers.forEach((curAnsElem)=> {
           if (curAnsElem.checked){
            answer = curAnsElem.id;
        }
                   
        });
        return answer;

    };

    submit.addEventListener('click',()=> {

        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer);

        if (checkedAnswer == quizDB[questionCount].ans ){
            score ++;
        }
        questionCount++;

        if (questionCount < quizDB.length){
            loadQuestion();
        }
        else{
            ShowScore.innerHTML = `
            <h3> YOU SCORED :  ${score}/${quizDB.length} <\h3>`
            ;
            ShowScore.classList.remove('ScoreArea');
        }
    
        
    });