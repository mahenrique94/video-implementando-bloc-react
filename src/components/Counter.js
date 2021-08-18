import StreamBuilder from '../utils/StreamBuilder'

const Counter = ({ bloc }) => (
  <>
    <h1>Contador: 
      <StreamBuilder
        initialData={0}
        stream={bloc.stream}
        builder={snapshot => snapshot.hasError
          ? snapshot.error
          : snapshot.data
        }
      />
    </h1>
    <button onClick={() => bloc.decrement()}>Decrement</button>
    <button onClick={() => bloc.increment()}>Increment</button>
    <button onClick={() => bloc.throw()}>Throw error</button>
  </>
)

export default Counter