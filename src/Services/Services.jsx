import { Button } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CatePost from '../Components/Posts/Posthomes/CatePost'
import Postassk from '../Components/Posts/Posthomes/Postassk'
import PostKynguyenso from '../Components/Posts/Posthomes/PostKynguyenso'
import Postxevaluat from '../Components/Posts/Posthomes/Postxevaluat'

const Services = () => {
  const [oaPost, setOaPost] = useState([])

  const [rightPost, setRightPost] = useState([])
  const [foodChild1, setFoodChild1] = useState([])
  const [foodChild2, setFoodChild2] = useState([])
  const [foodChild3, setFoodChild3] = useState([])
  const [foodChild4, setFoodChild4] = useState([])
  const [foodChild5, setFoodChild5] = useState([])
  const [foodChild6, setFoodChild6] = useState([])

  useEffect(() => {
    const url = `https://kynguyenso.herokuapp.com/an-sach-song-khoe`

    axios.get(url).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image,
        imagetop: item.imageTop,
        time: item.time,
      }))
      setOaPost(data.slice(0, 1))

      setRightPost(data.slice(5, 6))
      setFoodChild1(data.slice(6, 7))
      setFoodChild2(data.slice(7, 8))
      setFoodChild3(data.slice(8, 9))
      setFoodChild4(data.slice(9, 10))
      setFoodChild5(data.slice(10, 11))
      setFoodChild6(data.slice(11, 12))
    })
  }, [])

  /*-------kỷ nguyên số-------------------*/
  const [topPost, setTopPost] = useState([])

  const [hotNewsLeft, setHotNewsLeft] = useState([])
  const [hotNewsRight, setHotNewsRight] = useState([])

  const [mainPost, setMainPost] = useState([])

  const [listPostChild, setListPostChild] = useState([])

  useEffect(() => {
    axios.get(`https://kynguyenso.herokuapp.com`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image,
        imagetop: item.imageTop,
        time: item.time,
      }))
      setTopPost(data.slice(0, 1))

      setHotNewsLeft(data.slice(1, 2))
      setHotNewsRight(data.slice(2, 3))

      setMainPost(data.slice(5, 6))
      setListPostChild(data.slice(6, 9))
    })
  }, [])

  /*----------KỶ NGUYÊN SỐ CATEGARY------------------*/

  const [catePost, setCatePost] = useState([])

  useEffect(() => {
    axios.get(`https://kynguyenso.herokuapp.com/tuyet-chieu`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image,
        imagetop: item.imageTop,
        time: item.time,
      }))
      setCatePost(data.slice(0, 1))
    })
  }, [])

  const [catePostChild1, setCatePostChild1] = useState([])
  const [catePostChild11, setCatePostChild11] = useState([])

  useEffect(() => {
    axios.get(`https://kynguyenso.herokuapp.com/`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image,
        imagetop: item.imageTop,
        time: item.time,
      }))
      setCatePostChild1(data.slice(5, 6))
      setCatePostChild11(data.slice(4, 5))
    })
  }, [])

  const [catePostChild2, setCatePostChild2] = useState([])

  useEffect(() => {
    axios.get(`https://kynguyenso.herokuapp.com/`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image,
        imagetop: item.imageTop,
        time: item.time,
      }))
      setCatePostChild2(data.slice(0, 1))
    })
  }, [])

  const [catePostChild3, setCatePostChild3] = useState([])

  useEffect(() => {
    axios.get(`https://kynguyenso.herokuapp.com/nhip-cong-nghe`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image,
        imagetop: item.imageTop,
        time: item.time,
      }))
      setCatePostChild3(data.slice(0, 1))
    })
  }, [])

  const [catePostChild4, setCatePostChild4] = useState([])

  useEffect(() => {
    axios.get(`https://kynguyenso.herokuapp.com/kinh-doanh-online`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image,
        imagetop: item.imageTop,
        time: item.time,
      }))
      setCatePostChild4(data.slice(0, 1))
    })
  }, [])

  const [catePostChild5, setCatePostChild5] = useState([])

  useEffect(() => {
    axios.get(`https://kynguyenso.herokuapp.com/thiet-bi-so`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image,
        imagetop: item.imageTop,
        time: item.time,
      }))
      setCatePostChild5(data.slice(0, 1))
    })
  }, [])

  /*------xe và luật -------------*/

  const [feaPost, setFeaPost] = useState([])

  const [rightXPost, setRightXPost] = useState([])

  const [carPostChild1, setCarPostChild1] = useState([])
  const [carPostChild2, setCarPostChild2] = useState([])
  const [carPostChild3, setCarPostChild3] = useState([])
  const [carPostChild4, setCarPostChild4] = useState([])
  const [carPostChild5, setCarPostChild5] = useState([])
  const [carPostChild6, setCarPostChild6] = useState([])

  useEffect(() => {
    const url = `https://kynguyenso.herokuapp.com/xe-va-luat`
    axios.get(url).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image,
        imagetop: item.imageTop,
        time: item.time,
      }))
      setFeaPost(data.slice(0, 1))

      setRightXPost(data.slice(5, 6))
      setCarPostChild1(data.slice(6, 7))
      setCarPostChild2(data.slice(7, 8))
      setCarPostChild3(data.slice(8, 9))
      setCarPostChild4(data.slice(9, 10))
      setCarPostChild5(data.slice(10, 11))
      setCarPostChild6(data.slice(11, 12))
    })
  }, [])

  /*-----Tin tieu điểm---------------*/

  const [listTopNews, setListTopNews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const respGlobal = await axios(`https://kynguyenso.herokuapp.com/tong-hop`)
      const respRepos = await axios(`https://kynguyenso.herokuapp.com/xe-va-luat`)

      const arr1 = respGlobal.data.slice(6, 8)
      const arr2 = respRepos.data.slice(11, 13)
      const arr3 = [...arr1, ...arr2]

      console.log(arr3)

      setListTopNews(arr3)
    }

    fetchData()
  }, [])

  /*--------------chuyên mục kỷ nguyên số ----------------------*/

  useEffect(() => {
    const fetchData = async () => {
      const respRepos = await axios(`https://kynguyenso.herokuapp.com/nhip-cong-nghe`)
      const res3 = await axios(`https://kynguyenso.herokuapp.com/thiet-bi-so`)
      const res4 = await axios(`https://kynguyenso.herokuapp.com/tuyet-chieu`)

      const arr2 = respRepos.data
      const arr3 = res3.data
      const arr4 = res4.data
      const arrNews = [...arr2, ...arr3, ...arr4]

      setListTopNews(arrNews)
    }

    fetchData()
  }, [])

  /*-------------load more-------------*/
  // const handleClick = useCallback(() => {
  //   axios.get(`https://crawlassk.herokuapp.com/`).then((data) => {
  //     let start = 26 * page
  //     let end = 26 * (page + 1)
  //     let result = data.data.slice(start, end)
  //     setListPost((posts) => [...posts, ...result])

  //     setPage((page) => page + 1)
  //   })
  // }, [page])

  return (
    <Box>
      <CatePost toppost={topPost} hotleft={hotNewsLeft} rpost={oaPost} xpost={feaPost} hotright={hotNewsRight} />
      <PostKynguyenso
        main={mainPost}
        list={listPostChild}
        rightpost={catePost}
        topcate={catePost}
        child1={catePostChild1}
        child11={catePostChild11}
        child2={catePostChild2}
        child3={catePostChild3}
        child4={catePostChild4}
        child5={catePostChild5}
      />

      <Box m={1} sx={{ display: { xs: 'flex', md: 'none' } }} justifyContent={'center'} alignItems={'center'} fontWeight={'900'}>
        <Button className="btn-more">
          <Link to="chuyen-muc/ky-nguyen-so" className="Link_cate">
            Xem thêm
            <img src="https://dep.com.vn/wp-content/themes/dep/assets/img/arrow-xt-02.png" />
          </Link>
        </Button>
      </Box>

      <Postassk
        main={mainPost}
        list={listPostChild}
        rightpost={rightPost}
        foodchild1={foodChild1}
        foodchild2={foodChild2}
        foodchild3={foodChild3}
        foodchild4={foodChild4}
        foodchild5={foodChild5}
        foodchild6={foodChild6}
      />
      <Box m={1} sx={{ display: { xs: 'flex', md: 'none' } }} justifyContent={'center'} alignItems={'center'} fontWeight={'900'}>
        <Button className="btn-more">
          <Link to="chuyen-muc/an-sach-song-khoe" className="Link_cate">
            Xem thêm
            <img src="https://dep.com.vn/wp-content/themes/dep/assets/img/arrow-xt-02.png" />
          </Link>
        </Button>
      </Box>
      {/* <PostTintuc listchil={listTopNews} /> */}
      <Postxevaluat
        main={mainPost}
        list={listPostChild}
        rightx={rightXPost}
        carchild1={carPostChild1}
        carchild2={carPostChild2}
        carchild3={carPostChild3}
        carchild4={carPostChild4}
        carchild5={carPostChild5}
        carchild6={carPostChild6}
      />
      <Box m={1} sx={{ display: { xs: 'flex', md: 'none' } }} justifyContent={'center'} alignItems={'center'} fontWeight={'900'}>
        <Button className="btn-more">
          <Link to="chuyen-muc/xe-va-luat" className="Link_cate">
            Xem thêm
            <img src="https://dep.com.vn/wp-content/themes/dep/assets/img/arrow-xt-02.png" />
          </Link>
        </Button>
      </Box>
    </Box>
  )
}

export default Services
