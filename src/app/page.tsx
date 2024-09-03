"use client";
import styles from "../styles/page.module.scss";
import { useEffect, useState } from "react";
import Interceptor from "@/services/interceptor";
import { useDispatch, useSelector } from 'react-redux' 
import { setProducts } from "@/store/product/productSlice";
import ReactLoading from 'react-loading';
import List from "@/components/list";
import { AxiosResponse } from "axios";
import { NextSeo } from 'next-seo';
import { Icon } from "@/utils/icon";
import { Display } from "react-bootstrap-icons";
import { RootState } from "@/store";

export default function Home() {
  var ins = new Interceptor();
  const [fetching, setFetching] = useState(true);
  const dispatch = useDispatch()
  const selector = useSelector((store : RootState) =>  store.favorite );
  
  useEffect(() => {
    getData()
    },)

  //Нужно реализовать в getServerSideProps, время
  const getData = async () => {
    var data: AxiosResponse = await ins.getData('')
    if(data != undefined){
      dispatch(setProducts(data.data))
    }
    setFetching(false)
  }

  return (
    <main className={styles.main}>
      <div className={styles.header} >
          <>
          </>
          {!fetching ? <div className={styles.favorites} style={{ display : 'flex' }}>
                Favorite
                <Icon style={{ marginLeft: '9px', marginRight : '9px', }} onClick={() => { }} iconName={"Star"}/>
                 {selector.favorites.length}
            </div> : <></>}
      </div>
      {fetching ? <ReactLoading height={'20%'} width={'20%'} /> : <List/>}
      <link rel="stylesheet" href="output.css"></link>
    </main>
  );
}