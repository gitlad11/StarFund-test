import 'react';
import { useSelector } from 'react-redux' 
import type { RootState } from "@/store";
import Card from './card';
import { ChangeEvent, useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { paginate } from '@/utils/paginate';
import styles from "../styles/page.module.scss";
import { Category } from './category';
import Col from "react-bootstrap/Col";
import { Container } from 'react-bootstrap';

export default function List() {
    const selector = useSelector((store : RootState) =>  store.product );
    const [page, setPage] = useState(1)
    const [filtered, setFiltered] = useState([])

    const setCurrentPage = (s: any) => {
        setPage(s)
    }
    const onFiltered = (s: String) => {
        setFiltered(selector.products.filter((v: Map<String, String>) => v['title'].toLowerCase().includes(s.toLowerCase()) ))
    }
    const onCategory = (s: String) => {
        if(s != 'all'){
            setFiltered(selector.products.filter((v: Map<String, String>) => v['category'].includes(s) ))
        } else {
            setFiltered(selector.products)
        }
    }
    useEffect(() => {
        setFiltered(selector.products)
    },[])
    
    return (
        <div style={{ width : '100%' }}>
            <ResponsivePagination
                current={page}
                total={filtered.length/ 10}
                onPageChange={setCurrentPage}
                />
            <div>
            <input onChange={(e) => { onFiltered(e.target.value) }} className={styles.search} type="text" />
            <div className={styles.filters}>
                <Category onCategory={onCategory}/>
            </div>
            </div>
            <Container>
                <div className='row' >
            {paginate(filtered, page, 10).map((i:any, key:number) => {
                return  <Col  xs={4}><Card key={key} i={i}/></Col>
            })}
                </div>
            </Container>
        </div>
    );
  }