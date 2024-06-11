import React from "react";

interface SearchBox {
  aparencia: string;
}

const SearchBoxFeed: React.FC<SearchBox> = ({ aparencia }) => {
  return <input type="text" placeholder="Pesquisar:" className={aparencia} />;
};

export default SearchBoxFeed;
