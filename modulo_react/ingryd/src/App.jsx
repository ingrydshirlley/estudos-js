import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [repositorio, setRepositorio] = useState([])
  useEffect(() => {

    async function carregaRepositorios() {

      const resposta = await fetch(
        "https://api.github.com/users/ingrydshirlley/repos"
      )

      const repositorios = await resposta.json()
      setRepositorio(repositorios)
    }

    carregaRepositorios()
  }, [])

  return (
    <div>
      <h1>retorno da funcao</h1>
      <ul>
        {repositorio.map((repositorio) => (
          <div>
            <li key={repositorio.id}>{repositorio.name}
              <div>
                <span>linguagem: {repositorio.language} </span>
                <img src={repositorio.owner.avatar_url} alt=""></img>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}


export default App; 
