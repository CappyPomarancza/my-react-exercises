import React from 'react'

import AppBar from 'material-ui/AppBar'
import SideBar from './SideBar'

class Navigation extends React.Component {
    state = {
        isOpen: false
    }

    toggleHendler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    render() {
        return (
            <div>

                <AppBar
                    title={'mój APP BAR !!!!!'}
                    onLeftIconButtonClick={this.toggleHendler}
                />

                <SideBar
                    isSideBarOpen={this.state.isOpen}
                    toggleSideBar={this.toggleHendler}
                />
            </div>
        )
    }
}

export default Navigation 