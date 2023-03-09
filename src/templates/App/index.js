import { useState } from 'react';
import { Bottom } from '../../components/BottomContent';
import { Header } from '../../components/HeaderContent';
import { Modal } from '../../components/Modal';
import { OutlineButton } from '../../components/OutlineButton';
import './styles.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="container">
        <Header />
        <Bottom />
      </div>
      <OutlineButton text={'rules'} toggle={toggleModal} />
      {showModal && <Modal text={'rules'} show={showModal} toggle={toggleModal} />}
    </>
  );
}

export default App;
