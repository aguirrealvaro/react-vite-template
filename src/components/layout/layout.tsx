import { FunctionComponent, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header>Header</header>
      <main className="flex-1">{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export { Layout };
