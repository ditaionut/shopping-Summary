import React, { Component } from 'react';
import { Row, Col, Button, Media, Container, Collapse } from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div>
                <Button
                    className="item-details-button"
                    variant="link"
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    {this.state.open === false ? `See ` : `Hide `} item details
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Container>
                            <Media>
                                <Media.Body>
                                    <img
                                        width={100}
                                        alt="thumbnail"
                                        src="https://i5.walmartimages.com/asr/79916c35-3293-48ff-acff-be325b2e4c84_2.ef5b1bd1451de6b63a7c20d2485d56c6.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                                    />
                                </Media.Body>
                                <Media.Body>
                                    <p>OFM Essentials Collection Racing Style Bonded Leather Gaming Chair, in Green (ESS-3085-GRN)</p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong>
                                                {`$${this.props.price}`}
                                            </strong>
                                            <br />
                                            <strong className="price-strike">
                                                {`$${this.props.price}`}</strong>
                                        </Col>
                                        <Col md={6}> Qty: 1 </Col>
                                    </Row>
                                </Media.Body>
                            </Media>
                        </Container>
                    </div>
                </Collapse>
            </div>
        )
    }
}