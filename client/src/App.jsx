import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./app.css";
import WalletsPage from "./components/pages/Wallets";

import { getWallets } from "./actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#f8f8f8",
    height: "100%",
    width: "100%",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function JuniperAdmin() {
  const classes = useStyles();
  const [wallets, setWallets] = useState([]);
  const [ethRate] = useState(100);
  const [btcRate] = useState(1000);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#00aeef",
        light: "#daf5ff",
        dark: "#374ea2",
        containedHover: "#33bef2",
        containedActive: "#0094cb",
        textHover: "#ecfaff",
      },
      background: {
        default: "#ffffff",
      },
    },
    typography: {
      fontFamily: '"Cabin",  sans-serif',
      fontSize: 12,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      color: "#002452",
    },
  });

  useEffect(() => {
    async function init() {
      setWallets(await getWallets());
    }
    init();
  }, []);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <WalletsPage wallets={wallets} ethRate={ethRate} btcRate={btcRate} />
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

