import { Card, Container, Row, Col, Image } from "react-bootstrap";
import barbieImage from "../assets/images/trending/barbie.jpg";
import fastxImage from "../assets/images/trending/fastx.jpg";
import marioImage from "../assets/images/trending/mario.jpg";
import oppenheimerImage from "../assets/images/trending/oppenheimer.jpeg";
import suzumeImage from "../assets/images/trending/suzume.jpg";
import insidiousImage from "../assets/images/trending/insidious.jpg";
const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={barbieImage} alt="Barbie Movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">BARBIE</Card.Title>
                  <Card.Text classsName="text-left">
                  Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.
                  </Card.Text>
                  <Card.Text className="text-left">
                  Release date: July 19, 2023
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={fastxImage} alt="FastX Movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">FAST X</Card.Title>
                  <Card.Text classsName="text-left">
                  Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path. Now, they must confront the most lethal opponent they've ever faced. Fueled by revenge, a terrifying threat emerges from the shadows of the past to shatter Dom's world and destroy everything -- and everyone -- he loves.
                  </Card.Text>
                  <Card.Text className="text-left">
                  Release date: May 17, 2023
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={marioImage} alt="Mario Movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">The Super Mario Bros Movie</Card.Title>
                  <Card.Text classsName="text-left">
                  With help from Princess Peach, Mario gets ready to square off against the all-powerful Bowser to stop his plans from conquering the world.
                  </Card.Text>
                  <Card.Text className="text-left">
                  Release date: April 5, 2023
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={oppenheimerImage}
                alt="Oppenheimer Movie"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Oppenheimer</Card.Title>
                  <Card.Text classsName="text-left">
                  During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.
                  </Card.Text>
                  <Card.Text className="text-left">
                  Release date: July 19, 2023
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={suzumeImage} alt="Suzume Movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Suzume</Card.Title>
                  <Card.Text classsName="text-left">
                  As the skies turn red and the planet trembles, Japan stands on the brink of disaster. However, a determined teenager named Suzume sets out on a mission to save her country. Able to see supernatural forces that others cannot, it's up to her to close the mysterious doors that are spreading chaos across the land. A perilous journey awaits as the fate of Japan rests on her shoulders.
                  </Card.Text>
                  <Card.Text className="text-left">
                  Release date: March 8, 2023
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={insidiousImage} alt="Insidious Movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Insidious The Last Key</Card.Title>
                  <Card.Text classsName="text-left">
                  Parapsychologist Elise Rainier gets thrust into returning to her eerie childhood home where she and her family have to fight a dangerous otherworldly entity.
                  </Card.Text>
                  <Card.Text className="text-left">
                  Release date: January 10, 2018
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
