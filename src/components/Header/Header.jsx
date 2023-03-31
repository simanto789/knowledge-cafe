import React from 'react';

import logo from '../../image/3135715.png';

const Header = () => {
    return (
        <div>
            <nav class="navbar bg-light">
                <nav class="container-fluid d-flex justify-content-between">
                    <a class="navbar-brand fs-3 fw-bold">Knowledge Cafe</a>
                    <form class="d-flex" role="search">
                       <img className="img-fluid p-2" style={{ height: 60 , width: 60 }} src={logo} alt="" />
                    </form>
                </nav>
            </nav>
        </div>
    );
};
export default Header;