import './App.css';
import styled from "styled-components";
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useSelector } from "react-redux";
import Final from './components/Final/Final';

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px 0;
`;

function App() {
  const status = useSelector(state => state.game.status);

  return (
    <div className="App">
      <Container>
        <Header />
        <Content />
      </Container>
      <Footer />
      {status && <Final status={status} />}
    </div>
  );
}

export default App;
