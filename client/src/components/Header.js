//import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect} from 'react';
import{Link,navigate, Router} from '@reach/router';

function Header() {
    useEffect(() => {
        
    })
  return (
      <div>
          <div>
            <h1>SciLab</h1>
            <p>Hi, User</p>
          </div>
          <div>
      {/* <ul>
        <li>Experiments</li>
        <li>Procedures</li>
     	</ul> */}
    </div>
          <hr></hr>
      </div>
  );
}

export default Header;