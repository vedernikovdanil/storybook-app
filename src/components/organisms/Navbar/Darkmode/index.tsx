import React from 'react';

const THEME_STORAGE_KEY = 'darkmode';
const DARK_CLASS = 'bg-dark';
const LIGHT_CLASS = 'bg-light';

const getThemeName = (isDarkmode: boolean) =>
  isDarkmode ? DARK_CLASS : LIGHT_CLASS;

export interface NavbarDarkmodeProps {
  onChange?: (isDarkmode: boolean) => void;
}

function Darkmode({ onChange: onChangeProp, ...props }: NavbarDarkmodeProps) {
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

  const toggleIsDarkmode = () => {
    setIsDarkmode((value) => !value);
  };

  return (
    <button
      className="navbar-darkmode"
      aria-label={'Darkmode toggler'}
      onClick={toggleIsDarkmode}
      {...props}
    />
  );
}

export default Darkmode;
