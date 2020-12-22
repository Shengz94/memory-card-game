import GroupCard from './components/GroupCard';
import githubLogo from "./img/github-120px.png"

function App() {
  return (
    <div className="App">
      <div className="logo">
        <div className="title">
          <h1>Memory Card Game (TV Series Version)</h1>
        </div>
        <div className="github-logo">
          <a class="github-reference" href="https://github.com/Shengz94">
            <img src={githubLogo} alt="Github"/>
          </a>
        </div>
      </div>
      <GroupCard />
    </div>
  );
}

export default App;
