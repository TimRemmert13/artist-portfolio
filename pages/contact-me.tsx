import Layout, { Content, Footer } from 'antd/lib/layout/layout'
import Head from 'next/head'
import AppBar from '../components/AppBar'
import BottomPage from '../components/bottom-page/BottomPage'
import ContactInfo from '../components/contact-info/ContactInfo'

const ContactMe = () => (
  <>
    <Head>
      <title>Contact Me</title>
    </Head>
    <Layout>
      <AppBar />
      <Content>
        <ContactInfo />
      </Content>
      <Footer>
        <BottomPage />
      </Footer>
    </Layout>
  </>
)

export default ContactMe
