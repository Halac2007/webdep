import { Grid, Link, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import TitleKns from '../TitleCate/TitleKns'

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
      <TitleKns />
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
              {props.listtop.map((item) => (
                <Link key={Math.random()} href={item.link} target="_blank" sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image || <Skeleton count={2} />} width="100%" height="auto" alt="" />

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
                    {item.title || <Skeleton count={2} />}
                  </Typography>
                </Link>
              ))}
            </CateBox>
          </Grid>
          <Grid container item xs={12} sm={8} md={8} spacing={2}>
            <Grid item xs={12} sm={4} md={4}>
              <CateBox className="cate_box_page">
                {props.listtop_1.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    target="_blank"
                    sx={{ textDecoration: 'none', color: '#212529' }}
                    className="CateBox_Child"
                  >
                    <img src={item.image || <Skeleton count={2} />} width="100%" height="auto" alt="" />
                    <Typography>{item.title || <Skeleton count={2} />}</Typography>
                  </Link>
                ))}
              </CateBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CateBox className="cate_box_page">
                {props.listtop_2.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    target="_blank"
                    sx={{ textDecoration: 'none', color: '#212529' }}
                    className="CateBox_Child"
                  >
                    <img src={item.image || <Skeleton count={2} />} width="100%" height="auto" alt="" />

                    <Typography>{item.title || <Skeleton count={2} />}</Typography>
                  </Link>
                ))}
              </CateBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CateBox className="cate_box_page">
                {props.listtop_3.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    target="_blank"
                    sx={{ textDecoration: 'none', color: '#212529' }}
                    className="CateBox_Child"
                  >
                    <img src={item.image || <Skeleton count={2} />} width="100%" height="auto" alt="" />

                    <Typography>{item.title || <Skeleton count={2} />}</Typography>
                  </Link>
                ))}
              </CateBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CateBox className="cate_box_page">
                {props.listtop_4.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    target="_blank"
                    sx={{ textDecoration: 'none', color: '#212529' }}
                    className="CateBox_Child"
                  >
                    <img src={item.image} width="100%" height="auto" alt="" />

                    <Typography>{item.title || <Skeleton count={2} />}</Typography>
                  </Link>
                ))}
              </CateBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CateBox className="cate_box_page">
                {props.listtop_5.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    target="_blank"
                    sx={{ textDecoration: 'none', color: '#212529' }}
                    className="CateBox_Child"
                  >
                    <img src={item.image || <Skeleton count={2} />} width="100%" height="auto" alt="" />

                    <Typography>{item.title || <Skeleton count={2} />}</Typography>
                  </Link>
                ))}
              </CateBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CateBox className="cate_box_page">
                {props.listtop_6.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.link}
                    target="_blank"
                    sx={{ textDecoration: 'none', color: '#212529' }}
                    className="CateBox_Child"
                  >
                    <img src={item.image || <Skeleton count={2} />} width="100%" height="auto" alt="" />

                    <Typography>{item.title || <Skeleton count={2} />}</Typography>
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
