import React, { FC, LabelHTMLAttributes } from "react";

interface LayoutProps extends LabelHTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="z-0 w-full h-screen flex flex-col overflow-auto bg-[#f5f5f5]">
      <div className="h-screen overflow-auto">{children}</div>
    </div>
  );
};

export default Layout;
