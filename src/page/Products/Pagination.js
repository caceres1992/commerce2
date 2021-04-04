import React from 'react';
import {Link} from "react-router-dom";

const Pagination = ({postPerPage, totalPost, paginate}) => {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <nav>
            <ul style={{
                display: 'flex',
                paddingBottom: 10,
                color: 'white',
                width: '300px',
                margin: '0 auto',
                listStyle: 'none',
                justifyContent: 'center'
            }}>
                {pageNumber.map((page) => (

                    <Link key={page} to={'/products'} onClick={() => paginate(page)}
                          style={{textDecoration: 'none', color: 'white', width: 30}}>

                        <li style={{marginLeft: 10, backgroundColor: 'green', textAlign: 'center'}}
                        >
                            {page}
                        </li>

                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
