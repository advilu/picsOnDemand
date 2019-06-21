import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui icon input focus">
                    <div className="field">
                        <label>Search for images:</label>
                        <br />
                        <input type="text" placeholder="Type keyword here..." 
                        value={this.state.term} 
                        onChange={ e => this.setState({ term: e.target.value }) }
                        />
                        <i className="inverted circular search link icon" />
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;