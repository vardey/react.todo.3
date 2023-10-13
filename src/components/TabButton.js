const TabButton = (props) => {

  const { className, id, tabContent, openTab } = props;

  return (
    <>
      <button style={props.style}
      className={className}
        id={id}
        onClick={() => {
          openTab(tabContent);
        }}
      >
        {tabContent}
      </button>
    </>
  );
};

export default TabButton;
