
const ele = document.getElementById("ele1")

const pintar = function(color = "green"){
    ele.style.backgroundColor = color
}

ele.addEventListener("click", () => {pintar("yellow")})

pintar()