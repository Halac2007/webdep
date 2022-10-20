import { Grid, Link, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import React from 'react'
import Skeleton from '@mui/material/Skeleton'

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
      <Grid container maxWidth="lg" margin="auto">
        <Grid container item xs={12} sm={12} md={12}>
          <Grid item xs={12} sm={6} md={6} sx={{ position: 'relative' }}>
            {props.isLoading && <Skeleton variant="rectangular" width="100%" height={200} />}
            {props.toppost.map((item) => (
              <Box key={Math.random()} sx={{ borderRadius: '20px', padding: '5px' }}>
                <Link href={item.link} target="_blank" sx={{ textDecoration: 'none', color: '#212529' }}>
                  <Box className="img-top">
                    <img src={item.image} width="100%" height="auto" alt="" />
                  </Box>

                  <Box
                    sx={{
                      width: '99%',
                      height: '180px',
                      position: 'absolute',
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) -2%, #000 80%)',
                      bottom: '4px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      opacity: '.9',
                      borderBottomLeftRadius: '20px',
                      borderBottomRightRadius: '20px',
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: 'center',
                        fontWeight: '700',
                        color: '#fff',
                        marginBottom: '-10%',

                        typography: {
                          xs: { xfontSize: '1rem' },
                          sm: { fontSize: '1.2rem' },
                          md: {
                            fontSize: '1.3rem',
                          },
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{ position: 'relative' }}>
            {props.isLoading && <Skeleton variant="rectangular" width="100%" height={200} sx={{ margin: '20px' }} />}
            {props.topr.map((item) => (
              <Box key={Math.random()} sx={{ borderRadius: '20px', padding: '5px' }}>
                <Link href={item.link} target="_blank" sx={{ textDecoration: 'none', color: '#212529' }}>
                  <Box className="img-top">
                    <img src={item.image} width="100%" height="auto" alt="" />
                  </Box>

                  <Box
                    sx={{
                      width: '99%',
                      height: '180px',
                      position: 'absolute',
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) -2%, #000 80%)',
                      bottom: '4px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      opacity: '.9',
                      borderBottomLeftRadius: '20px',
                      borderBottomRightRadius: '20px',
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: 'center',
                        fontWeight: '700',
                        color: '#fff',
                        marginBottom: '-10%',

                        typography: {
                          xs: { xfontSize: '1rem' },
                          sm: { fontSize: '1.2rem' },
                          md: {
                            fontSize: '1.3rem',
                          },
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container maxWidth="lg" margin="auto">
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            className="font_title"
            sx={{
              textAlign: 'center',
              fontSize: '3rem',
              textTransform: 'uppercase',
              color: '#333333',

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
            <CateBox className="box-categray">
              {props.hotleft.map((item) => (
                <Link key={Math.random()} href={item.link} target="_blank" sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Box sx={{ display: 'flex' }}>
                    <Typography
                      sx={{
                        fontStyle: 'italic',
                        fontFamily: 'Basker',
                        width: '20%',
                        lineHeight: '1',

                        typography: { xs: { fontSize: '3rem' }, sm: { fontSize: '2.5rem' }, md: { fontSize: '5rem' } },
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
            <CateBox className="box-categray">
              {props.rpost.map((item) => (
                <Link key={Math.random()} href={item.link} target="_blank" sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Box sx={{ display: 'flex' }}>
                    <Typography
                      sx={{
                        fontStyle: 'italic',
                        fontFamily: 'Basker',
                        width: '20%',
                        lineHeight: '1',
                        typography: { xs: { fontSize: '3rem' }, sm: { fontSize: '2.5rem' }, md: { fontSize: '5rem' } },
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
            <CateBox className="box-categray">
              {props.xpost.map((item) => (
                <Link key={Math.random()} href={item.link} target="_blank" sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Box sx={{ display: 'flex' }}>
                    <Typography
                      sx={{
                        fontStyle: 'italic',
                        fontFamily: 'Basker',
                        width: '20%',
                        lineHeight: '1',
                        typography: { xs: { fontSize: '3rem' }, sm: { fontSize: '2.5rem' }, md: { fontSize: '5rem' } },
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
            <CateBox className="box-categray">
              {props.hotright.map((item) => (
                <Link key={Math.random()} href={item.link} target="_blank" sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Box sx={{ display: 'flex' }}>
                    <Typography
                      sx={{
                        fontStyle: 'italic',
                        fontFamily: 'Basker',
                        width: '20%',
                        lineHeight: '1',
                        typography: { xs: { fontSize: '3rem' }, sm: { fontSize: '2.5rem' }, md: { fontSize: '5rem' } },
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
