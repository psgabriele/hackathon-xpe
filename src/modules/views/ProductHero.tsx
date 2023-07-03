import * as React from 'react';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://img.freepik.com/fotos-gratis/fundo-3d-da-mao-do-robo-vista-lateral-da-tecnologia-ai_53876-129789.jpg?size=626&ext=jpg&ga=GA1.1.1269135899.1688338888&semt=ais';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        melhore as suas finanças
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        IA.RA é a assistente financeira que te fará evoluir.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        sx={{ minWidth: 200 }}
      >
        Download
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Venha com a gente
      </Typography>
    </ProductHeroLayout>
  );
}