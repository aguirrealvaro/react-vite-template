import { FunctionComponent, ReactNode } from "react";
import { cn } from "@/utils/cn";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

const Wrapper: FunctionComponent<WrapperProps> = ({ children, className }) => {
  return <div className={cn("mx-auto w-4/5 max-w-6xl", className)}>{children}</div>;
};

export { Wrapper };
