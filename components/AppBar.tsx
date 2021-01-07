import { SecurityScanTwoTone } from '@ant-design/icons'
import { Menu } from 'antd'
import { AntAnchor } from 'antd/lib/anchor/Anchor'
import { Header } from 'antd/lib/layout/layout'
import Link from 'next/link'
import React, { useState } from 'react'

const AppBar = () => {
  // const [selected, setSelected] = useState(['1'])

  const changeSelected = (event) => {
    // setSelected([event.key])
  }

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" onClick={changeSelected}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/about-me">
            <a>About Me</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/contact-me">
            <a>Contact Me</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default AppBar
