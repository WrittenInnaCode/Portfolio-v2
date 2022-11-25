import React from 'react';

function About() {
    return (
        <section>

            <h2>About Me</h2>

            <div className=''>
                <div className='about'>
                    <div className='font-monospace'>
                        <p>Hi, I'm Inna. 👋 </p>
                        <p>I am a full-stack web developer based in Los Angeles, CA. </p>
                    </div>

                    <img className='photo' src={require('../../assets/images/Inna.jpg')}
                        alt='Pic of Inna'>
                    </img>
                </div>
            </div>


        </section>
    )
}

export default About;