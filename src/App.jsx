import { useEffect, useState } from "react";

function App() {

  const url = "https://dummyjson.com/users";

  const [usuarios, setUsuarios] = useState ([]);
  const [loading, setLoading] = useState(false);

  const getUsuarios = async () => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const {users} = await response.json();
      console.log(users)
      setUsuarios(users)
    }catch(error){
      alert("Error ao carregar dados.")
    }finally{
      setLoading(false)
    }
  }

  useEffect (() =>{
    getUsuarios();
  },[]);

  return (
    <div className="container">
      <h1>Usuarios</h1>
      {loading === true ? "Carregando..." : null}
      <div className="mural">
      {loading === false && usuarios.length < 1 ? "Nenhum usuario encontrado" :
        usuarios.map((usuario) => (
          <div key={usuario.id} >
            <img src={usuario.image} /> <br></br>
            <span>Nome:</span>
            <h3>{usuario.firstName} {usuario.lastName}</h3>
            <span>email:</span>
            <p>{usuario.email}</p>
            <span>Idade:</span>
            <p>{usuario.age}</p>
            <span>Aniversário:</span>
            <p>{usuario.birthDate}</p>
          </div>
        ))
      } 
      </div>
      
      
    </div>
  )
}

export default App
