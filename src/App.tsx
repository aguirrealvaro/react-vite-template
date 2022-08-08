/* eslint-disable no-console */

const App = () => {
  console.log(import.meta.env.MODE);
  console.log(import.meta.env.VITE_API_HOST);

  return <h1>Hello world</h1>;
};

export default App;
