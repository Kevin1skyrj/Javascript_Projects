
function debounce(fn, wait){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(() =>{
            fn(...args)
        },wait)
    }
}