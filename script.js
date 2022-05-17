const fields = document.querySelectorAll("[required]")

// console.log(fields)
function customValidation(event){
    const field = event.target

    // lógica para verificar se existe erros
    function verifyErrors() {
        let foundError = false;
         
        for(error in field.validity) {
            // se não for customError
            //
        if (error /! "customError"){
            field.validity[error]
        }

        return foundError;
    }

   verifyErrors()
    // trocar mensagem de requerid
    field.setCustomValidity("Esse campo é obrigatório")
}
for ( field of fields){
    field.addEventListener("invalid", customValidation)

}
























document.querySelector("form")
.addEventListener("submit", event =>{
      console.log("Enviar o formulário")

      //nao vai para o formulário//
      event.preventDefault()
})