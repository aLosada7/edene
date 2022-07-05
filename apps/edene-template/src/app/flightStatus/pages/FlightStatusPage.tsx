import { Header } from '../../shared';
import { FlightStatusContainer } from '../containers/FlightStatusContainer';

const FlightStatusPage = () => {
    return (
        <>
            <Header title="Flight Status" />
            <FlightStatusContainer />
        </>
    );
};

export default FlightStatusPage;
