import React from 'react'


class FetchingRandomUsers extends React.Component {
    state = {
        randomUserData: null
    }


    componentDidMount() {
        fetch('https://randomuser.me/api?results=10')
            .then((response) => response.json())
            .then((dataFromResponse) => {
                this.setState({
                    randomUserData: dataFromResponse.response
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.randomUserData ? this.state.randomUserData.results[0].name.first : 'Ładowanie'}{` `}
                {this.state.randomUserData ? this.state.randomUserData.results[0].name.last : 'Cierpliwości'}
        </div>)

    }
}

export default FetchingRandomUsers
