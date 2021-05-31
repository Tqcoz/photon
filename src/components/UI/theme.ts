import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#3fbcc3",
      contrastText: "#fff"
    },
    secondary: {
      main: "#ffc3da",
      contrastText: "#a563b1"
    },
    error: {
      main: '#fe6b6b',
    },
    background: {
      default: '#1f2937',
    },
    success: {
      main: '#3ad061'
    }
  },
  overrides: {
    MuiButton: {
      label: {
        fontWeight: 'bold',
        padding: 3
      }
    }
  }
})