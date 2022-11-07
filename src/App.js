import './App.css';
import Parent from './components/Hooks/useContext_Hook/BasicContextStructure/Parent';
import ParentWithCounter from './components/Hooks/useContext_Hook/UpdateContextValue/ParentWithCounter';
import UseTransitionHook from './components/Hooks/useTransition_Hook';

function App() {
  return (
    <div>
      {/* <Parent />
      <ParentWithCounter /> */}
      <UseTransitionHook />
    </div>
  );
}

export default App;
