let butttonCripto = document.getElementById("cripto")
let buttonDecripto = document.getElementById("decripto")
let buttonCopy = document.getElementById("copy")
let textAreaOne = document.getElementById("text-area-one")
let textAreaTwo = document.getElementById("text-area-two")
let initalElements = document.getElementById("initial-elements")

// ÁREA DE TEXTO PRINCIPAL
textAreaOne.addEventListener("click", function () {
  textAreaOne.value = ""
})

// ÁREA DE TEXTO 2
textAreaTwo.style.display = "none"

//BOTÃO CRIPTOGRAFAR
butttonCripto.addEventListener("click", function () {

  if (textAreaOne.value == "" || textAreaOne.value == "Insira seu texto aqui.") {
    alert("insira o texto para criptografar")
  } else {
    initalElements.style.display = "none"
    textAreaTwo.style.display = "block"
    cripto()
    textAreaOne.value = ""
    buttonCopy.style.display = "block"
  }
})



// BOTÃO DESCRIPTOGRAFAR
buttonDecripto.addEventListener("click", function () {
  if (textAreaOne.value == "" || textAreaOne.value == "Insira seu texto aqui.") {
    alert("insira o texto para criptografar")
  } else {
    initalElements.style.display = "none"
    textAreaTwo.style.display = "block"
    decripto(textAreaTwo)
    textAreaOne.value = ""
    buttonCopy.style.display = "block"
  }
})

//BOTÃO COPIAR
buttonCopy.style.display = "none"
buttonCopy.addEventListener("click", function () {
  let getContent = textAreaTwo.value
  navigator.clipboard.writeText(getContent)
  alert("O texto criptografado foi copiado")

})


