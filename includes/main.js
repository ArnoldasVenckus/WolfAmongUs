let vid = document.getElementById("video");
let vid1 = document.getElementById("video1");
let vid2 = document.getElementById("video2");
let vid3 = document.getElementById("video3");
let vid4 = document.getElementById("video4");
let vid5 = document.getElementById("video5");
let vid6 = document.getElementById("video6");
let vid7 = document.getElementById("video7");
let vid8 = document.getElementById("video8");
let vid9 = document.getElementById("video9");
let vid10 = document.getElementById("video10");
let vid11 = document.getElementById("video11");
let vid12 = document.getElementById("video12");
let vid13 = document.getElementById("video13");
let vid14 = document.getElementById("video14");
let vid15 = document.getElementById("video15");
let vid16 = document.getElementById("video16");
let vid17 = document.getElementById("video17");
let vid18 = document.getElementById("video18");
let vid19 = document.getElementById("video19");
let vid20 = document.getElementById("video20");
let vid21 = document.getElementById("video21");
let vid22 = document.getElementById("video22");
let vid23 = document.getElementById("video23");
let vid24 = document.getElementById("video24");
let vid25 = document.getElementById("video25");
let vid26 = document.getElementById("video26");
let vid27 = document.getElementById("video27");
let vid28 = document.getElementById("video28");
let vid29 = document.getElementById("video29");
let vid30 = document.getElementById("video30");
let vid31 = document.getElementById("video31");
let vid32 = document.getElementById("video32");
let vid33 = document.getElementById("video33");
let vid34 = document.getElementById("video34");
let vid35 = document.getElementById("video35");
let vid36 = document.getElementById("video36");
let vid37 = document.getElementById("video37");
let vid38 = document.getElementById("video38");
let leftBubble1 = document.querySelector("#bubble_l_1");
let rightBubble1 = document.querySelector("#bubble_r_1");
let leftBubble2 = document.querySelector("#bubble_l_2");
let rightBubble2 = document.querySelector("#bubble_r_2");
let leftBubble3 = document.querySelector("#bubble_l_3");
let rightBubble3 = document.querySelector("#bubble_r_3");
let leftBubble4 = document.querySelector("#bubble_l_4");
let rightBubble4 = document.querySelector("#bubble_r_4");
let leftBubble5 = document.querySelector("#bubble_l_5");
let rightBubble5 = document.querySelector("#bubble_r_5");
let leftBubble6 = document.querySelector("#bubble_l_6");
let rightBubble6 = document.querySelector("#bubble_r_6");
let leftBubble7 = document.querySelector("#bubble_l_7");
let rightBubble7 = document.querySelector("#bubble_r_7");
let leftBubble8 = document.querySelector("#bubble_l_8");
let rightBubble8 = document.querySelector("#bubble_r_8");
let leftBubble9 = document.querySelector("#bubble_l_9");
let rightBubble9 = document.querySelector("#bubble_r_9");
let leftBubble10 = document.querySelector("#bubble_l_10");
let rightBubble10 = document.querySelector("#bubble_r_10");
let leftBubble11 = document.querySelector("#bubble_l_11");
let rightBubble11 = document.querySelector("#bubble_r_11");
let checkpoint1 = document.querySelector("#checkpoint1");
let checkpoint2 = document.querySelector("#checkpoint2");
let checkpoint3 = document.querySelector("#checkpoint3");
let checkpoint4 = document.querySelector("#checkpoint4");
let checkpoint5 = document.querySelector("#checkpoint5");
let checkpoint6 = document.querySelector("#checkpoint6");
let checkpoint7 = document.querySelector("#checkpoint7");
let checkpoint8 = document.querySelector("#checkpoint8");
let checkpoint9 = document.querySelector("#checkpoint9");
let body = document.querySelector("#body");

// function speechBubbles(lb, lefttext, rb, righttext){
//     lb.innerHTML=lefttext;
//     rb.innerHTML=righttext;
//     lb.style.display="inline";
//     rb.style.display="inline";
// }

// vid.onended = speechBubbles(leftBubble1, "I'm looking at a 3 foot toad.", rightBubble1, "Enough excuses, Toad.");

// function videoLoader(currentVideo, nextVideo, lb, rb, videoSrc){
//     currentVideo.style.display="none";
//     nextVideo.src=videoSrc;
//     nextVideo.style.display="inline";
//     nextVideo.setAttribute("autoplay", 1);
//     lb.style.display="none";
//     rb.style.display="none";
// }

