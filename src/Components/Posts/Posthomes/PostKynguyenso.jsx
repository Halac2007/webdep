import { Grid, Link, Paper, Skeleton, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
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
              {props.loadingksn && (
                <Skeleton width="100%" variant="rectangular" height="280px" sx={{ borderRadius: '20px', margin: '5px' }} />
              )}
              {props.listtop.map((item) => (
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
              <CateBox className="cate_box_page">
                {props.isLoadingList1 && (
                  <Skeleton width="100%" variant="rectangular" height="150px" sx={{ borderRadius: '20px', margin: '5px' }} />
                )}
                {props.listtop_1.map((item) => (
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
                {props.isLoadingList2 && (
                  <Skeleton width="100%" variant="rectangular" height="150px" sx={{ borderRadius: '20px', margin: '5px' }} />
                )}
                {props.listtop_2.map((item) => (
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
                {props.isLoadingList3 && (
                  <Skeleton width="100%" variant="rectangular" height="150px" sx={{ borderRadius: '20px', margin: '5px' }} />
                )}
                {props.listtop_3.map((item) => (
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
                {props.isLoadingList4 && (
                  <Skeleton width="100%" variant="rectangular" height="150px" sx={{ borderRadius: '20px', margin: '5px' }} />
                )}
                {props.listtop_4.map((item) => (
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
                {props.isLoadingList5 && (
                  <Skeleton width="100%" variant="rectangular" height="150px" sx={{ borderRadius: '20px', margin: '5px' }} />
                )}
                {props.listtop_5.map((item) => (
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
                {props.isLoadingList6 && (
                  <Skeleton width="100%" variant="rectangular" height="150px" sx={{ borderRadius: '20px', margin: '5px' }} />
                )}
                {props.listtop_6.map((item) => (
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

export default PostKynguyenso
