import React from 'react';

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

// https://github.com/bvaughn/react-error-boundary

/**
 * 解决发生错误直接白屏，页面上没有任何提示信息
 * 错误拦截机制需要配资如下，如果是react16之前，不需要错误边界处理
 * 错误边界只针对 React 组件。并且只有 class 组件才可以成为错误边界组件。
 * 大多数情况下, 你只需要声明一次错误边界组件, 并在整个应用中使用它。
 */
export default class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };

  // 当子组件抛出异常，这里会接收到并且调用
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
