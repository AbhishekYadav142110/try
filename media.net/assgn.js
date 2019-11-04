import React from 'react';
import ListElement from './ListElement';

export default class Media extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: '',
            emailAddresses: [],
            isChecked: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(){
        let value = this.state.isChecked;
        this.setState({
            isChecked: !value
        })
    }

    handleClick(e){
        let list = this.state.emailAddresses;
        list.push(this.state.value);

        this.setState({
            value: '',
            emailAddresses: list
        })
    }

    handleChange(e){
        this.setState({value: event.target.value});
    }

    render(){

        let emails = this.state.emailAddresses.map((email, index) => {
            return (
                <ListElement isChecked={this.state.isChecked} email={email} index={index} />
            );
        });

        return (
            <div className="container">
                <div className="left">
                    <div>
                        Email Address
                    </div>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>
                        Add
                    </button>
                </div>
                <div className="right">
                    <input type="checkbox" value={this.state.isChecked} onChange={this.handleCheck}/>
                    Show enabled emails
                    <div>
                        <table border="1">
                            <tr>
                                <th>isEnabled</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                            {emails}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}