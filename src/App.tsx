/* eslint-disable no-console */
import { FunctionComponent } from "react";
import { Wrapper, Layout } from "@/components";
import "@/styles/globals.css";

console.log(process.env.MODE);
console.log(process.env.API_HOST);
console.log(process.env.APP_VERSION);

const App: FunctionComponent = () => {
  return (
    <Wrapper>
      <Layout>
        <h1 className="text-xl">Hello world</h1>
      </Layout>
    </Wrapper>
  );
};

export default App;
