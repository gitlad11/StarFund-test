'use client'
import { setProduct, setProducts } from "@/store/product/productSlice";
import styles from "../styles/card.module.scss";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux' 
import { FC } from "react";
import Interceptor from "@/services/interceptor";
import { AxiosResponse } from "axios";
import * as icons from 'react-bootstrap-icons';
import { Icon } from "@/utils/icon";
import { Metadata } from "next";
import { removeFavorites, setFavorites } from "@/store/product/favoriteSlice";
import { RootState } from "@/store";

interface CardProps {
        i : any
  }

  //FOR SEO 
export const generateMetadata = ({ i }: CardProps): Metadata => {
    return {
      title: `Product - ${i['id']}`,
    };
  };
  


const Card:FC<CardProps> = (props): JSX.Element => {
    const router = useRouter();
    const dispatch = useDispatch();
    var ins = new Interceptor();
    const selector = useSelector((store : RootState) =>  store.favorite );
    
    const onDelete = async (id: number) => {
      var data: AxiosResponse = await ins.deleteData(`/${id.toString()}`)
      var d: AxiosResponse = await ins.getData('')
      if(d != undefined){
        dispatch(setProducts(d.data))
      }
    }
    const onFavorite = async (item: Object) => {
       if(!isFound){
        return dispatch(setFavorites(item))
       } 
       return dispatch(removeFavorites(item)) ;
    }
    const isFound = selector.favorites.some(element => {
    if (element['id'] == props.i['id']) {
      return true;
    }

    return false;
  });

    return (

        <div className={styles.card}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginLeft : '15px'}}>
                  <Image alt="" src={props.i['thumbnail']} width={124} height={124} />
              </div>
              <div style={{ marginLeft : '12px' }}>
                <h2 >
                    {props.i['id']}.{props.i['title']}
                </h2>
                <p>
                    category: {props.i['category']}
                </p>
                <div>
                    {props.i['content'].substring(0,100)}...
                </div>
              </div>
          </div>
            <div style={{ display: 'flex' }}>
              <Icon onClick={() => { onDelete(props.i['id']) }} iconName={"Trash"}/>
              <Icon style={!isFound
                      ? { marginLeft : '9px' } 
                      : { marginLeft : '9px', color: 'red' }}
                       onClick={() => { onFavorite(props.i) }} iconName={"Star"}/>
            </div>
        </div>
    );
  }

export default Card;