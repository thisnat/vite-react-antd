import { Layout, Flex } from 'antd'
const { Footer } = Layout

function CustomFooter() {
  return (
    <Footer
      style={{
        backgroundColor: 'white',
        textAlign: 'center',
        padding: '2rem 1rem',
      }}
    >
      <Flex justify="space-between">
        <div>
          <p>5 Rue Thomas Mann, 75013 Paris, France</p>
        </div>
        <div>
          <a href="tel:123-456-7890">Tel</a>
        </div>
        <div>
          <a href="mailto:you@home.com">Mail</a>
        </div>
        <div>
          <a href="https://line.me/ti/p/line" target="_blank">
            Line
          </a>
        </div>
      </Flex>
    </Footer>
  )
}

export default CustomFooter
