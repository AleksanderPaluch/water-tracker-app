import { Suspense } from "react";
import PropTypes from "prop-types";
import Container from "../Container/Container";

const Layout = ({ children }) => {
  return (
    <Container>
      <Suspense fallback={null}>{children}</Suspense>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
