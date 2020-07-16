var opacity = 0;
var sponfuncCalls = 0;
var funcCalls = localStorage.getItem("sessions");
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("time").textContent = minutes + ":" + seconds;

        if (--timer < 0) {
           
            clearInterval(interval);
            sponfuncCalls++
            funcCalls++
           
            opac();
            changetitle();
            localStorage.setItem("sessions", funcCalls);
            alert("Session number " + sponfuncCalls + " done!" );
            document.getElementById('div-count').textContent = "You have done " + sponfuncCalls + " pomodoro session(s) ";
            document.getElementById('div-total').textContent = " " + funcCalls + " pomodoro session(s) total";
        }
    }, 1000);
}

function stopTimer() {
    clearInterval;
    return;
}
var x = false;


function pomo() {
    revert();
    var theduration = document.getElementById("ran").value;
    document.getElementById('div-count').textContent = "Get to Work!";
    var timing = 60 * theduration,
        display = document.querySelector('#time');
        x = true;
        startTimer(timing, display);
};



function opac(sessions){
        sess = document.getElementById("rang").value;
        opacity += (1 / sess);
        console.log((1 / sess));
        $('#cover').css("opacity",opacity);
    

};

function cancel() {
    if(x) {
        clearInterval(interval);
        document.getElementById('div-count').textContent = "You have killed a tree :(";
        x = false;

    }else {
        return;
    }
   
};


function yababa() {
    console.log("works");
};


function PlaySound(soundObj) {
    var sound = document.getElementById("soundObj");
    sound.Play();
  }

 

function ranger() {
       console.log(document.getElementById("ran").value);
       document.getElementById("slideval").textContent = document.getElementById("ran").value;
}

function ranger2() {
    console.log(document.getElementById("rang").value);
    document.getElementById("slidevalu").textContent = document.getElementById("rang").value;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


function handleMousePos(event) {
    var mouseClickWidth = event.clientX;
    if(mouseClickWidth >=250){
          document.getElementById("mySidenav").style.width='0px'
         }
}

document.addEventListener("click", handleMousePos);

function changetitle() {
  _title = "SESSION DONE";
  document.title = _title;
  return;
}

function revert(){
  _title_ = "POMO";
  document.title = _title_;
  return;
}

