import React from 'react';

// Reference: https://react.dev/reference/react/Component

class LifecycleMethodsExampleComponent extends React.Component {
  componentDidMount() {}
  componentWillUnmount() {}

  shouldComponentUpdate(nextProps, nextState, nextContext) {} // returns true or false; if false, the component doesn't rerender!
  getSnapshotBeforeUpdate(prevProps, prevState) {}
  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentDidCatch(error, info) {}

  static getDerivedStateFromProps(props, state) {} // returns an object representing new state or null

  // Works without UNSAFE_ prefix, but React will scold you :)
  UNSAFE_componentWillMount() {}
  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {}
  UNSAFE_componentWillUpdate(nextProps, nextState) {}
}

export default LifecycleMethodsExampleComponent;
