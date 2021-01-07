import { Col, Row } from 'antd'
import {
  LinkedinFilled,
  InstagramFilled,
  YoutubeFilled,
} from '@ant-design/icons'
import styles from './bottom-page.module.css'

const iconStyle = { fontSize: '50px' }

const BottomPage = () => (
  <Row className={styles.container} justify="center">
    <Col className={styles.iconItem}>
      <LinkedinFilled style={iconStyle} />
    </Col>
    <Col className={styles.iconItem}>
      <InstagramFilled style={iconStyle} />
    </Col>
    <Col className={styles.iconItem}>
      <YoutubeFilled style={iconStyle} />
    </Col>
  </Row>
)

export default BottomPage
