import { Box, useTheme } from '@mui/material';
import Hero from 'components/Hero';
import Categories from './Categories';
import { Helmet } from 'react-helmet';
import { useUserTypeFilter } from 'providers/UserTypeFilterProvider';
import UserTypeFilter from '@components/UserTypeFilter';

export default function Home() {
  const theme = useTheme();
  const { selectedUserTypes, setSelectedUserTypes } = useUserTypeFilter();
  return (
    <Box
      padding={{
        xs: 1,
        md: 3,
        lg: 5
      }}
      sx={{
        background: `url(/assets/${
          theme.palette.mode === 'dark'
            ? 'background-dark.png'
            : 'background.svg'
        })`,
        backgroundColor: 'background.default'
      }}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
    >
      <Helmet><title>GO7 Tools – Free Online Tools for Everyday Tasks</title><meta name="description" content="Use free online tools for text, images, PDFs, data and everyday digital tasks. Fast, simple and easy to use with GO7 Tools."/><link rel="canonical" href="https://go7.in/"/><meta property="og:title" content="GO7 Tools – Free Online Tools"/><meta property="og:description" content="Free online tools for everyday digital tasks."/><meta property="og:url" content="https://go7.in/"/></Helmet>
      <Hero />
      <Box my={3}>
        <UserTypeFilter
          selectedUserTypes={selectedUserTypes}
          onUserTypesChange={setSelectedUserTypes}
        />
      </Box>
      <Categories />
    </Box>
  );
}
