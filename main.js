const form = document.getElementById("form-calcula")
const CampoA = document.getElementById("campoA")
const CampoB = document.getElementById("campoB")


function CalculaMaior(cA,cB, idx){
let msg = ["",""]
   if(cB > cA){

   msg[0] = "Formulário validado com sucesso! <br> Maior Número: "+ CampoB.value 
   msg[1] = "msgSucesso" 

   }else{

    msg[0] = "Formulário não validado. Tente outra vez!"
    msg[1] = "msgErro" 
   }
   
return msg[idx]

}

form.addEventListener('submit',function(e){
e.preventDefault();

const resultado = document.getElementById("resultado")

resultado.innerHTML = CalculaMaior(CampoA.value, CampoB.value, 0)
resultado.classList.replace(resultado.className, CalculaMaior(CampoA.value, CampoB.value, 1))
})


