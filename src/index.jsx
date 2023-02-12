import ForgeUI, { render, Fragment, Text, IssuePanel } from "@forge/ui";

const App = () => {
  return (
    <Fragment>
      <Text>Hello binyam!</Text>
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
