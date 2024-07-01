import input from 'readline-sync'

let menu_salario = [
    {id:1, descricao: "Listar os salarios de 2010 à 2023"},
    {id:2, descricao: "Listar o indice IPCA de 2010 à 2023"},
    {id:3, descricao: "Comparacao entre o percentual de aumento salarial e o IPCA"},
    {id:4, descricao: "sair"}
]

let lista_salario =[

    {ano: "2010", salario: 510, inflacao: 5.9,},
    {ano: "2011", salario: 545, inflacao: 6.50},
    {ano: "2012", salario: 622, inflacao: 5.84},
    {ano: "2013", salario: 678, inflacao: 5.91},
    {ano: "2014", salario: 724, inflacao: 6.41},
    {ano: "2015", salario: 788, inflacao: 10.67},
    {ano: "2016", salario: 880, inflacao: 6.29},
    {ano: "2017", salario: 937, inflacao: 2.95},
    {ano: "2018", salario: 954, inflacao: 3.75},
    {ano: "2019", salario: 998, inflacao: 4.31},
    {ano: "2020", salario: 1045, inflacao: 4.52},
    {ano: "2021", salario: 1100, inflacao: 10.06},
    {ano: "2022", salario: 1212, inflacao: 5.79},
    {ano: "2023", salario: 1302, inflacao: 4.65},
   
]


while (true) {

    for (let menu of menu_salario){

        console.log(`${menu.id} - ${menu.descricao}`)
    }
    let opcao = input.question("\nDigite o número de sua escolha: ")

    if (opcao == menu_salario[0].id){

        for (let salario of lista_salario){
            let salario_ano = salario.ano
            let salario_salario = `${"R$"+salario.salario}`
            console.log(`${"Ano: ".padEnd(40,".")}${salario_ano}`)
            console.log(`${"Salario: ".padEnd(40,".")}${salario_salario},00\n`)
        }

    }

    else if (opcao == menu_salario[1].id){

        for (let salario of lista_salario){
            let salario_ano = salario.ano
            let salario_inflacao = salario.inflacao
            salario_inflacao = `${salario_inflacao}`.replace(".", ",")
        
            
            console.log(`${"Ano: ".padEnd(40,".")}${salario_ano}`)
            console.log(`${"Inflação IPCA: ".padEnd(40,".")}${salario_inflacao}%\n`)
        }
    }

    else if (opcao == menu_salario[2].id){
        
        
        for (let contador = 0; contador < lista_salario.length; contador++){
            let salario_ano = lista_salario[contador].ano; 
            let diferenca;
            let crescimento;
            let salario_atual = lista_salario[contador].salario;
            
            if (contador > 0){

            let salario_anterior = lista_salario[contador - 1].salario;
            diferenca = salario_atual - salario_anterior; 
            crescimento = (diferenca / salario_anterior) * 100; //Calculo de Salário IPCA
            let salario_inflacao = lista_salario[contador].inflacao
            salario_atual = `${salario_atual}` //Uso de template strings para não ser necessário transformar em strings
            salario_inflacao = `${salario_inflacao}`.replace(".", ",") //Uso de template strings para não ser necessário transformar em strings

            console.log(`${"Ano: ".padEnd(40,".")}${salario_ano}`)
            console.log(`${"Salário: ".padEnd(40,".")}${"R$ "+salario_atual+",00"}`)
            console.log(`${"Salario IPCA: ".padEnd(40, ".")}${crescimento.toFixed(2)}%`)
            console.log(`${"Inflacão IPCA: ".padEnd(40, ".")}${salario_inflacao}%\n`)
            }

            else{

                let salario_inflacao = lista_salario[contador].inflacao
                salario_inflacao = `${salario_inflacao}`.replace(".", ",")
                
            console.log(`${"Ano: ".padEnd(40,".")}${salario_ano}`)
            console.log(`${"Salário: ".padEnd(40,".")} ${"R$ " + salario_atual + ",00"}`)
            console.log(`Salario IPCA: -`)
            console.log(`${"Inflacão IPCA: ".padEnd(40, ".")}${salario_inflacao}%\n`)

            }

            
        }
    }
    else if (opcao == menu_salario[3].id){ //Quebra o loop do while
        console.log("Saindo...")
        break
    }

    else{ //FAz com que qualquer tecla digitada que não seja as pedidas dê opção invalida
        console.log("Opção invalida!!!!!".toUpperCase())
    }

}