// leftBubble1.addEventListener("click", videoLoader(vid, vid1, leftBubble1, rightBubble1, "videos/scene2good.mp4"));

checkpoint1.addEventListener("click", function(){
    vid.style.display="none";
    vid5.src = "videos/scene6stairs.mp4";
    vid5.style.display="inline";
    vid5.setAttribute("autoplay", 1);
});

checkpoint2.addEventListener("click", function(){
    vid.style.display="none";
    vid9.src = "videos/scene10armcranksuccess.mp4";
    vid9.style.display="inline";
    vid9.setAttribute("autoplay", 1);
});

checkpoint3.addEventListener("click", function(){
    vid.style.display="none";
    vid12.src = "videos/scene13throatpunchSuccess.mp4";
    vid12.style.display="inline";
    vid12.setAttribute("autoplay", 1);
});

checkpoint4.addEventListener("click", function(){
    vid.style.display="none";
    vid18.src = "videos/scene19firstbladedodgesuccess.mp4";
    vid18.style.display="inline";
    vid18.setAttribute("autoplay", 1);
});

checkpoint5.addEventListener("click", function(){
    vid.style.display="none";
    vid27.src = "videos/scene28forthfacepunchfailure.mp4";
    vid27.style.display="inline";
    vid27.setAttribute("autoplay", 1);
});

checkpoint6.addEventListener("click", function(){
    vid.style.display="none";
    vid28.src = "videos/scene29axedodgesuccess.mp4";
    vid28.style.display="inline";
    vid28.setAttribute("autoplay", 1);
});

checkpoint7.addEventListener("click", function(){
    vid.style.display="none";
    vid30.src = "videos/scene30axeholdsuccess.mp4";
    vid30.style.display="inline";
    vid30.setAttribute("autoplay", 1);
});

checkpoint8.addEventListener("click", function(){
    vid.style.display="none";
    vid32.src = "videos/scene31disarmsuccess.mp4";
    vid32.style.display="inline";
    vid32.setAttribute("autoplay", 1);
});

checkpoint9.addEventListener("click", function(){
    vid.style.display="none";
    vid33.src = "videos/scene32axesmacksuccess.mp4";
    vid33.style.display="inline";
    vid33.setAttribute("autoplay", 1);
});

vid.onended = function(){
    leftBubble1.innerHTML = "I'm looking at a 3 foot toad.";
    rightBubble1.innerHTML = "Enough excuses, Toad.";
    leftBubble1.style.display="inline";
    rightBubble1.style.display="inline";
}

leftBubble1.addEventListener("click", function(){
    vid.style.display="none";
    vid1.src = "videos/scene2good.mp4";
    vid1.style.display="inline";
    vid1.setAttribute("autoplay", 1);
    leftBubble1.style.display="none";
    rightBubble1.style.display="none";
});

rightBubble1.addEventListener("click", function(){
    vid.style.display="none";
    vid1.src = "videos/scene2enoughexcuses.mp4";
    vid1.style.display="inline";
    vid1.setAttribute("autoplay", 1);
    leftBubble1.style.display="none";
    rightBubble1.style.display="none";
});

vid1.onended = function(){
    leftBubble2.innerHTML = "Get it fixed.";
    rightBubble2.innerHTML = "Not my problem.";
    leftBubble2.style.display="inline";
    rightBubble2.style.display="inline";
}

leftBubble2.addEventListener("click", function(){
    vid1.style.display="none";
    vid2.src = "videos/scene3good.mp4";
    vid2.style.display="inline";
    vid2.setAttribute("autoplay", 1);
    leftBubble2.style.display="none";
    rightBubble2.style.display="none";
});

rightBubble2.addEventListener("click", function(){
    vid1.style.display="none";
    vid2.src = "videos/scene3notmyproblem.mp4";
    vid2.style.display="inline";
    vid2.setAttribute("autoplay", 1);
    leftBubble2.style.display="none";
    rightBubble2.style.display="none";
});

vid2.onended = function(){
    leftBubble3.innerHTML = "So what have I walked into?";
    rightBubble3.innerHTML = "...";
    leftBubble3.style.display="inline";
    rightBubble3.style.display="inline";
}

leftBubble3.addEventListener("click", function(){
    vid2.style.display="none";
    vid3.src = "videos/scene4good.mp4";
    vid3.style.display="inline";
    vid3.setAttribute("autoplay", 1);
    leftBubble3.style.display="none";
    rightBubble3.style.display="none";
});

