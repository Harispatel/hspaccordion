import React from "react";
import "../App.css";

import { Collapse, Layout, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { style } from "../style";
const { Panel } = Collapse;
const { Title } = Typography;
const CustomAccordion = ({ panels }) => {
  // Define state to manage the visibility of each panel

  return (
    <Layout>
      <Header style={style.accordionHeader} />
      <Title level={4}>Simple Accordion</Title>
      <Content
        style={{
          margin: "24px 16px 0",
        }}
      >
        <div style={style.accordionContainer}>
          <Collapse accordion defaultActiveKey={['1']}>
            {panels.map((panel) => (
              <Panel header={panel.title}  key={panel.id}>
                <p>{panel.content}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </Content>
      <Footer style={style.textCenter}>
        ©{new Date().getFullYear()} Developed by HSP Dev
      </Footer>
    </Layout>
  );
};

export default CustomAccordion;
