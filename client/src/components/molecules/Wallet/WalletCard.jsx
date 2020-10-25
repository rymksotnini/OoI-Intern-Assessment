import React, { Component } from 'react';
import CardTitle from "../../atoms/Text/CardTitle";
import CardAddress from "../../atoms/Text/CardAddress";
import Card from "../../atoms/Card";
import Block from "../../atoms/Block";
import Outlined from "../../atoms/Button/Outlined";
import getWallets from "../../../actions/getWallets";
import CardBalance from "../../atoms/Text/CardBalance";
import Contained from "../../atoms/Button/Contained";
import EditIcon from "../../atoms/Icons/EditIcon";
import CancelIcons from "../../atoms/Icons/CancelIcons";
import WalletsIcon from "../../atoms/Icons/WalletsIcon";
import EnvelopeIcon from "../../atoms/Icons/EnvelopeIcon";
import PriceIcon from "../../atoms/Icons/PriceIcon";
import USDIcon from "../../atoms/Icons/USDIcon";
import {cryptoFormatter, usdFormatter} from "../../../util";
import {colors} from "@material-ui/core";


export default class WalletCard extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            wallets: []
        }
    }

    getWallets() {
        getWallets().then(
            response => {
                this.setState({wallets: response})
            }
        )
    };

    componentDidMount() {
        console.log("rate: "+this.props.rate);
        this.getWallets();
    }

    render(){
        if (this.props.rate === 100){

            return  <Block>

                {
                    this.state.wallets.map((wallet,index) => {
                        console.log(this.state.wallets);
                        console.log(this.state.wallets[index].currency);
                        if (this.state.wallets[index].currency === "Ethereum"){
                            return (
                                <Card key={index}>
                                    <CardTitle>
                                        <WalletsIcon/>
                                    {wallet.name}
                                    </CardTitle>

                                    <CardAddress >
                                        <EnvelopeIcon/>
                                        {wallet.address}
                                    </CardAddress>
                                    <br/>
                                    <CardBalance>
                                        <PriceIcon/>
                                        <span style={{marginRight: "15px"}}>Balance(Eth) </span>
                                        {cryptoFormatter(wallet.balance)}
                                    </CardBalance>
                                    <br/>
                                    <br/>
                                    <CardBalance>
                                        <USDIcon/>
                                        <span style={{marginRight: "15px"}}>Balance(USD) </span>
                                        {usdFormatter.format(wallet.balance * this.props.rate)}
                                    </CardBalance>
                                    <br/>
                                    <br/>
                                    <div>
                                        <Outlined>
                                            <EditIcon/>
                                            Edit
                                        </Outlined>

                                        <Contained style={{backgroundColor: "#9f1a1f",marginLeft:"15px"}}>
                                            <CancelIcons/>
                                            Delete
                                        </Contained>
                                    </div>
                                </Card>

                            )
                        }

                    })
                }

            </Block>
        }
        if (this.props.rate === 1000){
            return  <Block>

                {
                    this.state.wallets.map((wallet,index) => {
                        console.log(this.state.wallets);
                        console.log(this.state.wallets[index].currency);
                        if (this.state.wallets[index].currency === "Bitcoin"){
                            return (
                                <Card key={index}>
                                    <CardTitle>
                                        <WalletsIcon/>
                                        {wallet.name}
                                    </CardTitle>

                                    <CardAddress >
                                        <EnvelopeIcon/>
                                        {wallet.address}
                                    </CardAddress>
                                    <br/>
                                    <CardBalance>
                                        <PriceIcon/>
                                        <span style={{marginRight: "15px"}}>Balance(Bitcoin) </span>
                                        {cryptoFormatter(wallet.balance)}
                                    </CardBalance>
                                    <br/>
                                    <br/>
                                    <CardBalance>
                                        <USDIcon/>
                                        <span style={{marginRight: "15px"}}>Balance(USD) </span>
                                        {usdFormatter.format(wallet.balance * this.props.rate)}
                                    </CardBalance>
                                    <br/>
                                    <br/>
                                    <div>
                                        <Outlined>
                                            <EditIcon/>
                                            Edit
                                        </Outlined>

                                        <Contained style={{backgroundColor: "#9f1a1f",marginLeft:"15px"}}>
                                            <CancelIcons/>
                                            Delete
                                        </Contained>
                                    </div>
                                </Card>

                            )
                        }

                    })
                }

            </Block>
        }
    }
}

