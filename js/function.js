let sinal_vermelho = document.getElementById("vermelho");
let sinal_amarelo = document.getElementById("amarelo");
let sinal_verde = document.getElementById("verde");
let corpo = document.getElementById("body")

let sinais = () => {
    sinal_vermelho.addEventListener("click", () => {
        corpo.style.backgroundImage = "url('https://p4.wallpaperbetter.com/wallpaper/1021/284/1018/shanghai-buildings-sky-light-wallpaper-preview.jpg')";
    })

    sinal_amarelo.addEventListener("click", () => {
        corpo.style.backgroundImage = "url('https://c.pxhere.com/photos/0f/4d/aerial_city_cityscape_cityview_dense_downtown_HD_wallpaper_high_rises-911249.jpg!d')";
    })

    sinal_verde.addEventListener("click", () => {
        corpo.style.backgroundImage = "url('https://c0.wallpaperflare.com/preview/276/709/285/brazil-botucatu-clouds-nuvens.jpg')";
    })
}
sinais();