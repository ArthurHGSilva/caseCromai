const catetoad = document.getElementById('catetoA') // encontra o elemento pelo id e guarda seu valor na variável
const catetoop = document.getElementById('catetoB')
const out = document.getElementById('resultado')


function result() {
    const v1 = catetoad.value ** 2 // pega o valor e eleva ao quadrado
    const v2 = catetoop.value ** 2
    const resultado = v1 + v2 // irá armazenar o valor da conta
    out.innerHTML = 'O resultado é: ' + Math.sqrt(resultado)
}

catetoad.addEventListener("input", result); // quando um número for inserido o resultado será atualizado
catetoop.addEventListener("input", result);
