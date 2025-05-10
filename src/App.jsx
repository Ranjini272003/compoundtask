import Accordion from './Accordion';
import './App.css';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Single Open Accordion</h1>
      <Accordion allowMultiple={false}>
        <Accordion.Item id="1">
          <Accordion.Header>Header 1</Accordion.Header>
          <Accordion.Body>Body content 1</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Header>Header 2</Accordion.Header>
          <Accordion.Body>Body content 2</Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h1 style={{ marginTop: '40px', textAlign: 'center' }}>Multiple Open Accordion</h1>
      <Accordion allowMultiple={true}>
        <Accordion.Item id="a">
          <Accordion.Header>Header A</Accordion.Header>
          <Accordion.Body>Body content A</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item id="b">
          <Accordion.Header>Header B</Accordion.Header>
          <Accordion.Body>Body content B</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
