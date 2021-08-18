import { useEffect } from 'react';
import { CounterBloc } from './blocs/CounterBloc';
import Counter from './components/Counter'

const bloc = new CounterBloc()

function App() {
  useEffect(() => {
    return () => bloc.dispose()
  }, [])
  return <Counter bloc={bloc} />;
}

export default App;
