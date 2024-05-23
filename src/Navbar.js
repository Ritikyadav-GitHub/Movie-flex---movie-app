
import React from "react";
import styled from "styled-components";


const NavBar = styled.div`
  width: 100%;
  height: 70px;
  background-color: #dd2828;
  display:flex;
  justify-content: space-between;
  align-items:center;
  position:relative;
`;

class Navbar extends React.Component{
    render(){
        const {cartCount} = this.props
        return (
        
          <>
            <NavBar>
              <div style={styles.title}>Movie-flex</div>
              <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon}
                  alt="cart icon"
                  src="https://cdn-icons-png.flaticon.com/128/5337/5337564.png"
                />
                <span style={styles.cartCount}>{cartCount}</span>
              </div>
            </NavBar>
          </>
        );
    }
}

export default Navbar;

// width: 100%;
//   height: 70px;
//   background-color: #dd2828;
//   display: flex;
//   justify-content: space-between;


const styles = {

    //comented becuse we used styled component for nav
//   nav: {
//     width: "100%",
//     height: 70,
//     backgroundColor: "#dd2828",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems:"center",
//     position:"relative"

//   },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat", sans-serif',
    textTransform: "uppercase",
    marginLeft: 20,

  },

  cartIconContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12,
  },
  cartIcon: {
    height:48,
    marginRight:20,
  }
};