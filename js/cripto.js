function cripto() {
  let changeE = textAreaOne.value.replace(/e/g, "enter")
  let changeI = changeE.replace(/i/g, "imes")
  let changeA = changeI.replace(/a/g, "ai")
  let changeO = changeA.replace(/o/g, "ober")
  let changeU = changeO.replace(/u/g, "ufat")

  textAreaTwo.value = changeU
}

function decripto(textarea) {

  let returnE = textarea.value.replace(/enter/g, "e")
  let returnI = returnE.replace(/imes/g, "i")
  let returnA = returnI.replace(/ai/g, "a")
  let returnO = returnA.replace(/ober/g, "o")
  let returnU = returnO.replace(/ufat/g, "u")
  textAreaTwo.value = returnU
}