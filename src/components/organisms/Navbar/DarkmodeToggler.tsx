import React, { type ChangeEvent } from 'react';

const THEME_STORAGE_KEY = 'darkmode';
const DARK_CLASS = 'bg-dark';
const LIGHT_CLASS = 'bg-light';

function DarkmodeToggler() {
  const getThemeName = (darkmode: boolean) =>
    darkmode ? DARK_CLASS : LIGHT_CLASS;

  const [darkmode, setDarkmode] = React.useState(
    () => localStorage.getItem(THEME_STORAGE_KEY) === 'true'
  );

  React.useEffect(() => {
    document.documentElement.classList.add(getThemeName(darkmode));
    localStorage.setItem(THEME_STORAGE_KEY, darkmode.toString());
    return () => {
      document.documentElement.classList.remove(getThemeName(darkmode));
    };
  }, [darkmode]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDarkmode(e.target.checked);
  };

  return (
    <input
      type="checkbox"
      className="darkmode-toggler"
      checked={darkmode}
      onChange={onChange}
    />
  );
}

export default DarkmodeToggler;
