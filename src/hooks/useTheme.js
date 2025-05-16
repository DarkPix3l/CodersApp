import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, setTheme } from '../store/slices/themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.mode);

  const toggle = () => dispatch(toggleTheme());
  const set = mode => dispatch(setTheme(mode));

  return { theme, toggle, set };
};
