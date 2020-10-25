import React from "react";
import CardTitle from "../../atoms/Text/CardTitle";
import CardAddress from "../../atoms/Text/CardAddress";
import WalletCard from "../../atoms/Card";
import Outlined from "../../atoms/Button/Outlined";

export default function () {
    return (
	<React.Fragment>
            <WalletCard>
                <CardTitle>wallet 1</CardTitle>
                <CardAddress>0x000000000</CardAddress>
		<Outlined>delete</Outlined>
            </WalletCard>

	    <WalletCard>
                <CardTitle>wallet 2</CardTitle>
                <CardAddress>0x000000001</CardAddress>
		<Outlined>delete</Outlined>
            </WalletCard>
	</React.Fragment>
    );
}

