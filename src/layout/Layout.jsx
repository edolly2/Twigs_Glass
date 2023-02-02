import styled from 'styled-components';

const PageLayout = styled.div`
  padding: 2.4rem;
`;

const Layout = ({ children }) => {
  return (
    <PageLayout>
      <main>{children}</main>
    </PageLayout>
  );
};

export default Layout;
