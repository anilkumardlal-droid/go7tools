
import React, { ReactNode, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Select,
  MenuItem,
  FormControl
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import { Mode } from 'components/App';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  mode: Mode;
  onChangeMode: () => void;
}

const languages = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'pt', label: 'Português' },
  { code: 'ja', label: '日本語' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'ru', label: 'Русский' },
  { code: 'uk', label: 'Українська' },
  { code: 'zh', label: '中文' }
];

const Navbar: React.FC<NavbarProps> = ({ mode, onChangeMode }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleLanguageChange = (event: any) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('lang', newLanguage);
  };

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const languageSelector = (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <Select
        value={i18n.language}
        onChange={handleLanguageChange}
        displayEmpty
        sx={{
          color: 'inherit',
          '& .MuiSelect-icon': { color: 'inherit' },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent'
          }
        }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code}>
            {lang.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  const buttons: ReactNode[] = [
    languageSelector,
    <Icon
      key="theme"
      onClick={onChangeMode}
      style={{ cursor: 'pointer' }}
      fontSize={30}
      icon={
        mode === 'dark'
          ? 'ic:round-dark-mode'
          : mode === 'light'
            ? 'ic:round-light-mode'
            : 'ic:round-contrast'
      }
    />,
    <Button
      key="translate"
      onClick={() => {
        window.open(
          'https://www.locize.app/register?invitation=YOIH0Dyz3KHh3uQFCGYe9v1QOUoq8W5ySgmlwjX9cSypeJmt8F40brDtVbXb71fK',
          '_blank'
        );
      }}
      sx={{ borderRadius: '100px' }}
      variant="contained"
      startIcon={
        <Icon fontSize={25} icon="ix:language-filled" />
      }
    >
      {t('navbar.helpTranslate')}
    </Button>
  ];

  const drawerList = (
    <List>
      <ListItemButton onClick={() => {
        navigate('/');
        setDrawerOpen(false);
      }}>
        <ListItemText primary="Home" />
      </ListItemButton>

      {navItems.map((navItem) => (
        <ListItemButton
          key={navItem.path}
          onClick={() => {
            navigate(navItem.path);
            setDrawerOpen(false);
          }}
        >
          <ListItemText primary={navItem.label} />
        </ListItemButton>
      ))}

      {buttons.map((button, index) => (
        <ListItem key={index}>{button}</ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      position="static"
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        color: 'text.primary',
        pt: 2
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          mx: { xs: 1, sm: 2, md: '50px', lg: '150px' }
        }}
      >
        <Link
          to="/"
          aria-label="GO7 Tools Home"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}
        >
          <img
            src={
              theme.palette.mode === 'light'
                ? '/go7-logo-light.svg'
                : '/go7-logo-dark.svg'
            }
            alt="GO7 Tools"
            style={{
              display: 'block',
              width: isMobile ? '150px' : '220px',
              height: 'auto',
              maxHeight: '55px',
              objectFit: 'contain'
            }}
          />
        </Link>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.action.hover
                }
              }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawerList}
            </Drawer>
          </>
        ) : (
          <Stack direction="row" spacing={3} alignItems="center">
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transition: 'color 0.3s ease',
                    backgroundColor: 'action.hover'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
            {buttons}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
