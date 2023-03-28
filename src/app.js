import {axiosGetPopularMovies,configAPI,getMovieData,getBackdropURL,getPosterURL} from "../src/api-request.js"
import {renderizarPaginaDePeliculas} from "../src/operacionesDOM.js"

console.log(configAPI);

let pagina = 1;
getMovieData(pagina).then(res => renderizarPaginaDePeliculas(res));
const cambiarPagina = (advancePage) => {
    if(advancePage){
        pagina++;        
    }else{
        pagina--;
    }

    if(pagina === 501){
        pagina=1;
    }else if(pagina === 0){
        pagina=499;
    }
}

//captura de botones
let btnAnterior = document.querySelector("#btnAnterior");
let btnSiguiente = document.querySelector("#btnSiguiente");

//funcion btn anterior
const handlerBtnAnterior = () => {
    cambiarPagina(false);
    getMovieData(pagina).then(res => renderizarPaginaDePeliculas(res));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
btnAnterior.addEventListener("click",handlerBtnAnterior);

//funcion btn sig
const handlerBtnSiguiente = () => {
    cambiarPagina(true);
    getMovieData(pagina).then(res => renderizarPaginaDePeliculas(res));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
btnSiguiente.addEventListener("click",handlerBtnSiguiente);





axiosGetPopularMovies();