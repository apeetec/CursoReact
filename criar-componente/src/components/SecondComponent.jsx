const SecondComponent = () => {
    const Alertar = () => {
        alert("Olá jovem!");
    }
    return (

        <div>
            <h2>
                Acionando um alert no click
            </h2>
            <button onClick={Alertar}>
                Clique aqui
            </button>
        </div>
    );
}
export default SecondComponent;