import "./App.css";
import FormTable from "./components/FormTable";
import TableData from "./components/TableData";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="p-5">
      <FormTable />
      <TableData />
    </Container>
  );
}

export default App;
