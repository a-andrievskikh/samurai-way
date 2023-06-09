import React from 'react'
import styles from './Post.module.css'

type PostType = {
  message: string,
  likesCount: number
}

function Post(props: PostType) {
  return (
    <div className={styles.item}>
      <img src="https://sun1-87.userapi.com/s/v1/ig2/62slIoVgPwltdzSkHnL24fxSf31Z0PUmBlhtMBLgcRveNxtsdwME5hF-Ih-FEHyQGj3hzdDI-rPXjy0X15seFhvz.jpg?size=400x400&quality=96&crop=2,2,598,598&ava=1"
           alt="" />
      {props.message}
      <div>
        <span>{props.likesCount} Like</span>
      </div>
    </div>
  )
}

export default Post