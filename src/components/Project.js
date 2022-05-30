import React from 'react';

const Project = () => {
    return (
        <div className='col-proj two'>
            <div className='proj-item'>
                <h2>Title</h2>
                <p>bnxdvbsdJKVb V jdbv bdvs jbivdSV hvcdzVSD jhvvdjKBV sdvkbsdV</p>
                <div className='proj-tools'>
                    <h1>Tools</h1>
                    <div className='proj-tools-item'>
                        <i class="fa-brands fa-react"></i>
                        <i class="fa-brands fa-python"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-js"></i>
                    </div>
                </div>
                <div className='proj-links'>
                    <a href='/' className='proj-link-to'>
                        <i class="fa-brands fa-figma"></i>
                    </a>
                    <a href='/' className='proj-link-to'>
                        <i class="fa-solid fa-code"></i>
                    </a>
                    <a href='/' className='proj-link-to'>
                        <i class="fa-solid fa-eye"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;