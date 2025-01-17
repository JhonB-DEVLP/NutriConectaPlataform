import React, { useState } from 'react';
import style from './Disclosures.module.css';
import { Link } from 'react-router-dom';
import Content from '../../Components/Content/Content';
import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/Navbar/NavBar';
import Padaria from '../../assets/image.Padaria.svg';
import Mcdonalds from '../../assets/image.Mcdonalds.svg';
import atacarejo from '../../assets/novoatacarejo.svg';
import paodeaçucar from '../../assets/pãodeaçucar.svg';
import ProductModal from '../ProductModal/ProductModal';

const Disclosures = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  const products = [
    {
      postedDate: '18/04/2024',
      image: Padaria,
      name: 'Padaria Del Rei',
      manufactureDate: '17/05/2024',
      expiryDate: '19/05/2024',
      quantity: '25 unidades',
      description: 'Após a data de válidade os alimentos não resgatados serão destinados a compostagem.',
      address: 'R. Cruzeiro do Forte, 242 - Boa Viagem, Recife - PE, 51030-620',
      phone: '(81) 98708-7305'
    },
    {
      postedDate: '15/05/2024',
      image: Mcdonalds,
      name: 'Mcdonalds',
      manufactureDate: '15/05/2024',
      expiryDate: '20/05/2024',
      quantity: '10 unidades',
      description: 'Após a data de válidade os alimentos não resgatados serão destinados a compostagem.',
      address: 'R. Cruzeiro do Forte, 242 - Boa Viagem, Recife - PE, 51030-620',
      phone: '(81) 98708-7305'
    },
    {
      postedDate: '15/05/2024',
      image: paodeaçucar,
      name: 'Pão de açúcar',
      manufactureDate: '15/05/2024',
      expiryDate: '20/05/2024',
      quantity: '10 unidades',
      description: 'Após a data de válidade os alimentos não resgatados serão destinados a compostagem.',
      address: 'R. Cruzeiro do Forte, 242 - Boa Viagem, Recife - PE, 51030-620',
      phone: '(81) 98708-7305'
    },
    {
      postedDate: '15/05/2024',
      image: atacarejo,
      name: 'Novo atacarejo',
      manufactureDate: '15/05/2024',
      expiryDate: '20/05/2024',
      quantity: '10 unidades',
      description: 'Após a data de válidade os alimentos não resgatados serão destinados a compostagem.',
      address: 'R. Cruzeiro do Forte, 242 - Boa Viagem, Recife - PE, 51030-620',
      phone: '(81) 98708-7305'
    },
  ];

  return (
    <>
    <NavBar />
      <div className={style.body}>
        <SideBar />
        <Content>
          <section className={style.Information}>
            <div className={style.notificationsContainer}>
              {products.map((product, index) => (
                <div key={index} className={style.Notification}>
                  <div className={style.header}>
                    <div className={style.imgProfile}>
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className={style.info}>
                      <p className={style.DataTime}>{product.postedDate}</p>
                      <h3>{product.name}</h3>
                      <p>Data de validade: {product.expiryDate}</p>
                      <p>Quantidade Disponível: {product.quantity}</p>
                    </div>
                  </div>
                  <div className={style.description}>
                    <p>{product.description}</p>
                    <button onClick={() => openModal(product)} className={style.detailsButton}>
                      Detalhes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Content>
      </div>
      {selectedProduct && (
        <ProductModal isOpen={isOpen} onClose={closeModal} product={selectedProduct} />
      )}
    </>
  );
};

export default Disclosures;