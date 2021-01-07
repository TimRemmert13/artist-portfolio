import Layout, { Content, Footer } from 'antd/lib/layout/layout'
import Head from 'next/head'
import AppBar from '../components/AppBar'
import Gallery from '../components/gallery/Gallery'
import BottomPage from '../components/bottom-page/BottomPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demo Porfolio</title>
      </Head>
      <Layout>
        <AppBar />
        <Content>
          <Gallery />
        </Content>
        <Footer style={{ backgroundColor: '#d3d2d1', marginTop: '20px' }}>
          <BottomPage />
        </Footer>
      </Layout>
    </div>
  )
}
