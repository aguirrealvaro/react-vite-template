import { useEffect, useState } from "react";

const App = () => {
  const [asd] = useState(false);
  useEffect(() => {
    console.log(asd);
  }, []);

  return <h1>Hello world</h1>;
};

export default App;
