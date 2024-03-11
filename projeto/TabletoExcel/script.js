function adicionarItem(){
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var quantidade = document.getElementById("quantidade").value;

  //validar se os imputs não estão vazios
  if(!nome || !valor || !quantidade){
    alert("Preencha todos os valores pau no cu do caralho")
    return;
  }
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
}