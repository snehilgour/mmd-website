import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

export function useKeyboardControls() {
  const { setKeyboard } = useThree();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeyboard((state) => ({
        ...state,
        forward: e.key === 'w' || e.key === 'ArrowUp' ? true : state.forward,
        backward: e.key === 's' || e.key === 'ArrowDown' ? true : state.backward,
        left: e.key === 'a' || e.key === 'ArrowLeft' ? true : state.left,
        right: e.key === 'd' || e.key === 'ArrowRight' ? true : state.right,
      }));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeyboard((state) => ({
        ...state,
        forward: e.key === 'w' || e.key === 'ArrowUp' ? false : state.forward,
        backward: e.key === 's' || e.key === 'ArrowDown' ? false : state.backward,
        left: e.key === 'a' || e.key === 'ArrowLeft' ? false : state.left,
        right: e.key === 'd' || e.key === 'ArrowRight' ? false : state.right,
      }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [setKeyboard]);
}