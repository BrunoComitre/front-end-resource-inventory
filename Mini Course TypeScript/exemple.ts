
// Exemplo função em JavaScript
function sum_example (a, b) {
    return a + b
}

sum_example(1, 2)  // 3
sum_example('1', '2')  // 12 opa!

// TypeScript retorna erros antes de precisar rodar a aplicação

// Funciona como uma espécie de documentação
type Plataform = 'Windows' | 'Mac OS' | 'Linux'
type Feature = 'Single Player' | 'Multiplayer' | 'Co-Op'

interface GameDetails {
    id: string
    tile: string
    description: string
    platforms: Plataform[]
    features: Feature[]
}

// Potencializa a IDE
let messages
// messages.

let mensagens: string
// mensagens.
