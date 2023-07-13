/* eslint-disable no-console */
import { FunctionComponent } from "react";
import { Wrapper, Layout, ThemeToggle } from "@/components";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers";

console.log(process.env.MODE);
console.log(process.env.API_HOST);
console.log(process.env.APP_VERSION);

const App: FunctionComponent = () => {
  return (
    <ThemeProvider>
      <Wrapper>
        <Layout>
          <ThemeToggle />
        </Layout>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
