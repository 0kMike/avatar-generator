import './App.scss';
import ButtonLeft from './components/ButtonLeft/ButtonLeft';
import ButtonRight from './components/ButtonRight/ButtonRight';
import Header from './components/Header/Header';

function App() {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('dark');
  }

  const buttonClickHandler = (direction: string, part: string) => {
    console.log(direction, part);
  };

  return (
    <>
      <Header />
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
      <footer />
    </>
  );
}

export default App;
