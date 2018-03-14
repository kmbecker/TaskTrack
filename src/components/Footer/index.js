import React, { Component } from 'react';		
import Logo from './Logo';		
import Menu from './Menu';		
 		
class Footer extends Component {		
 render() {		
     const {		
       user,		
       editingProfileState,		
       handleEditProfileState		
     } = this.props;		
 		
     return(		
       <section id="footer">				
         <Logo />		
         <Menu />		
       </section>		
     )		
   }		
 }		
 		
export default Footer;
