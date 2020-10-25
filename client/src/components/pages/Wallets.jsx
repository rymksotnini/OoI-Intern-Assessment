import React, { useState } from "react";
import PageLayout from "../templates/Page";
import Wallets from "../templates/Wallets";
import PlusIcon from "../atoms/Icons/PlusIcon";
import Outlined from "../atoms/Button/Outlined";

export default function WalletsPage({ wallets, btcRate, ethRate }) {
  const [tabs] = useState(["Ethereum Wallets", "Bitcoin Wallets"]);

  return (
    <PageLayout tabs={tabs}>

      <Wallets wallets={wallets} rate={ethRate} />

      <Wallets wallets={wallets} rate={btcRate} />
    </PageLayout>
  );
}

