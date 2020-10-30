var typed;
var questions = ["Ask Alan how the internet works.", "Ask Renae how to write a proper headline.", "Ask Tessa what the conference team is up to.", "Ask Anand about this site."];

function checkTime(){
    let date = new Date();  
    let options2 = {  
        hour: "2-digit", minute: "2-digit"
    }; 
    document.querySelector("#time").innerHTML = date.toLocaleTimeString("en-us", options2);
}

function startKeyboard(){
    document.addEventListener('keyup', event => {
        switch(event.code) {

            // show an interesting random question
            case "KeyQ":
                //todo: do a cool animation on that letter

                var randomNum = Math.floor(Math.random() * questions.length)
                typed.destroy();
                string = 'Learning^400, good choice! </br><em>' + questions[randomNum]+'</em>';
                typed = new Typed('#typed', {
                    strings: [string],
                    typeSpeed: 30,
                    showCursor:false
                });
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
  