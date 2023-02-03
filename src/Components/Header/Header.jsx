import { AccountCircle } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Link } from 'react-router-dom'
import Searchs from './Searchs'

const menus = [
  { id: 1, title: 'Công nghệ mới', url: '/chuyen-muc/ky-nguyen-so' },
  { id: 2, title: 'Sức khỏe - Làm đẹp', url: '/chuyen-muc/an-sach-song-khoe' },
  { id: 3, title: 'Ô tô', url: '/chuyen-muc/xe-va-luat' },
]

const Header = () => {
  const pages = ['Products', 'Pricing', 'Blog']
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <>
      {/* <Searchs /> */}
      <AppBar position="relative" component="nav" sx={{ marginBottom: '1rem', backgroundColor: '#08695d' }}>
        <Link to="/" className="text-link-logo">
          <Box className="icon_logo" sx={{ textAlign: 'center', fontSize: '5rem' }}>
            <img src="logo-goc.png" alt="" width="20%" />
          </Box>
        </Link>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 6,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 900,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            ></Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  left: '-40px',
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {menus.map((menu) => (
                  <MenuItem
                    key={Math.random()}
                    onClick={handleCloseNavMenu}
                    sx={{ borderBottom: '1px solid #dbdbdb', backgroundColor: '#08695d' }}
                  >
                    <Link to={menu.url} className="text-link">
                      <Typography>{menu.title}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', marginLeft: '5%' }, justifyContent: 'center' }}>
              {menus.map((menu) => (
                <Button key={Math.random()} onClick={handleCloseNavMenu} sx={{ my: 0, mx: 5, color: '#fff', display: 'block' }}>
                  <Link to={menu.url} className="text-link">
                    <Typography sx={{ textAlign: 'center' }}>{menu.title}</Typography>
                  </Link>
                </Button>
              ))}

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                sx={{ marginLeft: '12%' }}
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Link to="/">
              <Box className="logo-mobile" sx={{ textAlign: 'center' }}>
                <img src="logo-goc.png" alt="" width="60%" />
              </Box>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header
