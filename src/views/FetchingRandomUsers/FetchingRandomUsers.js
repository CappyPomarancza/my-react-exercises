import React from 'react'
import User from './User'
import PaperRefined from '../Components/PaperRefined'
import Search from './Search';


class FetchingRandomUsers extends React.Component {
    state = {
        randomUserData: null,
        searchPhrase: ''
    }


    componentDidMount() {
        fetch('https://randomuser.me/api?results=10')
            .then((response) => response.json())
            .then((dataFromResponse) => {
                this.setState({
                    randomUserData: dataFromResponse.results
                })
            })
    }

    searchPhraseChangeHandler = (event) => {
        this.setState({
            searchPhrase: event.target.value
        })
    }


    render() {
        const userList = (
            this.state.randomUserData //jesli to bedzie nulem to nic nie wyswietli a za drugim renderem juz beda dane
            &&
            this.state.randomUserData
                .map(user => (
                    <User
                        user={user}
                        key={user.login.uuid}
                    />
                ))
        )
        const searchResults = (
            this.state.randomUserData //jesli to bedzie nulem to nic nie wyswietli a za drugim renderem juz beda dane
            &&
            this.state.randomUserData
                .filter(el => (
                    (el.name.first + ' ' + el.name.last).indexOf(this.state.searchPhrase) !== -1
                    ||
                    el.email.indexOf(this.state.searchPhrase) !== -1
                ))
                .map(user => (
                    <User
                        user={user}
                        key={user.login.uuid}
                    />
                ))
        )



        return (
            <div>
                <PaperRefined>
                    <Search
                        dupa={this.state.searchPhrase}
                        mojaNazwaPropsa={this.searchPhraseChangeHandler}
                    />
                </PaperRefined>
                <PaperRefined>
                    {searchResults}
                </PaperRefined>
                <PaperRefined>
                    {userList}
                </PaperRefined>
            </div >)
    }
}

export default FetchingRandomUsers
