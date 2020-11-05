var typed;
var questions = ["Ask Alan how the internet works.", "Ask Renae how to write a proper headline.", "Ask Tessa about the most interesting TED event she's helped create.", "Ask Yael about her classes on social justice", "Ask Alan about his most recent Damn Interesting episode", "Ask Connie about her PhD thesis.", "Ask Renae about the most bizarre story she has written", "Ask Tessa about the most Canadian part of her personality/life", "Ask Alan about his favorite place in Utah","Ask Justin about his favorite Roman emperor", " Ask Anand about his dream design project", "Ask Connie about her favorite online conspiracy theory","Ask Justin what he'd be doing if he hadn't gone into tech","Ask Yael about the last book she's read","Ask Alan about his thoughts on TikTok", "Ask Tessa about her favorite vacation spot","Ask Anand about his cast iron skillet baby", "Ask Connie about her perfect day", "Ask everyone to share the cutest photo of their child or pet"];

function checkTime(){
    let date = new Date();  
    let options2 = {  
        hour: "2-digit", minute: "2-digit"
    }; 
    document.querySelector("#time").innerHTML = date.toLocaleTimeString("en-us", options2);

    var hour = date.getHours();
    if(hour < 11){
        document.querySelector("#greeting").innerHTML = "Morning";
    }
    else if(hour < 17){
        document.querySelector("#greeting").innerHTML = "Good afternoon";
    }
    else{
        document.querySelector("#greeting").innerHTML = "Good night";
    }

}

function startKeyboard(){
    document.addEventListener('keyup', event => {
        switch(event.code) {

            // show an interesting random question
            case "KeyQ":
                //todo: do a cool animation on that letter

                var randomNum = Math.floor(Math.random() * questions.length)
                typed.destroy();
                string = '^1500Learning^400, good choice! </br>^750<em>' + questions[randomNum]+"</em> <br/>^750Press <strong>[q]</strong> to see another question.";
                typed = new Typed('#typed', {
                    strings: [string],
                    typeSpeed: 30,
                    showCursor:false
                });

                document.getElementById("main").style.backgroundColor = "rgb(158 52 255)";
                break;

            // show a cool gif
            case "KeyG":
                window.open("https://giphy.com/search/cat");
                break;

            // show random TED talk 
            case "KeyT":
                window.open("https://www.ted.com/talks/angela_koine_flynn_the_science_of_skin_color");
                break;
        }
    })

}

window.onload = function(){
    checkTime();

    typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 30,
        showCursor:false
    });

    startKeyboard();

}
  