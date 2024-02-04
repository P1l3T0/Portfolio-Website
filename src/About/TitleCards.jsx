const TitleCards = ({ activeLink, setActiveLink }) => {
  function handleLinkClick(linkId) {
    setActiveLink(linkId);
  };

  function removeInactiveContent() {
    setActiveLink(null);
  };

  return (
    <>
      <div className="title-cards" id="title-link">
        <h3
          id="title-link1"
          className={activeLink === "title-link1" ? "active-link" : "title-link"}
          onClick={() => {
            removeInactiveContent();
            handleLinkClick("title-link1");
          }}
        >experience
        </h3>

        <h3
          id="title-link2"
          className={activeLink === "title-link2" ? "active-link" : "title-link"}
          onClick={() => {
            removeInactiveContent();
            handleLinkClick("title-link2");
          }}
        >skills
        </h3>

        <h3
          id="title-link3"
          className={activeLink === "title-link3" ? "active-link" : "title-link"}
          onClick={() => {
            removeInactiveContent();
            handleLinkClick("title-link3");
          }}
        >education
        </h3>
      </div>
    </>
  );
};

export default TitleCards;