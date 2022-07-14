import './App.scss';
import Header from './components/Header/Header';
import AvatarButton from './components/AvatarButton/AvatarButton';
import { createRef } from 'react';
import { hairAssets } from './providers/hair.provider';
import { eyesAssets } from './providers/eyes.provider';
import { noseAssets } from './providers/nose.provider';
import { lipsAssets } from './providers/lips.provider';
import { skinAssets } from './providers/skin.provider';
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
  let hairIndex = 0;
  let eyesIndex = 0;
  let noseIndex = 0;
  let lipsIndex = 0;
  let skinIndex = 0;
  let backgroundIndex = 0;

  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('dark');
  }

  const canvasElement = createRef<HTMLCanvasElement>();

  const drawSingleAsset = (part: string, index: number) => {
    if (!canvasElement.current) {
      return;
    }
    const width = canvasElement.current.width;
    const height = canvasElement.current.height;
    const context = canvasElement!.current!.getContext('2d');

    if (!context) {
      return;
    }

    let assetArray;
    switch (part) {
      case 'skin':
        assetArray = skinAssets;
        break;
      case 'lips':
        assetArray = lipsAssets;
        break;
      case 'nose':
        assetArray = noseAssets;
        break;
      case 'eyes':
        assetArray = eyesAssets;
        break;
      case 'hair':
        assetArray = hairAssets;
        break;
      default:
        assetArray = skinAssets;
    }

    const image = new Image();
    image.src = `src/assets/avatarParts/${part}/${assetArray[index]}`;

    image.onload = () => {
      context.drawImage(image, 0, 0, width, height);
    };
  };

  const drawAssetsToCanvas = () => {
    if (!canvasElement.current) {
      return;
    }
    const context = canvasElement!.current!.getContext('2d');
    if (!context) {
      return;
    }
    context.clearRect(
      0,
      0,
      canvasElement.current.width,
      canvasElement.current.height
    );

    drawSingleAsset('skin', skinIndex);
    drawSingleAsset('lips', lipsIndex);
    drawSingleAsset('nose', noseIndex);
    drawSingleAsset('eyes', eyesIndex);
    drawSingleAsset('hair', hairIndex);
  };

  const buttonClickHandler = (
    direction: DirectionType,
    section: AvatarSectionType
  ) => {
    switch (section) {
      case 'hair':
        if (direction === 'left') {
          if (hairIndex > 0) {
            hairIndex = hairIndex - 1;
          } else {
            hairIndex = hairAssets.length - 1;
          }
        } else if (direction === 'right') {
          if (hairIndex < hairAssets.length - 1) {
            hairIndex = hairIndex + 1;
          } else {
            hairIndex = 0;
          }
        }
        break;
      case 'eyes':
        if (direction === 'left') {
          if (eyesIndex > 0) {
            eyesIndex = eyesIndex - 1;
          } else {
            eyesIndex = eyesAssets.length - 1;
          }
        } else if (direction === 'right') {
          if (eyesIndex < eyesAssets.length - 1) {
            eyesIndex = eyesIndex + 1;
          } else {
            eyesIndex = 0;
          }
        }
        break;
      case 'nose':
        if (direction === 'left') {
          if (noseIndex > 0) {
            noseIndex = noseIndex - 1;
          } else {
            noseIndex = noseAssets.length - 1;
          }
        } else if (direction === 'right') {
          if (noseIndex < noseAssets.length - 1) {
            noseIndex = noseIndex + 1;
          } else {
            noseIndex = 0;
          }
        }
        break;
      case 'lips':
        if (direction === 'left') {
          if (lipsIndex > 0) {
            lipsIndex = lipsIndex - 1;
          } else {
            lipsIndex = lipsAssets.length - 1;
          }
        } else if (direction === 'right') {
          if (lipsIndex < lipsAssets.length - 1) {
            lipsIndex = lipsIndex + 1;
          } else {
            lipsIndex = 0;
          }
        }
        break;
      case 'skin':
        if (direction === 'left') {
          if (skinIndex > 0) {
            skinIndex = skinIndex - 1;
          } else {
            skinIndex = skinAssets.length - 1;
          }
        } else if (direction === 'right') {
          if (skinIndex < skinAssets.length - 1) {
            skinIndex = skinIndex + 1;
          } else {
            skinIndex = 0;
          }
        }
        break;
      case 'background':
        if (direction === 'left') {
          if (backgroundIndex > 0) {
            backgroundIndex = backgroundIndex - 1;
          } else {
            backgroundIndex = backGroundColors.length - 1;
          }
        } else if (direction === 'right') {
          if (backgroundIndex < backGroundColors.length - 1) {
            backgroundIndex = backgroundIndex + 1;
          } else {
            backgroundIndex = 0;
          }
        }
        break;
    }
    drawAssetsToCanvas();
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
              backgroundColor: backGroundColors[backgroundIndex],
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
