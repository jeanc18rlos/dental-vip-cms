import React from "react";

const defaultState = {
  searchTerm: null,
  toggleSearch: () => {},
};
const Context = React.createContext(defaultState);
// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  class ContextProvider extends React.Component {
    state = {
      searchTerm: false,
    };
    toggleSearch = () => {
      let dark = !this.state.dark;
      localStorage.setItem("dark", JSON.stringify(dark));
      this.setState({ dark });
    };
    componentDidMount() {
      // Getting dark mode value from localStorage!
      const lsDark = JSON.parse(localStorage.getItem("dark"));
      if (lsDark) {
        this.setState({ dark: lsDark });
      } else if (supportsDarkMode()) {
        this.setState({ dark: true });
      }
    }
    render() {
      const { children } = this.props;
      const { dark } = this.state;
      return (
        <ThemeContext.Provider
          value={{
            dark,
            toggleDark: this.toggleDark,
          }}
        >
          {children}
        </ThemeContext.Provider>
      );
    }
  };
export default ThemeContext;
export { ThemeProvider };
