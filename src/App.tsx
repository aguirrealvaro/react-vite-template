const App = () => {
  console.log(import.meta.env.MODE);
  console.log(import.meta.env.VITE_API_HOST);

  console.log("*");
  console.log(process.env.VITE_HOLA);
  console.log("*");

  return <h1>Hello world</h1>;
};

export default App;
