import React from 'react';

function About() {
    return (
        <div className='content'>
            <h2>About Me</h2>

            <div className='about pt-5'>

                <div className='iconBox bg-light bg-opacity-50 rounded-4 p-4 shadow'>
                    <p>Hi, I'm Inna. 👋 </p>
                    <p>I am a full-stack web developer based in Los Angeles, CA.  I am
                        finishing up the coding bootcamp through UCLA Extension
                        and I am excited about all the new things I've learned.
                        Check out my portfolio to see some of my projects!</p>
                </div>

                <img className='photo ' src={require('../../assets/images/Inna-2.jpg')}
                    alt='Pic of Inna'>
                </img>
            </div>
        </div>
    )
}

export default About;