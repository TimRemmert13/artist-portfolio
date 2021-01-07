import { MailOutlined } from '@ant-design/icons'
import { Row, Col, Divider } from 'antd'
import styles from './contact-info.module.css'

const ContactInfo = () => (
  <Row justify="center" className={styles.container}>
    <section className={styles.container}>
      <h1 className={styles.title}>Get in Touch</h1>
      <div className={styles.email}>
        <MailOutlined className={styles.iconStyle} />
        <a href="mailto:abc@example.com" className={styles.address}>
          Email me at abc@example.com
        </a>
      </div>
      <Divider>OR</Divider>
      <h4 className={styles.phone}>call me at 555-555-5555</h4>
    </section>
  </Row>
)

export default ContactInfo
