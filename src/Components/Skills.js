import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentage < 100) {
                setPercentage(percentage + 1);
            }
        }, 25);
    }, [percentage]);


    return (
        <section className='skills' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <p>All of my skill</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item' id='item1'>
                                    <div className='item_outer'>
                                        <div className='item_inner'>

                                        </div>
                                    </div>
                                    <svg width={'160px'} height={'160px'}>
                                        <defs>
                                            <linearGradient id='GradientColor'>
                                                <stop offset={'0%'} stopColor='#2E2E2E' />
                                                <stop offset={'100%'} stopColor='#E4A6C1' />
                                            </linearGradient>
                                        </defs>
                                        <circle cx={80} cy={80} r={75} strokeLinecap={'round'} />
                                        <text fill='rgb(246, 246, 246)' fontSize={'15'} fontFamily={'Verdana'} fontWeight={'bold'}
                                            x={60} y={85}  >{percentage}%</text>
                                    </svg>
                                    <div className='skill-name'>
                                        <h5>Web Development</h5>
                                    </div>
                                </div>
                                <div className='item' id='item2'>
                                    <div className='item_outer'>
                                        <div className='item_inner'>

                                        </div>
                                    </div>
                                    <svg width={'160px'} height={'160px'}>
                                        <defs>
                                            <linearGradient id='GradientColor'>
                                                <stop offset={'0%'} stopColor='#2E2E2E' />
                                                <stop offset={'100%'} stopColor='#E4A6C1' />
                                            </linearGradient>
                                        </defs>
                                        <circle cx={80} cy={80} r={75} strokeLinecap={'round'} />
                                        <text fill='rgb(246, 246, 246)' fontSize={'15'} fontFamily={'Verdana'} fontWeight={'bold'}
                                            x={60} y={85}>85%</text>
                                    </svg>
                                    <div className='skill-name'>
                                        <h5>Web Development</h5>
                                    </div>
                                </div>
                                <div className='item' id='item3'>
                                    <div className='item_outer'>
                                        <div className='item_inner'>

                                        </div>
                                    </div>
                                    <svg width={'160px'} height={'160px'}>
                                        <defs>
                                            <linearGradient id='GradientColor'>
                                                <stop offset={'0%'} stopColor='#2E2E2E' />
                                                <stop offset={'100%'} stopColor='#E4A6C1' />
                                            </linearGradient>
                                        </defs>
                                        <circle cx={80} cy={80} r={75} strokeLinecap={'round'} />
                                        <text fill='rgb(246, 246, 246)' fontSize={'15'} fontFamily={'Verdana'} fontWeight={'bold'}
                                            x={60} y={85}>90%</text>
                                    </svg>
                                    <div className='skill-name'>
                                        <h5>Web Development</h5>
                                    </div>
                                </div>
                                <div className='item' id='item4'>
                                    <div className='item_outer'>
                                        <div className='item_inner'>

                                        </div>
                                    </div>
                                    <svg width={'160px'} height={'160px'}>
                                        <defs>
                                            <linearGradient id='GradientColor'>
                                                <stop offset={'0%'} stopColor='#2E2E2E' />
                                                <stop offset={'100%'} stopColor='#E4A6C1' />
                                            </linearGradient>
                                        </defs>
                                        <circle cx={80} cy={80} r={75} strokeLinecap={'round'} />
                                        <text fill='rgb(246, 246, 246)' fontSize={'15'} fontFamily={'Verdana'} fontWeight={'bold'}
                                            x={60} y={85}>90%</text>
                                    </svg>
                                    <div className='skill-name'>
                                        <h5>Web Development</h5>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills;