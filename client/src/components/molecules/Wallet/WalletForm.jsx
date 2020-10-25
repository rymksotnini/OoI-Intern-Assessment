import React, { Component } from 'react';
import PlusIcon from "../../atoms/Icons/PlusIcon";
import Outlined from "../../atoms/Button/Outlined";
import Block from "../../atoms/Block";
import Card from "../../atoms/Card";

const AddWallet = ({onChangeForm, addWallet }) => {
    return(
        <Card>
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <form>
                        <div className="row">
                            <div>
                                <label>Wallet Name</label>
                                <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="walletname" id="walletname" placeholder="Wallet Name" />
                            </div>
                            <div>
                                <label>Address</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="address" id="address" placeholder="address" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-12">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                        </div>
                        <button type="button" onClick= {(e) => addWallet()} className="btn btn-danger">Add</button>
                    </form>
                </div>
            </div>
        </Card>
    )
};

export class WalletForm extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            clicked: 0
        }
    };

    clicked(){
        if (this.state.clicked === 0)
            this.setState({wallets: 1});
        else this.setState({wallets: 0});
        console.log("clicked");
    }

    componentDidMount() {

    }

    render(){
        // console.log(this.state.clicked);
        // if (this.state.clicked===1){
        //     console.log("clicked 1");
        //     return(
        //         <Block>
        //             <Outlined onClick={this.clicked()} style={{color: "#229836",borderColor: "#229836",marginBottom:"10px"}}>
        //                 <PlusIcon style={{color: "#229836"}}/>
        //                 Add Wallet
        //             </Outlined>
        //         </Block>
        //     );
        // }
       return(
            <Outlined style={{color: "#229836",borderColor: "#229836",marginBottom:"10px"}}>
            <PlusIcon style={{color: "#229836"}}/>
            Add Wallet
        </Outlined>
        )
    }
}

