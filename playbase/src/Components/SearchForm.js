import React, { Component } from 'react'
import ResultsContainer from '../Containers/ResultsContainer'
import { Button, Form } from 'semantic-ui-react'

class SearchForm extends Component {
    state = {
        searchTxt: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getAlbum(this.state.searchTxt)
    }

    handleChange = (e) => {
        this.setState({ searchTxt: e.target.value })
        console.log(e.target.value)
    }

    render() {
        return (
            <div className = "search-form">
                <br></br>
                {/* <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" onChange={(e) => this.handleChange(e)}></input>
                    <input type="submit"></input>
                </form> */}

                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Field>
                    <input placeholder='Search' className='search-input' onChange={(e) => this.handleChange(e)}/>
                    </Form.Field>
                    <Button basic type='submit'>Submit</Button>
                </Form>
                

  

                <ResultsContainer albumSearchResult={this.props.albumSearchResult}
                    postAlbum={this.props.postAlbum} />

            </div>
        )
    }
}

export default SearchForm