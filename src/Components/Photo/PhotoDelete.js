import React from 'react';
import { PHOTO_DELETE } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({id}) => {

  const {loading, request} = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja cancelar?"); 

    if (confirm) {
      const token = window.localStorage.getItem('token');
      const {url, options} = PHOTO_DELETE(id, token);
      const {response} = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <div>
      {loading ? <button className={styles.delete} disabled>Delete</button> : <button onClick={handleClick} className={styles.delete}>Delete</button>}
    </div>
  )
};

export default PhotoDelete;
