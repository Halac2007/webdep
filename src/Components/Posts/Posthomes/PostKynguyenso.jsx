import { Grid, Link, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

const CateBox = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  border: 'none',
  boxShadow: 'none',

  color: theme.palette.text.secondary,
}))

const PostKynguyenso = (props) => {
  return (
    <>
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
            <Link href="/chuyen-muc/ky-nguyen-so" sx={{ textDecoration: 'none', color: '#212529' }}>
              KỶ NGUYÊN SỐ
            </Link>
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
          <Grid item xs={12} sm={4} md={4}>
            <CateBox>
              {props.rightpost.map((item) => (
                <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image} width="100%" height="auto" alt="" />

                  <Typography
                    sx={{
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      fontSize: '12px',

                      borderLeft: '1px solid #333',
                      borderRight: '1px solid #333',
                      margin: '0 22%',
                    }}
                  >
                    Kỷ nguyên số
                  </Typography>
                  <Typography sx={{ textTransform: 'uppercase', fontSize: '1.2rem', textAlign: 'center', padding: '2rem 0' }}>
                    {item.title}
                  </Typography>
                </Link>
              ))}
            </CateBox>
          </Grid>
          <Grid container item xs={12} sm={8} md={8} spacing={2}>
            <Grid item xs={12} sm={4} md={4}>
              <CateBox>
                {props.child11.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    sx={{ textDecoration: 'none', color: '#212529' }}
                    className="CateBox_Child"
                  >
                    <img src={item.image} width="100%" height="auto" alt="" />
                    <Typography>{item.title}</Typography>
                  </Link>
                ))}
              </CateBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CateBox>
                {props.child1.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    sx={{ textDecoration: 'none', color: '#212529' }}
                    className="CateBox_Child"
                  >
                    <img src={item.image} width="100%" height="auto" alt="" />

                    <Typography>{item.title}</Typography>
                  </Link>
                ))}
              </CateBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CateBox>
                {props.child2.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    sx={{ textDecoration: 'none', color: '#212529' }}
                    className="CateBox_Child"
                  >
                    <img src={item.image} width="100%" height="auto" alt="" />

                    <Typography>{item.title}</Typography>
                  </Link>
                ))}
              </CateBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CateBox>
                {props.child3.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    sx={{ textDecoration: 'none', color: '#212529' }}
                    className="CateBox_Child"
                  >
                    <img src={item.image} width="100%" height="auto" alt="" />

                    <Typography>{item.title}</Typography>
                  </Link>
                ))}
              </CateBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CateBox>
                {props.child4.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    sx={{ textDecoration: 'none', color: '#212529' }}
                    className="CateBox_Child"
                  >
                    <img src={item.image} width="100%" height="auto" alt="" />

                    <Typography>{item.title}</Typography>
                  </Link>
                ))}
              </CateBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CateBox>
                {props.child5.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    sx={{ textDecoration: 'none', color: '#212529' }}
                    className="CateBox_Child"
                  >
                    <img src={item.image} width="100%" height="auto" alt="" />

                    <Typography>{item.title}</Typography>
                  </Link>
                ))}
              </CateBox>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default PostKynguyenso
