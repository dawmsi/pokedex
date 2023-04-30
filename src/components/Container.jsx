import propTypes from "prop-types"

export const Container = ({ children }) => {
  return (
    <div className="container max-w-[1200px] m-auto flex flex-col h-full">
      {children}
    </div>
  )
}

Container.propTypes = {
  children: propTypes.node.isRequired,
}
