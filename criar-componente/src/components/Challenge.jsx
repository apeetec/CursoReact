const Challenge = () => {
    const handleSoma = (a, b) => {
        console.log(a + b);
    };

    return (

        <div>
            <button onClick={() => handleSoma(1, 1)}>
                Calcular
            </button>
        </div>
    );
}

export default Challenge