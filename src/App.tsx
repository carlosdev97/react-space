import { useState, useEffect } from "react";
import "./App.css";
// import { Button } from "./components";

function App() {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("Carlos");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // const countMore = () => {
  //   setCount((count) => count + 1);
  // };

  // const changeName = () => {
  //   setName("John");
  // };

  // Comunicación con el Endpoint

  // Vamos a usar el useEffect cuando vamos a Sync con fuentes externas.

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/data");

      if (!response.ok) {
        throw new Error("Error al obtener datos");
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error as string);
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // El useEffect se ejecuta cuando se monta el componente o cuando cambia uno de los valores de los estados.
    // return () => {} El return se usa para liberar memoria cuando el componente muere.
    fetchData(); // Fetching data on mount.
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;

  // return (
  //   // <>
  //   //   {/* <Button label={`Count is ${count}`} parentMethod={countMore} />
  //   //   <p>{name}</p>
  //   //   <Button label={"Change the name"} parentMethod={changeName} /> */}
  //   // </>
  // );
}

export default App;
