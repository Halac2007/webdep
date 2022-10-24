import { Grid, Link, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import TileAssk from '../TitleCate/TileAssk'

const CateBox = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  border: 'none',
  boxShadow: 'none',

  color: theme.palette.text.secondary,
}))
const Postassk = (props) => {
  return (
    <>
      <TileAssk />
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
            <CateBox className="cate_box_page_top">
              {props.isLoadingAssk && (
                <Skeleton width="100%" variant="rectangular" height="280px" sx={{ borderRadius: '20px', margin: '5px' }} />
              )}
              {props.rightpost.map((item) => (
                <Link key={Math.random()} href={item.link} target="_blank" sx={{ textDecoration: 'none', color: '#212529' }}>
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
                    Ăn sạch sống khỏe
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
              <CateBox className="cate_box_page">
                {props.foodchild1.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    sx={{ textDecoration: 'none', color: '#212529' }}
                    className="CateBox_Child"
                    target="_blank"
                  >
                    <img src={item.image} width="100%" height="auto" alt="" />

                    <Typography>{item.title}</Typography>
                  </Link>
                ))}
              </CateBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CateBox className="cate_box_page">
                {props.foodchild2.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    sx={{ textDecoration: 'none', color: '#212529' }}
                    className="CateBox_Child"
                    target="_blank"
                  >
                    <img src={item.image} width="100%" height="auto" alt="" />

                    <Typography>{item.title}</Typography>
                  </Link>
                ))}
              </CateBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CateBox className="cate_box_page">
                {props.foodchild3.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    target="_blank"
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
              <CateBox className="cate_box_page">
                {props.foodchild4.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    target="_blank"
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
              <CateBox className="cate_box_page">
                {props.foodchild5.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    target="_blank"
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
              <CateBox className="cate_box_page">
                {props.foodchild6.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    target="_blank"
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

export default Postassk
