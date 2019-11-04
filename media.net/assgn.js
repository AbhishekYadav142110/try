import React from 'react';
import ListElement from './ListElement';

export default class Media extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: '',
            emailAddresses: [],
            isChecked: false,
            valid: true,
            searchValue: '',
            searched: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.search = this.search.bind(this);
        this.unsearch = this.unsearch.bind(this);
    }

    search(){
        this.setState({
            searched: true
        })
    }

    unsearch(){
        this.setState({
            searched: false
        })
    }

    handleCheck(){
        let value = this.state.isChecked;
        this.setState({
            isChecked: !value
        })
    }

    handleClick(e){
        let list = this.state.emailAddresses;
        
        if(this.state.value.includes('@') && this.state.value.includes('.')){
            list.push(this.state.value);
            this.setState({
                value: '',
                emailAddresses: list,
                valid: true
            })
        }
        else{
            this.setState({
                valid: false
            })
        }
    }

    handleChange(e){
        this.setState({value: event.target.value});
    }

    handleSearch(e){
        this.setState({searchValue: event.target.value});
    }

    render(){

        let emails = this.state.emailAddresses.map((email, index) => {
            return (
                <ListElement searched={this.state.searched} searchValue={this.state.searched && this.state.searchValue} isChecked={this.state.isChecked} email={email} index={index} />
            );
        });

        return (
            <div className="container" style={{display: "flex"}}>
                <div className="left">
                    <div>
                        Email Address
                    </div>
                    <input type="text" value={this.state.value} onChange={this.handleChange} style={{display:"block"}} />
                    {!this.state.valid && <div style={{color:"red"}}>Not a valid email</div>}
                    <button onClick={this.handleClick}>
                        Add
                    </button>
                </div>
                <div className="right">
                    <div>
                        <input type="text" value={this.state.searchValue} onChange={this.handleSearch} />
                        <button onClick={this.search}>Search</button>
                    </div>
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

    componentDidUpdate(prevProps, prevState){
        if(!this.state.searched && prevState.searchValue!=this.state.searchValue){
            this.setState({
                searched: false
            })
        }
    }               
}