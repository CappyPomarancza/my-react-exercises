import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {Link} from 'react-router-dom'


const SideBar = () => (
    <Drawer
        open={true}
    >
        <Link to={'/dashboard'}
            style={{ textDecoration: 'none' }}
        >
            <MenuItem>
                Dashboard
            </MenuItem>
        </Link>
        <Link to={'/basic-component'}
            style={{ textDecoration: 'none' }}>
            <MenuItem>
                BasicComponents
            </MenuItem></Link>
        <Link to={'/passing-parameters/cos'} style={{ textDecoration: 'none' }}
        > <MenuItem>
                coś
          </MenuItem>
        </Link>
    </Drawer>

)


export default SideBar 
