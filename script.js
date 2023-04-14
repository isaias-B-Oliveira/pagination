const startBtn = document.querySelector("#startBtn"),
 endBtn = document.querySelector("#endBtn"),
 prevNext = document.querySelectorAll(".prevNext"),
 numbers = document.querySelectorAll(".link");

let currentstep = 0;

const updatebtn = () => {
    if(currentstep === 4){
        endBtn.disabled = true;
        prevNext[1].disabled = true;

    }else if(currentstep === 0){
        startBtn.disabled = true;
        prevNext[0].disabled = true;

    }else{
        endBtn.disabled = false;
        prevNext[1].disabled = false;
        startBtn.disabled = false;
        prevNext[0].disabled = false;
    }
}
numbers.forEach((Number, numIndex) => {
    Number.addEventListener('click', (e) =>{
        e.preventDefault();
        currentstep = numIndex;
        document.querySelector(".active").classList.remove("active");
        Number.classList.add("active");
        updatebtn();
    });

});
prevNext.forEach((button) => {
    button.addEventListener("click", (e) => {
        currentstep += e.target.id === "next" ? 1 : -1;
        numbers.forEach((Number , numIndex) => {
            Number.classList.toggle("active", numIndex === currentstep);
            updatebtn();
        });
    });
});

startBtn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    numbers[0].classList.add("active");
    currentstep = 0;
    updatebtn();
    endBtn.disabled = false;
    prevNext[1].disabled = false;
});

endBtn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    numbers[4].classList.add("active");
    currentstep = 4;
    updatebtn();
    startBtn.disabled = false;
    prevNext[0].disabled = false;
});