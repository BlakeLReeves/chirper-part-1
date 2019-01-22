import React, { Component } from 'react';
import { Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Timeline from './Timeline';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirps: [],
            username: "",
            chirp: ""
        };
    }

    componentDidMount() {
        let chirps = [
            {
                username: 'Blake',
                chirp: "Hello React!"
            },
            {
                username: 'Robin',
                chirp: "Chirper is amazing!"
            },
            {
                username: 'Kyle',
                chirp: "I love pizza!"
            }
        ];
        this.setState({ chirps });
    }

    handleSubmitChirp(e) {
        e.preventDefault();
        console.log(this.state.username);
        console.log(this.state.chirp);

        let chirps = this.state.chirps;
        let newChirp = { chirp: this.state.chirp, username: this.state.username };
        chirps.unshift(newChirp);

        this.setState({
            username: '',
            chirp: '',
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
                <div className="container">
                    <div className="row">
                        <div className="col-11 m-5">
                            <Form className="border border-primary rounded">
                                <FormGroup className="form-control-lg">
                                    <Label>Username</Label>
                                    <Input
                                        type="text"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={(e) => this.setState({ username: e.target.value })}
                                    />
                                </FormGroup>
                                <FormGroup className="form-control-lg mt-5">
                                    <Label>Chirp</Label>
                                    <Input
                                        className=""
                                        type="text"
                                        placeholder="What's happening?"
                                        value={this.state.chirp}
                                        onChange={(e) => this.setState({ chirp: e.target.value })}
                                    />
                                </FormGroup>
                                <Button
                                    type="submit"
                                    className="mt-5 ml-3 mb-3"
                                    size="md"
                                    color="primary"
                                    onClick={(e) => this.handleSubmitChirp(e)}
                                >Chirp it!</Button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="containder">
                    <div className="row">
                        {this.state.chirps.map((chirp, index) => {
                            return <Timeline key={index} chirp={chirp} />
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default App;