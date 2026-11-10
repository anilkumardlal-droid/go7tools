
import {
  Box,
  Container,
  Typography,
  Stack,
  Button
} from '@mui/material';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | GO7 Tools</title>

        <meta
          name="description"
          content="The page you are looking for could not be found. Return to GO7 Tools and explore our collection of useful online tools and utilities."
        />

        <meta name="robots" content="noindex, follow" />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="404 - Page Not Found | GO7 Tools"
        />

        <meta
          property="og:description"
          content="This page may have moved or may no longer be available. Visit GO7 Tools to explore our online utilities."
        />
      </Helmet>

      <Box
        component="main"
        sx={{
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          py: { xs: 4, md: 6 }
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>

            <Typography variant="h1" component="div">
              404
            </Typography>

            <Typography variant="h4" component="h1" gutterBottom>
              Page Not Found
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 2 }}>
              Sorry, we couldn't find the page you were looking
              for. The page may have been moved, renamed, deleted,
              or the link you followed may be incorrect.
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Don't worry. You can return to the homepage and
              continue exploring our collection of useful online
              tools and utilities.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <Button
                component={Link}
                to="/"
                variant="contained"
                size="large"
              >
                Return to Homepage
              </Button>

              <Button
                component="a"
                href="mailto:info@go7.in?subject=Broken%20Page%20Report"
                variant="outlined"
                size="large"
              >
                Report a Problem
              </Button>
            </Stack>

            <Typography variant="h6" gutterBottom>
              What can you do next?
            </Typography>

            <Typography color="text.secondary">
              Check the web address for spelling mistakes,
              return to the homepage, or contact us if you
              believe this page should be available.
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Typography color="text.secondary">
                Need help? Contact us at
              </Typography>

              <Typography>
                <Box
                  component="a"
                  href="mailto:info@go7.in"
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  info@go7.in
                </Box>
              </Typography>
            </Box>

          </Box>
        </Container>
      </Box>
    </>
  );
}
