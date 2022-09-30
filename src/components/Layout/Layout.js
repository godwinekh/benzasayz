import AuthProvider from "../../store/AuthProvider";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <AuthProvider>
      <Header />
      {props.children}
      <Footer />
    </AuthProvider>
  );
};

export default Layout;