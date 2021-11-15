import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post("/api/greeting", { name: name });

    if (res.data) {
      setGreeting(res.data.greeting);
    }
  };

  return (
    <div style={{textAlign:"center"}}>
      {greeting
        ? <div style={{textAlign: 'center'}}>
            <h1>
              {greeting}
            </h1>
            <span> Mensagem gerada do servidor e ReactJs :)</span>
          </div>
        : <form onSubmit={handleSubmit}>
            <div>
              <h1>Escreva o seu nome.</h1>
              <input onChange={e => setName(e.target.value)} />
            </div>
            <button style={{marginTop: '12px', border: 'none', padding: '5px 8px 4px 8px', backgroundColor:'blue', color:'white'}} type="submit">Confirmar</button>
          </form>}
    </div>
  );
};

export default App;
