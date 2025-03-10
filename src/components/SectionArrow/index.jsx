const SectionArrow = ({ sectionOpen }) => {
  return sectionOpen
    ? ( // arrow-down-s-fill
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M12 16L6 10H18L12 16Z"></path>
      </svg>
    ) : ( // arrow-right-s-fill
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M16 12L10 18V6L16 12Z"></path>
      </svg>
    )
}

export default SectionArrow