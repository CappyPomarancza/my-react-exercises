import React from 'react'
import User from './User'
import PaperRefined from '../Components/PaperRefined'
import Search from './Search';


class FetchingRandomUsers extends React.Component {
    state = {
        randomUserData: null
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

    render() {
        return (
            <div>
                <PaperRefined>
                    <Search />
                </PaperRefined>
            <PaperRefined>
                {
                    this.state.randomUserData //jesli to bedzie nulem to nic nie wyswietli a za drugim renderem juz beda dane
                    &&
                    this.state.randomUserData
                        .map(user => (
                            <User
                                user={user}
                                key={user.login.uuid}
                            />
                        ))
                }
            </PaperRefined>
            </div >)
    }
}

export default FetchingRandomUsers
