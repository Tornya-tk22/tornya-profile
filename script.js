const ac_btn = document.getElementById("ac-btn");
const acsless = document.getElementById("acsless");
const ac = document.getElementById("ac");
ac.style.display="none";
ac_btn.addEventListener("click", function(){
    ac.style.display="block";
    ac_btn.style.display="none";
});
acsless.addEventListener("click", function(){
    ac.style.display="none";
    ac_btn.style.display="block";
})



const f_btn = document.getElementById("f-btn");
const fsless = document.getElementById("fsless");
const f = document.getElementById("f");
f.style.display="none";
f_btn.addEventListener("click", function(){
    f.style.display="block";
    f_btn.style.display="none";
});
fsless.addEventListener("click", function(){
    f.style.display="none";
    f_btn.style.display="block";
    f.style.transform = "translateX(0%)";
})


const gd_btn = document.getElementById("gd-btn");
    const gdsless = document.getElementById("gdsless");
    const gd = document.getElementById("gd");
    gd.style.display="none";
    gd_btn.addEventListener("click", function(){
        gd.style.display="block";
        gd_btn.style.display="none";
    });
    gdsless.addEventListener("click", function(){
        gd.style.display="none";
        gd_btn.style.display="block";
    })


    const bw_btn = document.getElementById("bw-btn");
const bwsless = document.getElementById("bwsless");
const bw = document.getElementById("bw");
bw.style.display="none";
bw_btn.addEventListener("click", function(){
    bw.style.display="block";
    bw_btn.style.display="none";
});
bwsless.addEventListener("click", function(){
    bw.style.display="none";
    bw_btn.style.display="block"; 
})


var prompt = prompt("What is your full name?")
const greeting = document.getElementById("greetings")
var now = new Date();
var hours = now.getHours();
if (hours < 12) {
    greeting.innerHTML = "Good morning" + " " + prompt;
} 
else if(hours < 18) {
    greeting.innerHTML = "Good afternoon" + " " + prompt; 
}
else{
    greeting.innerHTML = "Good evening" + " " + prompt;
}
const style = `
    display: block;
    width: 30%;
`;

const imgs = document.getElementById("img-cover").addEventListener("click", function(){
    imgs.style.cssText = style;;
})