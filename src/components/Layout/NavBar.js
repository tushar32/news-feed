import React   from 'react'
import { Avatar, Logo, NavRight, NavbarContainer, NavigationWrapper } 
     from '../../assets/styles/Navigation.style'
import avatar from './../../assets/images/tushar_barate.jpg'; // Tell webpack this JS file uses this image

    
const NavBar = () => {
    return(
        <NavbarContainer>
            <NavigationWrapper>
                <div>
                    <Logo> My NewsFeed </Logo>
                </div>
                <NavRight>
                    <Avatar src={avatar}></Avatar>
                </NavRight>
            </NavigationWrapper>
            
        </NavbarContainer>
    )
}

export default NavBar