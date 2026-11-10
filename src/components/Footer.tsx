
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  Stack,
  useTheme
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const colors = {
    background: isDark ? '#121212' : '#FCFCFC',
    heading: isDark ? '#FFFFFF' : '#0D0D0D',
    text: isDark ? '#D1D1D1' : '#333333',
    muted: isDark ? '#BDBDBD' : '#333333',
    divider: isDark ? '#333333' : '#E5E5E5',
    accent: isDark ? '#8EA2FF' : '#3850D5'
  };

  const platformLinks = [
    { label: 'Image Tools', path: '/categories/image-generic' },
    { label: 'PDF Tools', path: '/categories/pdf' },
    { label: 'Text Tools', path: '/categories/string' },
    { label: 'Developer Tools', path: '/categories/json' },
    { label: 'Online Converters', path: '/categories/converters' },
    { label: 'Time Tools', path: '/categories/time' }
  ];

  const exploreLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Browse Tools', path: '/' },
    { label: 'Contact Us', path: '/contact' }
  ];

  const informationLinks = [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms-and-conditions' },
    { label: 'Disclaimer', path: '/disclaimer' }
  ];

  const headingStyle = {
    color: colors.heading,
    fontSize: { xs: '0.75rem', md: '0.78rem' },
    fontWeight: 700,
    letterSpacing: '0.055em',
    textTransform: 'uppercase',
    lineHeight: 1.4,
    mb: { xs: 1.6, md: 2.2 }
  };

  const linkStyle = {
    display: 'inline-flex',
    width: 'fit-content',
    maxWidth: '100%',
    color: colors.text,
    fontSize: { xs: '0.84rem', md: '0.9rem' },
    lineHeight: { xs: 1.5, md: 1.6 },
    fontWeight: 400,
    textDecoration: 'none',
    transition: 'color 180ms ease, transform 180ms ease',
    '&:hover': {
      color: colors.accent,
      transform: 'translateX(2px)',
      textDecoration: 'none'
    }
  };

  const FooterLinks = ({
    links
  }: {
    links: { label: string; path: string }[];
  }) => (
    <Stack
      spacing={{ xs: 0.8, md: 1.15 }}
      alignItems="flex-start"
    >
      {links.map((item) => (
        <MuiLink
          key={item.path + item.label}
          component={RouterLink}
          to={item.path}
          underline="none"
          sx={linkStyle}
        >
          {item.label}
        </MuiLink>
      ))}
    </Stack>
  );

  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 6, md: 9 },
        width: '100%',
        overflow: 'hidden',
        backgroundColor: colors.background,
        color: colors.heading,
        borderTop: '1px solid',
        borderColor: colors.divider
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: {
            xs: 2.5,
            sm: 3,
            md: 3
          }
        }}
      >
        {/* Main Footer */}
        <Box
          sx={{
            py: { xs: 3.5, sm: 4.5, md: 6 },
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              md: '1.4fr 0.85fr 1.15fr 1fr'
            },
            columnGap: { xs: 2, sm: 3, md: 5 },
            rowGap: { xs: 3.2, md: 0 }
          }}
        >
          {/* Brand */}
          <Box
            sx={{
              gridColumn: { xs: '1 / -1', md: 'auto' },
              minWidth: 0,
              pr: { md: 3 }
            }}
          >
            <MuiLink
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                mb: { xs: 1.2, md: 1.8 },
                '&:hover': {
                  textDecoration: 'none'
                }
              }}
            >
              <Box
                component="img"
                src={
                  isDark
                    ? '/go7-logo-dark.svg'
                    : '/go7-logo-light.svg'
                }
                alt="GO7 Tools"
                sx={{
                  height: { xs: 28, md: 32 },
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </MuiLink>

            <Typography
              sx={{
                maxWidth: 285,
                color: colors.text,
                fontSize: { xs: '0.85rem', md: '0.9rem' },
                lineHeight: { xs: 1.55, md: 1.75 },
                fontWeight: 400
              }}
            >
              Simple and powerful online tools
              designed to make your everyday
              tasks faster and easier.
            </Typography>
          </Box>

          {/* Explore */}
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={headingStyle}>
              Explore
            </Typography>

            <FooterLinks links={exploreLinks} />
          </Box>

          {/* Platform */}
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={headingStyle}>
              Our Platform
            </Typography>

            <FooterLinks links={platformLinks} />
          </Box>

          {/* Information */}
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={headingStyle}>
              Information
            </Typography>

            <FooterLinks links={informationLinks} />

            <Box sx={{ mt: { xs: 2.2, md: 2.8 } }}>
              <Typography
                sx={{
                  color: colors.heading,
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  mb: 0.7,
                  lineHeight: 1.4
                }}
              >
                Contact Support
              </Typography>

              <MuiLink
                href="mailto:info@go7.in"
                underline="none"
                sx={{
                  ...linkStyle,
                  color: colors.accent,
                  overflowWrap: 'anywhere',
                  '&:hover': {
                    color: colors.accent,
                    textDecoration: 'underline'
                  }
                }}
              >
                info@go7.in
              </MuiLink>
            </Box>
          </Box>
        </Box>

        {/* Bottom Footer */}
        <Box
          sx={{
            borderTop: '1px solid',
            borderColor: colors.divider,
            py: { xs: 2, md: 2.5 },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            textAlign: 'center',
            gap: { xs: 0.7, sm: 2 }
          }}
        >
          <Typography
            sx={{
              color: colors.muted,
              fontSize: { xs: '0.76rem', md: '0.82rem' },
              lineHeight: 1.5
            }}
          >
            © 2026 GO7 Tools. All rights reserved.
          </Typography>

          <Typography
            sx={{
              color: colors.muted,
              fontSize: { xs: '0.76rem', md: '0.82rem' },
              lineHeight: 1.5
            }}
          >
            Created by{' '}
            <Box
              component="span"
              sx={{
                color: colors.heading,
                fontWeight: 700
              }}
            >
              Anil Srivastav
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
