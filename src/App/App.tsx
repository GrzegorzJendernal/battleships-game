import EnemyBoard from "../components/EnemyBoard/EnemyBoard";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>Tu będzie zajebiaszcza gra w statki</div>
      <EnemyBoard />
    </>
  );
};

export default App;
