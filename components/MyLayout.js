import Header from './presentational/Header'

const Layout = (props) => (
  <div>
    <Header />
    {props.children}
    <style jsx>{`
      div {
        margin: 20px;
        padding: 20px;
      } 
  `}</style>
  </div>
)

export default Layout
