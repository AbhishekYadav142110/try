import React from 'react';

export default class ListElement extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                isChecked: false,
                isDeleted: false
            }
            this.handleDelete = this.handleDelete.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }

        handleDelete(e){
            this.setState({
                isDeleted: true
            })
        }

        handleChange(){
            let value = this.state.isChecked;
            this.setState({
                isChecked: !value
            })
        }

        render(){
            let display;  
            
            if(this.props.isChecked && !this.state.isDeleted){
                display = this.state.isChecked && 
                <>
                <tr>
                    <input type="checkbox" value={this.state.isChecked} onChange={this.handleChange}/>
                </tr>
                <tr>
                    {this.props.email}
                </tr>
                <tr>
                    <button onClick={this.handleDelete}>Delete</button>
                </tr>
            </>
            }
            else{
            display = this.state.isDeleted?null:
            <>
                <tr>
                    <input type="checkbox" value={this.state.isChecked} onChange={this.handleChange}/>
                </tr>
                <tr>
                    {this.props.email}
                </tr>
                <tr>
                    <button onClick={this.handleDelete}>Delete</button>
                </tr>
            </> 
            }
            return(display);
            }

}