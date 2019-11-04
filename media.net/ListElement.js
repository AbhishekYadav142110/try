import React from 'react';

export default class ListElement extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                isChecked: false,
                isDeleted: false,
                searchValue: this.props.searchValue
            }
            this.handleDelete = this.handleDelete.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }

        static getDerivedStateFromProps(props, state){
            if (props.searchValue !== state.searchValue){
                return {
                  searchValue: props.searchValue
                };
              }
            return null;  
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
            let row = 
            <tr>
                <td>
                    <input type="checkbox" value={this.state.isChecked} onChange={this.handleChange}/>
                </td>
                <td>
                    {this.props.email}
                </td>
                <td>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>

            if(this.props.isChecked && !this.state.isDeleted){
                display = this.state.isChecked && row
            }
            else{
                display = this.state.isDeleted?null:row
            }

            return(display);
        }

         componentDidUpdate(prevProps, prevState){
             if(this.props.searched && prevProps.searchValue!=this.props.searchValue){
                if(this.props.email.includes(this.state.searchValue)){
                    this.setState({
                    isDeleted: false
                    })
                }
                else{
                    this.setState({
                        isDeleted: true
                    })
                }
            }
        }

}    