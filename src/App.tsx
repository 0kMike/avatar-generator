import './App.scss';
import Header from './components/Header/Header';
import AvatarButton from './components/AvatarButton/AvatarButton';
import { createRef, useEffect, useRef, useState } from 'react';
import { backGroundColors } from './providers/backgroundColor.provider';

export type DirectionType = 'right' | 'left';
export type AvatarSectionType =
  | 'hair'
  | 'eyes'
  | 'nose'
  | 'lips'
  | 'skin'
  | 'background';

function App() {
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);

  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('dark');
  }

  const canvasElement = createRef<HTMLCanvasElement>();

  const buttonClickHandler = (
    direction: DirectionType,
    section: AvatarSectionType
  ) => {
    switch (section) {
      case 'eyes':
        console.log('EYES');
        break;
      case 'eyes':
        console.log('EYES');
        break;
      case 'eyes':
        console.log('EYES');
        break;
      case 'eyes':
        console.log('EYES');
        break;
      case 'eyes':
        console.log('EYES');
        break;
      case 'background':
        if (direction === 'left') {
          if (backgroundColorIndex > 0) {
            setBackgroundColorIndex(backgroundColorIndex - 1);
          } else {
            setBackgroundColorIndex(backGroundColors.length - 1);
          }
        } else if (direction === 'right') {
          if (backgroundColorIndex < backGroundColors.length - 1) {
            setBackgroundColorIndex(backgroundColorIndex + 1);
          } else {
            setBackgroundColorIndex(0);
          }
        }
        break;
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className='content-wrapper'>
          <div className='button-wrapper'>
            <AvatarButton
              direction='left'
              clickHandler={() => buttonClickHandler('left', 'hair')}
            />
            <AvatarButton
              direction='left'
              clickHandler={() => buttonClickHandler('left', 'eyes')}
            />
            <AvatarButton
              direction='left'
              clickHandler={() => buttonClickHandler('left', 'nose')}
            />
            <AvatarButton
              direction='left'
              clickHandler={() => buttonClickHandler('left', 'lips')}
            />
            <AvatarButton
              direction='left'
              clickHandler={() => buttonClickHandler('left', 'skin')}
            />
            <AvatarButton
              direction='left'
              clickHandler={() => buttonClickHandler('left', 'background')}
            />
          </div>
          <canvas
            ref={canvasElement}
            style={{
              backgroundColor: backGroundColors[backgroundColorIndex],
            }}></canvas>
          <div className='button-wrapper'>
            <AvatarButton
              direction='right'
              clickHandler={() => buttonClickHandler('right', 'hair')}
            />
            <AvatarButton
              direction='right'
              clickHandler={() => buttonClickHandler('right', 'eyes')}
            />
            <AvatarButton
              direction='right'
              clickHandler={() => buttonClickHandler('right', 'nose')}
            />
            <AvatarButton
              direction='right'
              clickHandler={() => buttonClickHandler('right', 'lips')}
            />
            <AvatarButton
              direction='right'
              clickHandler={() => buttonClickHandler('right', 'skin')}
            />
            <AvatarButton
              direction='right'
              clickHandler={() => buttonClickHandler('right', 'background')}
            />
          </div>
        </section>
        <button className='save-button'>download</button>
      </main>
      <footer />
    </>
  );
}

export default App;
