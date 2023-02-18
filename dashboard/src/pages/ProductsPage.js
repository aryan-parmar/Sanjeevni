import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { ProductList } from '../sections/@dashboard/products';
import PRODUCTS from '../_mock/products';


export default function ProductsPage() {

  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hospital Search and Availability
        </Typography>

        <ProductList products={PRODUCTS} />
      </Container>
    </>
  );
}
