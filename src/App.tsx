/* eslint-disable no-console */

import { FunctionComponent } from "react";

console.log(import.meta.env.MODE);
console.log(import.meta.env.VITE_API_HOST);

const App: FunctionComponent = () => <h1>Hello world</h1>;

export default App;
