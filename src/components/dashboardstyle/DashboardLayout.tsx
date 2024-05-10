import { useState } from "react";
import Footer from "../Footer";

import { Container, Content, PageContainer } from "./DashboardLayout.styles";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpened, setOpened] = useState(false);
  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  return (
    <Container>
      
      <Content>
       
        <PageContainer>{children}</PageContainer>
      </Content>
      <Footer />
    </Container>
  );
}