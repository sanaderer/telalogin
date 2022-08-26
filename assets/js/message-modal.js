let btn_class;
    if(success){
        icon =`<svg xmlns="http://www.w3.org/2000/svg" style="fill: #80c141;"viewBox="0 0 448 512">
                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
                </svg>`
        btn_class = 'success';
    }else{
        icon = `<svg xmlns="http://www.w3.org/2000/svg" style="fill: #f27474;" viewBox="0 0 320 512">
                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                </svg>`
        
        btn_class = 'fail';
    }
let modalBackground = document.createElement('div')
modalBackground.classList.add('modal-background','show-modal');
modalBackground.innerHTML = `
<div class="modal">
    <div class="modal-icon ${btn_class}">
        ${icon}
    </div>
    <div class="modal-text">
        <h2>${title}</h2>
        <span>${text}</span>
    </div>
    <div class="modal-btn ">
        <button class="${btn_class}" >OK</button>
    </div>
</div>
`
modalBackground.addEventListener('click', ()=>{
    modalBackground.remove();      
})
modalBackground.querySelector('.modal-btn button').addEventListener('click', ()=>{
    modalBackground.remove();
})
document.body.appendChild(modalBackground);
