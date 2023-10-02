import Board from "../components/Board/Board";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>Tu będzie zajebiaszcza gra w statki</div>
      <Board />
    </>
  );
};

export default App;
