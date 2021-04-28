/**************************** MÉTODO CONVENCIONAL *****************************/
console.log(" -- MÉTODO CONVENCIONAL -- ");
function useState() {
    // let state: number                     /* state aceitando apenas número */
    var state;
    function getState() {
        return state;
    }
    // function setState(newState: number) { /* state aceitando apenas número */
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState();
// newState.setState("foo");
newState.setState(123);
console.log(newState.getState());
newState.setState("foo");
console.log(newState.getState());
/**************************** UTILIZANDO GENERICS *****************************/
console.log(" -- UTILIZANDO GENERICS -- ");
function useStateGenerics() {
    var state;
    function getStateGenerics() {
        return state;
    }
    function setStateGenerics(newState) {
        state = newState;
    }
    return { getStateGenerics: getStateGenerics, setStateGenerics: setStateGenerics };
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
var newStateGenerics = useStateGenerics(); /* QUANDO SETO PADRÃO STRING NÃO PRECISO ADICIONAR AQUI MAS POSSO INCLUIR NUMBER */
// const newStateGenerics = useStateGenerics<string>();                         /* QUANDO NÃO SETO O PRINCIPAL TENHO QUE PASSAR O TIPO QUE SERÁ */
// const exempleStateGenerics = useStateGenerics<boolean>();                    /* EXEMPLO QUE SE SETAR OUTRO TIPO NÃO ESPECIFICADO, RETORNA ERRO */
newStateGenerics.setStateGenerics("foo");
console.log(newStateGenerics.getStateGenerics());
newStateGenerics.setStateGenerics(123);
console.log(newStateGenerics.getStateGenerics());
