const Math = ({ children }) => (
    <span dangerouslySetInnerHTML={{ __html: children }} />
  );