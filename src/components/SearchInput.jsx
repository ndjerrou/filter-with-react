function SearchInput({ type, placeholder, onSearch, term }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={term}
        onChange={(e) => onSearch(e.target.value)}
      />
    </>
  );
}

export default SearchInput;
