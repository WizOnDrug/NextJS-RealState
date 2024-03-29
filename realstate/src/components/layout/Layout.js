import Header from "@/layout/Header";
import Footer from "@/layout/Footer";


const Layout = ({children}) => {
    const style={minHeight:"500px"}
    return (
        <>
         <Header/>
         <div style={style}>
             {children}
         </div>
         <Footer/>   
        </>
    );
};

export default Layout;