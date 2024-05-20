import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Images/logo.png'
import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1rem 2rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const Navbar = () => {
    const linkClass = ({ isActive }) => 
        isActive 
        ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
        : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
    return (
        <nav className='border-b'>
            <StyledNavLink>    
                <StyledNavLink to="/">
                    <img
                        className="h-10 w-auto"
                        src= { logo }
                        alt="React Jobs"
                    />
                    <span>Fashion Connect</span>
                </StyledNavLink>
                <NavLink to="/" className={ linkClass }>Home</NavLink>
                <NavLink to="/products" className={ linkClass }>Products</NavLink>
                <NavLink to="/categories" className={ linkClass }>Categories</NavLink>
                <NavLink to="/about" className={ linkClass }>About Us</NavLink>
                <NavLink to="/contact" className={ linkClass }>Contact Us</NavLink>
                <NavLink to="/blog" className={ linkClass }>Blog</NavLink>
                <NavLink to="/login" className={ linkClass }>Login</NavLink>
                <NavLink to="/sign-up" className={ linkClass }>Sign Up</NavLink>
            </StyledNavLink>
        </nav>
  )
}

export default Navbar