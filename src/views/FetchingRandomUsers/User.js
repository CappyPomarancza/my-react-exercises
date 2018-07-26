import React from 'react'
import { ListItem } from 'material-ui'
import Avatar from 'material-ui/Avatar'

const User = (props) => {

    const personData = props.user.name.first + ' ' + props.user.name.last

    return (
        <ListItem
            primaryText={personData}
            secondaryText={props.user.email}
            leftAvatar={<Avatar src={props.user.picture.thumbnail} />}
        />
    )
}
export default User 