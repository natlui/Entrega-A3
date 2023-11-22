import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
  import { Row, Col, Container, Button, ButtonGroup } from 'react-bootstrap';
  import BigButton from '../../components/BigButton';
  import { Transition } from 'react-transition-group';
  import React, { useState, useRef } from 'react';
  
  import { ReactComponent as Doados } from '../../assets/icons/doacao.svg';
  import { ReactComponent as PedidosDescartadosIcon } from '../../assets/icons/pedidos-descartados.svg';
  import { ReactComponent as PedidosCanceladosIcon } from '../../assets/icons/pedidos-cancelados.svg';
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
       
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const chartData = {
    labels,
    datasets: [
      {
        label: 'PedidosCancelados',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 2500})),
        backgroundColor: 'rgba(255, 0, 0, 0.8)',
      },
      {
        label: 'Pedidos Doados',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(0, 255, 0, 0.8)',
      },
      {
        label: 'Pedidos Descartados',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(128, 128, 128, 0.8)',
      },
    ],
  };
  
  const DishCard = ({ image, description, canceledQuantity }) => (
    <Col md={4} className="mb-3">
      <div style={{ border: '1px solid #ccc', padding: '50px', borderRadius: '80px', marginLeft: '15px' }}>
        <img src={image} alt="Dish" style={{ width: '45%', borderRadius: '8px' }} />
        <p className="mt-2">{description}</p>
        <p>Cancelados hoje: {canceledQuantity}</p>
      </div>
    </Col>
  );
  
  const duration = 300; // Tempo da animação em milissegundos
  
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };
  
  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  
  function Dashboard() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollInterval, setScrollInterval] = useState(null);
    const scrollContainerRef = useRef(null);
  
    const handleScrollStart = (direction) => {
      const cardWidth = 350;
      const maxScroll = chartData.labels.length * cardWidth - window.innerWidth;
      const increment = 10;
  
      const scrollFunction = () => {
        setScrollPosition((prevPosition) => {
          const newPosition = direction === 'left' ? prevPosition - increment : prevPosition + increment;
          return Math.max(0, Math.min(newPosition, maxScroll));
        });
      };
  
      setScrollInterval(setInterval(scrollFunction, duration));
    };
  
    const handleScrollStop = () => {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    };

    const Numcancelado = faker.datatype.number({
      'min': 10,
      'max': 50
  });
  const Numdoado = faker.datatype.number({
    'min': 10,
    'max': 50
});
const Numdescartado = faker.datatype.number({
  'min': 10,
  'max': 50
});
    return (
      
      <Container>
        
        <Row className="mt-3 mb-3">
          <Col>
            <BigButton value={`${Numcancelado}`} name="Pedidos Cancelados" icon={<PedidosCanceladosIcon />} />
          </Col>
          <Col>
            <BigButton value={`${Numdoado}`} name="Pedidos Doados" icon={<Doados />} />
          </Col>
          <Col>
            <BigButton value={`${Numdescartado}`} name="Pedidos Descartados" icon={<PedidosDescartadosIcon />} />
          </Col>
          
        </Row>
        <Row>
          <Col>
            <Bar options={options} data={chartData} />
          </Col>
        </Row>
        <Row className="mt-3">
          <p style={{ fontWeight: '800', fontSize: '30px' }}>Principais Pratos Cancelados</p>
        </Row>
        <Row className="mt-2">
          <ButtonGroup>
            <Button
              variant="light"
              className="mr-2"
              onMouseDown={() => handleScrollStart('left')}
              onMouseUp={handleScrollStop}
              onMouseLeave={handleScrollStop}
            >
              &lt;
            </Button>
            <Transition in={true} timeout={duration}>
              {(state) => (
                <Button
                  variant="light"
                  className="ml-2"
                  onClick={() => handleScrollStart('right')}
                  onMouseUp={handleScrollStop}
                  onMouseLeave={handleScrollStop}
                  style={{ ...defaultStyle, ...transitionStyles[state] }}
                >
                  &gt;
                </Button>
              )}
            </Transition>
          </ButtonGroup>
        </Row>
        <Row className="mt-2">
          <div
            ref={scrollContainerRef}
            style={{
              display: 'flex',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <DishCard
                key={index}
                image={`https://i.pinimg.com/736x/16/29/c8/1629c8b6460f9613532c7ca6a4fa2f2c.jpg`}
                description={`Descrição do prato ${index}`}
                canceledQuantity={faker.datatype.number({ min: 0, max: 20 })}
              />
            ))}
          </div>
        </Row>
      </Container>
    );
  }
  
  export default Dashboard;
  