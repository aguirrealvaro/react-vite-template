const App = () => {
  //console.log(import.meta.env.MODE);
  //console.log(import.meta.env.API_HOST);

  console.log(process.env.MODE);
  console.log(process.env.API_HOST);


  return <h1>Hello world</h1>;
};

export default App;
