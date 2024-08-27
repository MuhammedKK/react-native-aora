import { useEffect, useState } from "react";

export const useAppWrite = (fn) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fn();
        setData(res);
      } catch (error) {
        Alert.alert('Error', error.message);
      }
      finally {
        setLoading(false);
      }
    }
    useEffect(() => {
      fetchData()
    }, [])
    const refetch = () => fetchData()
    return {data, loading, refetch}
}