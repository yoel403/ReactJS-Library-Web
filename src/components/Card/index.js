import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import imageCarousel from "../../assets/dilan.png"

const Cardcomp = (props) => {
  const {title, subtitle, image, bookId} = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {subtitle}
        </Card.Text>
        <Link to={`/Detail/${bookId}`}><Button variant="primary">Detail</Button></Link>
      </Card.Body>
    </Card>
  )
}

export default Cardcomp