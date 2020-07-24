import * as React from 'react';

export interface IStockPage {}

const StockPage: React.FC<IStockPage> = () => {
  return <>stock</>;
};

export default React.memo(StockPage);
