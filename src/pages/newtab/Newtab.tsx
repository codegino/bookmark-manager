import '@pages/newtab/Newtab.css';
import '@src/styles/app.css';
import ActiveTabs from './ActiveTabs';
import Content from './Content';

const Newtab = () => {
  return (
    <div className="App flex justify-between">
      <ActiveTabs />
      <Content />
    </div>
  );
};

export default Newtab;
