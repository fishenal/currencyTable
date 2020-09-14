import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';

const { Header, Content } = Layout;
const BasicLayout: React.FC = ({ children }) => {
    return <Layout className="layout">
        <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/tablelist">Currency</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/settings">Setting</Link></Menu.Item>
        </Menu>
        </Header>
        <Content style={{ padding: '50px' }}>
            <div className="site-layout-content">{ children }</div>
        </Content>
    </Layout>
}

export default BasicLayout;
