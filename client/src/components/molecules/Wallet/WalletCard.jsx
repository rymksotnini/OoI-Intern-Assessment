import React, { Component } from 'react';
import CardTitle from "../../atoms/Text/CardTitle";
import CardAddress from "../../atoms/Text/CardAddress";
import Card from "../../atoms/Card";
import Block from "../../atoms/Block";
import Outlined from "../../atoms/Button/Outlined";
import getWallets from "../../../actions/getWallets";
import CardBalance from "../../atoms/Text/CardBalance";


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
                                    <CardTitle >{wallet.name}</CardTitle>
                                    <CardAddress >{wallet.address}</CardAddress>
                                    <CardBalance>{wallet.balance}</CardBalance>
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
                        if (this.state.wallets[index].currency === "Bitcoin"){
                            return (
                                <Card key={index}>
                                    <CardTitle >{wallet.name}</CardTitle>
                                    <CardAddress >{wallet.address}</CardAddress>
                                    <CardBalance>{wallet.balance}</CardBalance>
                                </Card>

                            )
                        }

                    })
                }

            </Block>
        }
    }
}

