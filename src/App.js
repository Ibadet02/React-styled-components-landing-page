import { Container } from "./components/styles/component.styled";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import Card from "./components/Card";
import content from "./content";
import Footer from "./components/Footer";
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'

}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => {
            return <Card key={index} item={item} />
          })}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
