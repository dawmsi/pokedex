import propTypes from "prop-types"
import { Container } from "../components/Container"

export const MainLayout = ({ children }) => {
  return (
    <>
      <Container>
        <header className="flex justify-center items-center h-[69px] py-6">
          <h1 className="text-3xl">Pokedex</h1>
        </header>
        <main className="px-[24px] flex-1">{children}</main>
      </Container>
    </>
  )
}

MainLayout.propTypes = {
  children: propTypes.node,
}
