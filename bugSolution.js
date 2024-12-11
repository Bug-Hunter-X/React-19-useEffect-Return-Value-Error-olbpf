```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
    return () => {
      // Cleanup function (optional)
      console.log('Component unmounted!');
    };
  }, []);

  useEffect(() => {
    // This effect runs every time count changes
    console.log('Count changed:', count);
    // Correct return value: Cleanup function
    return () => {
      console.log('Count changed cleanup!');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```