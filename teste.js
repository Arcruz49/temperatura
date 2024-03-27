function copiaAreaTransferencia(DataConsulta, Medico, Especialidade, Local, hrConsulta, diaSemana) {

var textArea = document.createElement("textarea");

var texto = "*Médico:* " + Medico + "\n" +
            "*Especialidade:* " + Especialidade + "\n" +
            "*Horário:*\n*" + DataConsulta + "* " + diaSemana +
            "\n*" + hrConsulta + "* " + Local + "\n";

  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = texto;

  document.body.appendChild(textArea);
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
    window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", texto);
  }

  document.body.removeChild(textArea);

}