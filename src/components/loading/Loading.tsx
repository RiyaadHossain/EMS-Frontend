import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.spinner}></div>
      <div className={styles.text}>Loading...</div>
    </div>
  );
};

export default Loading;
