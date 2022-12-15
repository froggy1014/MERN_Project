import React, { Suspense } from 'react';

import LoadingSpinner from 'shared/components/UIElements/LoadingSpinner'

const SuspenseWrapper = props => {
  const LazyComponent = React.lazy(() => import(`../../../${props.path}`));

  return (
    <Suspense
      fallback={
        <div className="center">
            <LoadingSpinner />
        </div>
      }
    >
      <LazyComponent />
    </Suspense>
  )
}

export default SuspenseWrapper;