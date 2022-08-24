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
  const [featurePosts, setFeaturePosts] = useState([])

  const { name } = useParams()

  const [listPost, setListPost] = useState([])
  const [page, setPage] = useState([])

  useEffect(() => {
    const url = `https://kynguyenso.herokuapp.com/${name}`

    axios.get(url).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        url: item.link,
        image: item.image,
      }))
      setMainPosts(data.slice(4, 5))
      setSidePosts(data.slice(9, 11))

      setFeaturePosts(data.slice(11, 20))
      setOaPosts(data.slice(28, 40))
    })
  }, [name])

  const headerValue = menuHeads.filter((item) => item.url === name)[0].tittle
  const headerChildren = menuHeads.filter((item) => item.url === name)[0].chilren
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
            <TopTitle headtop={headerValue} headchild={headerChildren} />
          </Typography>
        </Grid>
      </Grid>

      <Grid container maxWidth="lg" spacing={0} margin="auto">
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
                      typography: { xs: { fontSize: '1.2rem' }, sm: { fontSize: '1.2rem' }, md: { fontSize: '1.2rem' } },
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
                  <Typography sx={{ textAlign: 'left' }}>{item.title}</Typography>
                </Link>
              ))}
            </CateBox>
          </Grid>
        </Grid>
      </Grid>

      <Grid container maxWidth="lg" spacing={0} margin="auto">
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
            <Grid key={Math.random()} item xs={6} sm={4} md={3}>
              <CateBox>
                <Link href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                  <img src={item.image} width="100%" height="auto" alt="" />
                  <Typography>{item.title}</Typography>
                </Link>
              </CateBox>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default Chuyenmuc