rightBubble3.addEventListener("click", function(){
    vid2.style.display="none";
    vid3.src = "videos/scene4silence.mp4";
    vid3.style.display="inline";
    vid3.setAttribute("autoplay", 1);
    leftBubble3.style.display="none";
    rightBubble3.style.display="none";
});

vid3.onended = function(){
    leftBubble4.innerHTML = "Why's he so pissed?";
    rightBubble4.innerHTML = "Do it yourself.";
    leftBubble4.style.display="inline";
    rightBubble4.style.display="inline";
}

leftBubble4.addEventListener("click", function(){
    vid3.style.display="none";
    vid4.src = "videos/scene5good.mp4";
    vid4.style.display="inline";
    vid4.setAttribute("autoplay", 1);
    leftBubble4.style.display="none";
    rightBubble4.style.display="none";
});

rightBubble4.addEventListener("click", function(){
    vid3.style.display="none";
    vid4.src = "videos/scene5doityourself.mp4";
    vid4.style.display="inline";
    vid4.setAttribute("autoplay", 1);
    leftBubble4.style.display="none";
    rightBubble4.style.display="none";
});

vid4.onended = function(){
    vid4.style.display="none";
    vid5.src = "videos/scene6stairs.mp4";
    vid5.style.display="inline";
    vid5.setAttribute("autoplay", 1);
}

vid5.onended = function(){
    leftBubble5.innerHTML = "Knock";
    rightBubble5.innerHTML = "Kick in";
    leftBubble5.style.display="inline";
    rightBubble5.style.display="inline";
}

leftBubble5.addEventListener("click", function(){
    vid5.style.display="none";
    vid6.src = "videos/scene7knock.mp4";
    vid6.style.display="inline";
    vid6.setAttribute("autoplay", 1);
    leftBubble5.style.display="none";
    rightBubble5.style.display="none";
});

rightBubble5.addEventListener("click", function(){
    vid5.style.display="none";
    vid6.src = "videos/scene7kick.mp4";
    vid6.style.display="inline";
    vid6.setAttribute("autoplay", 1);
    leftBubble5.style.display="none";
    rightBubble5.style.display="none";
});

vid6.onended = function(){
    leftBubble6.innerHTML = "Everyone calm down!";
    rightBubble6.innerHTML = "Alright, why'd you hit her?";
    leftBubble6.style.display="inline";
    rightBubble6.style.display="inline";
}

leftBubble6.addEventListener("click", function(){
    vid6.style.display="none";
    vid7.src = "videos/scene8calmdown.mp4";
    vid7.style.display="inline";
    vid7.setAttribute("autoplay", 1);
    leftBubble6.style.display="none";
    rightBubble6.style.display="none";
});

rightBubble6.addEventListener("click", function(){
    vid6.style.display="none";
    vid7.src = "videos/scene8whydidyouhither.mp4";
    vid7.style.display="inline";
    vid7.setAttribute("autoplay", 1);
    leftBubble6.style.display="none";
    rightBubble6.style.display="none";
});

vid7.onended = function(){
    leftBubble7.innerHTML = "You're drunk...";
    rightBubble7.innerHTML = "[threaten him]";
    leftBubble7.style.display="inline";
    rightBubble7.style.display="inline";
}

leftBubble7.addEventListener("click", function(){
    vid7.style.display="none";
    vid8.src = "videos/scene9urdrunk.mp4";
    vid8.style.display="inline";
    vid8.setAttribute("autoplay", 1);
    leftBubble7.style.display="none";
    rightBubble7.style.display="none";
});

rightBubble7.addEventListener("click", function(){
    vid7.style.display="none";
    vid8.src = "videos/scene9immabreakyoface.mp4";
    vid8.style.display="inline";
    vid8.setAttribute("autoplay", 1);
    leftBubble7.style.display="none";
    rightBubble7.style.display="none";
});

vid8.onended = function(){
    hitbox1.style.display="inline";
}

hitbox1.addEventListener("click", function(){
    vid8.style.display="none";
    vid9.src = "videos/scene10armcranksuccess.mp4";
    vid9.style.display="inline";
    vid9.setAttribute("autoplay", 1);
    hitbox1.style.display="none";
});

vid9.onended = function(){
    hitbox2.style.display="inline";
    hitbox3.style.display="inline";
};

