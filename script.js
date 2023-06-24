let input_box = document.querySelector('#input-box');
let btns = document.querySelectorAll('.btn-box .btn');

btns.forEach((btn)=>{
    let disp_val = "";
    btn.addEventListener("click",()=>{
        try {
            if(btn.value == "AC"){
                input_box.value = "";
            }else if(btn.value == "C"){
                input_box.value = input_box.value.toString().slice(0,-1);
            }else if(btn.value == "="){
                input_box.value = eval(input_box.value);
            }
            else{
                disp_val = btn.value;
            }
            input_box.value += disp_val;
        } catch (error) {
            input_box.value = "Enter the correct equation";
        }
    });
   
})