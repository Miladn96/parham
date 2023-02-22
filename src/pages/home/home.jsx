import { Post } from './components'
import styles from './home.module.scss'

export const Home = () => {
  return (
    <div className={styles['home-container']}>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  )
}
