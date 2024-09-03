import { FC } from 'react';
import * as icons from 'react-bootstrap-icons';
import styles from '../styles/page.module.scss';

interface CategoryProps {
    onCategory: any
}

export const Category:FC<CategoryProps>  = (props) => {
    return (<div className={styles.categories}>

                category:
                            <div onClick={() => { props.onCategory('all') }} className={styles.category}>all</div>
                             <div onClick={() => { props.onCategory('lorem') }} className={styles.category}>lorem</div>
                             <div onClick={() => { props.onCategory('ipsum') }} className={styles.category}>ipsum</div>
                            <div onClick={() => { props.onCategory('elementum') }} className={styles.category}>elementum</div>
                             <div onClick={() => { props.onCategory('rutrum') }} className={styles.category}>rutrum</div>
            </div>);
}