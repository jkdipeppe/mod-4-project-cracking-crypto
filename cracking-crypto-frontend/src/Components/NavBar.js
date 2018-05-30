import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Search } from 'semantic-ui-react'
import _ from 'lodash'

class NavBar extends React.Component{
  state = {
    value: ''
  }

  handleSearchChange = (e, { value }) => {
    this.setState({
      value: value
    })
    this.props.handleSearch(value)
  }

  render(){
    return(
      <Menu tabular>
        <Menu.Item>
          <NavLink
            to="/"
            exact
            activeStyle={{background: 'lightgray'}}
            >Home
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to="/indexes"
            exact
            activeStyle={{background: 'lightgray'}}
            >Indexes
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to="/charts"
            exact
            activeStyle={{background: 'lightgray'}}
            >Charts
          </NavLink>
        </Menu.Item>
        {
          this.props.user !== null ?
          <Menu.Item>
            <NavLink
              to="/myportfolios"
              exact
              activeStyle={{background: 'lightgray'}}
              >My Portfolios
            </NavLink>
          </Menu.Item>
          :
          <Menu.Item>
            <NavLink
              to="/login"
              exact
              activeStyle={{background: 'lightgray'}}
              >Login
            </NavLink>
          </Menu.Item>
        }
        {
          this.props.user == null ?
          <Menu.Item>
            <NavLink
              to="/createaccount"
              exact
              activeStyle={{background: 'lightgray'}}
              >Create Account
            </NavLink>
          </Menu.Item> :
          null
        }
        {
          this.props.user !== null ?
          <Menu.Item>
            <NavLink
              to="/logout"
              exact
              activeStyle={{background: 'lightgray'}}
              >Log Out
            </NavLink>
          </Menu.Item> :
          null
        }
        {
          
          <Menu.Item right>
            <Search
              onSearchChange={_.debounce(this.handleSearchChange, 500)}
              showNoResults={false}
              placeholder={'Search Crypto Name'}
            />
          </Menu.Item>
        }
      </Menu>
    )
  }
}

export default NavBar
