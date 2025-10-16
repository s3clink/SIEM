import React, { useState } from 'react';
import { Layout, Tabs } from 'antd';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import AlertList from './components/AlertList';
import TicketList from './components/TicketList';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) return <LoginForm onLogin={() => setLoggedIn(true)} />;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ color: '#fff', fontSize: 18 }}>SIEM 多租户告警与工单平台</Header>
      <Content style={{ padding: 24 }}>
        <Tabs items={[
          { key: 'dashboard', label: '仪表盘', children: <Dashboard /> },
          { key: 'alerts', label: '告警列表', children: <AlertList /> },
          { key: 'tickets', label: '工单', children: <TicketList /> }
        ]} />
      </Content>
    </Layout>
  );
};

export default App;
