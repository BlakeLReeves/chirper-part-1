import React, { Component } from 'react';
import { Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class App extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <Jumbotron className="col-12">
                            <h1 className="display-3 text-primary text-center">Chirper</h1>
                        </Jumbotron>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 m-5">
                        <Form className="border border-primary rounded">
                            <FormGroup className="form-control-lg">
                                <Label for="exampleEmail">Chirp</Label>
                                <Input type="text" placeholder="What's happening?" />
                            </FormGroup>
                            <Button className="mt-4 ml-3 mb-2" size="md" color="primary">Chirp it!</Button>
                        </Form>
                    </div>
                </div>
            </>
        );
    }
}

export default App;