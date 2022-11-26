import React from 'react';

function About() {
    return (
        <section>

            <h2>About Me</h2>

            <div className=''>
                <div className='about'>
                    <div className=' bg-light bg-opacity-50 rounded-4 p-4 shadow'>
                        <p>Hi, I'm Inna. 👋 </p>
                        <p>I am a full-stack web developer based in Los Angeles, CA.  I am
                            <br />finishing up the coding bootcamp through UCLA Extension
                            <br /> and I am excited about all the new things I've learned.
                            <br /> Check out my portfolio to see some of my projects!</p>
                    </div>

                    <img className='photo ' src={require('../../assets/images/Inna-2.jpg')}
                        alt='Pic of Inna'>
                    </img>
                </div>
            </div>

        </section>
    )
}

export default About;