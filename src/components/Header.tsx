

const Header = ({children} : {children: string}) => {
  return (

      <h2 className="text-center m-5 flex justify-start text-4xl lg:text-5xl w-auto font-mono text-(--accent) font-medium">
        {children}
      </h2>

  )
}

export default Header
