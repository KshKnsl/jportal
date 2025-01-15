import useTheme from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

function ThemeBtn() {
    const { themeMode, darkTheme, lightTheme } = useTheme();

    function handleClick() {
        if (themeMode === 'dark') {
            lightTheme();
        } else {
            darkTheme();
        }
    }

    return (
        <button
            onClick={handleClick}
            className="p-2 rounded-full focus:outline-none transition-colors duration-300 ease-in-out
                       dark:text-gray-700 focus:ring-gray-400  bg-gray-800 text-gray-300"
            aria-label={themeMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {themeMode === 'dark' ? (
                <Moon className="w-5 h-5" />
            ) : (
                <Sun className="w-5 h-5" />
            )}
        </button>
    );
}

export default ThemeBtn;
