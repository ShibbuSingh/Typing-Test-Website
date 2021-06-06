const setOfWords = ["Nature in the broadest sense is the natural physical material world or universe. Nature can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.",
                    "If you want to live a successful life, you first have to think about your definition of success. What do you want to achieve in life? Is it wealth? Friendship? A legacy that people will talk about long after your death?",
                    "Achieving your goals in life often starts close to yourself. Consider what you are good at and what you enjoy doing. Things you like to do are easier to sustain and give you more energy than things you do not feel passionate about. Thinking about what gives you energy will help you determine how you can become successful.",
                    "If you have thought carefully about your goal(s) and what you consider success, write it all down. A busy life and daily worries can dilute your plans and cause you to lose focus over time. Write your goals in a few short words or sentences on a sheet of paper and keep it in a place where it will be easy to find. If you still have a paper agenda, you can write your notes there. If you work with a digital agenda, set your goals as a recurring appointment in your calendar.",
                    "If you have a clear focus, get started. Do not daydream. Do not keep talking about your plans. Just start acting. If your plan is big and ambitious, make sure you cut it down into smaller steps that are clear and feasible.",
                    "Trust yourself, but do not overestimate your abilities. Determine what you are good at and what gives you the energy to continue. By sharing your plan with others, you may find the energy you need to keep going."
]

const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;


const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    console.log(endTime);
    let totalTime = ((endTime-startTime)/1000);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);
    let finalMsg = "Speed: "+speed+ " w/m. ";
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;

}

const compareWords = (str1, str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    // arrayName then for each then it will take whole function with value
    //and index no. of that array

    words1.forEach(function (item, index) {
        if (item == words2[index]){
            cnt++;
        }
    })

    let errorWords = ( words1.length - cnt);
    return (cnt + " correct out of "+ words1.length+ " words and the total number of error are "+ errorWords+".")

}

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener("click", function(){
    if(this.innerText == "Start"){
        typeWords.disabled = false;
        playGame();
    }
    else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }

})


