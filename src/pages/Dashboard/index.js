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
import { Row, Col, Container } from 'react-bootstrap';
import BigButton from '../../components/BigButton';

import {  ReactComponent as TriangleAlert } from '../../assets/icons/alert-triangle-outline.svg'
import {  ReactComponent as PedidosDescartadosIcon } from '../../assets/icons/pedidos-descartados.svg'
import {  ReactComponent as PedidosCanceladosIcon } from '../../assets/icons/pedidos-cancelados.svg'

ChartJS.register(CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

function Dashboard() {
    return (
        <Container>
            <Row className='mt-5 mb-5'>
                <Col>
                    <BigButton
                    value="50"
                    name="Pedidos Cancelados"
                    icon={<PedidosCanceladosIcon />}
                   
                     />
                </Col>
                <Col>
                    <BigButton
                        value="50"
                        name="Descartados"
                        icon={<TriangleAlert />}
                     />
                </Col>
                <Col>
                    <BigButton
                        value="50"
                        name="Pedidos Descartados"
                        icon={<PedidosDescartadosIcon />} 
                     />
                </Col>
                <Col>
                    <BigButton
                        value="50"
                        name="Descartados"
                        icon={<TriangleAlert />}
                     />
                </Col>
            </Row>
            <Row>
                <Bar options={options} data={data} />
            </Row>
        </Container>
    )
}

export default Dashboard;