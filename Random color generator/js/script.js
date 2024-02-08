const colorCode=document.querySelector("#color-code");

const getColor=()=>{
    const randomNumber=Math.floor(Math.random()*16777215);
    const randomCode="#"+ randomNumber.toString(16);
    colorCode.innerText=randomCode;
    document.body.style.backgroundColor=randomCode;

    navigator.clipboard.writeText(randomCode);
}

const btn=document.querySelector("#btn");

// event call
btn.addEventListener("click",getColor);

// initial call
getColor();