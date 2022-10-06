import React from 'react';
//booststrap imports below
import { Carousel, Row, Card } from 'react-bootstrap';
function About() {
  return (
    //put a slide show on about and added margins to the containers as to not interfere with navbar top positioning
    <section className="about">
      <Row className='my-5 mx-5 '>
        {
          <Card className='bg-light' style={{ padding: '2rem 1rem', marginBottom: '2rem', marginTop: '2rem', borderRadius: '30px'}}>
          
            <Card.Body>
              <h1>Created by Geng | Sam | Zach</h1>
              <h3>This application is a mini movie data base, that will allow users to search for movies, look at movie details, and add new movies. This application features: </h3>
            </Card.Body>
          </Card>

        }
      </Row>
      <Carousel className='my-5 mx-5  bg-light' >
        <Carousel.Item>
          <img style={{borderRadius: '30px'}} width={1200} height={500} alt="900x500" src="https://www.gannett-cdn.com/-mm-/9acbd390157cc5ea4805849aabf1c1d84141cdfb/c=0-0-660-371/local/-/media/2020/11/02/Taunton/ghows-WL-200719091-2b4c9a26.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" />
          <Carousel.Caption  style={{color: '#fff', position: "absolute", left: '900px', top: '80px' }}>
          <h3 >Multiple examples of inverse data flow </h3>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item clasName="border">
          <img style={{borderRadius: '30px'}}  width={1200} height={500} alt="900x500" src="https://previews.123rf.com/images/jomkwan7/jomkwan72002/jomkwan7200200621/140173805-happy-dog-pug-breed-smile-with-funny-face-lying-on-green-grass-in-garden-purebred-pug-dog-healthy-co.jpg" />
          <Carousel.Caption style={{color: '#fff', position: "absolute", right: '900px', top: '80px' }} >
          <h3>Client Side routing with React Router v5</h3>
            
          </Carousel.Caption>
          </Carousel.Item>       
        
        <Carousel.Item>
          <img style={{borderRadius: '30px'}} width={1200} height={500} alt="900x500" src="https://iso.500px.com/wp-content/uploads/2016/02/stock-photo-125037925-1500x1000.jpg" />
          <Carousel.Caption style={{color: '#fff', position: "absolute", left: '900px', top: '100x' }}>
          <h3>Debounced searching via a combination of useState and useEffect</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img style={{borderRadius: '30px'}} width={1200} height={500} alt="900x500" src="https://media.istockphoto.com/photos/cute-happy-french-bulldog-dog-dressed-up-as-musician-wearing-a-funny-picture-id1176834578" />
            <Carousel.Caption style={{color: '#fff', position: "absolute", right: '900px', top: '80x' }}>
            <h3>Data fetching via JSON server to a db.json file</h3>
            
            </Carousel.Caption>
          </Carousel.Item>
        
      </Carousel>
    </section>
  )
}

export default About
