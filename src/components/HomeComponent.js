import React from 'react';
import { Button, Card, CardText, CardBody, CardImg } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderUnit({unitItem, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />
    }
    if (errMess) {
        return <h4>{errMess}</h4>;
    }
        return (
            <React.Fragment>
                <Card>
                <CardImg width="100%" src={baseUrl + unitItem.image} alt={unitItem.name} />
                    <CardBody className="p-4 px-3 bg-ltgrey">
                        <CardText>
                            <p className="h2-date">{unitItem.name}</p>
                            {unitItem.description}</CardText>
                        <Link to={`/artistportal/${unitItem.id}`} className="card-link" ><Button className="btn-block btn-green">Check It Out</Button></Link>
                    </CardBody>
                </Card>
            </React.Fragment>
    
        );
        
    }

/* function RenderEvent({eventItem, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />
    }
    if (errMess) {
        return <h4>{errMess}</h4>;
    }
        return (
            
            <React.Fragment>
                <Card>
                <CardImg width="100%" src={baseUrl + eventItem.image} alt={eventItem.name} /> 
                    <CardBody className="p-4 px-3 bg-ltgrey">
                        <CardText>
                            <h3 className="h2-date">{eventItem.name}</h3>
                            {eventItem.description}</CardText>
                            {/* Need to add id to Scheme 
                        <Link to={`/artistportal/${eventItem.id}`} className="card-link" ><Button className="btn-block btn-green">Check It Out</Button></Link>
                    </CardBody>
                </Card>
            </React.Fragment>
    
        );
} */


function Home(props) {
return (
    <React.Fragment>
    <div className="container portal-div">
        <div className="row portals">
            <div className="art-portal-link col-sm-6">
                <nav className="portal-nav">
                    <NavLink className="nav-link portal-nav-link " to="/artistportal">
                        Artist Portal
                    </NavLink>
                </nav>
            </div>
            <div className="org-portal-link col-sm-6">
                <nav className="portal-nav">
                    <NavLink className="nav-link portal-nav-link" to="/orgportal">
                        Organization Portal
                    </NavLink>
                </nav>
            </div>
        </div>
    </div>

    <div className="container home-div">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <h2 className="text-center">Featured Unit</h2>
                <hr />
            </div>
            {/* <div className="col-lg-4">
                <h2 className="text-center">UPCOMING EVENT</h2>
                <hr />
            </div> */}
        <div className="row">
            <div className="col-lg-8 mx-auto d-flex align-items-stretch">
                <RenderUnit 
                    unitItem={props.unit}
                    isLoading={props.unitsLoading}
                    errMess={props.unitsErrMess}
                />
            </div>
        </div>
        {/* <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch">
                 <RenderEvent
                    eventItem={props.calendar}
                    isLoading={props.calendarsLoading}
                    errMess={props.calendarsErrMess}
                />
            </div>  
        </div> */}
        </div>
    </div>
    </React.Fragment>
    );
}

export default Home;