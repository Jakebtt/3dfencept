const ToggleAnimationButton = ({ actionsRef }) => {
    const [isExploded, setIsExploded] = useState(false);
  
    const toggleAnimation = () => {
      const actionNames = Object.keys(actionsRef.current);
      actionNames.forEach(name => {
        const action = actionsRef.current[name];
        if (isExploded) {
          action.stop();
        } else {
          action.play();
        }
      });
      setIsExploded(!isExploded);
    };
  
    return (
      <button className="toggle-button" onClick={toggleAnimation}>
        {isExploded ? 'Implode' : 'Explode'}
      </button>
    );
  };
  
  export default ToggleAnimationButton;