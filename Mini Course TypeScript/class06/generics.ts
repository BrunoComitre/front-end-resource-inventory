/**************************** MÉTODO CONVENCIONAL *****************************/

console.log(" -- MÉTODO CONVENCIONAL -- ");

function useState() {
    // let state: number                     /* state aceitando apenas número */
    let state: number | string

    function getState() {
        return state
    }

    // function setState(newState: number) { /* state aceitando apenas número */
    function setState(newState: number | string) {
        state = newState
    }

    return { getState, setState }
}

const newState = useState();

// newState.setState("foo");
newState.setState(123);
console.log(newState.getState());

newState.setState("foo");
console.log(newState.getState());

/**************************** UTILIZANDO GENERICS *****************************/

console.log(" -- UTILIZANDO GENERICS -- ");

/*
* S para "state"
* T para "type"
* E para "element"
* K para "key"
* V para "value"
*/



// function useStateGenerics<S>() {                                             /* ADICIONANDO GENERICS */
// function useStateGenerics<S extends number | string>() {                     /* DEFININDO OS TIPOS QUE PODEM SER USADOS */
// function useStateGenerics<S extends number | string = string >() {           /* DEFININDO OS TIPOS QUE PODEM SER USADOS E SETEANDO STRING COMO PRINCIPAL PARA NÃO NECESSÁRIAMENTE DESCREVER QUANDO CHAMAR A FUNÇÃO */

// Exemplo usando type alias                                                    /* OBSERVAÇÃO: também posso usar interface */
type numOrStr = number | string;

function useStateGenerics<S extends numOrStr = string >() {
    let state: S

    function getStateGenerics() {
        return state
    }

    function setStateGenerics(newState: S) {
        state = newState
    }

    return { getStateGenerics, setStateGenerics }
}

// const newStateGenerics = useStateGenerics<string>();

// newStateGenerics.setStateGenerics("foo");
// console.log(newStateGenerics.getStateGenerics());

// newStateGenerics.setStateGenerics(123);
// console.log(newStateGenerics.getStateGenerics());

// const exampleStateGenerics = useStateGenerics<number>();

// exampleStateGenerics.setStateGenerics("foo");
// console.log(exampleStateGenerics.getStateGenerics());

// exampleStateGenerics.setStateGenerics(123);
// console.log(exampleStateGenerics.getStateGenerics());

const newStateGenerics = useStateGenerics();                                    /* QUANDO SETO PADRÃO STRING NÃO PRECISO ADICIONAR AQUI MAS POSSO INCLUIR NUMBER */
// const newStateGenerics = useStateGenerics<string>();                         /* QUANDO NÃO SETO O PRINCIPAL TENHO QUE PASSAR O TIPO QUE SERÁ */
// const exempleStateGenerics = useStateGenerics<boolean>();                    /* EXEMPLO QUE SE SETAR OUTRO TIPO NÃO ESPECIFICADO, RETORNA ERRO */

newStateGenerics.setStateGenerics("foo");
console.log(newStateGenerics.getStateGenerics());

newStateGenerics.setStateGenerics(123);
console.log(newStateGenerics.getStateGenerics());
