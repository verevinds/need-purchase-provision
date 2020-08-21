import React from 'react';

const NeedInfo = ({ products }) => {
  console.log(products);
  return (
    <>
      <div className='body__need-info'>
        {products.map((product) => (
          <>
            <span key={product.id}>{product.name}</span>
            {product.span ? (
              <span>
                {product.number}
                <span className='_grey-color'> ({product.class})</span>
              </span>
            ) : (
              <textarea
                className={`need-info__textarea ${product.className}`}
                defaultValue={product.def ? `${product.def}` : ''}
              />
            )}
            <span className='_grey-color'>{product.confirm}</span>
          </>
        ))}
      </div>
    </>
  );
};

export default NeedInfo;
