import './App.css';
import Parent from './components/Hooks/useContext_Hook/BasicContextStructure/Parent';
import ParentWithCounter from './components/Hooks/useContext_Hook/UpdateContextValue/ParentWithCounter';
import UseReducerHook from './components/Hooks/useReducer_Hook/basics';
import UseTransitionHook from './components/Hooks/useTransition_Hook';

function App() {
  return (
    <div>
      {/* <Parent /> */}
      {/* <ParentWithCounter /> */}
      {/* <UseTransitionHook /> */}
      <UseReducerHook />
    </div>
  );
}

export default App;