hitbox2.addEventListener("click", function(){
    vid9.style.display="none";
    vid10.src = "videos/scene11sofathrow.mp4";
    vid10.style.display="inline";
    vid10.setAttribute("autoplay", 1);
    hitbox2.style.display="none";
    hitbox3.style.display="none";
});

hitbox3.addEventListener("click", function(){
    vid9.style.display="none";
    vid17.src = "videos/scene18sinkthrow.mp4";
    vid17.style.display="inline";
    vid17.setAttribute("autoplay", 1);
    hitbox2.style.display="none";
    hitbox3.style.display="none";
});

vid10.onended = function(){
    hitbox4.style.display="inline";
};

hitbox4.addEventListener("click", function(){
    vid10.style.display="none";
    vid11.src = "videos/scene12facegrabSuccess.mp4";
    vid11.style.display="inline";
    vid11.setAttribute("autoplay", 1);
    hitbox4.style.display="none";
});

vid11.onended = function(){
    hitbox5.style.display="inline";
};

hitbox5.addEventListener("click", function(){
    vid11.style.display="none";
    vid12.src = "videos/scene13throatpunchSuccess.mp4";
    vid12.style.display="inline";
    vid12.setAttribute("autoplay", 1);
    hitbox5.style.display="none";
});

vid12.onended = function(){
    hitbox6.style.display="inline";
    hitbox7.style.display="inline";
};

hitbox6.addEventListener("click", function(){
    vid12.style.display="none";
    vid13.src = "videos/scene14wardrobethrow.mp4";
    vid13.style.display="inline";
    vid13.setAttribute("autoplay", 1);
    hitbox6.style.display="none";
    hitbox7.style.display="none";
});

hitbox7.addEventListener("click", function(){
    vid12.style.display="none";
    vid23.src = "videos/scene24bedthrow.mp4";
    vid23.style.display="inline";
    vid23.setAttribute("autoplay", 1);
    hitbox6.style.display="none";
    hitbox7.style.display="none";
});

vid13.onended = function(){
    body.onkeypress=function(event){
        a = event.code;
        b = "KeyS";
        if(a==b){
            vid13.style.display="none";
            vid14.src = "videos/scene15lampdodgeSuccess.mp4";
            vid14.style.display="inline";
            vid14.setAttribute("autoplay", 1);
        }
    }
}

vid14.onended = function(){
    hitbox8.style.display="inline";
};

hitbox8.addEventListener("click", function(){
    vid14.style.display="none";
    vid15.src = "videos/scene16kneekicksuccess.mp4";
    vid15.style.display="inline";
    vid15.setAttribute("autoplay", 1);
    hitbox8.style.display="none";
});

vid15.onended = function(){
    hitbox9.style.display="inline";
};

hitbox9.addEventListener("click", function(){
    vid15.style.display="none";
    vid16.src = "videos/scene17headsmashsuccess.mp4";
    vid16.style.display="inline";
    vid16.setAttribute("autoplay", 1);
    hitbox9.style.display="none";
});

vid16.onended = function(){
    hitbox10.style.display="inline";
};

hitbox10.addEventListener("click", function(){
    vid16.style.display="none";
    vid17.src = "videos/scene18sinkthrow.mp4";
    vid17.style.display="inline";
    vid17.setAttribute("autoplay", 1);
    hitbox10.style.display="none";
});

vid17.onended = function(){
    body.onkeypress=function(event){
        a = event.code;
        b = "KeyS";
        if(a==b){
            vid17.style.display="none";
            vid18.src = "videos/scene19firstbladedodgesuccess.mp4";
            vid18.style.display="inline";
            vid18.setAttribute("autoplay", 1);
        }
    }
}

vid18.onended = function(){
    let x;
    body.onkeypress=function(event){
        a = event.code;
        b = "KeyA";
        if(a==b){
            vid18.style.display="none";
            vid19.src = "videos/scene20secondbladedodgesuccess.mp4";
            vid19.style.display="inline";
            vid19.setAttribute("autoplay", 1);
            x=1;
        }
    }
    setTimeout(function(){
        if(x==1){
            return;
        }
        else{
        vid18.style.display="none";
        vid19.src = "videos/scene20secondbladedodgefail.mp4";
        vid19.style.display="inline";
        vid19.setAttribute("autoplay", 1);
    }}, 1000);
}

