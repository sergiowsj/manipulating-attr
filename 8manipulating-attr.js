function verifyEnablement() {
  let selectedOption = document.querySelector('select').value
  if (selectedOption == 'disabled') {
    document.querySelector('input[name="some-text"]').disabled = true
    let pElement = document.getElementById('message')
    pElement.innerText = 'Desabilitado'
    pElement.style.color = 'black'
    pElement.style.backgroundColor = 'red'
  } else {
    document.getElementById('some-text').disabled = false
    let pElement = document.getElementById('message')
    pElement.innerText = ''
    pElement.style.color = 'black'
    pElement.style.backgroundColor = 'transparent'
  }
}
