import { Grid, Link, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import React from 'react'

const CateBox = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  border: 'none',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}))

const CatePost = (props) => {
  return (
    <>
      <Grid container maxWidth="lg" spacing={0} margin="auto">
        <Grid container item xs={12} sm={12} md={12}>
          {props.toppost.map((item) => (
            <Box key={Math.random()}>
              <Link href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                <Typography
                  sx={{
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, 0.54)',

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',

                    typography: {
                      xs: { top: '1x`%', height: '80px', margin: '5%', padding: '20px ' },
                      sm: { top: '15%', height: '80px', margin: '15%', padding: '20px ' },
                      md: {
                        top: '10%',
                        height: '80px',
                        margin: '20%',
                        padding: '20px ',
                      },
                    },
                  }}
                  fontWeight="700"
                >
                  {item.title}
                </Typography>
                <Box className="img-top">
                  <img src="https://dep.com.vn/wp-content/uploads/2022/08/U40.jpg" width="100%" height="auto" alt="" />
                </Box>
              </Link>
            </Box>
          ))}
        </Grid>
      </Grid>
      <Grid container maxWidth="lg" margin="auto">
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '3rem',
              textTransform: 'uppercase',
              color: '#333333',
              fontFamily: 'Basker',
              padding: '3% 0',
              typography: {
                md: { fontSize: '3rem' },
                sm: { fontSize: '2rem' },
                xs: { fontSize: '1.5rem' },
              },
            }}
          >
            TIN NỔI BẬT
          </Typography>
        </Grid>
      </Grid>
      <Grid container maxWidth="lg" margin="auto">
        <Grid
          container
          spacing={{
            xs: 1,
            sm: 2,
            md: 1,
          }}
        >
          <Grid item xs={6} sm={3} md={3}>
            <CateBox>
              {props.hotleft.map((item) => (
                <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Box sx={{ display: 'flex' }}>
                    <Typography
                      sx={{
                        fontStyle: 'italic',
                        fontFamily: 'Basker',
                        width: '20%',
                        lineHeight: '1',

                        typography: { xs: { fontSize: '3rem' }, sm: { fontSize: '4rem' }, md: { fontSize: '5rem' } },
                      }}
                    >
                      1
                    </Typography>
                    <Box sx={{ width: '80%' }}>
                      <Typography
                        sx={{
                          textTransform: 'uppercase',
                          fontSize: '11px',
                          marginBottom: '8px',
                          marginTop: '16px',
                          borderLeft: '1px solid #333',
                          textAlign: 'left',
                          paddingLeft: '10px',
                        }}
                      >
                        Kỷ nguyên số
                      </Typography>
                      <Typography>{item.title}</Typography>
                    </Box>
                  </Box>
                </Link>
              ))}
            </CateBox>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <CateBox>
              {props.rpost.map((item) => (
                <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Box sx={{ display: 'flex' }}>
                    <Typography
                      sx={{
                        fontStyle: 'italic',
                        fontFamily: 'Basker',
                        width: '20%',
                        lineHeight: '1',
                        typography: { xs: { fontSize: '3rem' }, sm: { fontSize: '4rem' }, md: { fontSize: '5rem' } },
                      }}
                    >
                      2
                    </Typography>
                    <Box sx={{ width: '80%' }}>
                      <Typography
                        sx={{
                          textTransform: 'uppercase',
                          fontSize: '11px',
                          marginBottom: '8px',
                          marginTop: '16px',
                          borderLeft: '1px solid #333',
                          textAlign: 'left',
                          paddingLeft: '10px',
                        }}
                      >
                        Ăn sạch sống khỏe
                      </Typography>
                      <Typography>{item.title}</Typography>
                    </Box>
                  </Box>
                </Link>
              ))}
            </CateBox>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <CateBox>
              {props.xpost.map((item) => (
                <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Box sx={{ display: 'flex' }}>
                    <Typography
                      sx={{
                        fontStyle: 'italic',
                        fontFamily: 'Basker',
                        width: '20%',
                        lineHeight: '1',
                        typography: { xs: { fontSize: '3rem' }, sm: { fontSize: '4rem' }, md: { fontSize: '5rem' } },
                      }}
                    >
                      3
                    </Typography>
                    <Box sx={{ width: '80%' }}>
                      <Typography
                        sx={{
                          textTransform: 'uppercase',
                          fontSize: '11px',
                          marginBottom: '8px',
                          marginTop: '16px',
                          borderLeft: '1px solid #333',
                          textAlign: 'left',
                          paddingLeft: '10px',
                        }}
                      >
                        Xe và luật
                      </Typography>
                      <Typography>{item.title}</Typography>
                    </Box>
                  </Box>
                </Link>
              ))}
            </CateBox>
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <CateBox>
              {props.hotright.map((item) => (
                <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Box sx={{ display: 'flex' }}>
                    <Typography
                      sx={{
                        fontStyle: 'italic',
                        fontFamily: 'Basker',
                        width: '20%',
                        lineHeight: '1',
                        typography: { xs: { fontSize: '3rem' }, sm: { fontSize: '4rem' }, md: { fontSize: '5rem' } },
                      }}
                    >
                      4
                    </Typography>
                    <Box sx={{ width: '80%' }}>
                      <Typography
                        sx={{
                          textTransform: 'uppercase',
                          fontSize: '11px',
                          marginBottom: '8px',
                          marginTop: '16px',
                          borderLeft: '1px solid #333',
                          textAlign: 'left',
                          paddingLeft: '10px',
                        }}
                      >
                        Kỷ nguyên số
                      </Typography>
                      <Typography>{item.title}</Typography>
                    </Box>
                  </Box>
                </Link>
              ))}
            </CateBox>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CatePost
