import { useEffect, useState } from 'react';
import './productpages.css'
import { Link } from 'react-router-dom';

export default function MensProducts() {
  const [serverData, setServerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getServerData() {
      try {
        const resp = await fetch('/api/mensproducts');
        const data = await resp.json();
        setServerData(data);
      }
      catch (err) {
        setError(err);
      } finally {
        setIsLoading(false)
      }
    }
    getServerData();
  }, [serverData]);

  if (isLoading) return <div className='loading-or-error'>Loading...</div>;
  if (error) return <div className='loading-or-error'>Error Loading : {error.message}</div>;
  if (!serverData) return null;

  return (
    <div className="container products-container">
      <div className='product-page-copy-container'>
        <h3 className='product-page-copy-header'>Men's Cycling Jerseys</h3>
        <p className='product-page-copy-text'>
          The Men’s Jerseys are all laser-cut and assembled by hand at one of our premium manufacturing facilities across Europe. All jerseys are given a shortened front panel and an extended back panel to eliminate the bulking of excessive fabric around the torso to suit your optimal riding position.</p>
      </div>
      <div className="row">
        {serverData?.map((product, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">

            <Product product={product} />

          </div>
        ))}
      </div>
    </div>
  )
}

function Product({ product }) {
  const { name, url, price, color, productId } = product;
  return (
    <Link to={`/productdetails/${productId}`}>
      <div className='row'>
        <div className="card-body">
          <img src={url} alt='product' />
          <p className="card-title item-name">{name}</p>
          <p className="card-title">{color}</p>
          <p className="card-title">${price}</p>
        </div>
      </div>
    </Link>
  );
}
