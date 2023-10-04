//Função para gerar senhas aleatórias
function gerarSenha () {
  const aleatorio = Math.floor(Math.random() * 99999999 + 10000000)

  //Condição para verificar se o número gerado não ultrapassa o limite de 8 digítos.
  if (aleatorio <= 99999999) {
    document.getElementById('resultado').innerHTML = aleatorio
  }

  //Caso o número gerado ultrapasse a condição, ele chama a função gerar() para a geração de um novo número.
  else {
    gerarSenha()
    console.log('Reprocessou outro número')
  }
}

//Função utilizada para limpar os dados da tela, caso o usuário queira.
function limparSenha () {
  location.reload()
}

function copiarSenha () {
  const senhaGerada = document.getElementById('resultado').innerText

  // Cria um elemento temporário (input) para colocar a senha nele e selecioná-lo
  const tempInput = document.createElement('input')
  tempInput.value = senhaGerada
  document.body.appendChild(tempInput)
  tempInput.select()
  tempInput.setSelectionRange(0, 99999) // Para dispositivos móveis

  // Copia o conteúdo do input para a área de transferência
  document.execCommand('copy')

  // Remove o elemento temporário
  document.body.removeChild(tempInput)

  // Exibe a mensagem de que a senha foi copiada
  const mensagem = document.getElementById('mensagem')
  mensagem.innerText = 'Senha copiada para a área de transferência!'

  // Remove a mensagem após 3 segundos (3000 milissegundos)
  setTimeout(function () {
    mensagem.innerText = ''
  }, 3000)
}
