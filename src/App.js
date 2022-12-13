import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCodeDiscount from './components/PromoCode/PromoCode';

import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 200,
            PickupSavings: -3.85,
            taxes: 0,
            estimatedTotal: 0,
            disablePromoBtutton: false
        };
    }

    componentDidMount = () => {
        this.setState(
            {
                taxes: (this.state.total + this.state.PickupSavings) * 0.0875
            },
            function () {
                this.setState(
                    {
                        estimatedTotal: this.state.total + this.state.PickupSavings + this.state.taxes
                    })
            }
        )
    };

    giveDiscountHandler = () => {
        if (this.props.promoCode === "DISCOUNT") {
            this.setState(
                {
                    estimatedTotal: this.state.estimatedTotal * 0.9
                },
                function () {
                    this.setState({
                        disablePromoBtutton: true
                    })
                }
            )
        }
    }
    render() {
        return (
            <div>
                <Container className="purchase-card">
                    <SubTotal price={this.state.total.toFixed(2)} />
                    <PickupSavings price={this.state.PickupSavings} />
                    <TaxesFees taxes={this.state.taxes} />
                    <hr />
                    <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
                    <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
                    <hr />
                    <PromoCodeDiscount
                        giveDiscount={() => this.giveDiscountHandler()}
                        isDisabled={this.state.disablePromoBtutton}
                    />
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
})

export default connect(mapStateToProps, { handleChange })(App);