vid19.onended = function(){
    let x;
    body.onkeypress=function(event){
        a = event.code;
        b = "KeyD";
        if(a==b){
            vid19.style.display="none";
            vid20.src = "videos/scene21thirdbladedodgesuccess.mp4";
            vid20.style.display="inline";
            vid20.setAttribute("autoplay", 1);
            x=1;
        }
    }
    setTimeout(function(){
        if(x==1){
            return;
        }
        else{
        vid19.style.display="none";
        vid20.src = "videos/scene21thirdbladedodgefail.mp4";
        vid20.style.display="inline";
        vid20.setAttribute("autoplay", 1);
    }}, 1000);
}

vid20.onended = function(){
    body.onkeypress=function(event){
        a = event.code;
        b = "KeyS";
        if(a==b){
            vid20.style.display="none";
            vid21.src = "videos/scene22fourthbladedodgesuccess.mp4";
            vid21.style.display="inline";
            vid21.setAttribute("autoplay", 1);
        }
    }
}

vid21.onended = function(){
    hitbox11.style.display="inline";
};

hitbox11.addEventListener("click", function(){
    vid21.style.display="none";
    vid22.src = "videos/scene23sinksmashsuccess.mp4";
    vid22.style.display="inline";
    vid22.setAttribute("autoplay", 1);
    hitbox11.style.display="none";
});

vid22.onended = function(){
    hitbox12.style.display="inline";
};

hitbox12.addEventListener("click", function(){
    vid22.style.display="none";
    vid23.src = "videos/scene24bedthrow.mp4";
    vid23.style.display="inline";
    vid23.setAttribute("autoplay", 1);
    hitbox12.style.display="none";
});

vid23.onended = function(){
    hitbox13.style.display="inline";
};

hitbox13.addEventListener("click", function(){
    vid23.style.display="none";
    vid24.src = "videos/scene25firstfacepunchsuccess.mp4";
    vid24.style.display="inline";
    vid24.setAttribute("autoplay", 1);
    hitbox13.style.display="none";
});

vid24.onended = function(){
    hitbox14.style.display="inline";
};

hitbox14.addEventListener("click", function(){
    vid24.style.display="none";
    vid25.src = "videos/scene26secondfacepunchsuccess.mp4";
    vid25.style.display="inline";
    vid25.setAttribute("autoplay", 1);
    hitbox14.style.display="none";
});

vid25.onended = function(){
    hitbox15.style.display="inline";
};

hitbox15.addEventListener("click", function(){
    vid25.style.display="none";
    vid26.src = "videos/scene27thirdfacepunchsuccess.mp4";
    vid26.style.display="inline";
    vid26.setAttribute("autoplay", 1);
    hitbox15.style.display="none";
});

vid26.onended = function(){
    hitbox16.style.display="inline";
};

hitbox16.addEventListener("click", function(){
    vid26.style.display="none";
    vid27.src = "videos/scene28forthfacepunchfailure.mp4";
    vid27.style.display="inline";
    vid27.setAttribute("autoplay", 1);
    hitbox16.style.display="none";
});

vid27.onended = function(){
    let x;
    body.onkeypress=function(event){
        a = event.code;
        b = "KeyA";
        if(a==b){
            vid27.style.display="none";
            vid28.src = "videos/scene29axedodgesuccess.mp4";
            vid28.style.display="inline";
            vid28.setAttribute("autoplay", 1);
            x=1;
        }
    }
    setTimeout(function(){
        if(x==1){
            return;
        }
        else{
        vid27.style.display="none";
        vid29.src = "videos/scene29axedodgefail.mp4";
        vid29.style.display="inline";
        vid29.setAttribute("autoplay", 1);
    }}, 1000);
}

vid28.onended = function(){
    let x;
    body.onkeypress=function(event){
        a = event.code;
        b = "KeyQ";
        if(a==b){
            vid28.style.display="none";
            vid30.src = "videos/scene30axeholdsuccess.mp4";
            vid30.style.display="inline";
            vid30.setAttribute("autoplay", 1);
            x=1;
        }
    }
    setTimeout(function(){
        if(x==1){
            return;
        }
        else{
        vid28.style.display="none";
        vid31.src = "videos/scene30disarmfail.mp4";
        vid31.style.display="inline";
        vid31.setAttribute("autoplay", 1);
    }}, 1000);
}

vid30.onended = function(){
    let x;
    body.onkeypress=function(event){
        a = event.code;
        b = "KeyA";
        if(a==b){
            vid30.style.display="none";
            vid32.src = "videos/scene31disarmsuccess.mp4";
            vid32.style.display="inline";
            vid32.setAttribute("autoplay", 1);
            x=1;
        }
    }
    setTimeout(function(){
        if(x==1){
            return;
        }
        else{
        vid30.style.display="none";
        vid31.src = "videos/scene30disarmfail.mp4";
        vid31.style.display="inline";
        vid31.setAttribute("autoplay", 1);
    }}, 1000);
}

