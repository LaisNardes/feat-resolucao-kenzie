function procuraSobremesa(sobremesas, valorDoInput) {
  /* Desenvolva sua lógica a partir aqui */
  return sobremesas.filter(({nome})=>
     nome.toLowerCase().includes(valorDoInput.toLowerCase())); /* É necessário retornar uma lista de produtos */
    
}
