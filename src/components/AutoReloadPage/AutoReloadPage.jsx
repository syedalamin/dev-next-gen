import { useEffect, useState } from 'react';


const AutoReloadPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);
    
  }, []);

  return [loading, ];
};

export default AutoReloadPage;