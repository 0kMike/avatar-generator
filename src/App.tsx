import './App.scss';
import ButtonLeft from './components/ButtonLeft/ButtonLeft';
import ButtonRight from './components/ButtonRight/ButtonRight';

function App() {
  return (
    <main>
      <section>
        <div id='left-button-wrapper'>
          <ButtonLeft />
          <ButtonLeft />
          <ButtonLeft />
          <ButtonLeft />
          <ButtonLeft />
        </div>
        <canvas></canvas>
        <div id='right-button-wrapper'>
          <ButtonRight />
          <ButtonRight />
          <ButtonRight />
          <ButtonRight />
          <ButtonRight />
        </div>
      </section>
    </main>
  );
}

export default App;
