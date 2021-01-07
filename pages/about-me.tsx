import { Layout } from 'antd'
import { Content, Footer } from 'antd/lib/layout/layout'
import Head from 'next/head'
import AppBar from '../components/AppBar'
import BottomPage from '../components/bottom-page/BottomPage'
import Profile from '../components/profile/Profile'

const AboutMe = () => (
  <>
    <Head>
      <title>About Me</title>
    </Head>
    <Layout>
      <AppBar />
      <Content>
        <Profile />
      </Content>
      <Footer>
        <BottomPage />
      </Footer>
    </Layout>
  </>
)

export default AboutMe
