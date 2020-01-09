import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: ""
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});


    }

    render() {
        return (
            <form style={{ display: 'flex' }} onSubmit = {this.onSubmit}>
                <input type="text" name="title" placeholder="Add Todo Item" required={true} style={{ flex: '10' }} value={this.state.title}
                    onChange={this.onChange} />
                <input type="submit" value="Submit" className="btn" style={{ 'flex': '1' }} />
            </form>
        );

    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo;
