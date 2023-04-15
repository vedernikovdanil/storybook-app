import React, { type ChangeEvent } from 'react';

const THEME_STORAGE_KEY = 'darkmode';
const DARK_CLASS = 'bg-dark';
const LIGHT_CLASS = 'bg-light';

interface NavbarDarkmodeProps {
  onChange?: (isDarkmode: boolean) => void;
}

function Darkmode({ onChange: onChangeProp }: NavbarDarkmodeProps) {
  const getThemeName = (isDarkmode: boolean) =>
    isDarkmode ? DARK_CLASS : LIGHT_CLASS;

  const [isDarkmode, setIsDarkmode] = React.useState(
    () => localStorage.getItem(THEME_STORAGE_KEY) === 'true'
  );

  React.useEffect(() => {
    document.documentElement.classList.add(getThemeName(isDarkmode));
    localStorage.setItem(THEME_STORAGE_KEY, isDarkmode.toString());

    onChangeProp?.call({}, isDarkmode);

    return () => {
      document.documentElement.classList.remove(getThemeName(isDarkmode));
    };
  }, [isDarkmode]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDarkmode(e.target.checked);
  };

  return (
    <input
      type="checkbox"
      className="navbar-darkmode"
      aria-label={'Darkmode toggler'}
      checked={isDarkmode}
      onChange={onChange}
    />
  );
}

export default Darkmode;
