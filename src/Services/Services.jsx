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
  /*-------data home plo-------------------*/
  //OA
  const [oaLeft, setoaLeft] = useState([])
  const [oaRight, setoaRight] = useState([])

  // Tiêu điểm
  const [hotLeftKNS, setHotLeftKNS] = useState([])
  const [hotASSK, setHotASSK] = useState([])
  const [hotXe, setHotXe] = useState([])
  const [hotRightKNS, setHotRightKNS] = useState([])

  //

  const [cateKNSLeft, setcateKNSLeft] = useState([])

  const [cateASSK, setcateASSK] = useState([])

  const [cateKNSRight, setcateKNSRight] = useState([])

  const [cateXe, setcateXe] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios.get(`https://data-cafebuoisang.vercel.app/`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image.replace(/.[0-9]*x[0-9]{3}/, ''),
        imagetop: item.imageTop,
        time: item.time,
      }))
      setIsLoading(false)

      //OA
      setoaLeft(data.slice(8, 9))
      setoaRight(data.slice(0, 1))
      //Tiêu điểm
      setHotLeftKNS(data.slice(9, 10))
      setHotASSK(data.slice(1, 2))
      setHotXe(data.slice(4, 5))
      setHotRightKNS(data.slice(11, 12))
      //

      // setcateKNSLeft(data.slice(10, 11))
      // setcateASSK(data.slice(1, 2))
      // setcateKNSRight(data.slice(11, 12))
      // setcateXe(data.slice(4, 4))
    })
  }, [])

  // Page KNS
  const [pageList, setPageList] = useState([])

  const [isLoadingKns, setIsLoadingKSN] = useState(true)
  useEffect(() => {
    axios.get(`https://data-cafebuoisang.vercel.app/`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image.replace(/.[0-9]*x[0-9]{3}/, ''),
        imagetop: item.imageTop,
        time: item.time,
      }))
      setIsLoadingKSN(false)
      setPageList(data.slice(10, 11))
    })
  }, [])
  //

  const [pageList1, setPageList1] = useState([])
  const [isLoadingList1, setIsLoadingList1] = useState(true)
  useEffect(() => {
    axios.get(`https://data-cafebuoisang.vercel.app/thiet-bi-so`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image.replace(/.[0-9]*x[0-9]{3}/, ''),
        imagetop: item.imageTop,
        time: item.time,
      }))
      setIsLoadingList1(false)
      setPageList1(data.slice(0, 1))
    })
  }, [])
  //

  //
  const [pageList2, setPageList2] = useState([])
  const [isLoadingList2, setIsLoadingList2] = useState(true)
  useEffect(() => {
    axios.get(`https://data-cafebuoisang.vercel.app/nhip-cong-nghe`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image.replace(/.[0-9]*x[0-9]{3}/, ''),
        imagetop: item.imageTop,
        time: item.time,
      }))
      setIsLoadingList2(false)
      setPageList2(data.slice(0, 1))
    })
  }, [])

  //
  const [pageList3, setPageList3] = useState([])
  const [isLoadingList3, setIsLoadingList3] = useState(true)
  useEffect(() => {
    axios.get(`https://data-cafebuoisang.vercel.app/tuyet-chieu`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image.replace(/.[0-9]*x[0-9]{3}/, ''),
        imagetop: item.imageTop,
        time: item.time,
      }))
      setIsLoadingList3(false)
      setPageList3(data.slice(13, 14))
    })
  }, [])

  //
  //
  const [pageList4, setPageList4] = useState([])
  const [isLoadingList4, setIsLoadingList4] = useState(true)
  useEffect(() => {
    axios.get(`https://data-cafebuoisang.vercel.app/kinh-doanh-online`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image.replace(/.[0-9]*x[0-9]{3}/, ''),
        imagetop: item.imageTop,
        time: item.time,
      }))
      setIsLoadingList4(false)
      setPageList4(data.slice(1, 2))
    })
  }, [])

  //
  const [pageList5, setPageList5] = useState([])
  const [isLoadingList5, setIsLoadingList5] = useState(true)
  useEffect(() => {
    axios.get(`https://data-cafebuoisang.vercel.app/cong-nghe-40`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image.replace(/.[0-9]*x[0-9]{3}/, ''),
        imagetop: item.imageTop,
        time: item.time,
      }))
      setIsLoadingList5(false)
      setPageList5(data.slice(0, 1))
    })
  }, [])
  //

  const [pageList6, setPageList6] = useState([])
  const [isLoadingList6, setIsLoadingList6] = useState(true)
  useEffect(() => {
    axios.get(`https://data-cafebuoisang.vercel.app/tuyet-chieu`).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image.replace(/.[0-9]*x[0-9]{3}/, ''),
        imagetop: item.imageTop,
        time: item.time,
      }))

      setIsLoadingList6(false)

      setPageList6(data.slice(1, 2))
    })
  }, [])

  //data page ASSK

  const [oaPost, setOaPost] = useState([])

  const [rightPost, setRightPost] = useState([])
  const [foodChild1, setFoodChild1] = useState([])
  const [foodChild2, setFoodChild2] = useState([])
  const [foodChild3, setFoodChild3] = useState([])
  const [foodChild4, setFoodChild4] = useState([])
  const [foodChild5, setFoodChild5] = useState([])
  const [foodChild6, setFoodChild6] = useState([])

  const [isLoadingAssk, setIsLoadingAssk] = useState(true)
  const [isLoadingAsskChild, setIsLoadingAsskChild] = useState(true)

  useEffect(() => {
    const url = `https://data-cafebuoisang.vercel.app/an-sach-song-khoe`

    axios.get(url).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,
        image: item.image.replace(/.[0-9]*x[0-9]{3}/, ''),
        imagetop: item.imageTop,
        time: item.time,
      }))
      setIsLoadingAssk(false)
      setIsLoadingAsskChild(false)
      setRightPost(data.slice(6, 7))

      setFoodChild1(data.slice(7, 8))
      setFoodChild2(data.slice(8, 9))
      setFoodChild3(data.slice(9, 10))
      setFoodChild4(data.slice(1, 2))
      setFoodChild5(data.slice(2, 3))
      setFoodChild6(data.slice(3, 4))

      setOaPost(data.slice(2, 3))
    })
  }, [])

  // page xe

  const [feaPost, setFeaPost] = useState([])

  const [rightXPost, setRightXPost] = useState([])

  const [isLoadingXe, setIsLoadingXe] = useState(true)
  const [isLoadingXeChild, setIsLoadingXeChild] = useState(true)
  const [carPostChild1, setCarPostChild1] = useState([])
  const [carPostChild2, setCarPostChild2] = useState([])
  const [carPostChild3, setCarPostChild3] = useState([])
  const [carPostChild4, setCarPostChild4] = useState([])
  const [carPostChild5, setCarPostChild5] = useState([])
  const [carPostChild6, setCarPostChild6] = useState([])

  useEffect(() => {
    const url = `https://data-cafebuoisang.vercel.app/xe-va-luat`
    axios.get(url).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        link: item.link,

        image: item.image.replace(/.[0-9]*x[0-9]{3}/, ''),
        imagetop: item.imageTop,
        time: item.time,
      }))
      setIsLoadingXe(false)
      setIsLoadingXeChild(false)
      setFeaPost(data.slice(0, 1))

      setRightXPost(data.slice(5, 6))
      setCarPostChild1(data.slice(6, 7))
      setCarPostChild2(data.slice(7, 8))
      setCarPostChild3(data.slice(8, 9))
      setCarPostChild4(data.slice(1, 2))
      setCarPostChild5(data.slice(2, 3))
      setCarPostChild6(data.slice(3, 4))
    })
  }, [])

  //

  return (
    <Box>
      <CatePost
        isLoading={isLoading}
        toppost={oaLeft}
        topr={oaRight}
        hotleft={hotLeftKNS}
        rpost={hotASSK}
        xpost={hotXe}
        hotright={hotRightKNS}
      />

      <PostKynguyenso
        loadingksn={isLoadingKns}
        listtop={pageList}
        isLoadingList1={isLoadingList1}
        listtop_1={pageList1}
        isLoadingList2={isLoadingList2}
        listtop_2={pageList2}
        isLoadingList3={isLoadingList3}
        listtop_3={pageList3}
        isLoadingList4={isLoadingList4}
        listtop_4={pageList4}
        isLoadingList5={isLoadingList5}
        listtop_5={pageList5}
        isLoadingList6={isLoadingList6}
        listtop_6={pageList6}
      />

      <Box m={1} sx={{ display: { xs: 'flex', md: 'none' } }} justifyContent={'center'} alignItems={'center'} fontWeight={'900'}>
        <Button className="btn-more">
          <Link to="chuyen-muc/ky-nguyen-so" className="Link_cate">
            <img src="https://dep.com.vn/wp-content/themes/dep/assets/img/arrow-xt-02.png" />
          </Link>
        </Button>
      </Box>

      <Postassk
        isLoadingAssk={isLoadingAssk}
        rightpost={rightPost}
        isLoadingAsskChild={isLoadingAssk}
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
            <img src="https://dep.com.vn/wp-content/themes/dep/assets/img/arrow-xt-02.png" />
          </Link>
        </Button>
      </Box>
      {/* <PostTintuc listchil={listTopNews} /> */}
      <Postxevaluat
        isLoadingXe={isLoadingXe}
        rightx={rightXPost}
        isLoadingXeChild={isLoadingXeChild}
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
            <img src="https://dep.com.vn/wp-content/themes/dep/assets/img/arrow-xt-02.png" />
          </Link>
        </Button>
      </Box>
    </Box>
  )
}

export default Services
