import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name,setName] = useState("Gabriel");
    return (
        <div>
            <h1>Isso será exibido ?</h1> 
            {x && <p>Se X for "true", sim!</p>}
            {!x && <p>Se X for "false", sim!</p>}
            {name === "Gabriel" ? (
                <div>
                    <p>O nome é Gabriel</p>
                </div>
            ) : (
                <div>
                    <p>
                        Nome não encontrado
                    </p>
                </div>
            )}
            <button onClick={() => setName("João")}>Clique aqui para trocar o nome</button>
        </div>
    );
};

export default ConditionalRender;