import React from 'react';

function About() {

    return (
        <div className='content pb-5'>
            <h2>About Me</h2>


            <div className='aboutMain'>
                <div className='aboutBox bg-light bg-opacity-50 rounded-4 shadow pt-3 pb-3'>

                    <div className='about'>
                        <div className='hiBox'>
                            <p>Hi, I'm Inna 👋 </p>
                            <p>I am a Ukrainian-American full-stack web developer based in Los Angeles, CA. I am enthusiastic
                                about coding and web development. My first-ever experience writing code was a Hello World program,
                                which I wrote with the help of the 'Visual Basic For Dummies' book that my stepdad, a software engineer,
                                gave me as a gift. I think he saw potential in me. 😊</p>

                            <p> Fast forward 20 years or more (🤫), and I am a graduate of a coding bootcamp through UCLA Extension
                                with the highest grade in class. I am so proud of this achievement and
                                I am excited about all the new things I've learned and all the things that I am yet to learn. I was able to 
                                create a few cool projects with my new knowledge in Javascript, HTML, CSS, NodeJS, React (and more!), so
                                check out my portfolio and shoot me a message to let me know what you think!</p>
                        </div>

                        <img className='photo ' src={require('../../assets/images/Inna-2.jpg')}
                            alt='Pic of Inna'>
                        </img>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default About;