vid32.onended = function(){
    let x;
    hitbox17.style.display="inline";
    hitbox17.addEventListener("click", function(){
        vid32.style.display="none";
        vid33.src = "videos/scene32axesmacksuccess.mp4";
        vid33.style.display="inline";
        vid33.setAttribute("autoplay", 1);
        hitbox17.style.display="none";
        x=1;
    });
    setTimeout(function(){
        if(x==1){
            return;
        }
        else{
        vid32.style.display="none";
        vid34.src = "videos/scene32axesmackfail.mp4";
        vid34.style.display="inline";
        vid34.setAttribute("autoplay", 1);
        hitbox17.style.display="none";
    }}, 1000);
}

vid33.onended = function(){
    leftBubble8.innerHTML = "Be nice, or I'll make you wait outside.";
    rightBubble8.innerHTML = "Say that word again.";
    leftBubble8.style.display="inline";
    rightBubble8.style.display="inline";
}

leftBubble8.addEventListener("click", function(){
    vid33.style.display="none";
    vid35.src = "videos/scene33beniceorwaitoutside.mp4";
    vid35.style.display="inline";
    vid35.setAttribute("autoplay", 1);
    leftBubble8.style.display="none";
    rightBubble8.style.display="none";
});

rightBubble8.addEventListener("click", function(){
    vid33.style.display="none";
    vid35.src = "videos/scene33saythatwordonemoretime.mp4";
    vid35.style.display="inline";
    vid35.setAttribute("autoplay", 1);
    leftBubble8.style.display="none";
    rightBubble8.style.display="none";
});

vid35.onended = function(){
    leftBubble9.innerHTML = "What are you doing here?";
    rightBubble9.innerHTML = "What happened?";
    leftBubble9.style.display="inline";
    rightBubble9.style.display="inline";
}

leftBubble9.addEventListener("click", function(){
    vid35.style.display="none";
    vid36.src = "videos/scene34whatareyoudoinghere.mp4";
    vid36.style.display="inline";
    vid36.setAttribute("autoplay", 1);
    leftBubble9.style.display="none";
    rightBubble9.style.display="none";
});

rightBubble9.addEventListener("click", function(){
    vid35.style.display="none";
    vid36.src = "videos/scene34whathappened.mp4";
    vid36.style.display="inline";
    vid36.setAttribute("autoplay", 1);
    leftBubble9.style.display="none";
    rightBubble9.style.display="none";
});

vid36.onended = function(){
    leftBubble10.innerHTML = "What's your name?";
    rightBubble10.innerHTML = "Why was he hitting you?";
    leftBubble10.style.display="inline";
    rightBubble10.style.display="inline";
}

leftBubble10.addEventListener("click", function(){
    vid36.style.display="none";
    vid37.src = "videos/scene36whatsyourname.mp4";
    vid37.style.display="inline";
    vid37.setAttribute("autoplay", 1);
    leftBubble10.style.display="none";
    rightBubble10.style.display="none";
});

rightBubble10.addEventListener("click", function(){
    vid36.style.display="none";
    vid37.src = "videos/scene36whywashehittingyou.mp4";
    vid37.style.display="inline";
    vid37.setAttribute("autoplay", 1);
    leftBubble10.style.display="none";
    rightBubble10.style.display="none";
});

vid37.onended = function(){
    leftBubble11.innerHTML = "Will you excuse me a moment?";
    rightBubble11.innerHTML = "[Throw him out]";
    leftBubble11.style.display="inline";
    rightBubble11.style.display="inline";
}

leftBubble11.addEventListener("click", function(){
    vid37.style.display="none";
    vid38.src = "videos/scene37wouldyouexcusemeamoment.mp4";
    vid38.style.display="inline";
    vid38.setAttribute("autoplay", 1);
    leftBubble11.style.display="none";
    rightBubble11.style.display="none";
});

rightBubble11.addEventListener("click", function(){
    vid37.style.display="none";
    vid38.src = "videos/scene37throwout.mp4";
    vid38.style.display="inline";
    vid38.setAttribute("autoplay", 1);
    leftBubble11.style.display="none";
    rightBubble11.style.display="none";
});