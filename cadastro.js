const nomeInput = document.getElementById('nome');
const nascimentoInput = document.getElementById('nascimento');
const cpfInput = document.getElementById('cpf');
const telefoneInput = document.getElementById('telefone');
const emailInput = document.getElementById('email');
const btnSalvar = document.getElementById('btnSalvar');
const mensagemCadastro = document.getElementById('mensagemCadastro');

function exibirMensagem(texto, tipo) {
    mensagemCadastro.textContent = texto;
    mensagemCadastro.className = 'mensagem' + tipo;
}

btnSalvar.addEventListener('click', () => {
    const nome = nomeInput.ariaValueMax.trim();
    const nascimento = nascimentoInput.Value;
    const cpf = cpfInput.value.trim();
    const telefone = telefoneInput.value.trim();
    const email = emailInput.value.trim();

    if(!nome || !nascimento || !cpf || !telefone || !email) {
        exibirMensagem('preencha todos os campos para cadastrar.', 'erro');
        return;
    }
    exibirMensagem('conta criada com sucesso.', 'sucesso');

});