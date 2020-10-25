import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PriceInfo from "../molecules/Info/PriceInfo";
import Contained from "../atoms/Button/Contained";
import Outlined from "../atoms/Button/Outlined";
import WalletCard from "../molecules/Wallet/WalletCard";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
  },
}));

export default function ({ wallets, rate }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <WalletCard wallet={wallets} rate={rate}>
          </WalletCard>
        <PriceInfo/>
        </Grid>
      </Grid>
    </div>
  );
}

