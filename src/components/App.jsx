import React, { Component } from 'react';
import { Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Timeline from './Timeline';

let data = [
    {
        chirp: "Hello React!"
    },
    {
        chirp: "Chirper is amazing!"
    },
    {
        chirp: "I love pizza!"
    }
]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirp: "",
            chirps: []
        };
    }

    componentDidMount() {
        this.setState({ chirps: data});
    }

    handleSubmitChirp(e) {
        e.preventDefault();
        console.log(this.state.username);

        let chirps = this.state.chirps;
        let chirp = {
            chirp: this.state.chirp
        };

        chirps.unshift(chirp);

        this.setState({ 
            username: '',
            chirp: '',
            chirps
        });
    }

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
                                <Label>Username</Label>
                                <Input 
                                    type="text"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={(e) => this.setState({ username: e.target.value})}
                                />
                                <Label>Chirp</Label>
                                <Input
                                    type="text"
                                    placeholder="What's happening?"
                                    value={this.state.chirp}
                                    onChange={(e) => this.setState({ chirp: e.target.value })}
                                />
                            </FormGroup>
                            <Button
                                type="submit"
                                className="mt-5"
                                size="md"
                                color="primary"
                                onClick={ (e) => this.handleSubmitChirp(e)}
                            >Chirp it!</Button>
                        </Form>
                    </div>
                    <Timeline chirps={this.state.chirps}/>
                </div>
            </>
        );
    }
}

export default App;