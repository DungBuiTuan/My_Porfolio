import { Col, Container, Nav, NavItem, NavLink, 
    Row, TabContainer, TabContent, TabPane } from "react-bootstrap";
import ProjectData from './../Data/ProjectData';
import ProjectCard from "./ProjectCard";

function Project() {
    return ( 
            <section className='project' id='projects'>
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <br/>
                            <TabContainer id='projects-tabs' defaultActiveKey='first'>
                                <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                    <NavItem>
                                        <NavLink eventKey='first'>Web Development</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink eventKey='second'>Blockchain Development</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink eventKey='third'>UI Collection</NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent>
                                    <TabPane eventKey='first'>
                                        <Row>
                                            {
                                                ProjectData.map((project,index)=>{
                                                    return (
                                                        <ProjectCard key={index} {...project}/>
                                                    )
                                                })
                                            }
                                        </Row>
                                    </TabPane>
                                    <TabPane eventKey='second'></TabPane>
                                    <TabPane eventKey='third'></TabPane>
                                </TabContent>
                            </TabContainer>
                        </Col>
                    </Row>
                </Container>
                <img className='background-image-right' src='assets/color-sharp.png' alt='ImaRight'></img>
            </section>
        );
}

export default Project;