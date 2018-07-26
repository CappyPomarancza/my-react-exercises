import React from 'react'
import Drawer from 'material-ui/Drawer'
import SideBarItem from './SideBarItem'


class SideBar extends React.Component {

    render() {
        return (
            <Drawer
                docked={false}
                onRequestChange={this.props.toggleSideBar}
                open={this.props.isSideBarOpen}
            >
                <SideBarItem
                    to={'/dashboard'}
                    label={'Dashboard'}
                    toggleSideBar={this.props.toggleSideBar}
                />
                <SideBarItem
                    to={'/basic-components'}
                    label={'Basic-Components'}
                    toggleSideBar={this.props.toggleSideBar}
                />
                <SideBarItem
                    to={'/ToDo'}
                    label={'To Do List'}
                    toggleSideBar={this.props.toggleSideBar}
                />
                <SideBarItem
                    to={'/Counter'}
                    label={'Counter'}
                    toggleSideBar={this.props.toggleSideBar}
                />
                <SideBarItem
                    to={'/FetchingRandomUsers'}
                    label={'FetchingRandomUsers'}
                    toggleSideBar={this.props.toggleSideBar}
                />
            </Drawer>

        )
    }
}

export default SideBar 
