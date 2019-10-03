import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <Link to="/home">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link
            to="/"
            onClick={() => {
              localStorage.setItem("jwt", null);
              localStorage.setItem("user", null);
            }}
          >
            Log Out
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;

// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar(props) {
//   return (
//     <div className="navbar">
//       {/* <img
//         src="https://picsum.photos/id/1012/3973/2639"
//         class="ui rounded image"
//       /> */}
//       <Link to="/search">Find Pets</Link>
//       <Link to="/favorites">Favorites</Link>
//       <Link
//         to="/"
//         onClick={() => {
//           localStorage.setItem("jwt", null);
//           localStorage.setItem("user", null);
//         }}
//       >
//         Log Out
//       </Link>
//     </div>
//   );
// }

// export default Navbar;
