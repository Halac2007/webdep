import { Button, Grid, Link, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { menuHeads } from '../../Services/utils'
import TopTitle from '../Header/TopTitle'

const CateBox = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  border: 'none',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}))

const Chuyenmuc = () => {
  const [mainPosts, setMainPosts] = useState([])
  const [sidePosts, setSidePosts] = useState([])
  const [oaPosts, setOaPosts] = useState([])
  const [listPost_1, setListPost_1] = useState([])
  const [listPost_2, setListPost_2] = useState([])
  const { name } = useParams()

  const [page, setPage] = useState([])

  useEffect(() => {
    const url = `http://data-cafebuoisang.herokuapp.com/${name}/random`

    axios.get(url).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image,
      }))
      setMainPosts(data.slice(0, 1))
      setSidePosts(data.slice(1, 3))

      setOaPosts(data.slice(3, 7))

      setListPost_1(data.slice(8, 20))
      setListPost_2(data.slice(20, 25))
    })
  }, [name])

  const handleClick = useCallback(() => {
    axios.get(`http://data-cafebuoisang.herokuapp.com/${name}/random`).then((data) => {
      let start = 1 * page
      let end = 4 * (page + 1)
      let arr = data.data.splice(start, end)
      let result = data.data.slice(arr)

      setListPost_1((posts) => [...posts, ...result])

      setPage((page) => page + 1)
    })
  }, [name, page])

  const headerValue = menuHeads.filter((item) => item.url === name)[0].tittle
  const headerChildren = menuHeads.filter((item) => item.url === name)[0].chilren
  return (
    <>
      <Grid container maxWidth="1000px" margin="auto">
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
            <TopTitle headtop={headerValue} headchild={headerChildren} />
          </Typography>
        </Grid>
      </Grid>

      <Grid container maxWidth="1000px" spacing={0} margin="auto">
        <Grid
          container
          item
          spacing={{
            xs: 1,
            sm: 2,
            md: 1,
          }}
        >
          <Grid item xs={12} sm={8} md={8}>
            <CateBox>
              {mainPosts.map((item) => (
                <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Typography
                    sx={{
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      padding: '15px 0',
                      typography: {
                        xs: { fontSize: '1.2rem' },
                        sm: { fontSize: '1.2rem' },
                        md: { fontSize: '1.2rem', fontWeight: '700' },
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Link>
              ))}
            </CateBox>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <CateBox>
              {sidePosts.map((item) => (
                <Link
                  key={Math.random()}
                  href={item.link}
                  sx={{ textDecoration: 'none', color: '#212529', paddingBottom: '10px', marginBottom: '10px' }}
                  className="CateBox_Child"
                >
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Typography sx={{ textAlign: 'left', fontWeight: '700' }}>{item.title}</Typography>
                </Link>
              ))}
            </CateBox>
          </Grid>
        </Grid>
      </Grid>

      <Grid container maxWidth="1000px" spacing={0} margin="auto">
        <Grid
          container
          item
          spacing={{
            xs: 0,
            sm: 2,
            md: 1,
          }}
        >
          {oaPosts.map((item) => (
            <Grid key={Math.random()} item xs={6} sm={6} md={3}>
              <CateBox>
                <Link href={item.link} sx={{ textDecoration: 'none', color: '#212529' }} className="Page_img">
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Typography sx={{ fontWeight: '700' }}>{item.title}</Typography>
                </Link>
              </CateBox>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container maxWidth="1000px" spacing={0} margin="auto">
        <Box sx={{ m: '10px', p: '10px' }}>
          <Typography
            variant="h5"
            mt="10px"
            pb="15px"
            mb="15px"
            fontWeight="700"
            position="relative"
            borderBottom="1px solid #eee"
            sx={{
              typography: {
                md: { width: '1000px' },
                sm: { width: 'auto' },
                xs: { width: 'auto' },
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                height: '15px',
                width: '5px',
                bgcolor: 'red',
                top: '8px',
                left: '-12px',
                transform: 'skew(-25deg)',
              },
            }}
          >
            MỚI NHẤT
          </Typography>
        </Box>
      </Grid>
      <Grid container maxWidth="1000px" spacing={0} margin="auto">
        <Grid item xs={12} sm={8} md={8} spacing={2}>
          {listPost_1.map((item) => (
            <Link
              href={item.link}
              sx={{ display: 'flex', textDecoration: 'none', color: '#212529', borderBottom: '1px solid #eee', margin: '12px' }}
            >
              <Box sx={{ paddingBottom: '10px' }} className="box-list">
                <img src={item.image} width="100%" height="auto" alt="" />
              </Box>
              <Typography sx={{ paddingLeft: '10px', marginLeft: '10px', fontWeight: '700' }}>{item.title}</Typography>
            </Link>
          ))}
        </Grid>
        <Grid item xs={12} sm={4} md={4} spacing={2}>
          <Box className="Box_newtop">
            <Typography sx={{ backgroundColor: '#900000', padding: '10px', color: '#fff', textAlign: 'center', fontWeight: '700' }}>
              Xem nhiều
            </Typography>

            <Box className="hot_top">
              {listPost_2.map((item) => (
                <Link
                  href={item.link}
                  sx={{
                    display: 'flex',
                    textDecoration: 'none',
                    color: '#212529',
                    borderBottom: '1px solid #eee',
                    padding: '10px',
                    margin: '10px',
                  }}
                >
                  <Box sx={{ paddingBottom: '10px' }} className="box_more">
                    <img src={item.image} width="100%" height="auto" alt="" />
                  </Box>
                  <Typography sx={{ paddingLeft: '10px', marginLeft: '10px' }}>{item.title}</Typography>
                </Link>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box m={1} display="flex" justifyContent={'center'} alignItems={'center'} fontWeight={'900'}>
        <Button sx={{ border: '1px solid #ddd', transition: '.5s' }} className="btn-more" onClick={handleClick}>
          Xem thêm
        </Button>
      </Box>
    </>
  )
}

export default Chuyenmuc
